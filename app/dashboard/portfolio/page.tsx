"use client";

import { motion } from "framer-motion";




export default function CaseStudies() {

  return (
    <div className="py-4 px-4">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-green-500">Our Case Studies & Portfolio</h1>
        <p className="mt-2 text-gray-400">
          Discover how we have transformed businesses with AI & Data Science.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <h1>A home</h1>
    
      </div>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <h1>A home 2</h1>
      </div>
    </div>
  );
}
