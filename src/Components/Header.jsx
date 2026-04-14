import { useState } from "react"
import { FaBookOpen, FaBars, FaTimes, FaUser, FaShoppingCart } from "react-icons/fa"
import { useAuth } from "../Contexts/AuthContext"
import { useCart } from "../Contexts/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const links = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" },
    { name: "Shop", path: "/shop" },
    { name: "Contact Us", path: "/contact" }
]

export default function Header() {
    const [open, setOpen] = useState(false)
    const { user, logout } = useAuth()
    const { cartCount } = useCart()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            setOpen(false)
            navigate("/")
        } catch (error) {
            console.error("Logout error:", error)
        }
    }

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                <Link to="/" className="flex items-center gap-2 text-brand-600 font-black text-2xl tracking-tighter">
                    <FaBookOpen size={28} />
                    <span>BookSphere</span>
                </Link>

                <ul className="hidden md:flex items-center gap-8">
                    {links.map(l => (
                        <li key={l.path}>
                            <Link to={l.path} className="text-gray-600 text-sm font-semibold hover:text-brand-600 transition-colors">
                                {l.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-6">
                    <div className="relative cursor-pointer text-gray-600 hover:text-brand-600 transition-colors">
                        <FaShoppingCart size={20} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5">
                                <FaUser size={12} className="text-gray-400" />
                                <span className="text-xs font-bold text-gray-700">{user.email.split('@')[0]}</span>
                            </div>
                            <button onClick={handleLogout} className="text-sm font-bold text-gray-500 hover:text-red-600 transition-colors">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link to="/login" className="text-sm font-bold text-gray-600 hover:text-brand-600 px-4 py-2">
                                Login
                            </Link>
                            <Link to="/signup" className="bg-brand-600 text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-brand-700 transition-colors shadow-lg shadow-brand-100">
                                Join
                            </Link>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    <div className="relative text-gray-600">
                        <FaShoppingCart size={20} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <button className="text-gray-600" onClick={() => setOpen(!open)}>
                        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl z-[60] p-8 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-brand-600 font-black text-2xl tracking-tighter flex items-center gap-2">
                                <FaBookOpen size={24} /> BookSphere
                            </span>
                            <button onClick={() => setOpen(false)} className="text-gray-600"><FaTimes size={24} /></button>
                        </div>

                        <ul className="space-y-6 mb-12">
                            {links.map(l => (
                                <li key={l.path}>
                                    <Link to={l.path} onClick={() => setOpen(false)} className="text-gray-900 text-xl font-bold block">
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-8 border-t border-gray-100 space-y-4">
                            {user ? (
                                <>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-gray-100 p-3 rounded-full"><FaUser className="text-gray-400" /></div>
                                        <span className="font-bold text-gray-900">{user.email}</span>
                                    </div>
                                    <button onClick={handleLogout} className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl">Logout</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" onClick={() => setOpen(false)} className="w-full bg-gray-50 text-gray-900 text-center font-bold py-4 rounded-2xl block">Login</Link>
                                    <Link to="/signup" onClick={() => setOpen(false)} className="w-full bg-brand-600 text-white text-center font-bold py-4 rounded-2xl block shadow-lg shadow-brand-100">Sign Up</Link>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {open && <div className="fixed inset-0 bg-black/20 z-[55] md:hidden" onClick={() => setOpen(false)} />}
        </header>
    )
}
