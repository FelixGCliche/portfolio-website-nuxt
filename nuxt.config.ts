import {defineNuxtConfig} from '@nuxt/bridge'

<<<<<<< HEAD
export default defineNuxtConfig ({
  target: 'static',
  modules: [
    '@nuxtjs/style-resources'
=======
const config: NuxtConfig = ({
  modules: [
    '@nuxtjs/style-resources'
  ],
  buildModules: [
    '@nuxt/typescript-build',
>>>>>>> c168804f67e61cde8c71e18463a869894213cc60
  ],
  buildModules: [
    '@nuxtjs/strapi'
  ],
  styleResources: [
    
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http:localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: { },
  }  
})