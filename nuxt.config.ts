import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  target: 'static',
  ssr: ({ isDev }) => !isDev,

  alias: {
    style: fileURLToPath(new URL('./assets/style', import.meta.url)),
    fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
    types: fileURLToPath(new URL('./types', import.meta.url))
  },

  filenames: {
    font: ({ isDev }) => (isDev ? '[name].[ext]' : '[id].[contenthash].[ext]')
  },

  publicRuntimeConfig: {
    strapiURL: process.env.STRAPI_URL || 'http:localhost:1337'
  },

  css: ['@/assets/style/main.scss', '@/assets/style/reset.css'],

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
