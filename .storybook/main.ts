import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../packages/react/src/**/*.stories.@(ts|tsx)",
    "../.storybook/**/*.stories.@(ts|tsx)"
  ],
  addons: ["@storybook/addon-essentials", "@storybook/addon-themes"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    disableTelemetry: true
  }
};

export default config;
