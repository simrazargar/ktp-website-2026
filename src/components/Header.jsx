import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  const handleSkipEntrance = () => {
    // Skip entrance animation when clicking logo or Home link
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('skipEntrance', 'true')
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={handleSkipEntrance}>
          <img src="/ktpicon.png" alt="KTP Logo" className="logo-image" />
        </Link>
        <nav className="nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleSkipEntrance}>Home</Link>
          <Link to="/rush" className={`nav-link ${location.pathname === '/rush' ? 'active' : ''}`}>Rush</Link>
          <Link to="/professional-growth" className={`nav-link ${location.pathname === '/professional-growth' ? 'active' : ''}`}>Professional Growth</Link>
          <Link to="/client-services" className={`nav-link ${location.pathname === '/client-services' ? 'active' : ''}`}>Client Services</Link>
          <Link to="/e-board" className={`nav-link ${location.pathname === '/e-board' ? 'active' : ''}`}>E-Board</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header


