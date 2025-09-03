// app/servicios/page.tsx
import React from 'react';
import { Metadata } from 'next';
import ServicesSection from '../ui/components/ServicesSection';
import { getSiteInfo } from '../lib/wordpress';
import HeroSection from '../ui/components/HeroSection';
const siteInfo = await getSiteInfo();
export const metadata: Metadata = {
  title: `Servicios - ${siteInfo.name}`,
  description: 'Nuestros servicios de diseño y desarrollo web',
};

export default async function Servicios() {
  return (
    <>
    <HeroSection pageTitle="Servicios"/>
    <ServicesSection />
    </>
  );
}