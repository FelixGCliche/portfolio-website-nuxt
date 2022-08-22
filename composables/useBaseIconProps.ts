export const useIconProps = () => ({
  iconName: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  }
})

export function useBaseIconProps() {
  return {
    iconName: {
      type: String,
      default: 'iconName',
      required: true
    },
    size: {
      type: Number,
      default: 24,
      required: true
    }
  }
}
