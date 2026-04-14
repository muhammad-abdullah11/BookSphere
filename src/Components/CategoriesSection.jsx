import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGhost, FaAtom, FaScroll, FaUserAstronaut, FaPalette, FaGlobeAmericas, FaChessKnight } from 'react-icons/fa'

const genres = [
  { name: 'Fiction', icon: FaChessKnight },
  { name: 'Science', icon: FaAtom },
  { name: 'History', icon: FaScroll },
  { name: 'Fantasy', icon: FaGhost },
  { name: 'Biography', icon: FaUserAstronaut },
  { name: 'Non-Fiction', icon: FaGlobeAmericas },
  { name: 'Art', icon: FaPalette },
]

export default function CategoriesSection() {
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-4">Browse by Genre</h2>
        <p className="text-gray-500 mb-16 max-w-xl mx-auto">Discover your next favorite read by exploring our diverse range of categories tailored for every mind.</p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {genres.map((genre, i) => {
            const Icon = genre.icon
            return (
              <motion.button
                key={genre.name}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/books?category=${genre.name}`)}
                className="group flex flex-col items-center gap-4 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-100 hover:border-brand-100 transition-all min-w-[160px]"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <span className="font-extrabold text-gray-900 tracking-tight">{genre.name}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
