import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'No code found' });
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

    // Store the access token and athlete information temporarily
    // Redirect to /dashboard with the access token and athlete data
    res.redirect(302, `/dashboard?access_token=${access_token}&athlete=${encodeURIComponent(JSON.stringify(athlete))}`);
  } catch (error) {
    res.status(500).json({ error: 'Failed to exchange code for token' });
  }
}
