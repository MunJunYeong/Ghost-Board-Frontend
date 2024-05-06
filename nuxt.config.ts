import { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],

  //...
  typescript: {
    typeCheck: true,
  },

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    "@nuxt/eslint",
    "vuetify-nuxt-module",
    "@nuxt/image",
    "@nuxt/ui",
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },

  devtools: {
    enabled: true,
  },
});
