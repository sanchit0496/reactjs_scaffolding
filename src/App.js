// src/App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import { SWRConfig } from 'swr'

const App = () => {
  return (
    <Router>
      <Navbar />
      <SWRConfig value={{ refreshInterval: 3000 }}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </SWRConfig>
    </Router>
  )
}

export default App
