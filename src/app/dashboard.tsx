'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Dashboard from '@/components/component/dashboard';

export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [athlete, setAthlete] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = searchParams.get('access_token');
    const athleteData = searchParams.get('athlete');

    if (token && athleteData) {
      setAccessToken(token);
      setAthlete(JSON.parse(athleteData));
    } else {
      router.push('/');
    }
  }, []);

  return (
    <div>
      {athlete ? (
        <div>
          <h2>Hello, {athlete.firstname} {athlete.lastname}</h2>
          <img src={athlete.profile} alt="Athlete profile" />
          <Dashboard accessToken={accessToken} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
