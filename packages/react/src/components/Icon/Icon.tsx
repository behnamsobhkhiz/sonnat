import { forwardRef } from "react";
import type { ComponentType, SVGProps } from "react";
import { iconRegistry } from "./icon-registry";
import type { IconName } from "./icon-names";
import styles from "./Icon.module.css";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type IconTone =
  | "inherit"
  | "neutral"
  | "neutral-strong"
  | "neutral-weak"
  | "brand"
  | "positive"
  | "warning"
  | "negative"
  | "informative"
  | "on-color";

/** A per-icon glyph component (the SVGR output), e.g. `TelephoneIcon`. */
export type IconGlyph = ComponentType<SVGProps<SVGSVGElement>>;

interface IconCommonProps extends Omit<SVGProps<SVGSVGElement>, "color" | "name"> {
  /** Size step on the type scale. Default `md` (16px). */
  size?: IconSize;
  /** Color from the semantic content layer. Default `inherit` (current text color). */
  tone?: IconTone;
  /**
   * Accessible name. When provided the icon is exposed as `role="img"`.
   * Omit for purely decorative icons — they render `aria-hidden`.
   */
  label?: string;
}

/**
 * Render an icon by `name` (ergonomic, pulls the icon set) **or** by passing a
 * `glyph` component directly (tree-shakeable — import only the icons you use).
 */
export type IconProps =
  | (IconCommonProps & { name: IconName; glyph?: never })
  | (IconCommonProps & { glyph: IconGlyph; name?: never });

const SIZE_CLASS: Record<IconSize, string | undefined> = {
  xs: styles.xs,
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xl: styles.xl,
  "2xl": styles.xxl,
};

const TONE_CLASS: Record<IconTone, string | undefined> = {
  inherit: undefined,
  neutral: styles.toneNeutral,
  "neutral-strong": styles.toneNeutralStrong,
  "neutral-weak": styles.toneNeutralWeak,
  brand: styles.toneBrand,
  positive: styles.tonePositive,
  warning: styles.toneWarning,
  negative: styles.toneNegative,
  informative: styles.toneInformative,
  "on-color": styles.toneOnColor,
};

export const Icon = /* @__PURE__ */ forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
  const { size = "md", tone = "inherit", label, className, name, glyph, ...rest } = props as IconCommonProps & {
    name?: IconName;
    glyph?: IconGlyph;
    className?: string;
  };

  const Glyph: IconGlyph | undefined = glyph ?? (name ? iconRegistry[name] : undefined);
  if (!Glyph) return null;

  const classes = [styles.icon, SIZE_CLASS[size], TONE_CLASS[tone], className].filter(Boolean).join(" ");

  const a11y = label
    ? ({ role: "img", "aria-label": label, "aria-hidden": undefined } as const)
    : ({ "aria-hidden": true } as const);

  return <Glyph ref={ref} className={classes} {...a11y} {...rest} />;
});
