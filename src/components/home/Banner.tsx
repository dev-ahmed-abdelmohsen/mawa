"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaSearch, FaBuilding, FaUniversity } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="relative overflow-hidden my-8 py-20 sm:py-28 rounded-2xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-900 to-indigo-900"></div>
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-sky-500/20 rounded-full -mr-32 -mt-32 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full -ml-48 -mb-48 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      {/* Floating circles */}
      <div className="absolute left-1/4 top-1/4 w-8 h-8 bg-cyan-300/30 rounded-full blur-sm"></div>
      <div className="absolute right-1/4 bottom-1/4 w-6 h-6 bg-purple-300/30 rounded-full blur-sm"></div>
      <div className="absolute left-1/3 bottom-1/3 w-4 h-4 bg-sky-300/30 rounded-full blur-sm"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h5 className="inline-block px-4 py-2 rounded-full bg-sky-600/50 backdrop-blur-sm text-white font-medium text-sm mb-6">
                الحل الأمثل للسكن الطلابي
              </h5>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ابحث عن <span className="text-cyan-300">سكنك المثالي</span> مع مأوي
              </h1>
              <p className="text-xl mb-10 text-sky-100 leading-relaxed max-w-xl">
                نوفر لك أفضل خيارات السكن للطلاب والمغتربين بأسعار مناسبة وخدمات متميزة، قريبة من الجامعات والمراكز التعليمية
              </p>
              
              <div className="flex flex-wrap items-center gap-2 mb-12 text-sm text-white">
                <div className="flex items-center gap-1 bg-blue-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <FaBuilding className="text-cyan-300" /> +500 سكن متاح
                </div>
                <div className="flex items-center gap-1 bg-blue-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <FaUniversity className="text-cyan-300" /> بالقرب من 15 جامعة
                </div>
                <div className="flex items-center gap-1 bg-blue-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <FaSearch className="text-cyan-300" /> بحث متقدم
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/map" 
                    className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-sky-500 text-blue-900 hover:from-cyan-300 hover:to-sky-400 px-8 py-4 rounded-xl font-bold transition-all duration-300 text-center shadow-lg"
                  >
                    <FaSearch className="group-hover:animate-pulse" />
                    ابحث عن سكن
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/about" 
                    className="flex items-center justify-center border-2 border-sky-400 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-400 hover:text-blue-900 transition-all duration-300 text-center"
                  >
                    تعرف علينا
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative illustration */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Building illustration */}
              <svg className="w-full h-auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  d="M120 350H380V130H120V350Z" 
                  fill="rgba(186, 230, 253, 0.1)" 
                  stroke="rgba(125, 211, 252, 0.6)" 
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.rect 
                  x="140" 
                  y="170" 
                  width="60" 
                  height="60" 
                  rx="2" 
                  fill="rgba(125, 211, 252, 0.2)" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1 }}
                />
                <motion.rect 
                  x="220" 
                  y="170" 
                  width="60" 
                  height="60" 
                  rx="2" 
                  fill="rgba(186, 230, 253, 0.3)" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                />
                <motion.rect 
                  x="300" 
                  y="170" 
                  width="60" 
                  height="60" 
                  rx="2" 
                  fill="rgba(125, 211, 252, 0.2)" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 }}
                />
                <motion.rect 
                  x="140" 
                  y="250" 
                  width="60" 
                  height="60" 
                  rx="2" 
                  fill="rgba(186, 230, 253, 0.3)" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.6 }}
                />
                <motion.rect 
                  x="220" 
                  y="250" 
                  width="60" 
                  height="60" 
                  rx="2" 
                  fill="rgba(125, 211, 252, 0.2)" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.8 }}
                />
                <motion.rect 
                  x="300" 
                  y="250" 
                  width="60" 
                  height="60" 
                  rx="2" 
                  fill="rgba(186, 230, 253, 0.3)" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 2 }}
                />
                <motion.path 
                  d="M120 130L250 50L380 130" 
                  stroke="rgba(186, 230, 253, 0.8)" 
                  strokeWidth="2" 
                  fill="rgba(125, 211, 252, 0.1)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
                <motion.rect 
                  x="230" 
                  y="350" 
                  width="40" 
                  height="60" 
                  y2="-60" 
                  fill="rgba(125, 211, 252, 0.3)" 
                  initial={{ height: 0 }}
                  animate={{ height: 60 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                />
              </svg>
              
              {/* Animated pulse around the building */}
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(125, 211, 252, 0)', '0 0 0 20px rgba(125, 211, 252, 0.2)', '0 0 0 0 rgba(125, 211, 252, 0)']
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );  
}