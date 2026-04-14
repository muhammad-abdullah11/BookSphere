import React, { useState } from 'react'
import ShopHero from '../Shop/ShopHero'
import FilterBar from '../Shop/FilterBar'
import ProductGrid from '../Shop/ProductGrid'

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSort, setActiveSort] = useState('bestseller')

  return (
    <main className="bg-white min-h-screen">
      <ShopHero />
      <FilterBar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
      />
      <ProductGrid 
        activeCategory={activeCategory} 
        activeSort={activeSort}
      />
    </main>
  )
}
