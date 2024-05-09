import { ImageResponse } from 'next/og'
export const runtime = 'edge'

export async function GET(request: Request) {
  const fontData = await fetch(
    new URL('/public/PlusJakartaSans-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  function letterSize(
    width: number,
    maxSize: number,
    percentage?: number
  ): number {
    const sizeFactor = percentage !== undefined ? percentage : 0.1
    return Math.min(width * sizeFactor, maxSize)
  }
  try {
    const { searchParams } = new URL(request.url)

    const title =
      searchParams.get('title')?.slice(0, 100) ?? 'Título por defecto'

    const hasDescription = searchParams.has('description')
    const description = hasDescription
      ? searchParams.get('description') === 'null'
        ? ''
        : searchParams.get('description')?.slice(0, 100)
      : 'Descripción por defecto'

    const hasWidth = searchParams.has('width')
    const width = hasWidth
      ? Number(searchParams.get('width')?.slice(0, 100) ?? 1200)
      : 1200

    const hasHeight = searchParams.has('height')
    const height = hasHeight
      ? Number(searchParams.get('height')?.slice(0, 100) ?? 630)
      : 630

    const hasColor = searchParams.has('color')
    const color = hasColor
      ? '#' + (searchParams.get('color')?.slice(0, 6) ?? '000000')
      : '#000000'

    const hasBackground = searchParams.has('bg')
    const background = hasBackground
      ? '#' + (searchParams.get('bg')?.slice(0, 6) ?? 'A3F6AA')
      : '#A3F6AA'

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            letterSpacing: '-.02em',
            fontWeight: 700,
            background: background
          }}
        >
          <div
            style={{
              left: 24,
              top: 24,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              color: color
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={letterSize(width, 48, 0.05) + 4}
              height={letterSize(width, 48, 0.05) + 4}
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M8 12v2q0 1.65 1.175 2.825T12 18q1.65 0 2.825-1.175T16 14v-2zm4 4.5q-1.05 0-1.775-.725T9.5 14v-.5h5v.5q0 1.05-.725 1.775T12 16.5M8.5 7q-.95 0-1.687.688T5.775 9.575l1.45.35q.15-.65.5-1.037T8.5 8.5q.425 0 .775.388t.5 1.037l1.45-.35q-.3-1.2-1.037-1.887T8.5 7m7 0q-.95 0-1.687.688t-1.038 1.887l1.45.35q.15-.65.5-1.037T15.5 8.5q.425 0 .775.388t.5 1.037l1.45-.35q-.3-1.2-1.037-1.887T15.5 7M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20'
              />
            </svg>
            <span
              style={{
                marginLeft: 3,
                fontSize: letterSize(width, 48, 0.05),
                color: color
              }}
            >
              jhangmez.xyz
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: letterSize(width, 64),
              maxWidth: 700,
              color: color,
              lineHeight: 1.4
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                left: 42,
                top: 480,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                fontSize: letterSize(width, 32)
              }}
            >
              {description}
            </div>
          )}
        </div>
      ),
      {
        width: Number(width),
        height: Number(height),
        fonts: [
          {
            name: 'Montserrat',
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
