export function useComputedStyleProperty(key: string): string {
  const style = getComputedStyle(document.documentElement)
  return style.getPropertyValue(key)
}
