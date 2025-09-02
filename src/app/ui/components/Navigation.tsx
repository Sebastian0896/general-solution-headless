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
  /* const normalizeUrl = (url: string): string => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.pathname + parsedUrl.search + parsedUrl.hash;
    } catch (e) {
      return url;
    }
  }; */

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
              <input type={isMobileMenuOpen ? "hidden" : "hidden"} />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-bg-secondary  border-border">
    <div className="container mx-auto px-4">
      <ul className="flex space-x-8 py-3">
        {menuItems.map((item) => (
          <li key={item.ID}>
            <Link 
              href={item.url} 
              className={`font-medium transition-colors ${
                pathname === item.url 
                  ? 'text-primary-600' 
                  : 'text-text-secondary hover:text-primary-600'
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
  );
};

export default Navigation;