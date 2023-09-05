export default {
  target: 'static',
  // https://devhormiga.github.io/artehiperactivo/
  // router: {
  //   base: '/artehiperactivo/'
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'artehiperactivo',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'Cia de Circo,Humor, Danza,Teatro' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Arte Hiperactivo ' },
      { hid: 'og:url', name: 'og:url', content: 'https://artehiperactivo.com.ar/' },
      { hid: 'og:image', name: 'og:image', content: 'https://artehiperactivo.com.ar/_nuxt/img/tosapa.1c6961b.jpg' },
      { hid: 'og:description', name: 'og:description', content: 'Cia de Circo,humor, Danza,Teatro' },
     
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css', rel: 'stylesheet', integrity: 'sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==', crossorigin: 'anonymous' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/variables.scss',
    'animate.css/animate.min.css'
  ],
  styleResources: {
    scss: ['./assets/scss/variables.scss']
  },
  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'aboute',
        path: '/aboute',
        component: 'pages/aboute.vue'
      },
      {
        name: 'panambi',
        path: '/',
        component: 'pages/panambi.vue'
      },
      {
        name: 'natalio',
        path: '/',
        component: 'pages/natalio.vue'
      },
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // loaders: {
    //   scss: {
    //     additionalData: '~/assets/scss/variables.scss', // Ruta de tu archivo de variables Sass
    //   },
    // },
  }
}
