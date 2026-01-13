import React, { useState, useEffect } from 'react'
import './WhoWeAre.css'

function WhoWeAre({ shouldStart = null, onSectionComplete }) {
  const [showContent, setShowContent] = useState(false)
  const [showTitle, setShowTitle] = useState(false)

  useEffect(() => {
    if (shouldStart) {
      setShowTitle(true)
      setTimeout(() => {
        setShowContent(true)
        if (onSectionComplete) {
          setTimeout(() => onSectionComplete(), 1000) // Wait for content to fade in
        }
      }, 600)
    }
  }, [shouldStart, onSectionComplete])

  return (
    <section id="who-we-are" className="who-we-are">
      <div className="who-we-are-container">
        <div className="who-we-are-content">
          <h2 className={`section-title fade-in-title ${showTitle ? 'visible' : ''}`}>
            Who We Are
          </h2>
        </div>
        {showContent && (
          <div className="who-we-are-text fade-in-item" style={{ animationDelay: '0.1s' }}>
            <p className="who-we-are-description">
              We are USC's first professional technology fraternity established in 2023. Our members and alumni come from diverse backgrounds and academic disciplines, but we are all passionate about exploring technology and its real-world applications. Each semester, members are given the opportunity to participate in professional development workshops, networking and social events, and engage in real-world projects with startups/companies. We also encourage continuous learning, collaboration, leadership, and a strong sense of brotherhood that extends beyond the classroom.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default WhoWeAre


