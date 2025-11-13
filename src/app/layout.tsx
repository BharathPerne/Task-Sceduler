import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Task Scheduler - Drag & Drop Calendar',
    template: '%s | Task Scheduler'
  },
  description: 'Efficient task management with drag-and-drop calendar scheduling. Organize your week visually and boost your productivity.',
  keywords: 'task management, calendar, drag and drop, productivity, scheduling',
  authors: [{ name: 'Task Scheduler Team' }],
  creator: 'Task Scheduler',
  publisher: 'Task Scheduler',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Task Scheduler',
    title: 'Task Scheduler - Drag & Drop Calendar',
    description: 'Efficient task management with drag-and-drop calendar scheduling',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Task Scheduler',
    description: 'Drag and drop task scheduling application',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}