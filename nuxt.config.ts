import { resolve } from 'pathe'
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  target: 'static',
  components: [
    {
      global: true,
      path: '@/components',
      pathPrefix: false
    }
  ],

  alias: {
    style: resolve(__dirname, './assets/style'),
    fonts: resolve(__dirname, './assets/fonts'),
    types: resolve(__dirname, './types')
  },

  css: ['@/assets/style/main.scss', '@/assets/style/reset.css'],
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
