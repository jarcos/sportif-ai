'use client';

import { useRouter } from 'next/navigation';

export default function Help() {
  const router = useRouter();

  return (
    <div>
      <div className='flex justify-center items-center min-h-full'>
        <div className='max-w-[800px]'>
          <h1 className='text-4xl font-bold text-center text-[#fc5200] my-4'>
            Sportif AI
          </h1>
          <h2 className='text-2xl font-bold text-center text-[#fc5200] my-4'>
            Created by José Arcos - <span className='text-1xl'>IES Trassierra</span>
          </h2>
          <p className='text-left text-gray-700 my-4'>
            Sportif AI is a cutting-edge platform designed to help athletes of all levels enhance their performance and reach their goals. By integrating with Strava, we provide personalized training recommendations, detailed activity analysis, and insights to help you improve.
          </p>
          <p className='text-left text-gray-700 my-4'>
            Our AI-driven technology analyzes your activities and offers customized workouts, ensuring you get the most out of your training. Whether you are preparing for a race or just looking to stay fit, Sportif AI has the tools you need.
          </p>
          <button
            className='max-w-[200px] bg-[#fc5200] text-white border-transparent rounded w-full inline-flex items-center justify-center font-semibold py-2 px-8 text-center transition-colors duration-200 ease-in-out select-none whitespace-nowrap align-middle'
            onClick={() => router.push('/')}
          >
            Go to the Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
