import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Components/Pages/HomePage'
import BooksPage from './Components/Pages/Books'
import ContactPage from './Components/Pages/ContactUs'
import Login from './Components/Pages/Login'
import SignUp from './Components/Pages/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App