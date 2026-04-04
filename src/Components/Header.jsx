import { useState } from "react"
import { FaBookOpen, FaBars, FaTimes } from "react-icons/fa"

const links = ["Home", "Books", "My Borrows", "Contact Us"]

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-white border-b border-b-gray-300 border-black sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                <a href="/" className="flex items-center gap-2 text-black font-bold text-2xl">
                    <FaBookOpen size={28} />
                    BookSphere
                </a>

                <ul className="hidden md:flex items-center gap-10">
                    {links.map(l => (
                        <li key={l}>
                            <a href="#" className="text-black text-sm font-semibold border-b-2 border-transparent pb-1">{l}</a>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-3">
                    <button className="border-2 border-black text-black text-sm font-semibold px-6 py-2 rounded-full">
                        Login
                    </button>
                    <button className="bg-black text-white text-sm font-semibold px-6 py-2 rounded-full">
                        Sign Up
                    </button>
                </div>

                <button className="md:hidden text-black p-2 border-2 border-black rounded-md" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes size={18} /> : <FaBars size={18} />}
                </button>
            </nav>

            {open && (
                <div className="md:hidden bg-white border-t-2 border-black px-6 py-6">
                    <ul className="flex flex-col gap-5">
                        {links.map(l => (
                            <li key={l} className="border-b border-black pb-3">
                                <a href="#" className="text-black text-base font-semibold">{l}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-3 mt-6">
                        <button className="border-2 border-black text-black text-sm font-semibold px-6 py-2 rounded-full w-full">
                            Login
                        </button>
                        <button className="bg-black text-white text-sm font-semibold px-6 py-2 rounded-full w-full">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}