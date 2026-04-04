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
            <HowItWorks />
        </section>
    )
}

export default HomePage



import { FaSearch, FaBookOpen, FaReadme, FaArrowRight, FaCheckCircle } from "react-icons/fa"

const steps = [
    {
        step: "01",
        icon: FaSearch,
        title: "search any book",
        desc: "explore our library of 50,000+ titles. search by title, author, ISBN, or browse by genre and mood.",
        points: ["smart search suggestions", "filter by genre & rating", "browse curated collections"],
    },
    {
        step: "02",
        icon: FaBookOpen,
        title: "borrow instantly",
        desc: "found your book? borrow it in one click. no paperwork, no queues. your book is ready in seconds.",
        points: ["instant digital access", "up to 3 books at once", "14-day borrow period"],
    },
    {
        step: "03",
        icon: FaReadme,
        title: "read anywhere",
        desc: "read on any device — mobile, tablet, or desktop. pick up right where you left off, anytime.",
        points: ["read on any device", "offline reading support", "track your progress"],
    },
]

function HowItWorks() {
    return (
        <section className="border-b border-gray-300 py-16">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-14">
                    <span className="border border-gray-300 rounded-full px-4 py-1 text-xs font-semibold inline-block mb-4">how it works</span>
                    <h2 className="text-3xl font-bold mb-3">borrow books in 3 simple steps</h2>
                    <p className="text-sm max-w-md mx-auto leading-relaxed">no membership card, no late fees, no hassle. just search, borrow, and read.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    {steps.map((s, i) => (
                        <div key={s.step} className="relative flex flex-col">
                            <article className="border border-gray-300 rounded-xl p-7 flex-1">
                                <div className="flex items-start justify-between mb-6">
                                    <span className="text-5xl font-bold opacity-10">{s.step}</span>
                                    <s.icon size={22} />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                                <p className="text-sm leading-relaxed mb-5">{s.desc}</p>
                                <ul className="flex flex-col gap-2">
                                    {s.points.map(p => (
                                        <li key={p} className="flex items-center gap-2 text-sm">
                                            <FaCheckCircle size={13} />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                            {i < steps.length - 1 && (
                                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2">
                                    <FaArrowRight size={12} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 border border-gray-300 rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {[
                        { num: "30 sec", label: "average borrow time" },
                        { num: "free", label: "no hidden charges" },
                        { num: "24/7", label: "always available" },
                    ].map(s => (
                        <div key={s.label} className="flex flex-col items-center gap-1">
                            <p className="text-2xl font-bold">{s.num}</p>
                            <p className="text-sm">{s.label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                    <button className="border border-gray-300 rounded-full px-8 py-3 text-sm font-semibold">
                        learn more
                    </button>
                    <button className="bg-black text-white rounded-full px-8 py-3 text-sm font-semibold flex items-center gap-2">
                        get started <FaArrowRight size={12} />
                    </button>
                </div>

            </div>
        </section>
    )
}