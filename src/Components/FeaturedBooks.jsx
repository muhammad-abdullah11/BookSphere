import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const featuredBooks = [
  { id: '1', title: 'The Midnight Library', author: 'Matt Haig', cover: 'https://covers.openlibrary.org/b/id/10909258-L.jpg' },
  { id: '2', title: 'Project Hail Mary', author: 'Andy Weir', cover: 'https://covers.openlibrary.org/b/id/10885403-L.jpg' },
  { id: '3', title: 'The Namesake', author: 'Jhumpa Lahiri', cover: 'https://covers.openlibrary.org/b/id/8225229-L.jpg' },
  { id: '4', title: 'Atomic Habits', author: 'James Clear', cover: 'https://covers.openlibrary.org/b/id/12843460-L.jpg' },
  { id: '5', title: 'Dune', author: 'Frank Herbert', cover: 'https://covers.openlibrary.org/b/id/10626353-L.jpg' },
  { id: '6', title: 'Circe', author: 'Madeline Miller', cover: 'https://covers.openlibrary.org/b/id/10543202-L.jpg' },
]

export default function FeaturedBooks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Featured This Week</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          </div>
          <Link to="/books" className="hidden md:flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
            View All Collection <FaArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {featuredBooks.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-100 transition-all border border-gray-100">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Link 
                    to={`/books/${book.id}`}
                    className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm shadow-xl"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 truncate group-hover:text-indigo-600 transition-colors uppercase tracking-tight">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">{book.author}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
            <Link to="/books" className="flex items-center justify-center gap-2 text-indigo-600 font-bold py-4 border border-indigo-100 rounded-2xl">
                Browse More Books <FaArrowRight size={14} />
            </Link>
        </div>
      </div>
    </section>
  )
}
