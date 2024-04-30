import { EmailCV } from '@components/email/CV'
import { EmailTemplate } from '@components/email/Template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email, name, emailType } = await request.json()

    let subject = ''
    let template = null

    switch (emailType) {
      case 'contact':
        subject = 'Contacto'
        template = EmailTemplate({ firstName: name }) as React.ReactElement
        break
      case 'cv':
        subject = 'Envío de CV'
        template = EmailCV({ firstName: name }) as React.ReactElement
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
      from: 'Jhan Gómez P. <noreplay@jhangmez.xyz>',
      to: [email],

      bcc: 'jhangomez25@gmail.com',
      subject: subject,
      react: template
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
