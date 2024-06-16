import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { kv } from '@vercel/kv';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const athleteId = searchParams.get('athleteId');

  if (!athleteId) {
    return NextResponse.json({ error: 'Athlete ID is required' }, { status: 400 });
  }

  const accessToken = await kv.get<string>(`access_token:${athleteId}`);
  if (!accessToken) {
    return NextResponse.json({ error: 'Access token not found' }, { status: 404 });
  }

  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch activities:', error);
    return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 });
  }
}
