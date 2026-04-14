import React from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaTag } from 'react-icons/fa'
import { useCart } from '../../Contexts/CartContext'

const productsData = [
  { id: 1, name: 'Infinite Reality Sweatshirt', type: 'Sweatshirts', price: 49.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop', badge: 'Bestseller' },
  { id: 2, name: 'Ancient Story T-Shirt', type: 'T-Shirts', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop', badge: 'New' },
  { id: 3, name: 'Library Tote Bag', type: 'Tote Bags', price: 19.99, image: 'https://images.unsplash.com/photo-1544816153-12ad5d713312?w=800&auto=format&fit=crop' },
  { id: 4, name: 'Golden Hour Bookmark', type: 'Bookmarks', price: 9.99, image: 'https://images.unsplash.com/photo-1544450181-29a8427404dd?w=800&auto=format&fit=crop' },
  { id: 5, name: 'Coffee & Classics Mug', type: 'Mugs', price: 15.99, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fbed20?w=800&auto=format&fit=crop', badge: 'Limited' },
  { id: 6, name: 'Deep Space Hoodie', type: 'Sweatshirts', price: 54.99, image: 'https://images.unsplash.com/photo-1578932750294-f5001e65c19d?w=800&auto=format&fit=crop' },
  { id: 7, name: 'Vintage Reader Tee', type: 'T-Shirts', price: 24.99, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop' },
  { id: 8, name: 'Midnight Canvas Tote', type: 'Tote Bags', price: 22.99, image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=800&auto=format&fit=crop' },
  { id: 9, name: 'Nebula Ceramic Mug', type: 'Mugs', price: 17.99, image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&auto=format&fit=crop' },
  { id: 10, name: 'Cosmic Page Marker', type: 'Bookmarks', price: 7.99, image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&auto=format&fit=crop' },
]

export default function ProductGrid({ activeCategory, activeSort }) {
  const { addToCart } = useCart()

  const filteredProducts = productsData
    .filter(p => activeCategory === 'All' || p.type === activeCategory)
    .sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price
      if (activeSort === 'price-desc') return b.price - a.price
      return 0
    })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((p) => (
            <motion.div 
              key={p.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-gray-50 border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-100 transition-all duration-500">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                
                {p.badge && (
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {p.badge}
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                
                <button 
                  onClick={addToCart}
                  className="absolute bottom-6 right-6 w-14 h-14 bg-white text-gray-900 rounded-2xl flex items-center justify-center shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
                >
                  <FaPlus />
                </button>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-indigo-600 tracking-widest mb-1">
                  <FaTag size={8} /> {p.type}
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-indigo-600 transition-colors truncate">{p.name}</h3>
                <div className="text-2xl font-black text-gray-900 leading-none">
                    €{p.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
