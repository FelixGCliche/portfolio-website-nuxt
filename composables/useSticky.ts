export const useSticky = () => {
  const isSticky = ref(false)

  const onStick = (target?: HTMLElement) => {
    const observer = new IntersectionObserver(
      ([e]) => {
        isSticky.value = !e.isIntersecting
      },
      { threshold: [1] }
    )
    observer.observe(target!)
  }

  return {
    isSticky,
    onStick
  }
}
