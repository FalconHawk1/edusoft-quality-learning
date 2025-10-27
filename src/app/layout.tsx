
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/app/components/header';
import { Toaster } from '@/components/ui/toaster';
import AccessibilityButton from '@/app/components/AccessibilityButton';

export const metadata: Metadata = {
  title: 'EduSoft Quality Learning',
  description: 'Learn and apply software quality concepts with EduSoft. An interactive platform for education and evaluation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')} suppressHydrationWarning={true}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
        <AccessibilityButton />
      </body>
    </html>
  );
}
