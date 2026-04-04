import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    })
    if (authError) {
      setError(authError.message)
    } else {
      if (authData?.user) {
        await supabase
          .from('User')
          .insert([{ id: authData.user.id, fullName: formData.fullName, gmail: formData.email, role: 'user', avatar_url: '' }])
        navigate('/')
      }
    }
    setLoading(false)
  }

  const handleGoogleSignUp = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    })
    if (error) setError(error.message)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-md w-full border border-gray-300 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-semibold mb-1 block">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold mb-1 block">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold mb-1 block">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white rounded-full py-3 text-sm font-semibold mt-2 hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
            <span className="relative bg-white px-4 text-xs text-gray-500 uppercase">Or continue with</span>
        </div>

        <button
          onClick={handleGoogleSignUp}
          className="w-full border border-gray-300 rounded-full py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50"
        >
          <FcGoogle size={20} /> Sign up with Google
        </button>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-black font-bold underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  )
}

export default SignUp
