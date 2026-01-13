import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import EntranceAnimation from './components/EntranceAnimation'
import Home from './pages/Home'
import Rush from './pages/Rush'
import ProfessionalGrowth from './pages/ProfessionalGrowth'
import ClientServices from './pages/ClientServices'
import Eboard from './pages/Eboard'
import ContactPage from './pages/ContactPage'
import './App.css'

function AppContent() {
  const location = useLocation()
  const [showEntrance, setShowEntrance] = useState(false)
  const [entranceComplete, setEntranceComplete] = useState(false)
  const [fadeInComplete, setFadeInComplete] = useState(false)

  // Intersection Observer for scroll fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe all fade-in-on-scroll elements
    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in-on-scroll:not(.visible)')
      elements.forEach((el) => observer.observe(el))
    }

    // Initial observation
    observeElements()

    // Re-observe when route changes (small delay to allow DOM to update)
    const timeoutId = setTimeout(observeElements, 100)

    return () => {
      clearTimeout(timeoutId)
      const elements = document.querySelectorAll('.fade-in-on-scroll')
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [location.pathname])

  useEffect(() => {
    // Only show entrance on home page
    if (location.pathname === '/') {
      // Check if we should skip entrance (e.g., when clicking logo or Home)
      const skipEntrance = sessionStorage.getItem('skipEntrance')
      const entranceShown = localStorage.getItem('entranceShown')
      
      if (skipEntrance === 'true') {
        // Skip entrance and clear the flag
        sessionStorage.removeItem('skipEntrance')
        setShowEntrance(false)
        setEntranceComplete(true)
        // Start fade-in immediately and mark complete after animation
        setTimeout(() => {
          setFadeInComplete(true)
        }, 1600) // After fade-in animation completes
      } else if (!entranceShown) {
        // Show entrance only on first visit ever
        setShowEntrance(true)
      } else {
        // Already shown before - temporarily showing for testing
        // Remove the line below to restore "show once" behavior
        setShowEntrance(true) // TEMPORARY: Always show for testing
        // setShowEntrance(false) // Uncomment this to restore original behavior
        // setEntranceComplete(true)
        // setTimeout(() => {
        //   setFadeInComplete(true)
        // }, 1600)
      }
    } else {
      setShowEntrance(false)
      setEntranceComplete(true)
      setFadeInComplete(true)
    }
  }, [location.pathname])

  const handleEntranceComplete = () => {
    setShowEntrance(false)
    setEntranceComplete(true)
    if (typeof window !== 'undefined') {
      localStorage.setItem('entranceShown', 'true')
    }
    // Start fade-in and mark complete after animation
    setTimeout(() => {
      setFadeInComplete(true)
    }, 1600) // After fade-in animation completes
  }

  return (
    <>
      {showEntrance && <EntranceAnimation onComplete={handleEntranceComplete} />}
      <div className={`app-content ${entranceComplete ? 'fade-in' : ''}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home fadeInComplete={fadeInComplete} />} />
          <Route path="/rush" element={<Rush />} />
          <Route path="/professional-growth" element={<ProfessionalGrowth />} />
          <Route path="/client-services" element={<ClientServices />} />
          <Route path="/e-board" element={<Eboard />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <AppContent />
      </div>
    </Router>
  )
}

export default App


