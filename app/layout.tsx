import type { Metadata } from 'next';
import { Bebas_Neue, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';

const display = Bebas_Neue({ weight:'400', variable:'--font-display', subsets:['latin'], display:'swap' });
const body = Plus_Jakarta_Sans({ variable:'--font-body', subsets:['latin'], display:'swap' });

const siteUrl = 'https://rafialarifi.vercel.app'; // ganti setelah deploy

export const metadata: Metadata = {
  title: { default: 'Rafi Al Arifi — Portfolio', template: '%s | Rafi Al Arifi' },
  description:
    'Computer Science student passionate about web development, project management, and building impactful digital solutions.',
  metadataBase: new URL(siteUrl),
  keywords: ['Rafi Al Arifi', 'Web Developer', 'Computer Science', 'Project Management', 'Portfolio'],
  authors: [{ name: 'Rafi Al Arifi' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Rafi Al Arifi — Portfolio',
    description: 'Simple ideas. Serious execution.',
    siteName: 'Rafi Al Arifi Portfolio',
    images: ['/assets/fotosmuray1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafi Al Arifi — Portfolio',
    description: 'Simple ideas. Serious execution.',
    images: ['/assets/fotosmuray1.png'],
  },
  verification: {
    google: "R6RbNJ1nq2j2q6U3ELsk7Gry4Fgd5yDf5jZrMvLaPOE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}