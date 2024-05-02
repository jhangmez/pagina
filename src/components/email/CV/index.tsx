import {
  Body,
  Tailwind,
  Link,
  Container,
  Head,
  Heading,
  Font,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text
} from '@react-email/components'
import * as React from 'react'
import {
  GithubJhan,
  LinkedinJhan,
  CoffeeJhan,
  MediumJhan,
  JhanXyz
} from '@routes'
interface EmailTemplateProps {
  firstName: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://jhangmez.vercel.app'

export const EmailCV: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName
}) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            primary: '#1A6C30',
            onPrimary: '#FFFFFF',
            primaryContainer: '#A3F6AA',
            onPrimaryContainer: '#002108',
            outline: '#727970',
            background: '#FCFDF7',
            onBackground: '#1A1C19',
            surface: '#F9FAF4',
            onSurface: '#1A1C19'
          }
        }
      }
    }}
  >
    <Html>
      <Head>
        <title>Correo de jhangmez.xyz</title>
        <Font
          fontFamily='Plus Jakarta Sans'
          fallbackFontFamily='Verdana'
          webFont={{
            url: 'https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0n9QB_VIKg.woff2',
            format: 'woff2'
          }}
          fontWeight={600}
          fontStyle='normal'
        />
      </Head>
      <Preview>Solicitud de envio de CV | 😄 jhangmez</Preview>
      <Body style={main}>
        <Container className='mx-auto px-[20px] py-5 pb-12 bg-surface'>
          <Link href={JhanXyz} className='flex gap-5'>
            <Img
              src={`${baseUrl}/icons/jhangmez.png`}
              width='28'
              height='28'
              alt='jhangmez_ico'
            />
            <Text>
              <span className='text-onSurface text-2xl font-bold leading-[44px]'>
                jhan
              </span>
              <span className='text-primary text-2xl font-bold leading-[44px]'>
                gmez
              </span>
            </Text>
          </Link>
          <Hr className='border-outline my-5' />
          <Text className='font-bold text-lg text-onSurface'>
            Hola {firstName},
          </Text>
          <Text className='text-normal font-medium text-onSurface'>
            Agradezco la solicitud de mi CV. Si mi perfil le resulta de interés,
            no dude en contactarme por correo electrónico.
            <br />
            Le adjunto el archivo pdf de mi cv a este correo.
          </Text>
          <Text className='text-normal font-medium text-onSurface'>
            Gracias,
            <br />
            Jhan Gómez P.
          </Text>
          <Hr className='border-outline my-5' />
          <Text className='text-gray-400 text-xs'>
            Chiclayo, Lambayeque, Perú.
          </Text>
          <Section className='flex flex-wrap space-x-5'>
            <Link href={LinkedinJhan} className='font-medium text-onBackground'>
              LinkedIn
            </Link>
            <Link href={GithubJhan} className='font-medium text-onBackground'>
              Github
            </Link>
            <Link href={CoffeeJhan} className='font-medium text-onBackground'>
              Dar un Café
            </Link>
            <Link href={MediumJhan} className='font-medium text-onBackground'>
              Medium
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
)

const main = {
  backgroundColor: '#FCFDF7',
  fontFamily: 'Plus Jakarta Sans'
}
