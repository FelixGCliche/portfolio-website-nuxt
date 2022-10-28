import { RecaptchaSize, RecaptchaTheme } from '~~/types/Recaptcha'

export const useRecaptchaProps = () => ({
  containerId: {
    type: String,
    required: true
  },
  callback: {
    type: Function,
    required: true
  },
  expiredCallback: {
    type: Function
  },
  errorCallback: {
    type: Function
  },
  size: {
    type: String,
    default: RecaptchaSize.Normal
  },
  theme: {
    type: String,
    default: RecaptchaTheme.Dark
  }
})
