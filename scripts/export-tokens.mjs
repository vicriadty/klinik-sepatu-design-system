import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("exports", { recursive: true });
const tokens = {
  "$schema": "https://tr.designtokens.org/format/2025-10/format.schema.json",
  "color": { "ink": { "$value": "#101010", "$type": "color" }, "paper": { "$value": "#f5f5f2", "$type": "color" }, "line": { "$value": "#c9c9c4", "$type": "color" }, "success": { "$value": "#176b45", "$type": "color" }, "danger": { "$value": "#a32121", "$type": "color" } },
  "space": { "2": { "$value": "0.5rem", "$type": "dimension" }, "3": { "$value": "0.75rem", "$type": "dimension" }, "4": { "$value": "1rem", "$type": "dimension" }, "6": { "$value": "1.5rem", "$type": "dimension" }, "8": { "$value": "2rem", "$type": "dimension" } },
  "radius": { "none": { "$value": "0px", "$type": "dimension" }, "pill": { "$value": "999px", "$type": "dimension" } }
};
writeFileSync("exports/tokens.dtcg.json", `${JSON.stringify(tokens, null, 2)}\n`);
console.log("Wrote exports/tokens.dtcg.json");
