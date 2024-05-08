import { createCV } from '@components/generate/pdf'

const shortTitle = 'CV Generator'
const description = 'Genera tu cv'
const jhangmez = ' | jhangmez'
const title = `${shortTitle}${jhangmez}`
const imageUrl = `https://jhangmez.vercel.app/api/og?title=${shortTitle}&description=${description}`

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: 'https://jhangmez.xyz/',
    images: [{ url: imageUrl }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl]
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  const position = searchParams.get('position')

  if (!name || !position) {
    return Response.json({ error: 'Datos incompletos' }, { status: 400 })
  }

  const pdf = await createCV(name, position)
  const pdfBytes = await pdf.save()

  const headers = new Headers()
  headers.set('Content-Type', 'application/pdf')
  headers.set('Content-Disposition', `inline; filename="cv-${name}.pdf"`)

  return new Response(pdfBytes, { status: 200, headers })
}
