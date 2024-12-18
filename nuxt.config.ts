import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
    img: fileURLToPath(new URL('./assets/img', import.meta.url)),
    style: fileURLToPath(new URL('./assets/style', import.meta.url)),
    types: fileURLToPath(new URL('./types', import.meta.url))
  },

  css: ['@/assets/style/reset.css', '@/assets/style/main.scss'],

  typescript: {
    shim: false
  },

  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/image'],

  content: {
    locales: ['fr', 'en'],
    markdown: {
      anchorLinks: false
    }
  },

  i18n: {
    defaultLocale: 'fr',
    locales: [
      {
        code: 'fr',
        file: 'fr.yaml'
      },
      {
        code: 'en',
        file: 'en.yaml'
      }
    ]
  },

  image: {
    provider: 'ipx'
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
          @use './assets/style/partials/layout' as layout;
          @use './assets/style/partials/theme' as theme;
          `
        }
      }
    }
  }
})
