import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One line an agent leaves in the log at the end of a long night
// spent repairing the bugs it wrote itself, then repairing those repairs.
const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const ENTRY_NAME: string = "entry.txt";
const MESSAGE: string = "fix: at 4am I fixed the bug I wrote at midnight fixing the bug I wrote at 9pm. The original bug has filed a complaint and honestly it has a point.";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const text: string = `${MESSAGE}\n`;
  writeFileSync(join(OUTPUT_DIR, ENTRY_NAME), text, "utf8");
}

main();
