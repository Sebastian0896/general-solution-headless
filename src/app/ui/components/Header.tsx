// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getSiteInfo } from '@/app/lib/wordpress';

//const siteInfo = await getSiteInfo();
const Header: React.FC = () => {
  return (
    <header className="bg-bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-32 h-32 mr-3">
            <Image
              src="/logo-general-solution.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
         {/*  <span className="text-xl font-bold text-text-primary">{siteInfo.name}</span> */}
        </Link>
        
        <div className="flex items-center space-x-4">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors">
            Contacto
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;