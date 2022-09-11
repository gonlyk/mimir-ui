const path = require('path')
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            additionalData: (content, loaderContext) => {
              return `@import '../../../style/index.less';${content}`
            }
          }
        }
      ],
      include: [
        path.resolve(__dirname, '../stories'),
        path.resolve(__dirname, '../style')
      ]
    })

    return config;
  },
  "framework": "@storybook/react"
}