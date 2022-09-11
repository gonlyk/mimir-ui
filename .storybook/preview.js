import { StyleProvider } from '../components'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

console.log(process.env.STORYBOOK_THEME)
export const decorators = [
  Story => (
    <StyleProvider theme={process.env.STORYBOOK_THEME}>
      <Story />
    </StyleProvider>
  )
]