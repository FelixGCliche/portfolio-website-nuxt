export const useTextFieldType = (textarea: boolean) => {
  if (textarea) {
    return 'textarea'
  }

  return 'input'
}
