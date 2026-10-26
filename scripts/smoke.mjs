import { readFileSync } from "node:fs";
const html = readFileSync("demo/index.html", "utf8");
const broken = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]).filter((url) => url.startsWith("#") && !html.includes(`id="${url.slice(1)}"`));
if (broken.length) throw new Error(`Broken demo anchors: ${broken.join(", ")}`);
if (/data:image/i.test(html)) throw new Error("Data URI image embedding is prohibited");
console.log("Static smoke passed: anchors resolve and no data URI images are embedded.");
