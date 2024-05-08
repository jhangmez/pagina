import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

export async function createCV(name: string, position: string) {
  const pdf = await PDFDocument.create()
  const page = pdf.addPage([550, 750])

  const form = pdf.getForm()

  pdf.setTitle(`CV de ${name}`)
  pdf.setAuthor('Realizado en jhangmez (https://jhangmez.xyz/cv)')
  pdf.setSubject(
    `CV de ${name}, generado en jhangmez (https://jhangmez.xyz/cv)`
  )
  pdf.setKeywords(['cv', 'generator', 'jhan', 'gmez', 'jhangmez'])
  pdf.setProducer('CV GENERATOR 100 🤖')
  pdf.setCreator('jhangmez (https://jhangmez.xyz/cv)')
  pdf.setCreationDate(new Date())
  pdf.setModificationDate(new Date())

  page.drawText('Enter your favorite superhero:', { x: 50, y: 700, size: 11 })

  const superheroField = form.createTextField('favorite.superhero')
  superheroField.setText(name)
  superheroField.addToPage(page, { x: 55, y: 640 })

  page.drawText('Select your favorite rocket:', { x: 50, y: 600, size: 11 })

  page.drawText('Falcon Heavy', { x: 120, y: 560, size: 11 })
  page.drawText('Saturn IV', { x: 120, y: 500, size: 11 })
  page.drawText('Delta IV Heavy', { x: 340, y: 560, size: 11 })
  page.drawText('Space Launch System', { x: 340, y: 500, size: 11 })

  const rocketField = form.createRadioGroup('favorite.rocket')
  rocketField.addOptionToPage('Falcon Heavy', page, { x: 55, y: 540 })
  rocketField.addOptionToPage('Saturn IV', page, { x: 55, y: 480 })
  rocketField.addOptionToPage('Delta IV Heavy', page, { x: 275, y: 540 })
  rocketField.addOptionToPage('Space Launch System', page, { x: 275, y: 480 })
  rocketField.select('Saturn IV')

  page.drawText('Select your favorite gundams:', { x: 50, y: 440, size: 11 })

  page.drawText('Exia', { x: 120, y: 400, size: 11 })
  page.drawText('Kyrios', { x: 120, y: 340, size: 11 })
  page.drawText('Virtue', { x: 340, y: 400, size: 11 })
  page.drawText('Dynames', { x: 340, y: 340, size: 11 })

  const exiaField = form.createCheckBox('gundam.exia')
  const kyriosField = form.createCheckBox('gundam.kyrios')
  const virtueField = form.createCheckBox('gundam.virtue')
  const dynamesField = form.createCheckBox('gundam.dynames')

  exiaField.addToPage(page, { x: 55, y: 380 })
  kyriosField.addToPage(page, { x: 55, y: 320 })
  virtueField.addToPage(page, { x: 275, y: 380 })
  dynamesField.addToPage(page, { x: 275, y: 320 })

  exiaField.check()
  dynamesField.check()

  page.drawText('Select your favorite planet*:', { x: 50, y: 280, size: 11 })

  const planetsField = form.createDropdown('favorite.planet')
  planetsField.addOptions(['Venus', 'Earth', 'Mars', 'Pluto'])
  planetsField.select('Pluto')
  planetsField.addToPage(page, { x: 55, y: 220 })

  page.drawText('Select your favorite person:', { x: 50, y: 180, size: 11 })

  const personField = form.createOptionList('favorite.person')
  personField.addOptions([
    'Julius Caesar',
    'Ada Lovelace',
    'Cleopatra',
    'Aaron Burr',
    'Mark Antony'
  ])
  personField.select('Ada Lovelace')
  personField.addToPage(page, { x: 55, y: 70 })

  page.drawText(`* Pluto should be a planet too!`, { x: 15, y: 15, size: 11 })

  return pdf
}
