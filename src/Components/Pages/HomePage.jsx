import React from 'react'
import HeroSection from '../HeroSection'
import BookSlider from '../BookSlider'
import FeaturedAuthor from '../FeaturedAuthor'
import NewArrivals from '../NewArrivals'

const HomePage = () => {
    return (
        <section>
            <HeroSection />
            <BookSlider />
            <FeaturedAuthor />
            <NewArrivals />
        </section>
    )
}

export default HomePage