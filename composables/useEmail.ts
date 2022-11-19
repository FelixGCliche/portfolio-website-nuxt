import { sendForm } from '@emailjs/browser'

export function useEmail(form: HTMLFormElement) {
  const config = useRuntimeConfig()

  sendForm(
    config.emailJSServiceID,
    config.emailJSTemplateID,
    form,
    config.emailJSUserID
  ).then(
    response => {
      console.log(`success: ${response.status} ${response.text}`)
      window.scrollTo(0, 0)
    },
    error => {
      console.error(`failure: ${error.status} ${error.text}`)
    }
  )
}
