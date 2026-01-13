import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

function Contact({ shouldStart = null, onSectionComplete }) {
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
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-two-columns">
          {/* Left Column - Image */}
          {showContent && (
            <div className="contact-form-placeholder fade-in-item" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/ktpInterestedPhoto.jpeg" 
                alt="KTP Interested" 
                className="contact-form-image"
              />
            </div>
          )}

          {/* Right Column - All Content */}
          <div className="contact-content-column">
            <h2 className={`contact-header fade-in-title ${showTitle ? 'visible' : ''}`}>
              Interested in Joining Us?
            </h2>
            
            {showContent && (
              <>
                <p className="contact-instructions-text fade-in-item" style={{ animationDelay: '0.1s' }}>
                  Head over to the <Link to="/contact" className="contact-link">Contact Us</Link> for more instructions and/or fill out our form below to ask questions or send a general message, and we'll get back to you as soon as possible!
                </p>
                
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe0hhd_A0j3jBxJQ9eTdFpFd8kuh6nM3-14nhLft-MTVLSJHQ/viewform?usp=header" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-form-button fade-in-item"
                  style={{ animationDelay: '0.3s' }}
                >
                  Form
                </a>

                <div className="contact-info-items fade-in-item" style={{ animationDelay: '0.5s' }}>
              <div className="contact-info-item">
                <strong>Contact</strong>
                <span>ktpusc@usc.edu</span>
              </div>
              
              <div className="contact-info-item">
                <strong>Based In</strong>
                <span>University of Southern California, Los Angeles</span>
              </div>
              
              <div className="social-icons">
                <a href="https://www.instagram.com/ktp.usc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <img src="/ktpInstaLogo.png" alt="Instagram" className="social-icon-image" />
                </a>
                <a href="https://www.linkedin.com/company/kappa-theta-pi-usc/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <img src="/ktpLinkedInLogo.png" alt="LinkedIn" className="social-icon-image" />
                </a>
              </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


