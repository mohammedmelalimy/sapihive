import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SapiHive | Coming Soon',
  description: 'SapiHive — Human intelligence, organized.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">{children}</body>
    </html>
  );
}
