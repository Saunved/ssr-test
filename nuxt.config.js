export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ssr-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Deutsch',
            code: 'de',
            iso: 'de-DE',
            file: 'de-DE.js',
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
          },
          {
            name: 'Español',
            code: 'es',
            iso: 'es-ES',
            file: 'es-ES.js',
          },
        ],
        vueI18nLoader: true,
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true,
          fallbackLocale: 'en',
        },
      },
    ],    
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseUrl: '/',
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'https://jsonplaceholder.typicode.com/posts' }
  },


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
