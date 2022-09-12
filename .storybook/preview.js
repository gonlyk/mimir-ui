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
    <div className={process.env.STORYBOOK_THEME}>
      <Story />
    </div>
  )
]