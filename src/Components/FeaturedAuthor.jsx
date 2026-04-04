import { FaStar, FaBookOpen, FaUsers, FaAward, FaArrowRight, FaQuoteLeft } from "react-icons/fa"

const author = {
    name: "George Orwell",
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/George_Orwell_press_photo.jpg",
    born: "25 June 1903",
    nationality: "British",
    genre: "Fiction, Political Satire",
    bio: "Eric Arthur Blair, known by his pen name George Orwell, was an English novelist, essayist, journalist and critic. His work is characterised by lucid prose, social criticism, opposition to totalitarianism, and support of democratic socialism. He is best known for the allegorical novella Animal Farm and the dystopian novel 1984.",
    quote: "In a time of deceit, telling the truth is a revolutionary act.",
    stats: [
        { icon: FaBookOpen, label: "Books", val: "12" },
        { icon: FaUsers, label: "Readers", val: "2.4M+" },
        { icon: FaStar, label: "Avg Rating", val: "4.8" },
        { icon: FaAward, label: "Awards", val: "15+" },
    ],
    books: [
        { title: "1984", year: 1949, genre: "Dystopian", rating: 4.9 },
        { title: "Animal Farm", year: 1945, genre: "Political Satire", rating: 4.8 },
        { title: "Homage to Catalonia", year: 1938, genre: "Memoir", rating: 4.6 },
        { title: "Down and Out in Paris", year: 1933, genre: "Autobiography", rating: 4.5 },
    ],
}

export default function FeaturedAuthor() {
    return (
        <section className="border-b border-gray-300 py-14">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex items-center justify-between mb-10">
                    <div>
                        <span className="border border-gray-300 rounded-full px-4 py-1 text-xs font-semibold mb-3 inline-block">author of the week</span>
                        <h2 className="text-xl font-bold">featured author</h2>
                    </div>
                    <a href="#" className="flex items-center gap-1 text-sm font-semibold">
                        all authors <FaArrowRight size={12} />
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-6 items-start">
                            <img
                                src={author.photo}
                                alt={`${author.name} author photo`}
                                className="w-28 h-28 rounded-xl object-cover border border-gray-300 flex-shrink-0"
                            />
                            <div>
                                <h3 className="text-2xl font-bold mb-1">{author.name}</h3>
                                <p className="text-sm mb-1">{author.nationality} · {author.genre}</p>
                                <p className="text-sm">born: {author.born}</p>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded-xl p-5">
                            <FaQuoteLeft size={16} className="mb-3 opacity-40" />
                            <p className="text-sm leading-relaxed italic">{author.quote}</p>
                        </div>

                        <p className="text-sm leading-relaxed">{author.bio}</p>

                        <div className="grid grid-cols-4 gap-4">
                            {author.stats.map(({ icon: Icon, label, val }) => (
                                <div key={label} className="border border-gray-300 rounded-xl p-4 text-center">
                                    <Icon size={16} className="mx-auto mb-2" />
                                    <p className="font-bold text-lg leading-none">{val}</p>
                                    <p className="text-xs mt-1">{label}</p>
                                </div>
                            ))}
                        </div>

                        <button className="border border-gray-300 rounded-full py-3 text-sm font-semibold flex items-center justify-center gap-2">
                            view full profile <FaArrowRight size={12} />
                        </button>
                    </div>

                    <div>
                        <h4 className="font-bold text-base mb-4">books by {author.name}</h4>
                        <div className="flex flex-col gap-4">
                            {author.books.map((b, i) => (
                                <article key={b.title} className="border border-gray-300 rounded-xl p-5 flex items-center gap-5">
                                    <span className="text-4xl font-bold opacity-10 w-10 flex-shrink-0">#{i + 1}</span>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h5 className="font-bold text-base">{b.title}</h5>
                                            <span className="border border-gray-300 rounded-full px-3 py-1 text-xs">{b.genre}</span>
                                        </div>
                                        <p className="text-xs mb-3">published {b.year}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1 text-xs">
                                                <FaStar size={11} />
                                                <span className="font-semibold">{b.rating}</span>
                                            </div>
                                            <button className="border border-gray-300 rounded-full px-4 py-1 text-xs font-semibold">
                                                borrow now
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}