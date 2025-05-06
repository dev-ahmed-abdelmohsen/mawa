"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaMale, FaFemale } from "react-icons/fa";

export default function GenderHousing() {
  return (
    <section className="py-16 my-12">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">سكن الطلبة والطالبات</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          نوفر خيارات سكنية متنوعة ومناسبة لكل من الطلبة والطالبات
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Male Housing */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl group"
        >
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 -mb-32 -mr-32 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 p-10 md:p-14">
            <div className="flex items-center mb-6">
              <FaMale className="text-4xl mr-4" />
              <h3 className="text-3xl font-bold">سكن الطلبة</h3>
            </div>
            <p className="text-xl mb-8 text-blue-100">
              وحدات سكنية آمنة ومريحة مخصصة للطلاب الذكور، مع مرافق مناسبة وخدمات متميزة.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                شقق
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                غرف مشتركة
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                أسرّة
              </span>
            </div>
            <Link 
              href="/map?gender=male" 
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              استكشف سكن الطلبة
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-5 left-10 text-white/20">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10L90 90M90 10L10 90" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>
        
        {/* Female Housing */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-purple-700 text-white shadow-xl group"
        >
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 bg-pink-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 -mb-32 -ml-32 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 p-10 md:p-14">
            <div className="flex items-center mb-6">
              <FaFemale className="text-4xl mr-4" />
              <h3 className="text-3xl font-bold">سكن الطالبات</h3>
            </div>
            <p className="text-xl mb-8 text-pink-100">
              وحدات سكنية آمنة ومريحة مخصصة للطالبات، مع أنظمة أمان متطورة وخصوصية عالية.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                شقق
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                غرف مشتركة
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                أسرّة
              </span>
            </div>
            <Link 
              href="/map?gender=female" 
              className="inline-block bg-white text-pink-700 px-8 py-3 rounded-lg font-bold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              استكشف سكن الطالبات
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-5 right-10 text-white/20">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 