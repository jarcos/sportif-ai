'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [athlete, setAthlete] = useState<any>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const accessToken = query.get('access_token');
    const athleteData = query.get('athlete');

    if (accessToken && athleteData) {
      setAthlete(JSON.parse(athleteData));
    }
  }, []);

  const handleLogin = () => {
    router.push('/api/auth/strava');
  };

  return (
    <div>
      <h1>Welcome to Sportif AI</h1>
      {athlete ? (
        <div>
          <h2>Hello, {athlete.firstname} {athlete.lastname}</h2>
          <img src={athlete.profile} alt="Athlete profile" />
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Strava</button>
      )}
    </div>
  );
}
