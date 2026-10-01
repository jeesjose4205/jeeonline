import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
});

const description =
  'Jees Jose is a software developer and Computer Science student building reliable, user-friendly full-stack web and mobile applications with React, React Native, Node.js, Python and FastAPI.';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jeesjose.dev'
  ),
  title: {
    default: 'Jees Jose | Software Developer',
    template: '%s | Jees Jose',
  },
  description,
  applicationName: 'Jees Jose Portfolio',
  authors: [{ name: 'Jees Jose' }],
  creator: 'Jees Jose',
  keywords: [
    'Jees Jose',
    'software developer',
    'full stack developer',
    'React developer',
    'React Native developer',
    'Python developer',
    'FastAPI',
    'Node.js',
    'portfolio',
  ],
  openGraph: {
    type: 'website',
    locale: 'en',
    url: '/',
    siteName: 'Jees Jose',
    title: 'Jees Jose | Software Developer',
    description,
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Jees Jose',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jees Jose | Software Developer',
    description,
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f6f8' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
