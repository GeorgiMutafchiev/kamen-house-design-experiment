#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { ingestRemote } from "./ingest.mjs";

const value = flag => { const index = process.argv.indexOf(flag); return index < 0 ? null : process.argv[index + 1]; };
const gh = args => execFileSync("gh", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });

export function latestCompletedRun(branch) {
  const runs = JSON.parse(gh(["run", "list", "--workflow", "remote-research.yml", "--branch", branch,
    "--limit", "15", "--json", "databaseId,status,createdAt"]));
  const run = runs.find(x => x.status === "completed");
  if (!run) throw new Error(`no completed remote research run found on ${branch}`);
  return String(run.databaseId);
}

export async function fetchAndIngest({ runId, branch, queuePath, intelligenceRoot, updateQueueStatus = true }) {
  const id = runId ?? latestCompletedRun(branch);
  if (!/^\d+$/.test(id)) throw new Error("GitHub run ID must be numeric");
  const dir = await mkdtemp(join(tmpdir(), `kamen-remote-${id}-`));
  gh(["run", "download", id, "--name", "kamen-research-evidence", "--dir", dir]);
  const result = await ingestRemote({ artifactRoot: dir, intelligenceRoot, queuePath, updateQueueStatus, expectedRunId: id });
  return result;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const proof = process.argv.includes("--proof");
  fetchAndIngest({ runId: value("--run-id"), branch: value("--branch") || "design/autonomous-human-cro-v5-20261004",
    queuePath: proof ? "design-intelligence/remote/proof-queue.json" : "design-studio-v5/discovery/research-queue.json",
    intelligenceRoot: proof ? "/tmp/kamen-v5-remote-proof" : "design-intelligence", updateQueueStatus: !proof })
    .then(result => console.log(JSON.stringify(result, null, 2)))
    .catch(error => { console.error(error.message); process.exitCode = 2; });
}
