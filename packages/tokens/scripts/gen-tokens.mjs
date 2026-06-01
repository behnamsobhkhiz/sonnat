// Generates src/tokens.ts from tokens.css.
// The CSS is the Figma source of truth; this script ONLY reads names — never values.
// Run via `pnpm generate` (also invoked by `build` and `typecheck`).
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const cssPath = resolve(here, "../src/tokens.css");
const outPath = resolve(here, "../src/tokens.ts");

const css = readFileSync(cssPath, "utf8");

// Strip comments so commented-out declarations are not picked up.
const withoutComments = css.replace(/\/\*[\s\S]*?\*\//g, "");

// A declaration is `--name:` (two leading dashes, then a colon).
const names = new Set();
const declRe = /(--[A-Za-z0-9-]+)\s*:/g;
let match;
while ((match = declRe.exec(withoutComments)) !== null) {
  names.add(match[1]);
}

const sorted = [...names].sort();
if (sorted.length === 0) {
  throw new Error(`gen-tokens: no custom properties found in ${cssPath}`);
}

// Primitives (--p-*) back the semantic layer and must not be used in components.
const primitives = sorted.filter((n) => n.startsWith("--p-"));
const semantic = sorted.filter((n) => !n.startsWith("--p-"));

const lines = [
  "// AUTO-GENERATED from tokens.css by scripts/gen-tokens.mjs. Do not edit by hand.",
  "// Names only — values live in tokens.css (the Figma source of truth).",
  "",
  `export const tokenNames = [`,
  ...sorted.map((n) => `  "${n}",`),
  `] as const;`,
  "",
  "/** Every SONNAT custom-property name (primitives + semantic). */",
  "export type TokenName = (typeof tokenNames)[number];",
  "",
  "/** Semantic-layer token names — the ones components are allowed to use. */",
  `export const semanticTokenNames = [`,
  ...semantic.map((n) => `  "${n}",`),
  `] as const;`,
  "",
  "export type SemanticTokenName = (typeof semanticTokenNames)[number];",
  "",
  "/** Internal primitive names — listed for traceability; do not use in components. */",
  `export const primitiveTokenNames = [`,
  ...primitives.map((n) => `  "${n}",`),
  `] as const;`,
  "",
  "/** Wrap a token name in `var(--...)` for use in inline styles or JS. */",
  "export function token(name: TokenName): string {",
  "  return `var(${name})`;",
  "}",
  ""
];

writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(
  `gen-tokens: wrote ${sorted.length} tokens (${semantic.length} semantic, ${primitives.length} primitive) → src/tokens.ts`
);
