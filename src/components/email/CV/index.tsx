import {
  Body,
  Button,
  Container,
  Head,
  Font,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text
} from '@react-email/components'
import * as React from 'react'
interface EmailTemplateProps {
  firstName: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://jhangmez.vercel.app'

export const EmailCV: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName
}) => (
  <Html>
    <Head>
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
    <Preview>😄 jhan gmez</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/icons/jhangmez.svg`}
          width='28'
          height='28'
          alt='jhangmez_ico'
          style={logo}
        />
        <Img
          src={`<svg
          xmlns='http://www.w3.org/2000/svg'
          width='64'
          height='64'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M8 12v2q0 1.65 1.175 2.825T12 18q1.65 0 2.825-1.175T16 14v-2zm4 4.5q-1.05 0-1.775-.725T9.5 14v-.5h5v.5q0 1.05-.725 1.775T12 16.5M8.5 7q-.95 0-1.687.688T5.775 9.575l1.45.35q.15-.65.5-1.037T8.5 8.5q.425 0 .775.388t.5 1.037l1.45-.35q-.3-1.2-1.037-1.887T8.5 7m7 0q-.95 0-1.687.688t-1.038 1.887l1.45.35q.15-.65.5-1.037T15.5 8.5q.425 0 .775.388t.5 1.037l1.45-.35q-.3-1.2-1.037-1.887T15.5 7M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20'
          />
        </svg>`}
          width='28'
          height='28'
          alt='jhangmez_ico'
          style={logo}
        />
        <Section>
          <Text style={textStyle1}>jhan</Text>
          <Text style={textStyle2}>gmez</Text>
        </Section>
        <h1>Hola {firstName}, este es mi CV.</h1>
      </Container>
    </Body>
  </Html>
)
const textStyle1 = {
  color: '#1A1C19', // text-light-[#1A1C19]
  fontSize: '2xl', // text-2xl
  fontWeight: 'bold', // font-bold
  lineHeight: '44px' // leading-[44px]
}

const textStyle2 = {
  color: '#1A6C30', // text-light-[#1A1C19]
  fontSize: '2xl', // text-2xl
  fontWeight: 'bold', // font-bold
  lineHeight: '44px' // leading-[44px]
}

const main = {
  backgroundColor: '#FCFDF7',
  fontFamily: 'Plus Jakarta Sans'
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  backgroundColor: '#F9FAF4'
}

const logo = {
  margin: '0 auto'
}
