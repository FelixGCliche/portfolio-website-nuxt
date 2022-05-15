import { NuxtApp } from '@nuxt/schema'

export { useStrapiUrl } from './useStrapiUrl'

interface StrapiResonseData<T> {
  id: number
  attributes: T
  meta?: object
}
interface StrapiResonse<T> {
  data: StrapiResonseData<T>[] | StrapiResonseData<T>[]
  meta?: Record<string, unknown>
}

export const useStrapi = () => {
  const url = useStrapiUrl()
  const locale = useLocale()

  const fetch = async <T>(route: string) => {
    const fetchUrl = `${url}/api/${route}?locale=${locale.value}`
    const { data: response, error } = await useFetch<StrapiResonse<T>>(fetchUrl)
    if (error.value)
      throw new Error(`Error while fetching Strapi API at url ${fetchUrl}`)
    else
      return {
        data: response.value.data,
        error: error.value,
        meta: response.value.meta
      }
  }

  const lazyFetch = async (route: string) => {
    return await useLazyFetch(`${url}/${route}?locale=${locale.value}`)
  }

  return {
    fetch,
    lazyFetch
  }
}
