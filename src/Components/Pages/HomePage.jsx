import React from 'react'
import HeroSection from '../HeroSection'
import StatsBar from '../StatsBar'
import FeaturedBooks from '../FeaturedBooks'
import CategoriesSection from '../CategoriesSection'
import HowItWorks from '../HowItWorks'
import TestimonialsSection from '../TestimonialsSection'
import NewsletterSection from '../NewsletterSection'

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <StatsBar />
      <FeaturedBooks />
      <CategoriesSection />
      <HowItWorks />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
