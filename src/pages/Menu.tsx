"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const menuData = [
  {
    category: "Starters",
    items: [
      { name: "Veg Crispy", price: "₹180", description: "Assorted vegetables fried to perfection." },
      { name: "Paneer 65", price: "₹220", description: "Spicy and tangy paneer cubes." }
    ]
  },
  {
    category: "Paneer Specials",
    items: [
      { name: "Paneer Methi Malai Adrak", price: "₹280", description: "Chef's signature creamy paneer with ginger and fenugreek." },
      { name: "Palak Paneer", price: "₹260", description: "Fresh spinach puree with soft cottage cheese." },
      { name: "Paneer Butter Masala", price: "₹270", description: "Classic rich tomato gravy with butter." }
    ]
  },
  {
    category: "Rice Specials",
    items: [
      { name: "Kashmiri Pulao", price: "₹240", description: "Sweet and savory rice with dry fruits." },
      { name: "Veg Pulao", price: "₹200", description: "Fragrant rice with garden fresh vegetables." },
      { name: "Jeera Rice", price: "₹160", description: "Basmati rice tempered with cumin seeds." },
      { name: "Cheese Pulao", price: "₹250", description: "Creamy rice loaded with melted cheese." }
    ]
  },
  {
    category: "Indo-Chinese",
    items: [
      { name: "Mushroom Fried Rice", price: "₹220", description: "Wok-tossed rice with fresh mushrooms and soy." },
      { name: "Veg Hakka Noodles", price: "₹190", description: "Classic street-style stir-fried noodles." },
      { name: "Gobi Manchurian", price: "₹210", description: "Crispy cauliflower in spicy manchurian sauce." }
    ]
  }
];

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-brand-black mb-4">Our Full Menu</h1>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Discover our wide range of pure vegetarian delicacies, from traditional North Indian to modern Indo-Chinese fusion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {menuData.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-offwhite p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-bold text-brand-orange mb-8 border-b border-brand-orange/20 pb-2">
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start group">
                    <div className="flex-1 pr-4">
                      <h4 className="text-lg font-bold text-brand-black group-hover:text-brand-orange transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-brand-gray text-sm">{item.description}</p>
                    </div>
                    <span className="text-brand-black font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;