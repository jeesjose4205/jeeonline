import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Jees Jose | Portfolio', description: 'Personal portfolio of Jees Jose.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
