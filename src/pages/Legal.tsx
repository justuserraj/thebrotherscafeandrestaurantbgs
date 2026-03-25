"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalPageProps {
  title: string;
  content: React.ReactNode;
}

const LegalPage = ({ title, content }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-brand-orange font-medium mb-8 hover:underline">
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-brand-black mb-10">{title}</h1>
          <div className="prose prose-orange max-w-none text-brand-gray leading-relaxed space-y-6">
            {content}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export const PrivacyPolicy = () => (
  <LegalPage 
    title="Privacy Policy" 
    content={
      <>
        <p>At The Brother's Cafe & Restaurant, we prioritize your privacy. This policy outlines how we collect and use your data.</p>
        <h3 className="text-xl font-bold text-brand-black">1. Information Collection</h3>
        <p>We collect information you provide directly to us when you make a reservation or subscribe to our updates.</p>
        <h3 className="text-xl font-bold text-brand-black">2. Use of Information</h3>
        <p>Your data is used solely to improve our services and manage your dining experience.</p>
      </>
    } 
  />
);

export const TermsOfService = () => (
  <LegalPage 
    title="Terms of Service" 
    content={
      <>
        <p>By using our services, you agree to the following terms and conditions.</p>
        <h3 className="text-xl font-bold text-brand-black">1. Reservations</h3>
        <p>Table bookings are subject to availability and confirmation by the restaurant staff.</p>
        <h3 className="text-xl font-bold text-brand-black">2. Conduct</h3>
        <p>We maintain a family-friendly environment and expect all guests to respect our house rules.</p>
      </>
    } 
  />
);

export const CookiePolicy = () => (
  <LegalPage 
    title="Cookie Policy" 
    content={
      <>
        <p>We use cookies to enhance your browsing experience on our website.</p>
        <h3 className="text-xl font-bold text-brand-black">1. What are Cookies?</h3>
        <p>Cookies are small text files stored on your device to help the site function better.</p>
        <h3 className="text-xl font-bold text-brand-black">2. Managing Cookies</h3>
        <p>You can disable cookies through your browser settings at any time.</p>
      </>
    } 
  />
);