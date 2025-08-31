// components/Navigation.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  ID: number;
  title: string;
  url: string;
  object_slug: string;
  classes?: string[];
  menu_item_parent?: string;
}

const Navigation: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        // Intentar obtener el menú desde la API de WordPress
        // Nota: Necesitas el plugin "WP REST API Menus" instalado en WordPress
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
            { ID: 4, title: 'Blog', url: '/blog', object_slug: 'blog' },
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
          { ID: 4, title: 'Blog', url: '/blog', object_slug: 'blog' },
          { ID: 5, title: 'Contacto', url: '/contacto', object_slug: 'contact' },
        ];
        setMenuItems(defaultMenuItems);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Función para normalizar URLs (eliminar el dominio si existe)
  const normalizeUrl = (url: string): string => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.pathname + parsedUrl.search + parsedUrl.hash;
    } catch (e) {
      return url;
    }
  };

  // Cerrar el menú móvil al cambiar de página
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (isLoading) {
    return (
      <nav className="bg-gray-100 border-t border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-gray-100 border-t border-b border-gray-200 relative">
      <div className="container mx-auto px-4">
        {/* Menú para desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-8 py-3">
            {menuItems.map((item) => {
              const normalizedUrl = normalizeUrl(item.url);
              const isActive = pathname === normalizedUrl;
              
              return (
                <li key={item.ID}>
                  <Link 
                    href={normalizedUrl} 
                    className={`font-medium transition-colors relative py-2 ${
                      isActive 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.title}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Menú para móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-between w-full py-3 text-gray-700 focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span>Menú</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menú desplegable para móvil */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-10">
              <ul className="py-2">
                {menuItems.map((item) => {
                  const normalizedUrl = normalizeUrl(item.url);
                  const isActive = pathname === normalizedUrl;
                  
                  return (
                    <li key={item.ID}>
                      <Link 
                        href={normalizedUrl} 
                        className={`block px-4 py-3 transition-colors ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600' 
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;