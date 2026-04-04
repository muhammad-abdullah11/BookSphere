import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Components/Pages/HomePage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App