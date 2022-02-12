import {defineNuxtConfig} from '@nuxt/bridge'

export default defineNuxtConfig ({
  target: 'static',
  modules: [
    '@nuxtjs/style-resources'
  ],
  buildModules: [
    '@nuxtjs/strapi'
  ],
  styleResources: [
    
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
  }  
})