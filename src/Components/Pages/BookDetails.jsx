import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function BookDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/works/${id}.json`)
        const data = await res.json()
        setBook(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!book) return <div className="text-center py-20">Book not found.</div>

  const coverUrl = book.covers?.[0]
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : 'https://via.placeholder.com/600x900?text=No+Cover'

  const description = typeof book.description === 'string' 
    ? book.description 
    : book.description?.value || 'No description available for this book.'

  return (
    <main className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/books')}
          className="flex items-center gap-2 text-brand-600 font-bold mb-12 hover:gap-4 transition-all"
        >
          <FaArrowLeft /> Back to Books
        </button>

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 w-full lg:w-[450px]"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-100 border border-gray-100">
              <img src={coverUrl} alt={book.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-[1.1]">
              {book.title}
            </h1>
            
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="bg-brand-50 p-3 rounded-2xl text-brand-600"><FaCalendarAlt /></div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Published</p>
                  <p className="font-bold text-gray-900">{book.first_publish_date || 'N/A'}</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Description</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                {description}
              </p>
            </div>

            {book.subjects && (
              <div>
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Genres & Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {book.subjects.slice(0, 10).map((s) => (
                    <span key={s} className="bg-gray-50 text-gray-500 border border-gray-100 px-6 py-2 rounded-full text-sm font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
