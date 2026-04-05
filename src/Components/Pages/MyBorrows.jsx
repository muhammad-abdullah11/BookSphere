import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaBook, FaCalendarAlt, FaTrash } from "react-icons/fa"
import { supabase } from "../../supabase"
import { useNavigate } from "react-router-dom"

export default function MyBorrows() {
    const [user, setUser] = useState(null)
    const [borrowedBooks, setBorrowedBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUserAndBorrows = async () => {
            const { data } = await supabase.auth.getUser()
            if (data?.user) {
                setUser(data.user)
                const { data: profile } = await supabase
                    .from('User')
                    .select('borrowed_books')
                    .eq('id', data.user.id)
                    .single()
                
                if (profile?.borrowed_books) {
                    setBorrowedBooks(profile.borrowed_books)
                }
            } else {
                navigate("/login")
            }
            setLoading(false)
        }
        fetchUserAndBorrows()
    }, [navigate])

    const handleReturn = async (bookId) => {
        const updatedBorrows = borrowedBooks.filter(b => b.id !== bookId)
        
        const { error } = await supabase
            .from('User')
            .update({ borrowed_books: updatedBorrows })
            .eq('id', user.id)

        if (error) {
            alert("Error returning book: " + error.message)
        } else {
            setBorrowedBooks(updatedBorrows)
        }
    }

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaBook /> My Borrowed Books
            </h1>

            {borrowedBooks.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-2xl">
                    <p className="text-gray-500 mb-4">You haven't borrowed any books yet.</p>
                    <button 
                        onClick={() => navigate("/books")}
                        className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold"
                    >
                        Browse Books
                    </button>
                </div>
            ) : (
                <div className="grid gap-4">
                    {borrowedBooks.map((book, i) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-6 p-4 border border-gray-300 rounded-2xl"
                        >
                            <img 
                                src={book.cover} 
                                alt={book.title} 
                                className="w-20 h-28 object-cover rounded-lg shadow-sm"
                                onError={e => { e.target.src = "https://via.placeholder.com/100x140?text=No+Cover" }}
                            />
                            
                            <div className="flex-1">
                                <h3 className="font-bold text-lg mb-1">{book.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <FaCalendarAlt />
                                    <span>Borrowed on: {new Date(book.borrowedAt).toLocaleDateString()}</span>
                                </div>
                            </div>

                            <button 
                                onClick={() => handleReturn(book.id)}
                                className="p-3 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                title="Return Book"
                            >
                                <FaTrash size={18} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    )
}
