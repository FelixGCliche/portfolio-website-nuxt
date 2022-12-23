export const useInputFieldProps = () => ({
  inputName: {
    type: String,
    required: true
  },
  inputLabel: {
    type: String,
    required: true
  },
  inputPlaceholder: {
    type: String
  },
  inputRequired: {
    type: Boolean
  }
})
