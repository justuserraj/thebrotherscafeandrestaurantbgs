"use client";

import React from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold text-white tracking-tighter mb-6 block">
              THE BROTHER'S<span className="text-brand-orange">.</span>
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Begusarai's premier pure vegetarian dining destination. 
              Elegance, authenticity, and flavor in every bite.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/the_brothers_caferestaurant" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-gray text-sm">
              <li><a href="/#menu" className="hover:text-brand-orange transition-colors">Our Menu</a></li>
              <li><a href="/#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
              <li><Link to="/menu" className="hover:text-brand-orange transition-colors">Full Menu</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-brand-gray text-sm">
              <li><Link to="/privacy-policy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-brand-orange transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-brand-orange transition-colors">Cookie Policy</Link></li>
            </ul>
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