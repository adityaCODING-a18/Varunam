"use client"
import React from 'react';
import { motion } from 'framer-motion';

const BatchCard = ({ title, description, features}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-xl p-6 mb-8 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">✅ Features:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="transition-colors duration-200 hover:text-cyan-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default BatchCard;