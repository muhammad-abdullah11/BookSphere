import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const StatItem = ({ value, label, duration = 2 }) => {
  const [count, setCount] = useState(0)
  
  const targetValue = parseInt(value.replace(/,/g, ''))

  useEffect(() => {
    let start = 0
    const end = targetValue
    if (start === end) return

    let totalMiliseconds = duration * 1000
    let incrementTime = (totalMiliseconds / end)

    let timer = setInterval(() => {
      start += Math.ceil(end / 100)
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [targetValue, duration])

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black mb-1">
        {count.toLocaleString()}{value.includes('+') ? '+' : ''}
      </div>
      <div className="text-xs font-bold uppercase tracking-widest opacity-80">{label}</div>
    </div>
  )
}

export default function StatsBar() {
  const stats = [
    { value: "50,000+", label: "Total Books" },
    { value: "12,000+", label: "Active Members" },
    { value: "45+", label: "Categories" },
    { value: "850+", label: "Borrowed Today" },
  ]

  return (
    <section className="bg-brand-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
