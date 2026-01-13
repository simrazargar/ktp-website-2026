import React, { useState, useEffect } from 'react'
import './OurValues.css'

function OurValues({ shouldStart = null, onSectionComplete }) {
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

  const values = [
    {
      title: 'Professional Development',
      description: 'Through speaker events, resume building, private company recruiting, and more, KTP prepares members for success in any technology-related career.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18"></path>
          <path d="M4 21V7l8-4v18"></path>
          <path d="M12 3v18"></path>
          <path d="M20 21V11l-8-4"></path>
        </svg>
      )
    },
    {
      title: 'Technical Advancement',
      description: 'KTP provides members opportunities to enhance their current technical skills, as well as learn new ones through project teams and technical workshops.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <polyline points="6 10 8 12 10 10 12 12 14 10 16 12 18 10"></polyline>
        </svg>
      )
    },
    {
      title: 'Academic Support',
      description: 'Our brothers strive to foster academic growth and excellence for each other through a supportive network of bright tech minds.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          <path d="M8 7h8"></path>
          <path d="M8 11h8"></path>
          <path d="M8 15h6"></path>
        </svg>
      )
    },
    {
      title: 'Social Growth',
      description: 'The people you meet in KTP will go on to be some of your closest friends throughout college and beyond through exclusive social events.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: 'Alumni Connections',
      description: 'Our alumni work at cutting-edge companies like Microsoft, IBM, EY, Amazon, Facebook, Apple, and Google, plus startups and consulting firms.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <circle cx="6" cy="6" r="2"></circle>
          <circle cx="18" cy="6" r="2"></circle>
          <circle cx="6" cy="18" r="2"></circle>
          <circle cx="18" cy="18" r="2"></circle>
          <line x1="12" y1="9" x2="8" y2="7"></line>
          <line x1="12" y1="9" x2="16" y2="7"></line>
          <line x1="12" y1="15" x2="8" y2="17"></line>
          <line x1="12" y1="15" x2="16" y2="17"></line>
        </svg>
      )
    },
    {
      title: 'Diversity',
      description: 'The world of technology is unique, diverse, and multi-faceted. We believe that our brothers should be too. In Kappa Theta Pi, we\'re passionate about cultivating an inclusive community that promotes and values diversity.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="8" r="3"></circle>
          <rect x="14" y="6" width="4" height="4" rx="1"></rect>
          <polygon points="18 14 20 12 22 14 20 16"></polygon>
        </svg>
      )
    }
  ]

  return (
    <section className="our-values">
      <div className="our-values-container">
        <h2 className={`section-title centered fade-in-title ${showTitle ? 'visible' : ''}`}>
          Our Values
        </h2>
        {showContent && (
          <>
            <p className="our-values-description fade-in-item" style={{ animationDelay: '0.1s' }}>
              KTP has 6 main principles we follow
            </p>
            <div className="values-grid fade-in-item" style={{ animationDelay: '0.3s' }}>
              {values.map((value, index) => (
                <React.Fragment key={index}>
                  <div className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </div>
                  {index === values.length - 1 && <div className="values-divider"></div>}
                </React.Fragment>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default OurValues


