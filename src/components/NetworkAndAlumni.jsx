import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NetworkAndAlumni.css'

function NetworkAndAlumni({ shouldStart = null, onSectionComplete }) {
  const [showContent, setShowContent] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const navigate = useNavigate()

  const handleLogoClick = (e) => {
    e.preventDefault()
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
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
  
  const row1 = [
    { name: 'Google', logo: '/ktp-google.jpeg' },
    { name: 'IBM', logo: '/ktp-ibm.jpeg' },
    { name: 'Amazon', logo: '/ktp-amazon.jpeg' },
    { name: 'McKinsey', logo: '/ktp-mckinsey.jpeg' },
  ]

  const row2 = [
    { name: 'Rivian', logo: '/ktp-rivian.jpeg' },
    { name: 'Deloitte', logo: '/ktp-deloitte.jpeg' },
    { name: 'Robinhood', logo: '/ktp-robinhood.jpeg' },
    { name: 'Cigna', logo: '/ktp-cigna.jpeg' },
    { name: 'Meitu', logo: '/ktp-meitu.jpeg' },
  ]

  const row3 = [
    { name: 'Disney', logo: '/ktp-disney.jpeg' },
    { name: 'NBCUniversal', logo: '/ktp-nbc.jpeg' },
    { name: 'ServiceNow', logo: '/ktp-servicenow.jpeg' },
    { name: 'Citibank', logo: '/ktp-citibank.jpeg' },
  ]

  const row4 = [
    { name: 'Goldman Sachs', logo: '/ktp-goldman.jpeg' },
    { name: 'EY', logo: '/ktp-ey.jpeg' },
    { name: 'Barclays', logo: '/ktp-barclays.jpeg' },
  ]

  // Duplicate logos for seamless carousel
  const duplicateLogos = (logos) => [...logos, ...logos, ...logos]

  return (
    <section className="network-alumni">
      <div className="network-alumni-header">
        <h2 className={`section-title centered fade-in-title ${showTitle ? 'visible' : ''}`}>
          Network and Alumni Companies
        </h2>
        {showContent && (
          <>
            <p className="network-subtitle fade-in-item" style={{ animationDelay: '0.1s' }}>
              A comprehensive list of company connections from alumni, guest speakers, and mentors.
            </p>
          </>
        )}
      </div>
      {showContent && (
        <div className="network-logos-container fade-in-item" style={{ animationDelay: '0.3s' }}>
        <div className="network-logos-row-wrapper">
          <div className="network-logos-row network-logos-row-left">
            {duplicateLogos(row1).map((company, index) => (
              <div key={index} className="network-logo-item">
                <Link to="/" onClick={handleLogoClick} className="network-logo-link">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="network-logo-image" 
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="network-logos-row-wrapper">
          <div className="network-logos-row network-logos-row-right">
            {duplicateLogos(row2).map((company, index) => (
              <div key={index} className="network-logo-item">
                <Link to="/" onClick={handleLogoClick} className="network-logo-link">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="network-logo-image" 
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="network-logos-row-wrapper">
          <div className="network-logos-row network-logos-row-left">
            {duplicateLogos(row3).map((company, index) => (
              <div key={index} className="network-logo-item">
                <Link to="/" onClick={handleLogoClick} className="network-logo-link">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="network-logo-image" 
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="network-logos-row-wrapper">
          <div className="network-logos-row network-logos-row-right">
            {duplicateLogos(row4).map((company, index) => (
              <div key={index} className="network-logo-item">
                <Link to="/" onClick={handleLogoClick} className="network-logo-link">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="network-logo-image" 
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        </div>
      )}
    </section>
  )
}

export default NetworkAndAlumni


