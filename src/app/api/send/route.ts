import { EmailCV } from '@components/email/CV'
import { EmailContacto } from '@components/email/Template'
import { Resend } from 'resend'

interface Attachment {
  filename: string
  path: string
}

interface Tag {
  name: string
  value: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email, name, emailType, detalle, asunto } = await request.json()

    let subject = ''
    let template = null
    let attachments: Attachment[] = []
    let tags: Tag[] = []
    let bcc = ''
    let text = ''
    switch (emailType) {
      case 'contact':
        subject = 'Contacto'
        template = EmailContacto({
          firstName: name,
          asunto: asunto,
          detalle: detalle
        }) as React.ReactElement
        bcc = 'jhangomez25@gmail.com'
        text =
          'Hola, este es un correo automatizado de jhangmez.xyz para contacto'
        tags = [
          {
            name: 'contacto',
            value: 'Contacto'
          }
        ]
        break
      case 'cv':
        subject = 'Envío de CV'
        template = EmailCV({ firstName: name }) as React.ReactElement
        text =
          'Hola, este es un correo automatizado de jhangmez.xyz para envío de CV'
        attachments = [
          {
            filename: 'JHANCARLOSGOMEZPADILLA.pdf',
            path: 'https://jhangmez.xyz/static/pdf/JHANCARLOSGOMEZPADILLA.pdf'
          },
          {
            filename: 'JHANCARLOSGOMEZPADILLA-Español.pdf',
            path: 'https://jhangmez.xyz/static/pdf/JHANCARLOSGOMEZPADILLA-Español.pdf'
          }
        ]
        tags = [
          {
            name: 'solicitud',
            value: 'Solicitud de cv'
          }
        ]
        break
      default:
        return new Response(
          JSON.stringify({
            message: 'Tipo de correo inválido',
            error: 'Invalid email type'
          }),
          { status: 400 }
        )
    }

    const { data, error } = await resend.emails.send({
      from: 'Jhan Gómez P. <noreplay-bot@jhangmez.xyz>',
      to: [email],
      text: text,
      bcc: bcc,
      subject: subject,
      react: template,
      attachments: attachments
    })

    if (error) {
      return Response.json(
        { message: 'Mensaje errado', error },
        { status: 400 }
      )
    }
    console.log(data)
    console.log(email)
    return Response.json({ message: 'Mensaje enviado', data }, { status: 200 })
  } catch (error) {
    return Response.json({ message: 'Mensaje errado', error }, { status: 500 })
  }
}
