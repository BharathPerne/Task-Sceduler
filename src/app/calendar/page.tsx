import { Metadata } from 'next';
import { CalendarClient } from './CalendarClient';

// Generate OG image URL (you can replace this with actual image generation)
const generateOGImageUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  return `${baseUrl}/api/og-calendar`;
};

export const metadata: Metadata = {
  title: 'Task Scheduler - Calendar View',
  description: 'Drag and drop task scheduling application with weekly calendar view. Organize your tasks efficiently with our interactive calendar.',
  keywords: 'task scheduler, calendar, drag and drop, productivity, time management',
  authors: [{ name: 'Task Scheduler App' }],
  openGraph: {
    title: 'Task Scheduler - Interactive Calendar',
    description: 'Organize your tasks with our drag-and-drop calendar scheduler. View your week at a glance and manage your time effectively.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Task Scheduler',
    images: [
      {
        url: generateOGImageUrl(),
        width: 1200,
        height: 630,
        alt: 'Task Scheduler Calendar View',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Task Scheduler - Calendar',
    description: 'Drag and drop task scheduling with weekly calendar view',
    images: [generateOGImageUrl()],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function CalendarPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CalendarClient />
    </main>
  );
}