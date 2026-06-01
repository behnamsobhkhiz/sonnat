import { useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import type { IconSize, IconTone } from "./Icon";
import { ICON_NAMES } from "./icon-names";
import type { IconName } from "./icon-names";
import { TelephoneIcon } from "./glyphs";

const meta = {
  title: "Foundation/Icons",
  component: Icon,
  parameters: { layout: "centered" },
  argTypes: {
    // Dropdown of every icon name (type to jump) — easier than typing by hand.
    name: { control: "select", options: ICON_NAMES as unknown as string[] },
    size: { control: "inline-radio", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
    tone: {
      control: "select",
      options: [
        "inherit",
        "neutral",
        "neutral-strong",
        "neutral-weak",
        "brand",
        "positive",
        "warning",
        "negative",
        "informative",
        "on-color",
      ],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const SIZES: IconSize[] = ["xs", "sm", "md", "lg", "xl", "2xl"];
const TONES: IconTone[] = [
  "inherit",
  "neutral",
  "neutral-strong",
  "neutral-weak",
  "brand",
  "positive",
  "warning",
  "negative",
  "informative",
];

// A representative sample across categories (the full set is ~800 icons).
const SAMPLE: IconName[] = [
  "telephone", "call", "mail-f", "chat-bubble", "bell-o", "share",
  "home", "home-outline", "search-o", "map-o", "filter-o", "gear-o",
  "person", "camera", "photo-o", "eye", "eye-off", "lock",
  "edit", "trash-o", "delete", "download-o", "bookmark", "favourite-o",
  "star-o", "gift-o", "info-o", "warning", "help", "close",
  "cancel", "check-o", "checked", "arrow-forward", "refresh", "history",
  "timer", "wifi", "sunny", "snowflake", "car-o", "ai-stars",
];

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
  gap: "var(--space-md)",
};

const cell: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "var(--space-sm)",
  padding: "var(--space-md)",
  borderRadius: "var(--radius-md)",
  border: "var(--border-sm) solid var(--border-neutral-weaker)",
  background: "var(--surface-neutral-weak)",
  color: "var(--content-neutral-stronger)",
};

const caption: CSSProperties = {
  fontSize: "var(--type-xs-size)",
  lineHeight: "var(--type-xs-lh)",
  color: "var(--content-neutral-default)",
  textAlign: "center",
  wordBreak: "break-all",
};

function Gallery({ names }: { names: IconName[] }) {
  return (
    <div style={grid}>
      {names.map((name) => (
        <div key={name} style={cell}>
          <Icon name={name} size="xl" label={name} />
          <span style={caption}>{name}</span>
        </div>
      ))}
    </div>
  );
}

function ThemePanel({ theme, children }: { theme: "light" | "dark"; children: ReactNode }) {
  return (
    <div
      data-theme={theme}
      style={{
        flex: 1,
        minWidth: 320,
        padding: "var(--space-lg)",
        borderRadius: "var(--radius-lg)",
        background: "var(--surface-neutral-weaker)",
        color: "var(--content-neutral-stronger)",
      }}
    >
      <h3 style={{ margin: "0 0 var(--space-md)", fontSize: "var(--type-sm-size)" }}>
        {theme === "light" ? "روشن (Light)" : "تیره (Dark)"}
      </h3>
      {children}
    </div>
  );
}

/** Single icon — use the toolbar to flip theme/direction; use controls for size/tone. */
export const Playground: Story = {
  args: { name: "telephone", size: "xl", tone: "inherit", label: "تلفن" },
};

/** A sample of the icon set, shown in light and dark side by side. */
export const Gallery_LightAndDark: Story = {
  name: "Gallery — light + dark",
  args: { name: "telephone" }, // unused by render; satisfies the required-prop union
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-lg)", flexWrap: "wrap" }}>
      <ThemePanel theme="light">
        <Gallery names={SAMPLE} />
      </ThemePanel>
      <ThemePanel theme="dark">
        <Gallery names={SAMPLE} />
      </ThemePanel>
    </div>
  ),
};

/** Every size step, riding the type scale (12 → 24). */
export const Sizes: Story = {
  args: { name: "bell-o" },
  render: () => (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--space-lg)" }}>
      {SIZES.map((size) => (
        <div key={size} style={{ ...cell, border: "none", background: "transparent" }}>
          <Icon name="bell-o" size={size} label={`bell ${size}`} />
          <span style={caption}>{size}</span>
        </div>
      ))}
    </div>
  ),
};

