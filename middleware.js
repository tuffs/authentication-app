import { NextResponse } from 'next/server'

export function middleware(request) {
  const password = process.env.ADMIN_PASSWORD
  const oneWeek = 7 * 24 * 60 * 60 * 1000

  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next()
  }

  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authCookie = request.cookies.get('admin_auth')
    if (authCookie) {
      const { timestamp } = JSON.parse(authCookie.value)
      if (Date.now() - timestamp < oneWeek) {
        return NextResponse.next()
      }
    }
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}