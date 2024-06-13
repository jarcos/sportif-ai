import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { access_token } = req.query;

  if (!access_token) {
    return res.status(400).json({ error: 'Access token is required' });
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
    const runningActivities = response.data.filter(activity => activity.type === 'Run').slice(0, 10);

    res.status(200).json(runningActivities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
}
