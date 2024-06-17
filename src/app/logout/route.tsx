import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  const redirectUrl = new URL('/', req.url);
  const cookieStore = cookies();

  // Prepare headers to delete cookies
  const response = NextResponse.redirect(redirectUrl);

  // Delete cookies by setting them with Max-Age=0
  response.headers.set('Set-Cookie', 'access_token=; Max-Age=0; Path=/; HttpOnly');
  response.headers.append('Set-Cookie', 'athlete=; Max-Age=0; Path=/; HttpOnly');

  return response;
}
