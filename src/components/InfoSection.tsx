"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InfoSection = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=The+Brothers+Cafe+Restaurant+Begusarai+Bihar+851101";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
              alt="Restaurant Interior"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-offwhite p-10 rounded-3xl border border-brand-black/5"
          >
            <h2 className="text-3xl font-bold text-brand-black mb-8">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-1">Location</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    3rd Floor, Sri Ratan Tower, Kachahari Rd, <br />
                    Sarvodaya Nagar, Begusarai, Bihar 851101
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-brand-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-1">Operating Hours</h4>
                  <p className="text-brand-gray text-sm">Monday – Sunday</p>
                  <p className="text-brand-black font-medium">10:30 AM – 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-brand-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-1">Contact</h4>
                  <a href="tel:+919939959988" className="text-brand-black font-medium hover:text-brand-orange transition-colors">
                    +91 99399 59988
                  </a>
                  <p className="text-brand-gray text-sm">thebrotherscaferestaurant@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-brand-black/10">
              <Button 
                asChild
                className="w-full bg-brand-black hover:bg-brand-black/90 text-white rounded-pill py-6"
              >
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;