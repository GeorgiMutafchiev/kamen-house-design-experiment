import { createHash } from "node:crypto";
import { lstat, readFile, realpath } from "node:fs/promises";
import { isAbsolute, relative, resolve, sep } from "node:path";
import sharp from "sharp";
import { assessSamples } from "../lib/capture.mjs";
import { publicUrl, standardViewports } from "./queue.mjs";

export const sha256 = bytes => createHash("sha256").update(bytes).digest("hex");
const nonempty = (value, name) => { if (typeof value !== "string" || !value.trim()) throw new Error(`${name} is required`); return value; };

export function safeArtifactPath(root, path) {
  nonempty(path, "artifact path");
  if (isAbsolute(path) || path.split(/[\\/]/).some(part => part === ".." || part === "" || part === ".") || path.includes("\\")) {
    throw new Error(`unsafe artifact path: ${path}`);
  }
  const absolute = resolve(root, path);
  if (!absolute.startsWith(`${resolve(root)}${sep}`)) throw new Error(`artifact path escapes root: ${path}`);
  return absolute;
}

export async function validateArtifact(root, artifact) {
  if (!artifact || !/^[a-f0-9]{64}$/.test(artifact.sha256)) throw new Error("artifact SHA-256 is invalid");
  const path = safeArtifactPath(root, artifact.path);
  const actual = await realpath(path);
  if (!actual.startsWith(`${await realpath(root)}${sep}`)) throw new Error("artifact symlink escapes root");
  if (!(await lstat(path)).isFile()) throw new Error("artifact is not a regular file");
  const bytes = await readFile(path);
  if (bytes.length > 30_000_000) throw new Error("artifact exceeds 30 MB");
  if (sha256(bytes) !== artifact.sha256) throw new Error(`artifact hash mismatch: ${artifact.path}`);
  return { path: actual, bytes };
}

export function validateBundleShape(bundle) {
  if (!bundle || bundle.schema_version !== 1) throw new Error("EvidenceBundle schema_version 1 required");
  for (const key of ["bundle_id", "candidate_id", "category", "reason_for_interest", "source_discovery_provenance", "route", "capture_adapter", "runner_id", "captured_at", "user_agent", "browser_version"]) nonempty(bundle[key], key);
  if (!/^[A-Za-z0-9_-]{2,64}$/.test(bundle.candidate_id)) throw new Error("invalid candidate ID");
  if (!/^[a-z][a-z0-9_-]{0,31}$/.test(bundle.route)) throw new Error("invalid route name");
  publicUrl(bundle.requested_url, "requested_url");
  if (bundle.resolved_url) publicUrl(bundle.resolved_url, "resolved_url");
  if (!(bundle.viewport_class in standardViewports)) throw new Error("invalid viewport class");
  const expected = standardViewports[bundle.viewport_class];
  if (bundle.viewport?.width !== expected.width || bundle.viewport?.height !== expected.height || bundle.device_scale_factor !== 1) throw new Error("viewport differs from V5 standard");
  if (!["VISUAL_CAPTURE_COMPLETE", "VISUAL_CAPTURE_INCOMPLETE"].includes(bundle.status)) throw new Error("invalid capture status");
  if (!bundle.navigation || !Array.isArray(bundle.navigation.failed_resources) || !Array.isArray(bundle.navigation.browser_errors) ||
      !Array.isArray(bundle.navigation.console_errors) || !Array.isArray(bundle.navigation.redirects) ||
      !bundle.render || !Number.isInteger(bundle.render.traversal_steps) || bundle.render.traversal_steps < 0 ||
      !Number.isInteger(bundle.render.retry_count) || bundle.render.retry_count < 0) throw new Error("navigation/render diagnostics required");
  if (!Array.isArray(bundle.artifacts) || !bundle.artifacts.length || bundle.artifacts.length > 150) throw new Error("bundle artifacts must contain 1–150 files");
  const paths = bundle.artifacts.map(a => a.path);
  if (new Set(paths).size !== paths.length) throw new Error("duplicate artifact path");
  if (!paths.includes(bundle.session_path) || !paths.includes(bundle.diagnostics_path)) throw new Error("session and diagnostics artifacts required");
  if (!Array.isArray(bundle.screenshots)) throw new Error("screenshots required");
  for (const shot of bundle.screenshots) if (!paths.includes(shot.path) || !["initial", "scroll", "bottom", "full_after_traversal", "upward"].includes(shot.role)) throw new Error("invalid screenshot entry");
  if (bundle.status === "VISUAL_CAPTURE_COMPLETE") {
    if (!bundle.resolved_url || !Number.isInteger(bundle.navigation.http_status) || bundle.navigation.http_status < 200 ||
        bundle.navigation.http_status >= 400 || !bundle.render.traversal_complete || bundle.forced_visibility) throw new Error("complete bundle lacks faithful navigation/traversal");
    for (const role of ["initial", "scroll", "bottom", "full_after_traversal"]) {
      if (!bundle.screenshots.some(s => s.role === role)) throw new Error(`complete bundle lacks ${role} screenshot`);
    }
  }
  return bundle;
}

