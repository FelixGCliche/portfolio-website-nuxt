import { resolve } from 'pathe'
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  target: 'static',

  alias: {
    style: resolve(__dirname, './assets/style'),
    fonts: resolve(__dirname, './assets/fonts'),
    types: resolve(__dirname, './types')
  },

  css: ['@/assets/style/main.scss', '@/assets/style/reset.css'],

  strapi: {
    url: process.env.STRAPI_URL || 'http:localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {}
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
