// pages/index.tsx
import './ui/globals.css'
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluciones Web Modernas con WordPress Headless
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Ofrecemos la facilidad de administración de WordPress combinada con el rendimiento 
            y modernidad de Next.js y Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/servicios" className="btn-primary text-lg px-6 py-3">
              Nuestros Servicios
            </Link>
            <Link href="/contacto" className="btn-secondary text-lg px-6 py-3">
              Contactar Ahora
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rendimiento Optimizado</h3>
              <p className="text-gray-600">
                Next.js ofrece renderizado del lado del servidor y generación de sitios estáticos 
                para una experiencia ultrarrápida.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fácil Administración</h3>
              <p className="text-gray-600">
                WordPress como CMS permite actualizar contenido fácilmente sin necesidad de conocimientos técnicos.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diseño Moderno</h3>
              <p className="text-gray-600">
                Tailwind CSS permite crear interfaces modernas y completamente personalizables 
                con un sistema de diseño coherente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;