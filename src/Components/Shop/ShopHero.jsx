import React from 'react'
import { motion } from 'framer-motion'

export default function ShopHero() {
  return (
    <section className="bg-indigo-600 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Official Merchandise</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic">Wear Your Love <br /> For Books</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto font-medium">Bookish merch for readers who live between the pages. Quality apparel and accessories for your inner bibliophile.</p>
        </motion.div>
      </div>
    </section>
  )
}
