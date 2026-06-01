// @behnamsobhkhiz/sonnat-tokens
//
// Raw CSS (the actual custom properties) ships as a side-effect stylesheet:
//   import "@behnamsobhkhiz/sonnat-tokens/tokens.css";
//   import "@behnamsobhkhiz/sonnat-tokens/fonts.css"; // (also @imported by tokens.css)
//
// This JS entry exposes the typed *names* of those tokens for tooling and
// type-safe inline usage. Values are never duplicated here — tokens.css owns them.
export {
  tokenNames,
  semanticTokenNames,
  primitiveTokenNames,
  token,
  type TokenName,
  type SemanticTokenName
} from "./tokens.js";
