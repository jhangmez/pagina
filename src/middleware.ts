import { NextResponse } from 'next/server'
import { auth } from '@src/auth'

export const config = {
  matcher: [
    '/home/:path*',
    '/producto/:path*',
    '/categoria/:path*',
    '/listado/:path*',
    '/settings/:path*'
  ]
}

// export default async function middleware(req: NextRequest) {
//   // Get the pathname of the request (e.g. /, /home)
//   const path = req.nextUrl.pathname

//   // If it's the root path, just render it
//   if (path === '/') {
//     return NextResponse.next()
//   }

//   const session = await auth()

//   if (!session && config) {
//     return NextResponse.redirect(new URL('/login', req.url))
//   } else if (session && path === '/login') {
//     return NextResponse.redirect(new URL('/home', req.url))
//   }
//   return NextResponse.next()
// }

export default auth((req) => {
  // If it's the root path, just render it
  if (req.nextUrl.pathname === '/') {
    return NextResponse.next()
  }

  if (!req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, '/login')
    return Response.redirect(url)
  }
})
