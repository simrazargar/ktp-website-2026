import React, { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import TypewriterText from '../components/TypewriterText'
import './ClientServices.css'

function ClientServices() {
  const [currentSection, setCurrentSection] = useState(0) // 0: Section1
  const [section1Complete, setSection1Complete] = useState(false)
  const [descriptionComplete, setDescriptionComplete] = useState(false)
  const [allContentVisible, setAllContentVisible] = useState(false)
  const descriptionRef = useRef(null)
  const offerSectionRef = useRef(null)
  const offerTitleRef = useRef(null)
  const offerGridRef = useRef(null)
  const projectsSectionRef = useRef(null)
  const projectsTitleRef = useRef(null)
  const projectsTextRef = useRef(null)
  const clientsSectionRef = useRef(null)
  const clientsTitleRef = useRef(null)
  const clientsSubtitleRef = useRef(null)
  const clientsGridRef = useRef(null)
  const pastClients = [
    {
      name: 'Inovient',
      description: 'Researched target user roles, explored AI-based image generation tools for content creation, and developed an automated workflow for content generation using a low-code automation platform'
    },
    {
      name: 'CrossRoads',
      description: 'Redesigned a full-stack website, conducted competitor research, mapped user journeys to improve discoverability, and implemented a waitlist feature using modern web development tools.'
    },
    {
      name: 'Peregrine Consulting',
      description: 'Developed a predictive model using Python and data analysis libraries to analyze customer booking patterns and trends in the hospitality industry, focusing on factors like timing, type, and price of accommodations'
    }
  ]

  // Make description fade in when title completes
  useEffect(() => {
    if (section1Complete && descriptionRef.current) {
      setTimeout(() => {
        if (descriptionRef.current) {
          descriptionRef.current.classList.add('visible')
          setTimeout(() => {
            setDescriptionComplete(true)
          }, 800)
        }
      }, 100)
    }
  }, [section1Complete])

  // Sequential fade-in for all sections
  useEffect(() => {
    if (descriptionComplete) {
      let delay = 500
      
      // What we Offer Section Background
      setTimeout(() => {
        if (offerSectionRef.current) {
          offerSectionRef.current.classList.add('section-visible')
        }
      }, delay)
      delay += 800
      
      // What we Offer Title
      setTimeout(() => {
        if (offerTitleRef.current) {
          offerTitleRef.current.classList.add('visible', 'slow-fade')
        }
      }, delay)
      delay += 600
      
      // What we Offer Grid
      setTimeout(() => {
        if (offerGridRef.current) {
          offerGridRef.current.classList.add('visible', 'slow-fade')
        }
      }, delay)
      delay += 600
      
      // Projects Section Background
      setTimeout(() => {
        if (projectsSectionRef.current) {
          projectsSectionRef.current.classList.add('section-visible')
        }
      }, delay)
      delay += 800
      
      // Projects Title
      setTimeout(() => {
        if (projectsTitleRef.current) {
          projectsTitleRef.current.classList.add('visible', 'slow-fade')
        }
      }, delay)
      delay += 600
      
      // Projects Text
      setTimeout(() => {
        if (projectsTextRef.current) {
          projectsTextRef.current.classList.add('visible', 'slow-fade')
        }
      }, delay)
      delay += 600
      
      // Past Clients Section Background
      setTimeout(() => {
        if (clientsSectionRef.current) {
          clientsSectionRef.current.classList.add('section-visible')
        }
      }, delay)
      delay += 800
      
      // Past Clients Title
      setTimeout(() => {
        if (clientsTitleRef.current) {
          clientsTitleRef.current.classList.add('visible', 'slow-fade')
        }
      }, delay)
      delay += 600
      
      // Past Clients Subtitle
      setTimeout(() => {
        if (clientsSubtitleRef.current) {
          clientsSubtitleRef.current.classList.add('visible', 'slow-fade')
        }
      }, delay)
      delay += 600
      
      // Past Clients Grid (last element)
      setTimeout(() => {
        if (clientsGridRef.current) {
          clientsGridRef.current.classList.add('visible', 'slow-fade')
        }
        setTimeout(() => {
          setAllContentVisible(true)
        }, 800)
      }, delay)
    }
  }, [descriptionComplete])

  return (
    <div className="client-services-page">
      {/* Client Services Section */}
      <section className="cs-section">
        <div className="cs-container">
          <h1 className="cs-title">
            <TypewriterText 
              text="Client Services"
              speed={80}
              shouldStart={currentSection === 0}
              onComplete={() => {
                setTimeout(() => {
                  setSection1Complete(true)
                  setCurrentSection(1)
                }, 500)
              }}
            />
          </h1>
          {section1Complete && (
            <p ref={descriptionRef} className="cs-description fade-in-on-scroll">
              KTP partners with organizations to deliver tech, strategy, and marketing solutions, providing members with hands-on experience working on real-world projects.
            </p>
          )}
        </div>
      </section>

      {/* What we Offer Section */}
      {descriptionComplete && (
        <section ref={offerSectionRef} className="cs-section section-fade-in">
          <div className="cs-container">
            <h2 ref={offerTitleRef} className="cs-section-title centered fade-in-on-scroll">
              What we Offer
            </h2>
            <div ref={offerGridRef} className="offer-grid fade-in-on-scroll">
            <div className="offer-item">
              <div className="offer-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  <path d="M8 7h8"></path>
                  <path d="M8 11h8"></path>
                  <path d="M8 15h6"></path>
                </svg>
              </div>
              <h3 className="offer-subtitle">Students</h3>
              <p className="offer-text">
                Gain experience by working on real client projects, developing technical skills, teamwork, and professional communication.
              </p>
            </div>
            <div className="offer-item">
              <div className="offer-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                </svg>
              </div>
              <h3 className="offer-subtitle">Clients</h3>
              <p className="offer-text">
                Clients partner with KTP to receive innovative, technology-focused solutions for their business developed by student teams.
              </p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Projects Section */}
      {descriptionComplete && (
        <section ref={projectsSectionRef} className="cs-section section-fade-in">
          <div className="cs-container">
            <h2 ref={projectsTitleRef} className="cs-section-title centered fade-in-on-scroll">
              Projects
            </h2>
            <p ref={projectsTextRef} className="projects-description fade-in-on-scroll">
            During the rushing process, KTP requires working with companies and startups on a semester-long project. Students will be placed in a team of 4-5 members, guided by 2 Project Managers. Through this hands-on experience, members gain practical skills in technology, design, and business, such as website development, product design, and marketing strategy, while collaborating closely with real-world clients.
          </p>
        </div>
      </section>
      )}

      {/* Past Clients Section */}
      {descriptionComplete && (
        <section ref={clientsSectionRef} className="cs-section section-fade-in">
          <div className="cs-container">
            <h2 ref={clientsTitleRef} className="cs-section-title centered fade-in-on-scroll">
              Past Clients
            </h2>
            <p ref={clientsSubtitleRef} className="past-clients-subtitle fade-in-on-scroll">And what we did</p>
            <div ref={clientsGridRef} className="past-clients-grid fade-in-on-scroll">
            <div className="client-card">
              <div className="client-logo-container">
                <img src="/inovient_io_logo.jpeg" alt="Inovient" className="client-logo" />
              </div>
              <h3 className="client-name">Inovient</h3>
              <p className="client-description">{pastClients[0].description}</p>
            </div>
            <div className="client-card">
              <div className="client-logo-container">
                <img src="/ktp-crossroads.png" alt="CrossRoads" className="client-logo" />
              </div>
              <h3 className="client-name">CrossRoads</h3>
              <p className="client-description">{pastClients[1].description}</p>
            </div>
            <div className="client-card">
              <div className="client-logo-container">
                <img src="/peregrine-logo.png" alt="Peregrine Consulting" className="client-logo" />
              </div>
              <h3 className="client-name">Peregrine Consulting</h3>
              <p className="client-description">{pastClients[2].description}</p>
            </div>
            </div>
        </div>
      </section>
      )}

      {/* Footer */}
      <Footer showWhenReady={allContentVisible} />
    </div>
  )
}

export default ClientServices
