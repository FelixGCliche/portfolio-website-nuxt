// import { BaseIconProps } from '~~/@types'
interface BaseIconProps {
  iconName: String
  size?: Number
  color?: String
}

export const useBaseIconProps = (props?: BaseIconProps) => ({
  iconName: {
    type: String,
    required: true,
    default: props.iconName
  },
  size: {
    type: Number,
    default: props.size
  },
  color: {
    type: String,
    default: props.color
  }
})