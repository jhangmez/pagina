import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text
} from '@react-email/components'
interface EmailTemplateProps {
  firstName: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

export const EmailCV: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName
}) => (
  <Html>
    <Head />
    <Preview>😄 jhan gmez</Preview>
    <Img
      src={`${baseUrl}/icons/jhangmez.svg`}
      width='28'
      height='28'
      alt='jhangmez_ico'
    />
    <div>
      <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
        jhan
      </span>
      <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
        gmez
      </span>
    </div>
    <h1>Hola {firstName}, este es mi CV.</h1>
  </Html>
)

const main = {
  backgroundColor: '#F9FAF4',
  fontFamily: 'Plus Jakarta Sans'
}
