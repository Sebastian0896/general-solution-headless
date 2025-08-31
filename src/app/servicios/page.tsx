// app/servicios/page.tsx
import React from 'react';
import { Metadata } from 'next';
import ServicesSection from '../ui/components/ServicesSection';

export const metadata: Metadata = {
  title: 'Servicios - Nombre Empresa',
  description: 'Nuestros servicios de diseño y desarrollo web',
};

/* async function getServices() {
  // En producción, esto vendría de la API de WordPress
  const services = [
    {
      id: 1,
      title: 'Diseño Web Moderno',
      description: 'Creamos sitios web atractivos y funcionales con las últimas tendencias en diseño.',
      icon: '🎨',
      features: ['Diseño responsive', 'Interfaz intuitiva', 'Optimización SEO']
    },
    {
      id: 2,
      title: 'Desarrollo WordPress',
      description: 'Soluciones personalizadas con WordPress como CMS para fácil administración.',
      icon: '💻',
      features: ['Temas personalizados', 'Plugins a medida', 'Headless WordPress']
    },
    {
      id: 3,
      title: 'Tiendas Online',
      description: 'E-commerce completo con WooCommerce y integración de pasarelas de pago.',
      icon: '🛒',
      features: ['Catálogo de productos', 'Carrito de compras', 'Panel de administración']
    },
    {
      id: 4,
      title: 'Mantenimiento Web',
      description: 'Mantenimiento continuo para garantizar el funcionamiento óptimo de tu sitio.',
      icon: '🔧',
      features: ['Actualizaciones', 'Copias de seguridad', 'Soporte técnico']
    }
  ];

  return services;

} */

export default async function Servicios() {
  //const services = await getServices();

  return (
    <>
    <ServicesSection />
    </>
  );
}