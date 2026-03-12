"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-brand-black flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="text-brand-orange font-medium tracking-widest uppercase mb-4 block">
            Pure Vegetarian Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            The Art of <br />
            <span className="text-brand-orange">Authentic</span> Flavors
          </h1>
          <p className="text-brand-gray text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Experience the finest vegetarian culinary journey in Begusarai. 
            Where tradition meets modern artistry in every plate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-pill px-10 py-7 text-lg group">
              Explore Menu
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" className="border-brand-gray text-white hover:bg-white/10 rounded-pill px-10 py-7 text-lg">
              Our Story
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop"
              alt="Signature Dish"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative elements for 3D effect */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
      
      {/* Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-black text-white whitespace-nowrap leading-none">
          VEGETARIAN • CUISINE • ARTISTRY
        </h2>
      </div>
    </section>
  );
};

export default Hero;