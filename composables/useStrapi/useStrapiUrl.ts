export const useStrapiUrl = (): string => {
  const config = useRuntimeConfig()

  if (config) {
    if (config.strapiURL) {
      return config.strapiURL
    } else {
      throwError('strapiURL not found in Runtime config')
    }
  } else {
    throwError('Runtime config not found')
  }
}
