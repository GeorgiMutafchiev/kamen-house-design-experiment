import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("the project keeps its governing constitution", async () => {
  const constitution = await readFile("ops/PROJECT_CONSTITUTION.md", "utf8");
  assert.match(constitution, /hospitality website for KAMEN HOUSE/);
  assert.match(constitution, /generic AI-builder visual language is unacceptable/);
});

