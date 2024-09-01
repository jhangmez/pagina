import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

// Función para generar un color basado en una cadena
function stringToColor(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  let color = '#'
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    color += ('00' + value.toString(16)).substr(-2)
  }
  return color
}

// Función para generar colores pastel oscuros complementarios
function getDarkPastelComplementaryColors(baseColor: string): string[] {
  const hex2rgb = (hex: string): [number, number, number] => {
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return [r, g, b]
  }

  const rgb2hsl = (
    r: number,
    g: number,
    b: number
  ): [number, number, number] => {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b)
    let h = 0,
      s = 0,
      l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }
    return [h, s, l]
  }

  const hsl2rgb = (
    h: number,
    s: number,
    l: number
  ): [number, number, number] => {
    let r, g, b

    if (s === 0) {
      r = g = b = l
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
  }

  const darkPastelize = (rgb: [number, number, number]): string => {
    const darkPastel = rgb.map((c) => Math.round(c * 0.7)) // Oscurecer los colores
    return `rgb(${darkPastel[0]}, ${darkPastel[1]}, ${darkPastel[2]})`
  }

  const [r, g, b] = hex2rgb(baseColor)
  const [h, s, l] = rgb2hsl(r, g, b)

  const baseHSL: [number, number, number] = [h, s, 0.5] // Reducir la luminosidad para oscurecer
  const complementaryHSL: [number, number, number] = [(h + 0.5) % 1, s, 0.5]
  const triadic1HSL: [number, number, number] = [(h + 1 / 3) % 1, s, 0.5]
  const triadic2HSL: [number, number, number] = [(h + 2 / 3) % 1, s, 0.5]

  return [
    darkPastelize(hsl2rgb(...baseHSL)),
    darkPastelize(hsl2rgb(...complementaryHSL)),
    darkPastelize(hsl2rgb(...triadic1HSL)),
    darkPastelize(hsl2rgb(...triadic2HSL))
  ]
}

// Función para generar posición basada en una cadena
function stringToPosition(str: string): { x: string; y: string } {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  const x = `${((hash & 0xff) % 70) + 15}%`
  const y = `${(((hash >> 8) & 0xff) % 70) + 15}%`
  return { x, y }
}

export async function GET(request: NextRequest) {
  const fontData = await fetch(
    new URL('/public/PlusJakartaSans-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  try {
    const { searchParams } = new URL(request.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Título por defecto'

    const hasDescription = searchParams.has('description')
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 100)
      : ''

    const hasWidth = searchParams.has('width')
    const width = hasWidth ? Number(searchParams.get('width')) : 1200

    const hasHeight = searchParams.has('height')
    const height = hasHeight ? Number(searchParams.get('height')) : 630

    // Generar colores pastel oscuros basados en el título
    const baseColor = stringToColor(title || '')
    const colors = getDarkPastelComplementaryColors(baseColor)

    // Generar posición del círculo basada en el título
    const position = stringToPosition(title || '')

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'PlusJakartaSans, sans-serif',
            background: colors[0],
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Círculo de fondo con desenfoque */}
          <div
            style={{
              position: 'absolute',
              top: position.y,
              left: position.x,
              width: '70%',
              height: '70%',
              borderRadius: '50%',
              background: `radial-gradient(circle at center, ${colors[1]} 0%, ${colors[2]} 50%, ${colors[3]} 100%)`,
              filter: 'blur(60px)',
              opacity: 0.7
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 40,
              left: 40,
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              zIndex: 1
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M8 12v2q0 1.65 1.175 2.825T12 18q1.65 0 2.825-1.175T16 14v-2zm4 4.5q-1.05 0-1.775-.725T9.5 14v-.5h5v.5q0 1.05-.725 1.775T12 16.5M8.5 7q-.95 0-1.687.688T5.775 9.575l1.45.35q.15-.65.5-1.037T8.5 8.5q.425 0 .775.388t.5 1.037l1.45-.35q-.3-1.2-1.037-1.887T8.5 7m7 0q-.95 0-1.687.688t-1.038 1.887l1.45.35q.15-.65.5-1.037T15.5 8.5q.425 0 .775.388t.5 1.037l1.45-.35q-.3-1.2-1.037-1.887T15.5 7M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20'
              />
            </svg>
            <span style={{ marginLeft: 16, fontSize: 48 }}>jhangmez.xyz</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '20px 50px',
              margin: '0 42px',
              fontSize: 64,
              width: 'auto',
              maxWidth: 700,
              textAlign: 'center',
              color: '#FFFFFF',
              lineHeight: 1.4,
              zIndex: 1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {title}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              left: 40,
              fontSize: 32,
              color: 'rgba(255, 255, 255, 0.8)',
              zIndex: 1,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            {description}
          </div>
        </div>
      ),
      {
        width: Number(width),
        height: Number(height),
        fonts: [
          {
            name: 'PlusJakartaSans',
            data: fontData,
            style: 'normal'
          }
        ]
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Error al generar la imagen`, {
      status: 500
    })
  }
}
