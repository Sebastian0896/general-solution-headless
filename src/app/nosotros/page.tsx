// pages/nosotros.tsx
import React from 'react';
import Image from 'next/image';

const Nosotros: React.FC = () => {
  // Estos datos vendrían de WordPress en producción
  const team = [
    {
      id: 1,
      name: 'María García',
      position: 'CEO & Fundadora',
      bio: 'Más de 10 años de experiencia en desarrollo web y marketing digital.',
      image: '/worker-1.jpg'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      position: 'Desarrollador Senior',
      bio: 'Especialista en React, Next.js y WordPress headless.',
      image: '/worker-1.jpg'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      position: 'Diseñadora UX/UI',
      bio: 'Apasionada por crear experiencias de usuario excepcionales.',
      image: '/worker-1.jpg'
    },
    {
      id: 4,
      name: 'Javier López',
      position: 'Especialista en SEO',
      bio: 'Ayudando a negocios a mejorar su visibilidad en buscadores.',
      image: '/worker-1.jpg'
    }
  ];

  const stats = [
    { number: '150+', label: 'Proyectos Completados' },
    { number: '50+', label: 'Clientes Satisfechos' },
    { number: '8+', label: 'Años de Experiencia' },
    { number: '15+', label: 'Profesionales' }
  ];

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Somos un equipo apasionado por crear soluciones web innovadoras que impulsen el crecimiento de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative h-96 w-full">
                <Image
                  src="/our-team.jpg"
                  alt="Nuestro equipo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4">
                Fundada en 2015, nuestra empresa nació con la visión de combinar la potencia de WordPress
                con tecnologías modernas para ofrecer experiencias web excepcionales.
              </p>
              <p className="text-gray-700 mb-4">
                Creemos en la simplicidad, el diseño elegante y la funcionalidad robusta. Nuestro enfoque
                se centra en entender las necesidades únicas de cada cliente y ofrecer soluciones a medida
                que generen resultados tangibles.
              </p>
              <p className="text-gray-700">
                Hoy, seguimos innovando con arquitecturas headless que ofrecen lo mejor de ambos mundos:
                la facilidad de uso de WordPress y el rendimiento de frameworks modernos como Next.js.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Conoce a las personas talentosas detrás de nuestros proyectos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                <div className="relative h-60 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;