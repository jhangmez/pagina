import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  const position = searchParams.get('position')

  if (!name || !position) {
    return NextResponse.json(
      { error: 'Name and position are required' },
      { status: 400 }
    )
  }

  const pdf = await PDFDocument.create()
  const page = pdf.addPage()

  const { width } = page.getSize()
  const font = await pdf.embedFont(StandardFonts.Helvetica)

  page.drawText(`CV for ${name}`, {
    x: width / 2,
    y: page.getHeight() - 100,
    size: 24,
    font
  })

  page.drawText(`Position: ${position}`, {
    x: width / 2,
    y: page.getHeight() - 150,
    size: 18,
    font
  })

  const pdfBytes = await pdf.save()

  const headers = new Headers()
  headers.set('Content-Type', 'application/pdf')
  headers.set('Content-Disposition', 'inline; filename="cv.pdf"')

  return new Response(pdfBytes, { status: 200, headers })
}
