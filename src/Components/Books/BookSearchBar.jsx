import React, { useState, useEffect } from 'react'
import { FaSearch, FaSpinner } from 'react-icons/fa'

export default function BookSearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className="bg-white border-b border-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-6 flex items-center text-gray-400 group-focus-within:text-indigo-600 transition-colors">
            {loading ? <FaSpinner className="animate-spin" size={20} /> : <FaSearch size={20} />}
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search millions of books by title, author or ISBN..."
            className="w-full bg-gray-50 border-2 border-transparent rounded-[2rem] pl-16 pr-8 py-6 text-xl font-bold shadow-sm focus:bg-white focus:border-indigo-600 focus:shadow-2xl focus:shadow-indigo-100 transition-all outline-none placeholder:text-gray-300"
          />
        </div>
      </div>
    </div>
  )
}
