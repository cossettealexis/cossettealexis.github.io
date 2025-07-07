import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cossette Alexis Gabuya - Full Stack Developer',
  description: 'Portfolio website showcasing my projects, skills, and blog posts. Full stack developer specializing in React, Django, and modern web technologies.',
  keywords: ['Full Stack Developer', 'React', 'Django', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Cossette Alexis Gabuya' }],
  creator: 'Cossette Alexis Gabuya',
  openGraph: {
    title: 'Cossette Alexis Gabuya - Full Stack Developer',
    description: 'Portfolio website showcasing my projects, skills, and blog posts.',
    url: 'https://cossettealexis.github.io',
    siteName: 'Cossette Alexis Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cossette Alexis Gabuya Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cossette Alexis Gabuya - Full Stack Developer',
    description: 'Portfolio website showcasing my projects, skills, and blog posts.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
