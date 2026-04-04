import { useRef } from "react"
import { FaChevronLeft, FaChevronRight, FaStar, FaFire } from "react-icons/fa"

const books = [
    { rank: 1, thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", title: "Atomic Habits", author: "James Clear", genre: "Self Help", rating: 4.9, borrows: "12.4k" },
    { rank: 2, thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", title: "Dune", author: "Frank Herbert", genre: "Fiction", rating: 4.8, borrows: "10.1k" },
    { rank: 3, thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", title: "Sapiens", author: "Yuval Noah Harari", genre: "Science", rating: 4.7, borrows: "9.8k" },
    { rank: 4, thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", title: "1984", author: "George Orwell", genre: "Fiction", rating: 4.8, borrows: "9.2k" },
    { rank: 5, thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophy", rating: 4.6, borrows: "8.7k" },
    { rank: 6, thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", title: "Zero to One", author: "Peter Thiel", genre: "Technology", rating: 4.5, borrows: "7.9k" },
    { rank: 7, thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", title: "Cosmos", author: "Carl Sagan", genre: "Science", rating: 4.7, borrows: "7.4k" },
    { rank: 8, thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", title: "Brave New World", author: "Aldous Huxley", genre: "Fiction", rating: 4.5, borrows: "6.8k" },
    { rank: 9, thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", title: "Thinking Fast & Slow", author: "D. Kahneman", genre: "Psychology", rating: 4.6, borrows: "6.2k" },
    { rank: 10, thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", title: "The 48 Laws of Power", author: "Robert Greene", genre: "Biography", rating: 4.4, borrows: "5.9k" },
]

export default function TrendingSlider() {
    const ref = useRef(null)

    const scroll = dir => {
        ref.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" })
    }

    return (
        <section className="border-b border-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <FaFire size={18} />
                        <h2 className="text-xl font-bold">trending this week</h2>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => scroll("left")} className="border border-gray-300 rounded-full p-2">
                            <FaChevronLeft size={14} />
                        </button>
                        <button onClick={() => scroll("right")} className="border border-gray-300 rounded-full p-2">
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </div>

                <div ref={ref} className="flex gap-5 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
                    {books.map(b => (
                        <article key={b.rank} className="min-w-52 border border-gray-300 rounded-xl p-5 flex-shrink-0">
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-5xl font-bold opacity-10">#{b.rank}</span>
                                <span className="border border-gray-300 rounded-full px-3 py-1 text-xs">{b.genre}</span>
                            </div>
                            <img src={b.thumbnail} alt={b.title} className="w-full h-48 object-cover mb-4" />
                            <h3 className="font-bold text-base mb-1 leading-snug">{b.title}</h3>
                            <p className="text-sm mb-4">{b.author}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-xs">
                                    <FaStar size={11} />
                                    <span className="font-semibold">{b.rating}</span>
                                </div>
                                <span className="text-xs">{b.borrows} borrows</span>
                            </div>
                            <button className="w-full border border-gray-300 rounded-full py-2 text-sm font-semibold mt-4">
                                borrow now
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}