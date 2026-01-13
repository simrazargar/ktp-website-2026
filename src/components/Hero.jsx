import React, { useState } from 'react'
import TypewriterText from './TypewriterText'
import './Hero.css'

function Hero({ shouldStart = null, onSectionComplete }) {
  const [showContent, setShowContent] = useState(false)

  const scrollToWhoWeAre = () => {
    const element = document.getElementById('who-we-are')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTitleComplete = () => {
    setTimeout(() => {
      setShowContent(true)
      if (onSectionComplete) {
        setTimeout(() => onSectionComplete(), 1000) // Wait for content to fade in
      }
    }, 500)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <TypewriterText 
              text="Kappa Theta Pi at the University of Southern California"
              className="typewriter-line"
              speed={80}
              onComplete={handleTitleComplete}
              shouldStart={shouldStart}
            />
          </h1>
          {showContent && (
            <>
              <div className="hero-description fade-in-item" style={{ animationDelay: '0.1s' }}>
                <p>USC's premier professional technology fraternity dedicated to fostering academic, professional, and social growth.</p>
              </div>
              <div className="hero-buttons fade-in-item" style={{ animationDelay: '0.3s' }}>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdJ8i4ECcETaFgmVYEcN9oR73A3WUxSUbmlaIxTg4a9T1zPfQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Apply
                </a>
                <button className="btn btn-primary" onClick={scrollToWhoWeAre}>Learn More</button>
              </div>
            </>
          )}
        </div>
        {showContent && (
          <div className="hero-image-container fade-in-item" style={{ animationDelay: '0.5s' }}>
            <img 
              src="/hero-header.jpeg" 
              alt="Kappa Theta Pi" 
              className="hero-header-image"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero


