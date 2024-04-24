import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  //...
  typescript: {
    typeCheck: true
  },
  build: {
    
    transpile: ['vuetify'],
  },
  modules: ["@nuxt/eslint", (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  },'@nuxtjs/tailwindcss'],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})