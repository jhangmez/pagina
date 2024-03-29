import puppeteer from 'puppeteer'

export async function GET(request: Request) {
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

    const hasWidth = searchParams.has('width')
    const width = hasWidth ? searchParams.get('width')?.slice(0, 100) : 1280

    const hasHeight = searchParams.has('height')
    const height = hasHeight ? searchParams.get('height')?.slice(0, 100) : 800

    const hasColorScheme = searchParams.has('theme')
    const colorScheme = hasColorScheme
      ? searchParams.get('colorScheme')?.toLowerCase()
      : 'light'

    browser = await puppeteer.launch({
      args: [
        `--no-sandbox`,
        `--headless`,
        `--disable-gpu`,
        `--disable-dev-shm-usage`
      ]
    })
    const page = await browser.newPage()
    await page.setViewport({ width: Number(width), height: Number(height) })
    if (colorScheme === 'dark') {
      await page.emulateMediaFeatures([
        {
          name: 'prefers-color-scheme',
          value: 'dark'
        }
      ])
    } else if (colorScheme === 'light') {
      await page.emulateMediaFeatures([
        {
          name: 'prefers-color-scheme',
          value: 'light'
        }
      ])
    }
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
