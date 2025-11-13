'use client';

import dynamic from 'next/dynamic';

// Use a simpler dynamic import approach
const Calendar = dynamic(() => import('@/components/Calendar'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-lg flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        Loading Calendar...
      </div>
    </div>
  ),
});

export function CalendarClient() {
  return <Calendar />;
}