import { useEffect } from "react";
import type { Preview, Decorator } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

// Tokens are the source of truth — load them once for every story.
// Resolves via the package "exports" to packages/tokens/src/tokens.css.
import "@behnamsobhkhiz/sonnat-tokens/tokens.css";

// RTL is the SONNAT default; the toolbar can flip to LTR to sanity-check
// logical properties.
const withDirection: Decorator = (Story, context) => {
  const dir = (context.globals.direction as "rtl" | "ltr") ?? "rtl";
  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", "fa");
  }, [dir]);
  return <Story />;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i }
    }
  },
  globalTypes: {
    direction: {
      description: "Text direction",
      defaultValue: "rtl",
      toolbar: {
        title: "Direction",
        icon: "transfer",
        items: [
          { value: "rtl", title: "RTL (فارسی)" },
          { value: "ltr", title: "LTR" }
        ],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    withDirection,
    withThemeByDataAttribute({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
      attributeName: "data-theme"
    })
  ]
};

export default preview;
