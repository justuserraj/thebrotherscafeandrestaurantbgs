"use client";

import React from 'react';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="text-2xl font-bold text-white tracking-tighter mb-6 block">
              THE BROTHER'S<span className="text-brand-orange">.</span>
            </a>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Begusarai's premier pure vegetarian dining destination. 
              Elegance, authenticity, and flavor in every bite.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/the_brothers_caferestaurant" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-gray text-sm">
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Our Menu</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-brand-gray text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-brand-gray text-sm mb-4">Subscribe for updates and special offers.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-pill px-6 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-orange p-2 rounded-full hover:bg-brand-orange/90 transition-colors">
                <ArrowUp size={16} className="rotate-90" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-brand-gray text-xs">
            © {new Date().getFullYear()} The Brother's Cafe & Restaurant. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center text-xs text-brand-gray hover:text-white transition-colors group"
          >
            Back to top
            <ArrowUp size={14} className="ml-2 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;