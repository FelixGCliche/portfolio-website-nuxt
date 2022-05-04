import { resolve } from 'pathe'
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  target: 'static',
  ssr: false,

  alias: {
    style: resolve(__dirname, './assets/style'),
    fonts: resolve(__dirname, './assets/fonts'),
    types: resolve(__dirname, './types')
  },

  filenames: {
    chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js'),
    font: ({ isDev }) => (isDev ? '[name].[ext]' : '[id].[contenthash].[ext]')
  },

  publicRuntimeConfig: {
    strapiURL: process.env.STRAPI_URL || 'http:localhost:1337'
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
