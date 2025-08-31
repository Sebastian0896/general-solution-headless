// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-40 h-40 mr-3">
            <Image
              src="/logo-general-solution.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          {/* <span className="text-xl font-bold text-gray-800">General Solution</span> */}
        </Link>
        
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            Contacto
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;