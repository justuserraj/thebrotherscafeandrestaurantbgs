"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const InteractiveCTA = () => {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Craft Your Perfect Meal
          </h2>
          <p className="text-brand-gray text-lg mb-10">
            Customize your platter with our wide range of North Indian and Indo-Chinese specialties. 
            Freshly prepared, just the way you like it.
          </p>
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-pill px-12 py-8 text-xl shadow-xl shadow-brand-orange/20">
            Order Now
          </Button>
        </motion.div>

        {/* Floating Ingredients Simulation */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src="https://www.transparentpng.com/download/herb/basil-leaves-png-transparent-images--11.png"
            className="absolute top-1/4 left-10 w-24 opacity-40 blur-[1px]"
            alt=""
          />
          <motion.img
            animate={{ 
              y: [0, 40, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            src="https://www.transparentpng.com/download/chili/red-chili-pepper-png-transparent-images--1.png"
            className="absolute bottom-1/4 right-10 w-32 opacity-30 blur-[2px]"
            alt=""
          />
        </div>
      </div>

      {/* Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] -z-0" />
    </section>
  );
};

export default InteractiveCTA;