import React from 'react'

const genres = ['All', 'Fiction', 'Fantasy', 'History', 'Science', 'Mystery', 'Romance', 'Horror']
const sortOptions = [
  { label: 'Year (Newest)', value: 'year-desc' },
  { label: 'Year (Oldest)', value: 'year-asc' },
  { label: 'Title (A-Z)', value: 'title-asc' },
  { label: 'Title (Z-A)', value: 'title-desc' },
]

export default function FilterBar({ activeGenre, setActiveGenre, activeSort, setActiveSort }) {
  return (
    <div className="bg-white border-b border-gray-100 py-6 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeGenre === genre
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-xs font-black uppercase text-gray-400 tracking-widest">Sort by:</span>
          <select 
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value)}
            className="bg-gray-50 border border-transparent rounded-xl px-4 py-2.5 text-sm font-bold text-gray-900 outline-none focus:border-indigo-600 transition-all cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
