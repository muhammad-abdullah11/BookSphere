import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function BookGrid({ books, loading }) {
  if (loading && books.length === 0) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-12 h-12 border-4 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">No books found</h3>
        <p className="text-gray-500">Try adjusting your search query.</p>
      </div>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {books.map((book, i) => {
            const coverId = book.cover_i
            const coverUrl = coverId 
              ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
              : 'https://via.placeholder.com/400x600?text=No+Cover'

            return (
              <motion.div
                key={book.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 8) * 0.05 }}
                className="group"
              >
                <div className="relative aspect-[2/3] rounded-[2rem] overflow-hidden mb-6 shadow-sm border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-brand-100">
                  <img 
                    src={coverUrl} 
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link 
                      to={`/books/${book.key.split('/').pop()}`}
                      className="bg-white text-gray-900 px-8 py-3 rounded-2xl font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                
                <div className="px-2">
                  <h3 className="text-lg font-bold text-gray-900 truncate mb-1 group-hover:text-brand-600 transition-colors uppercase tracking-tight">
                    {book.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-400 mb-1 truncate">{book.author_name?.[0] || 'Unknown Author'}</p>
                  <p className="text-xs font-black text-brand-600 uppercase tracking-widest">{book.first_publish_year}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
