module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'nus3-playground',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nus3の実験場。CSSアニメーションで遊ぶ場所' },
      { hid: 'keywords', name: 'keywords', content: 'CSS,Animation,アニメーション' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nus3-Playground' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Nus3-Playground' },
      { hid: 'og:image', property: 'og:image', content: '/image/logo.png' },
      { name: 'twitter:title', content: 'Nus3-Playground' },
      { name: 'twitter:site', content: '@YotaHada3' },
      { name: 'twitter:image', content: '/image/facebook_cover_photo_2.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: 'アニメーションで遊ぶ場所' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/image/favicon.png' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css' },
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    { src: '@/assets/css/config.scss' }
  ],
}

