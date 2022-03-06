const path = require('path');

module.exports = {
  typescript: {
      check: false
  },
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(sass|scss)$/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          additionalData: `
          @import "@/css/quasar.variables.scss"
          @import "@/css/app.scss"
          `
        }
      }],
      include: path.resolve(__dirname, '../'),
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src/"),
          "~": path.resolve(__dirname, "../src/assets/"),
        },
      },
    });

    return config;
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  framework: "@storybook/vue3",
  core: {
    "builder": "webpack5"
  }
}
