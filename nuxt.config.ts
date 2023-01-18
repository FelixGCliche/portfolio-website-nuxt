import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  ssr: true,
  experimental: {
    payloadExtraction: false
  },

  alias: {
    fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
    img: fileURLToPath(new URL('./assets/img', import.meta.url)),
    style: fileURLToPath(new URL('./assets/style', import.meta.url)),
    types: fileURLToPath(new URL('./types', import.meta.url))
  },

  modules: ['@nuxt/content', '@nuxtjs/i18n'],

  content: {
    locales: ['fr', 'en']
  },

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en']
  },

  css: ['@/assets/style/main.scss', '@/assets/style/reset.css'],

  typescript: {
    shim: false
  },

  runtimeConfig: {
    public: {
      emailJSServiceID: process.env.EMAILJS_SERVICEID,
      emailJSTemplateID: process.env.EMAILJS_TEMPLATEID,
      emailJSUserID: process.env.EMAILJS_USERID,
      grecaptchaSiteKey: process.env.GRECAPTCHA_SITEKEY
    }
  },

  build: {
    transpile: ['emailjs-com']
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
