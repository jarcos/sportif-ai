import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  debugger;

  if (!code) {
    return res.status(400).send('No code found');
  }

  try {
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    });

    const { access_token, athlete } = response.data;

    res.redirect(302, `/?access_token=${access_token}&athlete=${encodeURIComponent(JSON.stringify(athlete))}`);
  } catch (error) {
    res.status(500).send('Error exchanging code for token');
  }
}
