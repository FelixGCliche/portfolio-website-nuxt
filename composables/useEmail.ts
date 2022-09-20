import { sendForm } from 'emailjs-com'

export const useEmail = (form: HTMLFormElement) => {
  const config = useRuntimeConfig()

  sendForm(
    config.emailJSServiceID,
    config.emailJSTemplateID,
    form,
    config.emailJSUserID
  ).then(
    response => {
      console.log(`success: ${response.status} ${response.text}`)
      document.body.scrollTop = 0
    },
    error => {
      console.error(`failure: ${error.status} ${error.text}`)
    }
  )
}
