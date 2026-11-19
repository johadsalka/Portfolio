// Pre-deploy gate: fails if any placeholder is left in src/data/site.ts.
// Usage: npm run check:content
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const file = join(root, "src", "data", "site.ts");
const source = readFileSync(file, "utf8");

const placeholder = /\{\{[^}]*\}\}/g;
const problems = [];

source.split(/\r?\n/).forEach((line, index) => {
  const matches = line.match(placeholder);
  if (matches) {
    problems.push(`  line ${index + 1}: ${matches.join("  ")}`);
  }
});

if (problems.length > 0) {
  console.error(
    `\n✖ ${problems.length} line(s) in src/data/site.ts still contain placeholders:\n`,
  );
  console.error(problems.join("\n"));
  console.error("\nReplace them with your real content, then run this again.\n");
  process.exit(1);
}

const resume = source.match(/resumeUrl:\s*"([^"]*)"/);
const resumeUrl = resume ? resume[1] : "";

if (resumeUrl.startsWith("/")) {
  const resumePath = join(root, "public", resumeUrl.slice(1));
  if (!existsSync(resumePath)) {
    console.error(
      `\n✖ resumeUrl is "${resumeUrl}" but public/${resumeUrl.slice(1)} does not exist.\n`,
    );
    process.exit(1);
  }
} else if (!resumeUrl) {
  console.warn(
    '⚠ resumeUrl is empty, so the Resume button is hidden. Most recruiters expect one: add public/resume.pdf and set resumeUrl to "/resume.pdf".',
  );
}

console.log("✔ No placeholders left in src/data/site.ts");
