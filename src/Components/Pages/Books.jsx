import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaStar, FaBookOpen, FaArrowRight, FaPlus } from "react-icons/fa"

const books = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", genre: "Fiction", rating: 4.8, year: 2020, available: true, borrows: "11.2k", cover: "https://covers.openlibrary.org/b/id/10909258-L.jpg", story: "between life and death there is a library. nora seed discovers a place where every book represents a life she could have lived." },
    { id: 2, title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", rating: 4.9, year: 2007, available: true, borrows: "10.8k", cover: "https://covers.openlibrary.org/b/id/8375895-L.jpg", story: "kvothe, a legendary wizard, tells the true story of his life from childhood to his years at a university for magic." },
    { id: 3, title: "Project Hail Mary", author: "Andy Weir", genre: "Sci-Fi", rating: 4.9, year: 2021, available: false, borrows: "9.5k", cover: "https://covers.openlibrary.org/b/id/10885403-L.jpg", story: "ryland grace wakes alone on a spaceship with no memory. he soon discovers he is earth's last hope against extinction." },
    { id: 4, title: "The Kite Runner", author: "Khaled Hosseini", genre: "Drama", rating: 4.8, year: 2003, available: true, borrows: "9.1k", cover: "https://covers.openlibrary.org/b/id/8231432-L.jpg", story: "a powerful story of friendship, betrayal, and redemption set against afghanistan's turbulent history." },
    { id: 5, title: "Educated", author: "Tara Westover", genre: "Memoir", rating: 4.7, year: 2018, available: true, borrows: "8.6k", cover: "https://covers.openlibrary.org/b/id/8739161-L.jpg", story: "a memoir about a young woman who leaves her survivalist family and earns a phd from cambridge university." },
    { id: 6, title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophy", rating: 4.6, year: 1988, available: false, borrows: "8.7k", cover: "https://covers.openlibrary.org/b/id/8231654-L.jpg", story: "santiago discovers that the greatest treasure lies within himself as he journeys across the desert chasing his dreams." },
    { id: 7, title: "A Gentleman in Moscow", author: "Amor Towles", genre: "Historical", rating: 4.8, year: 2016, available: true, borrows: "7.3k", cover: "https://covers.openlibrary.org/b/id/8739167-L.jpg", story: "count rostov is sentenced to house arrest in a luxury moscow hotel and discovers life need not be vast to be extraordinary." },
    { id: 8, title: "The Song of Achilles", author: "Madeline Miller", genre: "Mythology", rating: 4.9, year: 2011, available: true, borrows: "6.9k", cover: "https://covers.openlibrary.org/b/id/8739154-L.jpg", story: "a retelling of the iliad through the eyes of patroclus — his love and fate intertwined with the legendary achilles." },
]

const categories = ["all", ...new Set(books.map(b => b.genre))];

function BookCard({ b }) {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.article
            className="border border-gray-300 rounded-2xl overflow-hidden cursor-pointer"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            animate={{ y: hovered ? -10 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <motion.img
                    src={b.cover}
                    alt={`${b.title} cover`}
                    className="w-full h-full object-cover"
                    animate={{ scale: hovered ? 1.07 : 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onError={e => { e.target.src = "https://via.placeholder.com/200x260?text=No+Cover" }}
                />

                <div className="absolute top-3 left-3 z-10">
                    <span className="bg-white border border-gray-300 rounded-full px-3 py-1 text-xs font-semibold">{b.genre}</span>
                </div>

                {!b.available && (
                    <div className="absolute top-3 right-3 z-10">
                        <span className="bg-white border border-gray-300 rounded-full px-3 py-1 text-xs font-semibold">borrowed</span>
                    </div>
                )}

                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            className="absolute inset-0 flex flex-col justify-end p-5"
                            style={{ background: "rgba(255,255,255,0.93)" }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <motion.p
                                className="text-xs leading-relaxed mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08, duration: 0.3 }}
                            >
                                {b.story}
                            </motion.p>

                            <motion.div
                                className="flex gap-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15, duration: 0.3 }}
                            >
                                <button
                                    disabled={!b.available}
                                    className={`flex-1 bg-black text-white rounded-full py-2 text-xs font-semibold flex items-center justify-center gap-1 ${!b.available ? "opacity-40 cursor-not-allowed" : ""}`}
                                >
                                    {b.available ? "borrow now" : "waitlist"} <FaArrowRight size={10} />
                                </button>
                                <button className="flex-1 border border-gray-300 rounded-full py-2 text-xs font-semibold flex items-center justify-center gap-1">
                                    read more <FaPlus size={10} />
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="p-4">
                <h2 className="font-bold text-sm leading-snug mb-1 truncate">{b.title}</h2>
                <p className="text-xs mb-3 truncate">{b.author} · {b.year}</p>
                <motion.div
                    className="flex items-center justify-between"
                    animate={{ opacity: hovered ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="flex items-center gap-1 text-xs">
                        <FaStar size={11} />
                        <span className="font-semibold">{b.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                        <FaBookOpen size={11} />
                        <span>{b.borrows}</span>
                    </div>
                </motion.div>
            </div>
        </motion.article>
    )
}

export default function BooksPage() {

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortBy, setSortBy] = useState(["ascending", "descending", "rating", "borrows", "year"]);
    const [currentSort, setCurrentSort] = useState("year");

    const filteredBooks = selectedCategory === "all"
        ? books
        : books.filter(b => b.genre === selectedCategory);

    filteredBooks.sort((a, b) => {
        if (currentSort === "year") {
            return b.year - a.year;
        } else if (currentSort === "rating") {
            return b.rating - a.rating;
        } else if (currentSort === "borrows") {
            return b.borrows - a.borrows;
        } else if (currentSort === "ascending") {
            return a.title.localeCompare(b.title);
        } else if (currentSort === "descending") {
            return b.title.localeCompare(a.title);
        }
    });

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-wrap gap-2 mb-8">
                <h2 className="text-xs font-semibold">Categories:</h2>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold capitalize border ${cat === selectedCategory
                            ? "bg-black text-white border-black"
                            : "border-gray-300 hover:border-black hover:text-black"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="flex gap-2 mb-8">
                <h2 className="text-xs font-semibold">Sort by:</h2>
                {sortBy?.map(sort => (
                    <button
                        key={sort}
                        onClick={() => setCurrentSort(sort)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold capitalize border ${sort === currentSort
                            ? "bg-black text-white border-black"
                            : "border-gray-300 hover:border-black hover:text-black"
                            }`}
                    >
                        {sort}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredBooks.map((b, i) => (
                    <motion.div
                        key={b.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                    >
                        <BookCard b={b} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}