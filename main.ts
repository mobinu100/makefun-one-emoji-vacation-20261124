import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry: exactly one emoji — a sailboat on open water. The dream is the journey itself.
const dir = dirname(fileURLToPath(import.meta.url));
const emoji = readFileSync(join(dir, "entry.txt"), "utf8").trim();
if ([...emoji].length !== 1) throw new Error("entry must be exactly one emoji");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dir, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), emoji, "utf8");
console.log(emoji);
