// pages/index.tsx
'use client'
//import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//import Head from 'next/head';

/* export const metadata = {
  title: "Baker & Álvarez Business Corporation - Especialistas en Sociedades Offshore",
  description: "Expertos en protección de activos y constitución de sociedades offshore. Soluciones legales y financieras internacionales.",
  keywords: ["offshore", "protección de activos", "sociedades", "planificación patrimonial"],
}; */

// Componente para el slider de Envira Gallery
/* const EnviraGallerySlider = () => {
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL_CLIENT}/wp/v2/envira-gallery}`);
        const data = await response.json();

        if (data.images && data.images.length > 0) {
          setGalleryImages(data.images);
        } else {
          
          setGalleryImages([
            { src: '/colors.jpg', caption: 'Asesoría legal internacional' },
            { src: '/seo.jpg', caption: 'Protección patrimonial' },
            { src: '/worker-1.jpg', caption: 'Optimización fiscal' }
          ]);
        }
      } catch (error) {
        console.error('Error fetching Envira Gallery images:', error);
        setGalleryImages([
          { src: '/colors.jpg', caption: 'Asesoría legal internacional' },
          { src: '/seo.jpg', caption: 'Protección patrimonial' },
          { src: '/worker-1.jpg', caption: 'Optimización fiscal' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  // Efecto para el auto-avance del slider
  useEffect(() => {
    if (galleryImages.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % galleryImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + galleryImages.length) % galleryImages.length);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64 bg-primary-50">Cargando imágenes...</div>;
  }

  return (
    <div className="relative w-full h-96">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="absolute inset-0 bg-primary-900 opacity-100 flex items-center justify-center">
              <div className="text-white absolute right-0 mr-16 bg-black opacity-70 p-32 rounded-lg text-center px-4">
                <h3 className="text-4xl font-bold mb-2">{image.caption}</h3>
                <p className="max-w-md text-[16px] text-amber-500">Soluciones legales y financieras para la protección de su patrimonio</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-700 bg-opacity-70 p-2 rounded-full hover:bg-primary-600 transition-colors text-4xl text-amber-500"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-700 bg-opacity-70 p-2 rounded-full hover:bg-primary-600 transition-colors text-4xl text-amber-500"
      >
        ›
      </button>

      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-amber-500' : 'bg-text-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
 */
const Home: React.FC = () => {
  return (
    <>
      {/* Slider */}
      {/* <section className="pt-16">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary-600">
            Soluciones a Medida para su Patrimonio
          </h2>
          <EnviraGallerySlider />
        </div>
      </section> */}
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-gray-200 to-gray-100 text-primary-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Baker & Álvarez Business Corporation
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expertos en Sociedades Offshore y Protección de Activos con más de 15 años de experiencia internacional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/servicios"
              className="text-white bg-primary-600 border font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="/contacto"
              className="bg-[#BE9A42] text-white border font-semibold px-6 py-3 rounded-lg hover:text-primary-700 transition-colors"
            >
              Consultoría Gratuita
            </Link>
          </div>
        </div>
      </section>

     

      {/* Beneficios */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">
            ¿Por qué confiar en nosotros?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-6 rounded-lg text-center shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#BE9A42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Confidencialidad Absoluta</h3>
              <p className="text-text-secondary">
                Garantizamos la máxima discreción y protección de su información bajo estrictos protocolos de seguridad.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg text-center shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#BE9A42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Estructuras Offshore</h3>
              <p className="text-text-secondary">
                Constitución y gestión de sociedades en las jurisdicciones más favorables para sus necesidades específicas.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg text-center shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#BE9A42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Protección Patrimonial</h3>
              <p className="text-text-secondary">
                Estrategias legales avanzadas para blindar sus activos frente a litigios, divorcios o crisis financieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gradient-to-r from-gray-200 to-gray-100 text-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Proteja su patrimonio con expertos</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Más de 500 clientes confían en nosotros para la gestión de sus estructuras internacionales.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-primary-600 border font-semibold px-8 py-3 rounded-lg hover:text-gray-400"
          >
            Solicitar Asesoría Personalizada
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