export function validateManifestShape(manifest) {
  if (!manifest || manifest.schema_version !== 1 || !Array.isArray(manifest.bundles) || manifest.bundles.length > 18 ||
      !/^[A-Za-z0-9_-]{1,100}$/.test(manifest.run_id ?? "") || !manifest.generated_at) throw new Error("invalid evidence manifest");
  const ids = new Set();
  const sessions = new Set();
  for (const bundle of manifest.bundles) {
    validateBundleShape(bundle);
    if (ids.has(bundle.bundle_id)) throw new Error("duplicate bundle ID");
    if (bundle.run_id !== manifest.run_id) throw new Error("bundle run ID mismatch");
    const key = `${bundle.candidate_id}:${bundle.route}:${bundle.viewport_class}`;
    if (sessions.has(key)) throw new Error("duplicate capture target in manifest");
    sessions.add(key);
    ids.add(bundle.bundle_id);
  }
  return manifest;
}

export async function validateBundleFiles(root, bundle) {
  validateBundleShape(bundle);
  const artifacts = new Map();
  for (const entry of bundle.artifacts) artifacts.set(entry.path, await validateArtifact(root, entry));
  const session = JSON.parse(artifacts.get(bundle.session_path).bytes.toString("utf8"));
  const diagnostics = JSON.parse(artifacts.get(bundle.diagnostics_path).bytes.toString("utf8"));
  if (session.status !== bundle.status || diagnostics.status !== bundle.status || session.requested_url !== bundle.requested_url ||
      session.resolved_url !== bundle.resolved_url || session.viewport?.width !== bundle.viewport.width ||
      session.viewport?.height !== bundle.viewport.height) throw new Error("bundle/session/diagnostics identity mismatch");
  if (bundle.status === "VISUAL_CAPTURE_COMPLETE") {
    const final = diagnostics.attempts?.at(-1);
    const assessment = final && assessSamples(final.samples, final.traversal_complete);
    if (!assessment || assessment.status !== "VISUAL_CAPTURE_COMPLETE" || !final.traversal_complete ||
        final.document_height_initial !== bundle.render.document_height_initial ||
        final.document_height_final !== bundle.render.document_height_final) throw new Error("completeness diagnostics disagree with bundle");
    for (const shot of bundle.screenshots.filter(s => ["initial", "scroll", "bottom", "full_after_traversal"].includes(s.role))) {
      const metadata = await sharp(artifacts.get(shot.path).bytes).metadata();
      const fullPage = shot.role === "full_after_traversal";
      if ((!fullPage && (metadata.width !== bundle.viewport.width || metadata.height !== bundle.viewport.height)) ||
          (fullPage && (metadata.width < bundle.viewport.width || metadata.width > bundle.viewport.width * 3 ||
            metadata.height < bundle.viewport.height))) {
        throw new Error(`screenshot dimensions disagree with viewport: ${shot.path}`);
      }
    }
  }
  return { session, diagnostics, artifacts };
}

export async function validateManifestFiles(root, manifest) {
  validateManifestShape(manifest);
  for (const bundle of manifest.bundles) await validateBundleFiles(root, bundle);
  return manifest;
}

export function relativeArtifact(root, path) {
  const rel = relative(resolve(root), resolve(path)).split(sep).join("/");
  safeArtifactPath(root, rel);
  return rel;
}
