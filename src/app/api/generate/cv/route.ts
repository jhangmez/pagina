import { createCV } from '@components/generate/pdf'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')?.slice(0, 50) ?? 'Nombre'
  const ap = searchParams.get('ap')?.slice(0, 50) ?? 'Apellido'
  const am = searchParams.get('am')?.slice(0, 50) ?? 'Apellido'
  const position = searchParams.get('position')?.slice(0, 50) ?? 'Puesto'
  const country = searchParams.get('country')?.slice(0, 50) ?? 'Pais'
  const province = searchParams.get('province')?.slice(0, 50) ?? 'Provincia'
  const link1 = searchParams.get('link1')?.slice(0, 50) ?? 'Link 1'
  const link2 = searchParams.get('link2')?.slice(0, 50) ?? 'Link 2'
  const link3 = searchParams.get('link3')?.slice(0, 50) ?? 'Link 3'
  const link4 = searchParams.get('link4')?.slice(0, 50) ?? 'Link 4'

  if (!name) {
    return Response.json({ error: 'Datos incompletos' }, { status: 400 })
  }

  const pdf = await createCV(
    name,
    ap,
    am,
    position,
    country,
    province,
    link1,
    link2,
    link3,
    link4
  )
  const pdfBytes = await pdf.save()

  const headers = new Headers()
  headers.set('Content-Type', 'application/pdf')
  headers.set('Content-Disposition', `inline; filename="cv-${name}.pdf"`)

  return new Response(pdfBytes, { status: 200, headers })
}
