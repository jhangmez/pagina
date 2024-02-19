import puppeteer from 'puppeteer'

export async function GET(request: Request, response: Response) {
  let browser
  try {
    // const { searchParams } = new URL(request.url)
    const urlObject = request.url
      ? new URL(request.url)
      : new URL('https://www.jhangmez.xyz')
    const { searchParams } = urlObject

    const hasURL = searchParams.has('url')
    const url = hasURL
      ? searchParams.get('url')?.slice(0, 100)
      : 'https://www.jhangmez.xyz'

    browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto(url as string, { waitUntil: 'networkidle0' })
    const screenshotBuffer = await page.screenshot({ type: 'webp' })
    return new Response(screenshotBuffer, {
      headers: {
        'Content-Type': 'image/webp',
        'Content-Length': screenshotBuffer.length.toString()
      }
    })
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Error al generar la imagen ${e.message}`, {
      status: 500
    })
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}
