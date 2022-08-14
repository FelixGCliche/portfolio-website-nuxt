export interface BaseIconProps {
  iconName: String
  size?: Number
  color?: String
}

export const useBaseIconProps = (props?: BaseIconProps) => ({
  iconName: {
    type: String,
    default: props.iconName,
    required: true
  },
  size: {
    type: Number,
    default: props.size
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
