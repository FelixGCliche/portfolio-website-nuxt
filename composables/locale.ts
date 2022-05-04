export const useLocale = () => {
  return useState<string>('locale', () => useDefaultLocale().value)
}
const useDefaultLocale = (fallback = 'en') => {
  const locale = ref(fallback)

  if (process.server) {
    const reqLang =
      useNuxtApp().ssrContext?.req.headers['accept-language'].split(',')[0]
    if (reqLang) {
      locale.value = reqLang.split('-')[0]
    }
  } else if (process.client) {
    const navLang = navigator.language
    if (navLang) {
      locale.value = navLang.split('-')[0]
    }
  }

  return locale
}
