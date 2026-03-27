import './globals.css';
import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Raymond Westerhout — AI voor Horeca',
  description:
    'AI-implementatie voor restaurants. Menuontwikkeling, kostprijzen en operationele documenten — 10x sneller, foutloos, elk seizoen.',
  openGraph: {
    title: 'Raymond Westerhout — AI voor Horeca',
    description:
      'Stop met eindeloos uitrekenen en uitschrijven. AI doet het zware werk. Jij houdt de regie.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
