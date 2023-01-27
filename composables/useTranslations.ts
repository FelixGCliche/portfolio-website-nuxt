export const useTranslations = () => {
  const { locale } = useI18n()
  const translations = useState<any>('translation')
  const setTranslations = (content: any) => {
    translations.value = content
  }
  return { translations, setTranslations }
}
