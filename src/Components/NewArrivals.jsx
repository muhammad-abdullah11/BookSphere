import { FaArrowRight, FaStar, FaCalendarAlt, FaClock } from "react-icons/fa"

const books = [
    { title: "The Creative Act", thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", author: "Rick Rubin", genre: "Art", rating: 4.8, addedDaysAgo: 1, pages: 448, available: true },
    { title: "Fourth Wing", thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", author: "Rebecca Yarros", genre: "Fantasy", rating: 4.7, addedDaysAgo: 2, pages: 528, available: true },
    { title: "Intermezzo", thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", author: "Sally Rooney", genre: "Fiction", rating: 4.5, addedDaysAgo: 2, pages: 432, available: false },
    { title: "James", thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", author: "Percival Everett", genre: "Historical", rating: 4.6, addedDaysAgo: 3, pages: 320, available: true },
    { title: "The God of the Woods", thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", author: "Liz Moore", genre: "Mystery", rating: 4.7, addedDaysAgo: 4, pages: 480, available: true },
    { title: "All Fours", thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", author: "Miranda July", genre: "Fiction", rating: 4.4, addedDaysAgo: 5, pages: 352, available: true },
    { title: "Orbital", thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", author: "Samantha Harvey", genre: "Science", rating: 4.6, addedDaysAgo: 6, pages: 256, available: false },
    { title: "The Women", thumbnail: "https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw", author: "Kristin Hannah", genre: "Historical", rating: 4.8, addedDaysAgo: 7, pages: 472, available: true },
]

const label = d => d === 1 ? "today" : d === 2 ? "yesterday" : `${d} days ago`

export default function NewArrivals() {
    return (
        <section className="border-b border-gray-300 py-14">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="border border-gray-300 rounded-full px-4 py-1 text-xs font-semibold mb-3 inline-flex items-center gap-2">
                            <FaCalendarAlt size={11} /> this week
                        </span>
                        <h2 className="text-xl font-bold mt-2">new arrivals</h2>
                    </div>
                    <a href="#" className="flex items-center gap-1 text-sm font-semibold">
                        view all <FaArrowRight size={12} />
                    </a>
                </div>

                <p className="text-sm mb-8">{books.length} new books added in the last 7 days</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {books.map(b => (
                        <article key={b.title} className="border border-gray-300 rounded-xl p-5 flex flex-col justify-between gap-4">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="border border-gray-300 rounded-full px-3 py-1 text-xs">{b.genre}</span>
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold border ${b.available ? "border-gray-300" : "border-gray-300 opacity-40"}`}>
                                        {b.available ? "available" : "borrowed"}
                                    </span>
                                </div>
                                <h3 className="font-bold text-base leading-snug mb-1">{b.title}</h3>
                                <p className="text-sm mb-3">{b.author}</p>
                                <img src={b.thumbnail} alt={b.title} className="w-full h-48 object-cover rounded-xl mb-3" />
                                <div className="flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-1">
                                        <FaStar size={11} />
                                        <span className="font-semibold">{b.rating}</span>
                                    </div>
                                    <span>{b.pages} pages</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-1 text-xs mb-3">
                                    <FaClock size={10} />
                                    <span>added {label(b.addedDaysAgo)}</span>
                                </div>
                                <button
                                    disabled={!b.available}
                                    className={`w-full border border-gray-300 rounded-full py-2 text-sm font-semibold ${!b.available ? "opacity-40 cursor-not-allowed" : ""}`}
                                >
                                    {b.available ? "borrow now" : "join waitlist"}
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}