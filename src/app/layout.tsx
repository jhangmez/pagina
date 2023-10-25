import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const myFont = localFont({ src: './PlusJakartaSans-VariableFont_wght.ttf' })

const title = 'Jhangmez'
const description = 'Pagina de jhangmez'

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${myFont.className} selection:bg-light-primary selection:text-light-onPrimary dark:selection:bg-dark-primary dark:selection:text-dark-onPrimary`}
      >
        {children}
      </body>
    </html>
  )
}
