// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home' // Updated import path
import About from 'pages/About/About' // Updated import path
import Navbar from 'components/Navbar/Navbar' // Updated import path

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
