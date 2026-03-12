"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Showcase from '@/components/Showcase';
import InteractiveCTA from '@/components/InteractiveCTA';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import { MadeWithVizoxStudio } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      <Hero />
      <Categories />
      <Showcase />
      <InteractiveCTA />
      <InfoSection />
      <Footer />
      <MadeWithVizoxStudio />
    </main>
  );
};

export default Index;