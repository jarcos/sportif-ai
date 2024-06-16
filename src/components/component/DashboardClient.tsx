'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '@/components/component/dashboard';

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

const DashboardClient = () => {
  const router = useRouter();
  const [athlete, setAthlete] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = getCookie('access_token');
    const athleteData = getCookie('athlete');

    if (token && athleteData) {
      setAccessToken(token);
      setAthlete(JSON.parse(decodeURIComponent(athleteData)));
    } else {
      router.push('/');
    }
  }, [router]);

  return (
    <div>
      {athlete ? (
        <div>
          <Dashboard accessToken={accessToken} athlete={athlete} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DashboardClient;
