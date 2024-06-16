import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

interface Activity {
  type: string;
  // Add other relevant properties of the activity if needed
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const access_token = searchParams.get('access_token');

  if (!access_token) {
    return NextResponse.json({ error: 'Access token is required' }, { status: 400 });
  }

  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        per_page: 30,  // Fetch more to ensure enough running activities are retrieved
      },
    });

    // Filter for running activities and limit to 10
    const runningActivities = response.data.filter((activity: Activity) => activity.type === 'Run').slice(0, 10);

    return NextResponse.json(runningActivities, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch activities:', error);
    return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 });
  }
}
