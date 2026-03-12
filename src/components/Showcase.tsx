"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Star, Award, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="text-brand-orange" />,
    title: "100% Pure Vegetarian",
    description: "A strictly vegetarian kitchen ensuring authentic purity in every dish."
  },
  {
    icon: <Star className="text-brand-orange" />,
    title: "Chef's Signature",
    description: "Exclusive recipes like Paneer Methi Malai Adrak crafted by experts."
  },
  {
    icon: <Award className="text-brand-orange" />,
    title: "Premium Quality",
    description: "Sourcing only the freshest ingredients for a superior dining experience."
  },
  {
    icon: <ShieldCheck className="text-brand-orange" />,
    title: "Hygienic Preparation",
    description: "Maintaining the highest standards of cleanliness and food safety."
  }
];

const Showcase = () => {
  return (
    <section id="about" className="py-24 bg-brand-offwhite overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-brand-black mb-8">The Signature Experience</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-brand-black mb-2">{feature.title}</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop"
                alt="Signature Dish Showcase"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-brand-orange/20 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;