import { createCV } from '@components/generate/pdf'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  const position = searchParams.get('position')
  const country = searchParams.get('country')
  const link1 = searchParams.get('link1')
  const link2 = searchParams.get('link2')
  const link3 = searchParams.get('link3')
  const link4 = searchParams.get('link4')

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
