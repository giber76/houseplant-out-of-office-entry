import { mkdirSync, writeFileSync } from "node:fs";

// The Houseplant Out-of-Office — one line, max 120 chars.
// A neglected fern's auto-reply: the neglect (unwatered since March) is
// the setup, the email turned to compost is the surprise, and the plant
// eating it for nutrients is the second beat. Plant life drives the joke;
// no office cliche, no pun, lands on a single read.
const LINE = "Out of office. I'm a fern, unwatered since March. Your email has been composted. I needed the nutrients.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
