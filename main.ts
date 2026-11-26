import * as fs from "node:fs";
import * as path from "node:path";

const LINE = "CAUTION: THE GHOST IN THE COLD AISLE REBOOTS RACK 4 AT 3AM BECAUSE EVEN GHOSTS GET BORED.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 120) {
    throw new Error("entry must be 1-120 characters, got " + LINE.length);
  }
  if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be exactly one non-blank line");
  }
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "entry.txt");
  fs.writeFileSync(outPath, LINE, "utf8");
}

main();
