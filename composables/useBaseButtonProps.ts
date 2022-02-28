interface BaseButtonProps {
  url?: string
  label: string
}

export const useBaseButtonProps = (props?: BaseButtonProps) => ({
  url: {
    type: String,
    default: props.url
  },
  label: {
    type: String,
    default: props.label
  }
})

export const useButtonType = (url: string) => {
  if(!url) {
    return 'button'
  }

  return 'a'
}
