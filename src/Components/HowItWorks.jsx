import React from 'react'
import { FaUserPlus, FaSearch, FaBookReader } from 'react-icons/fa'

const steps = [
  {
    icon: FaUserPlus,
    title: 'Sign Up',
    desc: 'Create your free account in seconds to join our global reading community.'
  },
  {
    icon: FaSearch,
    title: 'Browse Books',
    desc: 'Explore millions of titles and exclusive merch in our digital catalog.'
  },
  {
    icon: FaBookReader,
    title: 'Borrow & Read',
    desc: 'Borrow your favorites instantly and dive into your next big adventure.'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-20">How Antigravity Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-1 bg-gray-50 -z-0"></div>

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="flex flex-col items-center relative z-10">
                <div className="w-20 h-20 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center text-indigo-600 mb-8 shadow-xl shadow-indigo-100">
                  <Icon size={30} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight uppercase">{step.title}</h3>
                <p className="text-gray-500 max-w-xs">{step.desc}</p>
                <div className="mt-4 text-xs font-black text-indigo-600/20 text-6xl select-none">0{i+1}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
