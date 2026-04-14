import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <section className="py-24 bg-indigo-600 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Stay in the Loop</h2>
            <p className="text-indigo-100 text-lg font-medium max-w-md">Subscribe to get monthly book recommendations, exclusive shop discounts, and library updates.</p>
          </div>

          <div className="w-full max-w-md relative">
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-[2rem] border border-white/20 flex items-center gap-4"
                >
                  <FaCheckCircle className="text-white text-3xl" />
                  <div>
                    <h4 className="font-bold">Subscription Successful!</h4>
                    <p className="text-sm opacity-80">Welcome to the BookSphere newsletter.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="relative group"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white text-gray-900 rounded-full px-8 py-5 text-lg font-bold outline-none focus:ring-4 focus:ring-indigo-400 transition-all placeholder:text-gray-400"
                    required
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 rounded-full font-bold flex items-center gap-2 transition-all"
                  >
                    Join <FaPaperPlane size={14} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black opacity-[0.05] rounded-full -translate-x-1/2 translate-y-1/2" />
    </section>
  )
}
