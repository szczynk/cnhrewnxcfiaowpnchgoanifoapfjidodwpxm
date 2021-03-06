
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/tail.select-default.css' }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/432569d702.js",
        type: "text/javascript"
      },

      {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        type: "text/javascript"
      },

      {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
        type: "text/javascript"
      },

      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
        type: "text/javascript"
      },

      {
        src: "tail.select.min.js",
        type: "text/javascript"
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: ["@/node_modules/bootstrap/dist/css/bootstrap.css"
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  js: [
    '@/node_modules/bootstrap/dist/js'
  ],

  plugins: [
    '~/plugins/firebase',
    '~/plugins/fireauth',
    // { src: '~/plugins/vuex-persist', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader'],
      },
    ],
  },
  
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    DATABASEURL: process.env.DATABASEURL,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
    APPID: process.env.APPID,
    MEASUREMENTID: process.env.MEASUREMENTID,
    SECRETVUEX: process.env.SECRETVUEX
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    
  }
}
