import { BaseInputFieldProps } from 'types/InputField'

export const useBaseInputFieldProps = (props?: BaseInputFieldProps) => ({
  name: {
    type: String,
    default: props.name,
    required: true
  },
  required: {
    type: Boolean,
    default: props.required
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
  }
})
