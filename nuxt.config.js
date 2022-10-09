export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mustafa Güney | UX/UI Designer | Front-End Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "I'm a UI/UX Designer & Front-End Developer based in Alanya, Turkey. I design mobile apps & websites also build interactive websites that run across platforms & devices.",
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#f7f7f7' },
      { name: 'theme-color', content: '#f5f5f5' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/fav/apple-touch-icon.png',
      },
      { rel: 'icon', type: 'image/png', href: '/fav/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: '/fav/favicon-16x16.png' },
      { rel: 'manifest', href: '/fav/site.webmanifest' },
      {
        rel: 'mask-icon',
        color: '#f7f7f7',
        href: '/fav/safari-pinned-tab.svg',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@assets/fit.css', lang: 'scss' },
    { src: '@assets/tailwind.css', lang: 'css' },
    { src: '@assets/main.scss', lang: 'scss' },
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  target: 'static',
  buildModules: ['@nuxt/postcss8', '@nuxtjs/color-mode','@nuxt/image'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-svg-loader'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  colorMode: {
    classSuffix: '',
  },
}
