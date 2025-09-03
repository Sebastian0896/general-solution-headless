// app/layout.tsx
import './globals.css'; // Ajustado para la ubicación real en Next.js
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './ui/components/Header';
import Navigation from './ui/components/Navigation';
import Footer from './ui/components/Footer';
import ThemeSelector from './ui/components/ThemeSelector';
import { getSiteInfo } from './lib/wordpress';
import WhatsAppButton from './ui/components/WhatsappButton';

import Script from 'next/script';
import ChatwayDesktop from './ui/components/ChatWay';
const inter = Inter({ subsets: ['latin'] });
const siteInfo = await getSiteInfo();
export const metadata = {
  title: `${siteInfo.name}`,
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
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="container mx-auto px-4 py-2">
              <ThemeSelector />
            </div>
            <Navigation />
            <main className="flex-grow">
            <WhatsAppButton phone='50769177402' message='Hola, gracias por contactarnos.'/>
              {children}
            </main>
            <ChatwayDesktop />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}