"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaBuilding, FaDoorOpen, FaBed } from "react-icons/fa";

export default function Cards() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-16 bg-gray-50 px-4 rounded-xl my-12">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">خيارات السكن المتنوعة</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          نقدم مجموعة متنوعة من خيارات السكن لتناسب احتياجاتك وميزانيتك
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Apartments Card */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          whileHover={{ y: -10 }}
        >
          <div className="h-56 bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center p-6">
            <FaBuilding className="text-white text-6xl" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">الشقق</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              شقق مفروشة بالكامل مع جميع الخدمات الأساسية متاحة للإيجار
            </p>
            <Link 
              href="/map?type=apartment&view=list" 
              className="text-primary font-bold hover:text-primary-dark flex items-center group"
            >
              استكشف الشقق
              <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
        
        {/* Rooms Card */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          whileHover={{ y: -10 }}
        >
          <div className="h-56 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-6">
            <FaDoorOpen className="text-white text-6xl" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">الغرف</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              غرف خاصة في شقق مشتركة مع مرافق مشتركة ومساحة للدراسة
            </p>
            <Link 
              href="/map?type=room&view=list" 
              className="text-primary font-bold hover:text-primary-dark flex items-center group"
            >
              استكشف الغرف
              <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Beds Card */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          whileHover={{ y: -10 }}
        >
          <div className="h-56 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center p-6">
            <FaBed className="text-white text-6xl" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">سرير في غرفة</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              سرير في غرف مشتركة بأسعار اقتصادية مناسبة للطلاب
            </p>
            <Link 
              href="/map?type=bed&view=list" 
              className="text-primary font-bold hover:text-primary-dark flex items-center group"
            >
              استكشف سرير في غرفة
              <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}