/** Tones map to the semantic --content-* layer; `inherit` follows text color. */
export const Tones: Story = {
  args: { name: "favourite-o" },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-lg)", color: "var(--content-brand-default)" }}>
      {TONES.map((tone) => (
        <div key={tone} style={{ ...cell, border: "none", background: "transparent" }}>
          <Icon name="favourite-o" size="xl" tone={tone} label={`favourite ${tone}`} />
          <span style={caption}>{tone}</span>
        </div>
      ))}
    </div>
  ),
};

/** Tree-shakeable usage: import a single glyph and pass it via `glyph`. */
export const DirectGlyphImport: Story = {
  name: "Direct glyph (tree-shakeable)",
  args: { glyph: TelephoneIcon },
  render: () => <Icon glyph={TelephoneIcon} size="2xl" tone="brand" label="تلفن" />,
};

// ── All icons: searchable browser ───────────────────────────────────────────

const searchBar: CSSProperties = {
  position: "sticky",
  insetBlockStart: 0,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  gap: "var(--space-md)",
  padding: "var(--space-md) 0",
  marginBlockEnd: "var(--space-md)",
  background: "var(--surface-neutral-weaker)",
};

const searchInput: CSSProperties = {
  flex: 1,
  padding: "var(--space-sm) var(--space-md)",
  fontFamily: "var(--font-family)",
  fontSize: "var(--type-md-size)",
  color: "var(--content-neutral-stronger)",
  background: "var(--surface-neutral-weak)",
  border: "var(--border-sm) solid var(--border-neutral-weak)",
  borderRadius: "var(--radius-sm)",
};

const count: CSSProperties = {
  fontSize: "var(--type-sm-size)",
  color: "var(--content-neutral-default)",
  whiteSpace: "nowrap",
};

const clickableCell: CSSProperties = {
  ...cell,
  cursor: "pointer",
  font: "inherit",
};

function IconExplorer() {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<IconName | null>(null);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? ICON_NAMES.filter((n) => n.includes(q)) : ICON_NAMES;
  }, [query]);

  const copy = (name: IconName) => {
    setCopied(name);
    void navigator.clipboard?.writeText(name);
    window.setTimeout(() => setCopied((c) => (c === name ? null : c)), 1200);
  };

  return (
    <div style={{ inlineSize: "min(1000px, 92vw)" }}>
      <div style={searchBar}>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جستجوی آیکون… (search icons, e.g. arrow, car, -f, -o)"
          style={searchInput}
          aria-label="Search icons"
        />
        <span style={count}>
          {matches.length} / {ICON_NAMES.length}
        </span>
      </div>

      {matches.length === 0 ? (
        <p style={{ ...caption, fontSize: "var(--type-md-size)" }}>هیچ آیکونی پیدا نشد — No icons match “{query}”.</p>
      ) : (
        <div style={grid}>
          {matches.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => copy(name)}
              style={clickableCell}
              title="Click to copy name"
            >
              <Icon name={name} size="xl" label={name} />
              <span style={caption}>{copied === name ? "✓ copied" : name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Browse and search the full icon set (~800). Type to filter; click an icon to copy its name. */
export const AllIcons: Story = {
  name: "All icons (searchable)",
  parameters: { layout: "padded" },
  args: { name: "telephone" }, // unused by render; satisfies the required-prop union
  render: () => <IconExplorer />,
};
