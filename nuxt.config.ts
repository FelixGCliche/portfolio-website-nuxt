import {defineNuxtConfig} from '@nuxt/bridge'
import { resolve} from 'path'

export default defineNuxtConfig ({
  target: 'static',

  alias: {
    'style': resolve(__dirname, './assets/style'),
    'fonts': resolve(__dirname, './assets/fonts')
  },

  buildModules: [
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
    ],
    hoistUseStatements: true
  },

  strapi: {
    url: process.env.STRAPI_URL || 'http:localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: { },
  }  
})