import React from 'react'
import HeroSection from '../HeroSection'
import BookSlider from '../BookSlider'
import FeaturedAuthor from '../FeaturedAuthor'

const HomePage = () => {
    return (
        <section>
            <HeroSection />
            <BookSlider />
            <FeaturedAuthor />
        </section>
    )
}

export default HomePage