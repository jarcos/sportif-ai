'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/api/auth/strava');
  };

  return (
    <div>
      <div className='flex justify-center items-center min-h-full'>
        <div className='w-80'>
          <h1 className='text-4xl font-bold text-center text-[#fc5200] my-4'>
              Welcome to Sportif AI
          </h1>
          <button className='bg-[#fc5200] text-white border-transparent rounded w-full inline-flex items-center justify-center font-semibold py-2 px-8 text-center transition-colors duration-200 ease-in-out select-none whitespace-nowrap align-middle' onClick={handleLogin}>Login with Strava</button>
        </div>
      </div>
    </div>
  );
}
