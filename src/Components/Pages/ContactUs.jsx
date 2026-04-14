import { useState } from "react"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", comment: "" })
    const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

    const contacts = [
        { icon: FaEnvelope, label: "email", val: "abdullahworld111@gmail.com" },
        { icon: FaPhoneAlt, label: "phone", val: "+1 (800) 123-4567" },
        { icon: FaMapMarkerAlt, label: "address", val: "123 Toba,Tek,Singh,Faislabad,Pakistan" },
    ]

    return (
        <main className="min-h-screen" style={{ background: "#f5f0e8" }}>
            <div className="max-w-4xl mx-auto px-6 py-20">

                <h1 className="text-5xl mb-12" style={{ fontFamily: "Georgia, serif" }}>contact us</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input name="name" type="text" placeholder="name" value={form.name} onChange={handle} className={`w-full px-5 py-4 rounded-lg border border-gray-300 text-sm outline-none bg-[#faf7f0]`} />
                            <input name="email" type="email" placeholder="email *" value={form.email} onChange={handle} className={`w-full px-5 py-4 rounded-lg border border-gray-300 text-sm outline-none bg-[#faf7f0]`} />
                        </div>
                        <input name="phone" type="tel" placeholder="phone number" value={form.phone} onChange={handle} className={`w-full px-5 py-4 rounded-lg border border-gray-300 text-sm outline-none bg-[#faf7f0]`} />
                        <textarea name="comment" placeholder="comment" value={form.comment} onChange={handle} rows={6} className="w-full px-5 py-4 rounded-lg border border-gray-300 text-sm outline-none resize-none bg-[#faf7f0]" />
                        <div>
                            <button className={`flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold text-white bg-[#8b4f5a]`}>
                                <FaPaperPlane size={13} /> send
                            </button>
                        </div>
                    </div>

                    <aside className="flex flex-col gap-6">
                        <div>
                            <h2 className="font-bold text-base mb-3">get in touch</h2>
                            <p className="text-sm leading-relaxed">have a question or suggestion? we'd love to hear from you.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {contacts.map(({ icon: Icon, label, val }) => (
                                <div key={label} className="flex items-start gap-3">
                                    <div className={`mt-0.5 p-2 rounded-lg border border-gray-300 bg-[#faf7f0]`}>
                                        <Icon size={13} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold mb-0.5">{label}</p>
                                        <p className="text-xs">{val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={`border border-gray-300 rounded-lg p-4 bg-[#faf7f0]`}>
                            <p className="text-xs font-semibold mb-2">opening hours</p>
                            {[["mon – fri", "9am – 6pm"], ["saturday", "10am – 4pm"], ["sunday", "closed"]].map(([day, time]) => (
                                <div key={day} className="flex justify-between text-xs mb-1">
                                    <span>{day}</span><span>{time}</span>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )
}
