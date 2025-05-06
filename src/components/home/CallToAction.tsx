"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-16 my-12 rounded-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-indigo-800"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-96 h-96 -mt-24 -mr-24 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 -mb-24 -ml-24 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <svg className="absolute bottom-0 left-0 text-white/5 w-32 h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="6"/>
          <circle cx="75" cy="75" r="20" stroke="currentColor" strokeWidth="6"/>
        </svg>
        
        <svg className="absolute top-0 right-0 text-white/5 w-32 h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10L90 90M90 10L10 90" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">ابدأ رحلتك مع مأوي اليوم</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            سجل الآن واحصل على تجربة سكن مميزة تناسب احتياجاتك وميزانيتك
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link 
              href="/register" 
              className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-primary-lighter hover:text-white transition-all duration-300 shadow-lg"
            >
              سجل الآن
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 