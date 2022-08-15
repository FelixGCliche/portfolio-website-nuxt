import { TextFieldProps } from 'types/InputField'

export const useBaseInputFieldProps = (props?: TextFieldProps) => ({
  name: {
    type: String,
    default: props.name,
    required: true
  },
  label: {
    type: String,
    default: props.label,
    required: true
  },
  placeholder: {
    type: String,
    default: props.placeholder,
    required: true
  },
  value: {
    type: String,
    default: props.value,
    required: true
  }
})
