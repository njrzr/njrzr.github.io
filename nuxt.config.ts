import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/4cd87bf5ed.js',
          crossorigin: 'anonymous'
        }
      ]
    },
    pageTransition: { name: 'zoom', mode: 'out-in' }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ],
  },

  compatibilityDate: "2025-02-20",
})