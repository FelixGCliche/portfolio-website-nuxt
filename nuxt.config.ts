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
    url: process.env.STRAPI_URL || 'https://strapi-production-hzyahori3a-nn.a.run.app',
    prefix: '/api',
    version: 'v4',
    cookie: { },
  }  
})