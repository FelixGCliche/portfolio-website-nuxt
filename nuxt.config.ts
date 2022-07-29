import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  target: 'static',
  ssr: ({ isDev }) => !isDev,

  alias: {
    fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
    img: fileURLToPath(new URL('./assets/img', import.meta.url)),
    style: fileURLToPath(new URL('./assets/style', import.meta.url)),
    types: fileURLToPath(new URL('./types', import.meta.url))
  },

  modules: ['@nuxt/content'],
  content: {
    watch: false,
    locales: ['fr', 'en']
  }

  publicRuntimeConfig: {
    strapiURL: process.env.STRAPI_URL || 'http:localhost:1337'
  },

  css: ['@/assets/style/main.scss', '@/assets/style/reset.css'],
  typescript: {
    shim: false
  },

  build: {
    filenames: {
      font: ({ isDev }) => (isDev ? '[name].[ext]' : '[id].[contenthash].[ext]')
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use './assets/style/global/layout' as layout;
          @use './assets/style/global/theme' as theme;
          `
        }
      }
    }
  }
})
