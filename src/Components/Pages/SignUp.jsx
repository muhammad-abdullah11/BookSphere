import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const { signup } = useAuth()

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)
    try {
      await signup(email, password)
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full p-8 border border-gray-100 shadow-sm rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Create Account</h2>
        <p className="text-gray-500 mb-8 text-center">Join our community of book lovers.</p>
        
        {success ? (
          <div className="text-center">
            <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-100 mb-6">
              <p className="font-bold">Account created successfully!</p>
              <p className="text-sm mt-1">Check your email to confirm your account.</p>
            </div>
            <Link to="/login" className="text-brand-600 font-bold hover:underline">
              Go to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSignUp} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-brand-600 outline-none transition-all"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-brand-600 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            
            {error && <p className="text-red-500 text-xs bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-600 text-white rounded-xl py-3 text-sm font-bold hover:bg-brand-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
        )}

        {!success && (
          <p className="text-center text-sm mt-8 text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-600 font-bold hover:underline">
              Log in
            </Link>
          </p>
        )}
      </div>
    </section>
  )
}

export default SignUp
