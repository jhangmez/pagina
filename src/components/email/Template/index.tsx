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
  Row,
  Column,
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
  JhanXyz,
  HugginFaceJhan
} from '@routes'
interface EmailTemplateProps {
  firstName: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://jhangmez.vercel.app'

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
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
            onSurface: '#1A1C19',
            surfaceContainer: '#EDEEE9'
          }
        }
      }
    }}
  >
    <Html lang='es'>
      <Head>
        <title>Correo de jhangmez.xyz</title>
        <Font
          fontFamily='Plus Jakarta Sans'
          fallbackFontFamily='Helvetica'
          webFont={{
            url: 'https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0n9QB_VIKg.woff2',
            format: 'woff2'
          }}
          fontWeight={600}
          fontStyle='normal'
        />
      </Head>
      <Preview>Solicitud de contacto | 😄 jhangmez</Preview>
      <Body style={main} className='p-5'>
        <Container className='mx-auto px-[20px] py-5 pb-12 bg-surfaceContainer'>
          <Row className='w-full flex items-center '>
            <Column style={containerButton} colSpan={2}>
              <Link href={JhanXyz} className='flex flex-row gap-5'>
                <Img
                  src={`${baseUrl}/icons/jhangmez.png`}
                  width='30'
                  height='30'
                  alt='jhangmez_ico'
                  className='h-full'
                />
                <span className='text-onSurface text-2xl font-bold'>jhan</span>
                <span className='text-primary text-2xl font-bold'>gmez</span>
              </Link>
            </Column>
          </Row>

          <Text className='font-bold text-lg text-onSurface'>
            Hola <strong>{firstName}</strong>,
          </Text>
          <Text className='text-normal font-medium text-onSurface'>
            Agradezco la interés en contactarme.
            <br />
            Próximamente estaré en contacto con usted.
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

          <Section>
            <Row cellSpacing={5}>
              <Column>
                <Link
                  href={CoffeeJhan}
                  aria-label='buy me a coffe'
                  className='text-light-onSurface'
                >
                  <Img
                    width='24'
                    height='24'
                    src='https://cdn-icons-png.flaticon.com/512/3725/3725618.png'
                    alt='linkedin'
                  />
                </Link>
              </Column>
              <Column>
                <Link href={HugginFaceJhan} aria-label='HugginFace'>
                  <Img
                    src='https://cdn-icons-png.flaticon.com/512/3508/3508356.png'
                    alt='linkedin'
                    width='24'
                    height='24'
                  />
                </Link>
              </Column>
              <Column>
                <Link href={GithubJhan} aria-label='github'>
                  <Img
                    src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png'
                    alt='github'
                    width='24'
                    height='24'
                  />
                </Link>
              </Column>
              <Column>
                <Link href={LinkedinJhan} aria-label='Linkedin'>
                  <Img
                    src='https://cdn-icons-png.flaticon.com/512/61/61109.png'
                    alt='linkedin'
                    width='24'
                    height='24'
                  />
                </Link>
              </Column>
              <Column>
                <Link href={MediumJhan} aria-label='medium'>
                  <Img
                    src='https://cdn-icons-png.flaticon.com/512/5968/5968933.png'
                    alt='medium'
                    width='24'
                    height='24'
                  />
                </Link>
              </Column>
            </Row>
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

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
}
