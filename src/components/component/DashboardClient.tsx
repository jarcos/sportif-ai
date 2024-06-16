'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Dashboard from '@/components/component/dashboard';
import Image from 'next/image';

const DashboardClient = () => {
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
  }, [router, searchParams]);  // Include router and searchParams

  return (
    <div>
      {athlete ? (
        <div>
          <h2>Hello, {athlete.firstname} {athlete.lastname}</h2>
          <Image src={athlete.profile} alt="Athlete profile" width={50} height={50} />
          <Dashboard accessToken={accessToken} athlete={athlete} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DashboardClient;
