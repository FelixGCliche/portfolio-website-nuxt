export interface BaseInputFieldProps {
  name: string
  label: string
  placeholder: string
}

export interface TextFieldProps extends BaseInputFieldProps {
  value: string
}
