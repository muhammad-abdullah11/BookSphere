import { useState, useEffect } from "react"
import { FaBookOpen, FaBars, FaTimes, FaUser } from "react-icons/fa"
import { supabase } from "../supabase"
import { Link, useNavigate } from "react-router-dom"

const links = [{ name: "Home", path: "/" }, { name: "Books", path: "/books" }, { name: "Contact Us", path: "/contact" }]

export default function Header() {
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser()
            setUser(data?.user)
            if (data?.user) {
                const { data: profileData } = await supabase.from('User').select('*').eq('id', data.user.id).single()
                if (profileData) {
                    setProfile(profileData)
                } else {
                    const newProfile = {
                        id: data.user.id,
                        fullName: data.user.user_metadata?.full_name || data.user.email.split('@')[0],
                        gmail: data.user.email,
                        role: 'user',
                        avatar_url: data.user.user_metadata?.avatar_url || ''
                    }
                    await supabase.from('User').insert([newProfile])
                    setProfile(newProfile)
                }
            }
        }
        fetchUser()

        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_OUT') {
                setUser(null)
                setProfile(null)
            } else if (session?.user) {
                const currentUser = session.user
                setUser(currentUser)
                const { data: profileData } = await supabase.from('User').select('*').eq('id', currentUser.id).single()
                if (profileData) {
                    setProfile(profileData)
                } else {
                    const newProfile = {
                        id: currentUser.id,
                        fullName: currentUser.user_metadata?.full_name || currentUser.email.split('@')[0],
                        gmail: currentUser.email,
                        role: 'user',
                        avatar_url: currentUser.user_metadata?.avatar_url || ''
                    }
                    await supabase.from('User').insert([newProfile])
                    setProfile(newProfile)
                }
            }
        })

        return () => authListener.subscription.unsubscribe()
    }, [])

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut()
            setUser(null)
            setProfile(null)
            setOpen(false)
            navigate("/")
        } catch (error) {
            console.error("Logout error:", error)
        }
    }

    return (
        <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                <Link to="/" className="flex items-center gap-2 text-black font-bold text-2xl">
                    <FaBookOpen size={28} />
                    BookSphere
                </Link>

                <ul className="hidden md:flex items-center gap-10">
                    {links.map(l => (
                        <li key={l.path}>
                            <Link to={l.path} className="text-black text-sm font-semibold border-b-2 border-transparent pb-1 hover:border-black transition-all">
                                {l.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-3">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1">
                                {profile?.avatar_url ? (
                                    <img src={profile.avatar_url} alt={profile.fullName} className="w-6 h-6 rounded-full" />
                                ) : (
                                    <FaUser size={14} />
                                )}
                                <span className="text-xs font-semibold">{profile?.fullName || user.email}</span>
                            </div>
                            <button onClick={handleLogout} className="bg-black text-white text-sm font-semibold px-6 py-2 rounded-full">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="border-2 border-black text-black text-sm font-semibold px-6 py-2 rounded-full">
                                Login
                            </Link>
                            <Link to="/signup" className="bg-black text-white text-sm font-semibold px-6 py-2 rounded-full">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>

                <button className="md:hidden text-black p-2 border-2 border-black rounded-md" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes size={18} /> : <FaBars size={18} />}
                </button>
            </nav>

            {open && (
                <div className="md:hidden bg-white border-t-2 border-black px-6 py-6">
                    <ul className="flex flex-col gap-5">
                        {links.map(l => (
                            <li key={l.path} className="border-b border-black pb-3">
                                <Link to={l.path} onClick={() => setOpen(false)} className="text-black text-base font-semibold block">
                                    {l.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-3 mt-6">
                        {user ? (
                            <>
                                <button onClick={handleLogout} className="bg-black text-white text-sm font-semibold px-6 py-2 rounded-full w-full">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" onClick={() => setOpen(false)} className="border-2 border-black text-black text-sm font-semibold px-6 py-2 rounded-full w-full text-center">
                                    Login
                                </Link>
                                <Link to="/signup" onClick={() => setOpen(false)} className="bg-black text-white text-sm font-semibold px-6 py-2 rounded-full w-full text-center">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}
