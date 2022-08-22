export const useBaseButtonProps = () => ({
  url: {
    type: String
  },
  label: {
    type: String,
    default: 'button-label'
  }
})

export const useButtonType = (url: string) => {
  if (!url) {
    return 'button'
  }

  return 'a'
}
