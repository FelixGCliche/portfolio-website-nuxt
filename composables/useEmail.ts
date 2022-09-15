import emailjs from 'emailjs-com'

export function useEmail(form: HTMLFormElement) {
  emailjs.sendForm('portfolio', 'default', form, 'fQsPv5E3xcb_a9l0T').then(
    () => {
      window.location.reload()
    },
    error => {
      alert(`Message not sent ${error}`)
    }
  )
}
