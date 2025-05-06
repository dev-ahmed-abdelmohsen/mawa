"use client";

import { motion } from "framer-motion";
import { FaLock, FaBolt, FaMapMarkedAlt, FaBook } from "react-icons/fa";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-gray-50 rounded-2xl my-12">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">مميزات السكن مع مأوي</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            نحرص على توفير تجربة سكن مريحة وآمنة لجميع عملائنا
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Feature 1 */}
          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group"
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <FaLock className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">أمان وخصوصية</h3>
            <p className="text-gray-600 leading-relaxed">
              أنظمة أمان متطورة وخصوصية كاملة لجميع المقيمين
            </p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group"
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <FaBolt className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">إنترنت فائق السرعة</h3>
            <p className="text-gray-600 leading-relaxed">
              اتصال إنترنت سريع ومستقر في جميع الوحدات السكنية
            </p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group"
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <FaMapMarkedAlt className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">مواقع متميزة</h3>
            <p className="text-gray-600 leading-relaxed">
              سكن قريب من الجامعات والمراكز التعليمية والخدمية
            </p>
          </motion.div>
          
          {/* Feature 4 */}
          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group"
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <FaBook className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">بيئة دراسية</h3>
            <p className="text-gray-600 leading-relaxed">
              مساحات مخصصة للدراسة وبيئة هادئة تساعد على التركيز
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 