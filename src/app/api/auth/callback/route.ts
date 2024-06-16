import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { kv } from '@vercel/kv';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code found' }, { status: 400 });
  }

  try {
    const response = await axios.post('https://www.strava.com/oauth/token', null, {
      params: {
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
      },
    });

    const { access_token, athlete } = response.data;

    // Store data in Vercel KV
    await kv.set(`access_token:${athlete.id}`, access_token);
    await kv.set(`athlete:${athlete.id}`, JSON.stringify(athlete));

    return NextResponse.redirect(new URL(`/dashboard?athleteId=${athlete.id}`, req.url));
  } catch (error) {
    console.error('Failed to exchange code for token:', error);
    return NextResponse.json({ error: 'Failed to exchange code for token' }, { status: 500 });
  }
}
