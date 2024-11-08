import { NextResponse } from 'next/server'

export async function POST(request) {
  const { password } = await request.json()

  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_auth', JSON.stringify({ timestamp: Date.now() }), {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
    })
    return response
  }

  return NextResponse.json({ success: false }, { status: 401 })
}