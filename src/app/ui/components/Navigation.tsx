// components/Navigation.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/app/interfaces/menuItem';

const Navigation: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        // Intentar obtener el menú desde la API de WordPress
        const response = await fetch(
          `${process.env.WORDPRESS_API_URL}/wp-api-menus/v2/menu-locations/primary`
        );

        if (response.ok) {
          const menuData = await response.json();
          setMenuItems(menuData.items);
        } else {
          // Fallback si la API de menús no está disponible
          console.warn('No se pudo cargar el menú desde WordPress, usando menú por defecto');
          const defaultMenuItems: MenuItem[] = [
            { ID: 1, title: 'Inicio', url: '/', object_slug: 'home' },
            { ID: 2, title: 'Servicios', url: '/servicios', object_slug: 'services' },
            { ID: 3, title: 'Nosotros', url: '/nosotros', object_slug: 'about' },
            { ID: 4, title: 'Galería de Imágenes', url: '/galeria', object_slug: 'galeria' },
            /* { ID: 4, title: 'Blog', url: '/blog', object_slug: 'blog' }, */
            { ID: 5, title: 'Contacto', url: '/contacto', object_slug: 'contact' },
          ];
          setMenuItems(defaultMenuItems);
        }
      } catch (error) {
        console.error('Error fetching menu items:', error);
        // Fallback en caso de error
        const defaultMenuItems: MenuItem[] = [
          { ID: 1, title: 'Inicio', url: '/', object_slug: 'home' },
          { ID: 2, title: 'Servicios', url: '/servicios', object_slug: 'services' },
          { ID: 3, title: 'Nosotros', url: '/nosotros', object_slug: 'about' },
          { ID: 4, title: 'Galería de Imágenes', url: '/galeria', object_slug: 'galeria' },
          /* { ID: 4, title: 'Blog', url: '/blog', object_slug: 'blog' }, */
          { ID: 5, title: 'Contacto', url: '/contacto', object_slug: 'contact' },
        ];
        setMenuItems(defaultMenuItems);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Cerrar el menú móvil al cambiar de página
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (isLoading) {
    return (
      <nav className="bg-[#201C19] border-t border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="animate-pulse flex space-x-4">
              <div className="hidden md:flex space-x-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-300 rounded w-16"></div>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <div className="h-6 w-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-[#201C19] border-t border-b border-border">
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-8 py-3">
            {menuItems.map((item) => (
              <li key={item.ID}>
                <Link 
                  href={item.url} 
                  className={`font-medium transition-colors hover:text-amber-200 ${
                    pathname === item.url 
                      ? 'text-[#BE9A42]' 
                      : 'text-primary-50 hover:text-primary-hover'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div className="flex justify-end items-center py-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-50 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          {isMobileMenuOpen && (
            <div className="py-4 border-t border-border">
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.ID}>
                    <Link 
                      href={item.url} 
                      className={`block py-2 font-medium transition-colors ${
                        pathname === item.url 
                          ? 'text-[#BE9A42]' 
                          : 'text-primary-50 hover:text-amber-200'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;