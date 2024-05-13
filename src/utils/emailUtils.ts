import { toast } from 'react-hot-toast'

export const submitCorreo = (
  event: React.FormEvent<HTMLFormElement>,
  emailType: string,
  captcha: boolean,
  onSuccess: () => void
) => {
  event.preventDefault() // Prevent the default form submission

  const formData = new FormData(event.currentTarget)
  const email = formData.get('email')
  const name = formData.get('name')
  const detalle = formData.get('detalle')
  const asunto = formData.get('asunto')

  if (!email || !name || !emailType || !validateEmail(email.toString())) {
    toast.error('Por favor, introduce valores correctos.')
    return
  }

  if (emailType === 'contact' && (!detalle || !asunto)) {
    toast.error('Por favor, introduce valores completos.')
    return
  }
  if (!captcha) {
    toast.error('Por favor, completa el captcha.')
    return
  }

  // Utiliza toast.promise para manejar la promesa de la petición
  toast
    .promise(
      fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.toString(),
          name: name.toString(),
          emailType: emailType,
          ...(emailType === 'contact' && {
            detalle: detalle ? detalle.toString() : '',
            asunto: asunto ? asunto.toString() : ''
          })
        })
      }),
      {
        loading: 'Enviando correo...',
        success: 'Correo enviado exitosamente!',
        error:
          'Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.'
      }
    )
    .then(() => {
      if (onSuccess) {
        onSuccess()
      }
    })
}

// Función auxiliar para validar el correo electrónico
export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
