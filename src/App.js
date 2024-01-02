import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { SWRConfig } from 'swr'

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))

const App = () => {
  return (
    <Router>
      <Navbar />
      <SWRConfig value={{ refreshInterval: 3000 }}>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </SWRConfig>
    </Router>
  )
}

export default App
