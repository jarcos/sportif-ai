'use client';

import { Suspense } from 'react';
import DashboardClient from '@/components/component/DashboardClient';

export default function DashboardPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DashboardClient />
    </Suspense>
  );
}
