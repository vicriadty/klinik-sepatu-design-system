import { existsSync, readFileSync } from "node:fs";

const required = [
  "DESIGN.md", "README.md", "demo/index.html", "styles/tokens.css", "styles/base.css", "styles/components.css",
  "docs/implementation-guide.md", "docs/content-and-voice.md", "docs/complaint-policy-draft.md",
  "assets/brand/horizontal-web.png", "assets/brand/icon-web.png", "assets/brand/stacked-web.png"
];
const read = (file) => readFileSync(file, "utf8");
const errors = [];
const expect = (condition, message) => { if (!condition) errors.push(message); };

for (const file of required) expect(existsSync(file), `Missing required file: ${file}`);
if (!errors.length) {
  const design = read("DESIGN.md");
  const tokens = read("styles/tokens.css");
  const css = read("styles/base.css") + read("styles/components.css");
  const components = read("styles/components.css");
  const demo = read("demo/index.html");
  const policy = read("docs/complaint-policy-draft.md");
  const content = read("docs/content-and-voice.md");

  for (const marker of ["version: alpha", "name:", "colors:", "typography:", "rounded:", "spacing:", "components:"]) {
    expect(design.includes(marker), `DESIGN.md missing formal field: ${marker}`);
  }
  for (const token of ["--surface-canvas", "--text-primary", "--font-size-display", "--space-12", "--radius-control", "--elevation-raised", "--motion-duration-fast", "--breakpoint-md"]) {
    expect(tokens.includes(token), `Token contract missing: ${token}`);
  }
  expect(/min-(height|block-size):\s*(var\(--touch-target-min\)|44px)/.test(css), "Interactive targets need a 44px minimum");
  expect(/:focus-visible/.test(css), "Focus-visible treatment is required");
  expect(/prefers-reduced-motion:\s*reduce/.test(css), "Reduced-motion treatment is required");
  expect(!/gradient\(/i.test(components), "Decorative gradients are prohibited");
  expect(/\.button/.test(css) && /\.badge/.test(css) && /\.card/.test(css) && /\.field/.test(css), "Required component styles are missing");
  expect(/:hover/.test(css) && /:active/.test(css) && /\[disabled\]|\.is-disabled/.test(css) && /\.is-loading/.test(css) && /\.is-error/.test(css) && /\.is-success/.test(css), "Component states are incomplete");
  expect(/<header[\s>]/.test(demo) && /<main[\s>]/.test(demo) && /<footer[\s>]/.test(demo) && /<nav[\s>]/.test(demo), "Demo requires semantic landmarks");
  expect(/assets\/brand\/horizontal-web\.png/.test(demo) && /assets\/brand\/icon-web\.png/.test(demo) && /assets\/brand\/stacked-web\.png/.test(demo), "Demo must use all official logo assets");
  expect(/REKOMENDASI DRAFT MENUNGGU APPROVAL FINAL OWNER/.test(policy) && /bukan nasihat hukum/i.test(policy) && /tidak menghapus hak konsumen/i.test(policy), "Complaint policy must remain a non-waiver draft");
  const ownerFacts = ["per item", "setelah konsultasi selesai dan barang diterima outlet", "transfer rekening", "setelah konsultasi", "kurir/ekspedisi pihak luar", "sesuai persetujuan", "Drive", "menurut service", "foto model diizinkan", "per pasang", "rentang", "hari kalender"];
  for (const fact of ownerFacts) expect(content.toLowerCase().includes(fact.toLowerCase()), `Owner fact missing: ${fact}`);
}
if (errors.length) { console.error(`Validation failed:\n- ${errors.join("\n- ")}`); process.exit(1); }
console.log("Validation passed: formal DESIGN.md, complete tokens, accessibility, components, landmarks, logos, policy, and owner facts.");