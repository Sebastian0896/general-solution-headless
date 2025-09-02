// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { getSiteInfo } from '@/app/lib/wordpress';

const siteInfo = await getSiteInfo();


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteInfo.name}</h3>
            <p className="text-gray-300">
              Ofrecemos soluciones modernas y escalables para tu presencia online
              con la facilidad de administración de WordPress.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <address className="not-italic text-gray-300">
              <p>123 Calle Principal</p>
              <p>Ciudad, CP 12345</p>
              <p>Tel: (123) 456-7890</p>
              <p>Email: info@empresa.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nombre Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;