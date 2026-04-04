import { FaBookOpen, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaAppStore, FaGooglePlay } from "react-icons/fa"

const links = {
    "Quick Links": ["Home", "Books", "My Borrows", "Contact Us", "About Us", "Blog"],
    "Categories": ["Fiction", "Science", "History", "Technology", "Biography", "Philosophy", "Children", "Comics"],
    "Support": ["FAQs", "Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"],
    "Account": ["Login", "Sign Up", "My Profile", "My Reviews", "Wishlist", "Reading History"],
}

const socials = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaLinkedinIn, label: "LinkedIn" },
    { icon: FaYoutube, label: "YouTube" },
]

const contact = [
    { icon: FaEnvelope, text: "support@booksphere.com" },
    { icon: FaPhoneAlt, text: "+1 (800) 123-4567" },
    { icon: FaMapMarkerAlt, text: "123 Library St, New York, NY 10001" },
    { icon: FaClock, text: "Mon – Sat: 9:00 AM – 8:00 PM" },
]

const stats = [
    { num: "50,000+", label: "Books Available" },
    { num: "120,000+", label: "Active Members" },
    { num: "200+", label: "Categories" },
    { num: "4.9★", label: "User Rating" },
]

const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility", "Sitemap"]

export default function Footer() {
    return (
        <footer className="bg-white border-t-2 border-gray-300">

            <div className="border-b border-gray-300">
                <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map(s => (
                        <div key={s.label} className="text-center">
                            <p className="text-black font-bold text-2xl">{s.num}</p>
                            <p className="text-black text-sm mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

                    <div className="lg:col-span-2">
                        <a href="/" className="flex items-center gap-2 text-black font-bold text-2xl mb-4">
                            <FaBookOpen size={26} />
                            BookSphere
                        </a>
                        <p className="text-black text-sm leading-relaxed max-w-xs mb-5">
                            Your digital library companion. Borrow, explore, and manage thousands of books from anywhere, anytime.
                        </p>
                        <div className="flex gap-3 mb-6">
                            {socials.map(({ icon: Icon, label }) => (
                                <a key={label} href="#" aria-label={label} className="border-2 border-gray-300 text-black p-2 rounded-full">
                                    <Icon size={13} />
                                </a>
                            ))}
                        </div>
                        <p className="text-black text-sm font-bold mb-3">Get the app</p>
                        <div className="flex flex-col gap-2">
                            {[{ icon: FaAppStore, text: "Download on App Store" }, { icon: FaGooglePlay, text: "Get it on Google Play" }].map(({ icon: Icon, text }) => (
                                <a key={text} href="#" className="flex items-center gap-2 border-2 border-gray-300 rounded-full px-4 py-2 text-sm font-semibold text-black">
                                    <Icon size={14} />
                                    {text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h3 className="text-black font-bold text-sm mb-4 border-b border-gray-300 pb-2">{title}</h3>
                            <ul className="flex flex-col gap-3">
                                {items.map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-black text-sm">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t-2 border-b border-gray-300 mt-12 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-black font-bold text-sm mb-4">Contact us</h3>
                        <div className="flex flex-col gap-3">
                            {contact.map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center gap-3 text-sm text-black">
                                    <Icon size={14} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-black font-bold text-sm mb-4">Subscribe to our newsletter</h3>
                        <p className="text-black text-sm mb-4">Get weekly updates on new arrivals, reading tips, and exclusive offers.</p>
                        <div className="flex border-2 border-gray-300 rounded-full overflow-hidden mb-3">
                            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 text-sm text-black outline-none bg-white" />
                            <button className="bg-black text-white text-sm font-semibold px-5 py-2">Subscribe</button>
                        </div>
                        <p className="text-black text-xs">By subscribing you agree to our Privacy Policy. No spam, ever.</p>
                    </div>
                </div>

                <div className="border-t border-b border-gray-300 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-black text-sm">© 2026 BookSphere. All rights reserved. Made with love for readers.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {legal.map(item => (
                            <a key={item} href="#" className="text-black text-xs">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}