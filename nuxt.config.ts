import {defineNuxtConfig} from '@nuxt/bridge'
import { resolve} from 'path'

export default defineNuxtConfig ({
  target: 'static',

  head: {
    title: 'Félix Gagné Cliche',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  alias: {
    'style': resolve(__dirname, './assets/style'),
    'fonts': resolve(__dirname, './assets/fonts'),
    'composables': resolve(__dirname, './composables')
  },

  buildModules: [
    '@nuxt/components',
    '@nuxtjs/style-resources',
    '@nuxtjs/strapi'
  ],

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
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