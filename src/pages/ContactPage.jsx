import React, { useState } from 'react'
import Footer from '../components/Footer'
import TypewriterText from '../components/TypewriterText'
import './ContactPage.css'

function ContactPage() {
  const [currentSection, setCurrentSection] = useState(0) // 0: Title, 1: Intro, 2: Sections, 3: Button
  const [titleComplete, setTitleComplete] = useState(false)
  const [allContentComplete, setAllContentComplete] = useState(false)

  return (
    <div className="contact-page">
      <div className="contact-page-container">
        <h1 className="contact-page-title">
          <TypewriterText 
            text="Contact Us"
            speed={80}
            shouldStart={currentSection === 0}
            onComplete={() => {
              setTimeout(() => {
                setTitleComplete(true)
                setCurrentSection(1)
                // Calculate when all animations complete: last animation starts at 0.7s delay + 0.8s duration = 1.5s
                setTimeout(() => {
                  setAllContentComplete(true)
                }, 1500)
              }, 500)
            }}
          />
        </h1>
        {titleComplete && (
          <>
            <p className="contact-page-intro fade-in-item" style={{ animationDelay: '0.1s' }}>
              If you are interested in reaching out to us for a question or for a partnership, please click the button below, which will take you to a Google Form to fill out. Please follow the instructions below.
            </p>
            <div className="contact-page-separator fade-in-item" style={{ animationDelay: '0.3s' }}></div>
          </>
        )}
        {titleComplete && (
          <div className="contact-sections fade-in-item" style={{ animationDelay: '0.5s' }}>
          <div className="contact-section-item">
            <h2 className="contact-section-title">If you are a Company</h2>
            <p className="contact-section-text">
              If you are interested in collaborating with Kappa Theta Pi and getting solutions for your business needs through client service projects, let us know.
            </p>
          </div>

          <div className="contact-section-item">
            <h2 className="contact-section-title">If you are a Student</h2>
            <p className="contact-section-text">
              If you would like to ask us a question about rushing, time commitment, and/or any other relevant questions, reach out to us.
            </p>
          </div>

          <div className="contact-section-item">
            <h2 className="contact-section-title">If you are an Alumni</h2>
            <p className="contact-section-text">
              If you are interested in being involved with Kappa Theta Pi and providing us with guidance, we would love for you to chat with us on ways you can support the group.
            </p>
          </div>
          </div>
        )}
        {titleComplete && (
          <div className="contact-form-button-container fade-in-item" style={{ animationDelay: '0.7s' }}>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSe0hhd_A0j3jBxJQ9eTdFpFd8kuh6nM3-14nhLft-MTVLSJHQ/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-form-button"
            >
              Form
            </a>
          </div>
        )}
      </div>

      <Footer showWhenReady={allContentComplete} />
    </div>
  )
}

export default ContactPage
