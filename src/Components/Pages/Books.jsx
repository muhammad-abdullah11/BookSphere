import React, { useState, useEffect } from 'react'
import BookSearchBar from '../Books/BookSearchBar'
import FilterBar from '../Books/FilterBar'
import BookGrid from '../Books/BookGrid'

export default function BooksPage() {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [activeGenre, setActiveGenre] = useState('All')
  const [activeSort, setActiveSort] = useState('year-desc')

  useEffect(() => {
    const fetchBooks = async () => {
      if (!query && books.length > 0) return
      setLoading(true)
      try {
        const searchTerm = query || 'popular'
        const res = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=24`)
        const data = await res.json()
        setBooks(data.docs || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [query])

  const filteredBooks = books
    .filter(b => activeGenre === 'All' || b.subject?.some(s => s.toLowerCase().includes(activeGenre.toLowerCase())))
    .sort((a, b) => {
      if (activeSort === 'year-desc') return (b.first_publish_year || 0) - (a.first_publish_year || 0)
      if (activeSort === 'year-asc') return (a.first_publish_year || 0) - (b.first_publish_year || 0)
      if (activeSort === 'title-asc') return a.title.localeCompare(b.title)
      if (activeSort === 'title-desc') return b.title.localeCompare(a.title)
      return 0
    })

  return (
    <main className="bg-white min-h-screen">
      <BookSearchBar onSearch={setQuery} loading={loading} />
      <FilterBar 
        activeGenre={activeGenre} 
        setActiveGenre={setActiveGenre}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
      />
      <BookGrid books={filteredBooks} loading={loading} />
    </main>
  )
}
