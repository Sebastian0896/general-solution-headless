// app/layout.tsx
import './ui/globals.css';
import { Inter } from 'next/font/google';
import Header from './ui/components/Header';
import Navigation from './ui/components/Navigation';
import Footer from './ui/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nombre Empresa - Soluciones Web Modernas',
  description: 'Ofrecemos soluciones web modernas con WordPress headless y Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}