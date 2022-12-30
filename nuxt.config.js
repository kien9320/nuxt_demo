export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'Pi Creative',
    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'Pi Creative' },
      { name: 'copyright', content: 'Pi Creative' },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { property: 'og:type', content: 'business.business' },
      { property: 'og:title', content: 'Pi CREATIVE' },
      { property: 'og:url', content: 'https://picreative.ai' },
      {
        property: 'og:image',
        content: 'https://picreative.ai/thumbnail.png',
      },
      {
        property: 'og:description',
        content:
          'PI CREATIVE đã trải qua nhiều dự án thành công, tạo được bước đột phá trong thị trường doanh nghiệp, đưa công nghệ Blockchain mới hòa nhập vào Việt Nam và tạo ra những dấu ấn sâu sắc với thị trường kinh tế thế giới.  Khách hàng của PI CREATIVE đa dạng từ doanh nghiệp giải trí, doanh nghiệp coffee đến doanh nghiệp tài chính, kinh doanh xe... và đến từ rất nhiều quốc gia trên thế giới',
      },
      {
        property: 'business:contact_data:street_address',
        content:
          '4-6-8 Calmette, phường Nguyễn Thái Bình, Quận 1, Tp Hồ Chí Minh',
      },
      {
        property: 'business:contact_data:locality',
        content: 'Tp. Hồ Chí Minh, Ho Chi Minh',
      },
      {
        property: 'business:contact_data:region',
        content: 'Tp. Hồ Chí Minh',
      },
      {
        property: 'business:contact_data:postal_code',
        content: '800000',
      },
      {
        property: 'business:contact_data:country_name',
        content: 'Vietnam',
      },
      { name: 'apple-mobile-web-app-title', content: 'Pi CREATIVE' },
      { name: 'application-name', content: 'Pi CREATIVE' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.css',
    '@/assets/scss/main.scss',
    '@/static/hover.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/animated.js', ssr: false },
    { src: '~/plugins/vuecookies.js', ssr: false },
    { src: '~/plugins/boostrap.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: false },
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/vueslickcarousel.js', ssr: true },
    { src: '~/plugins/moment.js', ssr: false },
    { src: '~/plugins/vuetoastr.js', ssr: false },
    { src: '~/plugins/toastr.js', ssr: false },
    { src: '~/plugins/tippy.js', ssr: false },
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  toastr: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://main-api.picreative.org/api/v1',
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  styleResources: {
    scss: '@/assets/scss/_variables.scss',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
  server: {
    port: 4000,
    host: '0.0.0.0',
  },
  ssr: false,
}
