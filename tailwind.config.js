module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '24px',
      xl: '40px',
    },
    textColor: {
      white: '#FFFFFF',
      light: '#f7f7f7',
      dark: '#444444',
    },
    backgroundColor: {
      white: '#FFFFFF',
      light: '#f7f7f7',
      dark: '#040D20',
    },

    extend: {
      colors: {
        dark: '#444444',
        light: '#f7f7f7',
      },
    },
  },
  plugins: [],
}
