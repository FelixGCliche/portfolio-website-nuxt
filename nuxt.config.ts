import {defineNuxtConfig} from '@nuxt/bridge'
import { resolve} from 'path'

export default defineNuxtConfig ({
  target: 'static',
  components: true,

  alias: {
    'style': resolve(__dirname, './assets/style'),
    'fonts': resolve(__dirname, './assets/fonts')
  },

  buildModules: [
    '@nuxt/components',
    '@nuxtjs/style-resources',
    '@nuxtjs/strapi'
  ],

  css: [
    '@/assets/style/main',
    '@/assets/style/reset'
  ],
  styleResources: {
    scss: [
      '@/assets/style/global/*.scss',
    ]
  },

  strapi: {
    url: process.env.STRAPI_URL || 'http:localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: { },
  }  
})