export const useInputFieldProps = () => ({
  inputName: {
    type: String,
    required: true
  },
  inputLabel: {
    type: String,
    required: true
  },
  inputRequired: {
    type: Boolean
  }
})

export const useBaseInputFieldProps = () => ({
  inputName: {
    type: String,
    default: 'input name',
    required: true
  },
  inputLabel: {
    type: String,
    default: 'input label',
    required: true
  },
  inputRequired: {
    type: Boolean,
    default: false
  }
})
