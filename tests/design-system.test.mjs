import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import test from "node:test";

const requiredFiles = [
  "DESIGN.md",
  "README.md",
  "demo/index.html",
  "styles/tokens.css",
  "styles/base.css",
  "styles/components.css",
  "exports/tokens.dtcg.json",
  "exports/tailwind.tokens.json",
  "docs/implementation-guide.md",
  "docs/content-and-voice.md",
  "docs/complaint-policy-draft.md",
  "docs/validation.md"
];

test("required design-system deliverables exist", () => {
  for (const file of requiredFiles) assert.ok(existsSync(file), `Missing ${file}`);
});

test("DESIGN.md and CSS expose the complete agent contract", () => {
  const design = readFileSync("DESIGN.md", "utf8");
  const tokens = readFileSync("styles/tokens.css", "utf8");
  const components = readFileSync("styles/components.css", "utf8");

  for (const marker of ["version: alpha", "name:", "colors:", "typography:", "rounded:", "spacing:", "components:"]) {
    assert.ok(design.includes(marker), `DESIGN.md missing ${marker}`);
  }
  for (const token of ["--font-size-display", "--radius-control", "--elevation-raised", "--motion-duration-fast", "--breakpoint-md"]) {
    assert.ok(tokens.includes(token), `Token contract missing ${token}`);
  }
  assert.doesNotMatch(components, /gradient\(/i, "Component CSS must not use decorative gradients");
});

test("design validator accepts the published system", () => {
  execFileSync(process.execPath, ["scripts/validate.mjs"], { stdio: "pipe" });
});
