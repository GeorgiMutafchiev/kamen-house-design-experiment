import { readFile } from "node:fs/promises";
import { isIP } from "node:net";

export const queueStatuses = new Set([
  "DISCOVERED", "QUEUED", "CAPTURING", "CAPTURE_COMPLETE", "CAPTURE_INCOMPLETE",
  "BLOCKED", "AUDIT_READY", "AUDITED", "REJECTED",
]);
export const standardViewports = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};

const required = (value, label) => {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${label} is required`);
  return value.trim();
};

export function publicUrl(value, label = "url") {
  const url = new URL(required(value, label));
  const host = url.hostname.toLowerCase();
  if (url.protocol !== "https:" || url.username || url.password || url.port ||
      host === "localhost" || host.endsWith(".local") || host.endsWith(".internal") ||
      isIP(host.replace(/^\[|\]$/g, ""))) {
    throw new Error(`${label} must be a public HTTPS URL without credentials or a custom port`);
  }
  url.hash = "";
  return url.href;
}

export function validateQueue(input) {
  if (!input || input.schema_version !== 1 || !Array.isArray(input.items)) throw new Error("queue schema_version 1 with items is required");
  const ids = new Set();
  const items = input.items.map((item, index) => {
    const label = `items[${index}]`;
    const candidate_id = required(item.candidate_id, `${label}.candidate_id`);
    if (!/^[A-Za-z0-9_-]{2,64}$/.test(candidate_id) || ids.has(candidate_id)) throw new Error(`invalid or duplicate candidate_id: ${candidate_id}`);
    ids.add(candidate_id);
    const url = publicUrl(item.url, `${label}.url`);
    const category = required(item.category, `${label}.category`);
    const reason_for_interest = required(item.reason_for_interest, `${label}.reason_for_interest`);
    const source_discovery_provenance = required(item.source_discovery_provenance, `${label}.source_discovery_provenance`);
    if (!Number.isInteger(item.priority) || item.priority < 1 || item.priority > 5) throw new Error(`${label}.priority must be 1–5`);
    if (!queueStatuses.has(item.status)) throw new Error(`${label}.status is invalid`);
    if (!Number.isInteger(item.attempt_count) || item.attempt_count < 0) throw new Error(`${label}.attempt_count is invalid`);
    if (item.last_error !== null && typeof item.last_error !== "string") throw new Error(`${label}.last_error must be text or null`);
    if (item.last_run_id !== undefined && (typeof item.last_run_id !== "string" || !/^[A-Za-z0-9_-]{1,100}$/.test(item.last_run_id))) throw new Error(`${label}.last_run_id is invalid`);
    if (!Array.isArray(item.requested_viewports) || !item.requested_viewports.length ||
        new Set(item.requested_viewports).size !== item.requested_viewports.length ||
        item.requested_viewports.some(v => !(v in standardViewports))) throw new Error(`${label}.requested_viewports is invalid`);
    if (!Array.isArray(item.requested_routes) || !item.requested_routes.length || item.requested_routes.length > 3) throw new Error(`${label}.requested_routes must contain 1–3 routes`);
    const routes = item.requested_routes.map((route, routeIndex) => {
      const name = required(route.name, `${label}.requested_routes[${routeIndex}].name`);
      if (!/^[a-z][a-z0-9_-]{0,31}$/.test(name)) throw new Error(`invalid route name: ${name}`);
      const routeUrl = publicUrl(route.url, `${label}.requested_routes[${routeIndex}].url`);
      if (new URL(routeUrl).hostname !== new URL(url).hostname) throw new Error("route must stay on the candidate host");
      return { name, url: routeUrl };
    });
    if (new Set(routes.map(r => r.name)).size !== routes.length) throw new Error(`duplicate route name for ${candidate_id}`);
    if (item.dismiss_selector !== undefined && (typeof item.dismiss_selector !== "string" || item.dismiss_selector.length > 150)) throw new Error("invalid dismiss_selector");
    return { candidate_id, url, category, reason_for_interest, priority: item.priority,
      requested_viewports: item.requested_viewports, requested_routes: routes,
      source_discovery_provenance, status: item.status, attempt_count: item.attempt_count, last_error: item.last_error,
      ...(item.dismiss_selector ? { dismiss_selector: item.dismiss_selector } : {}),
      ...(item.last_run_id ? { last_run_id: item.last_run_id } : {}) };
  });
  return { schema_version: 1, items };
}

export async function loadQueue(path) { return validateQueue(JSON.parse(await readFile(path, "utf8"))); }

export function selectQueue(queue, ids, limit = 3) {
  if (!Number.isInteger(limit) || limit < 1 || limit > 3) throw new Error("capture limit must be 1–3 candidates");
  const requested = ids?.length ? new Set(ids) : null;
  const eligible = queue.items.filter(item => ["DISCOVERED", "QUEUED", "CAPTURE_INCOMPLETE"].includes(item.status));
  if (requested) {
    for (const id of requested) if (!queue.items.some(item => item.candidate_id === id)) throw new Error(`unknown candidate_id: ${id}`);
    return eligible.filter(item => requested.has(item.candidate_id)).slice(0, limit);
  }
  return eligible.sort((a, b) => a.priority - b.priority || a.attempt_count - b.attempt_count).slice(0, limit);
}
