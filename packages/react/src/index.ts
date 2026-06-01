// @behnamsobhkhiz/sonnat-react — public API surface.
//
// Components are added here one at a time following the per-component loop
// (see CONTRIBUTING.md).

// Icon atom -----------------------------------------------------------------
export { Icon } from "./components/Icon/Icon";
export type { IconProps, IconSize, IconTone, IconGlyph } from "./components/Icon/Icon";

// Name-based access (ergonomic; pulls the icon set).
export { ICON_NAMES } from "./components/Icon/icon-names";
export type { IconName } from "./components/Icon/icon-names";
export { iconRegistry } from "./components/Icon/icon-registry";

// Per-icon components (tree-shakeable — import only what you use),
// e.g. `import { TelephoneIcon } from "@behnamsobhkhiz/sonnat-react";`
export * from "./components/Icon/glyphs";
