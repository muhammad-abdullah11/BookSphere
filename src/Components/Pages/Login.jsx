import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else navigate('/')
    setLoading(false)
  }

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    })
    if (error) setError(error.message)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-md w-full border border-gray-300 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login to BookSphere</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-semibold mb-1 block">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold mb-1 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
            <span className="relative bg-white px-4 text-xs text-gray-500 uppercase">Or continue with</span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 rounded-full py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50"
        >
          <FcGoogle size={20} /> Login with Google
        </button>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-black font-bold underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login
