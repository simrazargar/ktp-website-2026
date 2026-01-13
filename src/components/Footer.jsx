import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Footer.css'

function Footer({ variant = 'dark', showWhenReady }) {
  const navigate = useNavigate()
  const footerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleLogoClick = (e) => {
    e.preventDefault()
    // Skip entrance animation when clicking footer logo
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('skipEntrance', 'true')
    }
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    // If showWhenReady prop is provided, use it to control visibility
    if (showWhenReady !== undefined) {
      setIsVisible(showWhenReady)
      return
    }

    // For pages without showWhenReady prop, show footer immediately
    // This ensures it appears on Eboard, Rush, and Contact pages
    setIsVisible(true)
  }, [showWhenReady])

  return (
    <footer ref={footerRef} className={`footer footer-${variant} ${isVisible ? 'footer-visible' : ''}`}>
      <div className="footer-container">
        <Link to="/" className="footer-logo" onClick={handleLogoClick}>
          <span className="footer-logo-text">ktp</span>
          <span className="footer-logo-subtitle">Kappa Theta Pi</span>
        </Link>
        <div className="footer-social">
          <a href="mailto:ktpusc@usc.edu" className="social-icon" aria-label="Email">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/ktp.usc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <img src="/ktpInstaLogo.png" alt="Instagram" className="social-icon-image" />
          </a>
          <a href="https://www.linkedin.com/company/kappa-theta-pi-usc/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <img src="/ktpLinkedInLogo.png" alt="LinkedIn" className="social-icon-image" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

