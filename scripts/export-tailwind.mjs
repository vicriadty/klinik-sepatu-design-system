import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("exports", { recursive: true });
const config = { theme: { extend: { colors: { ink: "#101010", paper: "#f5f5f2", line: "#c9c9c4", success: "#176b45", danger: "#a32121" }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "sans-serif"], mono: ["ui-monospace", "SFMono-Regular", "monospace"] }, spacing: { 2: "0.5rem", 3: "0.75rem", 4: "1rem", 6: "1.5rem", 8: "2rem" } } } };
writeFileSync("exports/tailwind.tokens.json", `${JSON.stringify(config, null, 2)}\n`);
writeFileSync("exports/tailwind.tokens.css", ":root{--tw-color-ink:#101010;--tw-color-paper:#f5f5f2;--tw-color-line:#c9c9c4;--tw-space-4:1rem}\n");
console.log("Wrote Tailwind JSON and CSS exports");
