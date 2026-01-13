import React, { useState } from 'react'
import TypewriterText from './TypewriterText'
import './AnimatedSection.css'

function AnimatedSection({ headerText, headerClassName = '', speed = 60, children }) {
  const [showContent, setShowContent] = useState(false)

  const handleHeaderComplete = () => {
    setShowContent(true)
  }

  return (
    <div className="animated-section">
      <h2 className={headerClassName}>
        <TypewriterText 
          text={headerText}
          speed={speed}
          onComplete={handleHeaderComplete}
        />
      </h2>
      <div className={`section-content ${showContent ? 'content-visible' : 'content-hidden'}`}>
        {children}
      </div>
    </div>
  )
}

export default AnimatedSection

