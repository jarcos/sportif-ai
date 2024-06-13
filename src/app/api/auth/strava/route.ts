import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const stravaAuthUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.STRAVA_REDIRECT_URI}&scope=read,activity:read_all,profile:read_all`;
  return NextResponse.redirect(stravaAuthUrl);
}
