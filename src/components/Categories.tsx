"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "Paneer Specials",
    description: "Rich, creamy, and authentic North Indian delights.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Rice Specials",
    description: "Fragrant basmati rice prepared with exotic spices.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Indo-Chinese",
    description: "The perfect fusion of bold flavors and textures.",
    // Fixed broken image URL with a high-quality fallback
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop",
  }
];

const Categories = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Explore Our Menu</h2>
            <p className="text-brand-gray text-lg">
              Carefully curated categories featuring the best of pure vegetarian cuisine.
            </p>
          </div>
          <Link to="/menu" className="mt-6 md:mt-0 flex items-center text-brand-orange font-semibold group">
            View Full Menu
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to="/menu">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1512058560366-cd2427ffbb62?q=80&w=600&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <span className="text-white font-medium flex items-center">
                      Explore Category <ArrowRight className="ml-2" size={16} />
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">{category.title}</h3>
                <p className="text-brand-gray leading-relaxed">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;