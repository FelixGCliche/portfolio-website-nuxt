export const useLocale = () => {
  const locale = useState<string>('locale')
  if (locale.value) {
    return locale
  } else {
    return useState<string>('locale', () => useDefaultLocale().value)
  }
}
const useDefaultLocale = (fallback = 'fr') => {
  const locale = ref(fallback)

  if (process.server) {
    try {
      const reqLang = useRequestHeaders()['accept-language']?.split(',')[0]
      if (reqLang) {
        locale.value = reqLang.split('-')[0]
      }
    } catch (error) {
      console.log(
        `Error getting server locale, fallback on locale ${locale}. Error: ${error}`
      )
      return locale
    }
  } else if (process.client) {
    try {
      const navLang: string = navigator.language
      if (navLang) {
        locale.value = navLang.split('-')[0]
      }
    } catch (error) {
      console.log(
        `Error getting client locale, fallback on locale ${locale}. Error: ${error}`
      )
      return locale
    }
  }

  return locale
}
