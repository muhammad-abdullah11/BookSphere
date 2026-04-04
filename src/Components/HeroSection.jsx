import { FaBookOpen, FaSearch, FaStar, FaUsers, FaBook } from "react-icons/fa"

const stats = [
    { icon: FaBook, num: "50,000+", label: "Books" },
    { icon: FaUsers, num: "120,000+", label: "Members" },
    { icon: FaStar, num: "4.9★", label: "Rating" },
]

const tags = ["Fiction", "Science", "History", "Technology", "Biography", "Philosophy", "Comics"]

export default function Hero() {
    return (
        <main>
            <section className="bg-white border-b border-gray-300">
                <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-xs font-semibold text-black mb-6">
                            <FaBookOpen size={12} /> welcome to BookSphere
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-5">
                            discover, borrow & enjoy books anytime
                        </h1>
                        <p className="text-black text-base leading-relaxed mb-8 max-w-md">
                            explore thousands of titles across every genre. your personal digital library is just one click away — free, fast, and always open.
                        </p>

                        <div className="flex border border-gray-300 rounded-full overflow-hidden mb-8 max-w-md">
                            <span className="flex items-center pl-4 text-black">
                                <FaSearch size={14} />
                            </span>
                            <input
                                type="search"
                                placeholder="search by title, author or ISBN..."
                                className="flex-1 px-3 py-3 text-sm text-black outline-none bg-white"
                            />
                            <button className="bg-black text-white text-sm font-semibold px-6 py-3 rounded-full">
                                search
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-10">
                            {tags.map(t => (
                                <span key={t} className="border border-gray-300 rounded-full px-3 py-1 text-xs text-black">{t}</span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-8">
                            {stats.map(({ icon: Icon, num, label }) => (
                                <div key={label} className="flex items-center gap-2">
                                    <Icon size={16} className="text-black" />
                                    <div>
                                        <p className="text-black font-bold text-lg leading-none">{num}</p>
                                        <p className="text-black text-xs mt-1">{label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="border-2 border-gray-300 rounded-2xl overflow-hidden">
                            <img
                                src="https://play-lh.googleusercontent.com/QsMMDVoziY8JfvnhmxMgEnYK6UMxMRWI-BESoJMNeaKSd4HGNtuNQvfePmxyax-2mQ=w3840-h2160-rw"
                                alt="BookSphere digital library app preview"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-5 -left-5 bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm">
                            <p className="text-black text-xs font-semibold mb-1">new arrival</p>
                            <p className="text-black text-sm font-bold">Atomic Habits</p>
                            <p className="text-black text-xs">James Clear</p>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm">
                            <p className="text-black text-xs font-semibold mb-1">currently reading</p>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(s => <FaStar key={s} size={10} className="text-black" />)}
                            </div>
                            <p className="text-black text-xs mt-1">4.9 / 5 rating</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}