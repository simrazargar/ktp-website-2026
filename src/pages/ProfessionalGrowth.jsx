import React, { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import TypewriterText from '../components/TypewriterText'
import './ProfessionalGrowth.css'

function ProfessionalGrowth() {
  const [currentSection, setCurrentSection] = useState(0) // 0: Banner
  const [bannerComplete, setBannerComplete] = useState(false)
  const [descriptionComplete, setDescriptionComplete] = useState(false)
  const [allContentVisible, setAllContentVisible] = useState(false)
  const descriptionRef = useRef(null)
  const guestSpeakersSectionRef = useRef(null)
  const guestSpeakersTitleRef = useRef(null)
  const guestSpeakersTextRef = useRef(null)
  const guestSpeakersImageRef = useRef(null)
  const workshopsImageRef = useRef(null)
  const workshopsTitleRef = useRef(null)
  const workshopsTextRef = useRef(null)
  const mentorshipTitleRef = useRef(null)
  const mentorshipTextRef = useRef(null)
  const mentorshipImageRef = useRef(null)
  const alumniImageRef = useRef(null)
  const alumniTitleRef = useRef(null)
  const alumniTextRef = useRef(null)

  // Make description fade in when banner completes
  useEffect(() => {
    if (bannerComplete && descriptionRef.current) {
      // Add visible class to trigger fade-in animation
      setTimeout(() => {
        if (descriptionRef.current) {
          descriptionRef.current.classList.add('visible')
          // Mark description as complete after animation
          setTimeout(() => {
            setDescriptionComplete(true)
          }, 800) // Match the fade-in animation duration
        }
      }, 100)
    }
  }, [bannerComplete])

  // Sequential fade-in for all sections
  useEffect(() => {
    if (descriptionComplete) {
      let delay = 500 // Start delay after description completes - longer for graceful start
      
      // Guest Speakers Section Background - fade in first
      setTimeout(() => {
        if (guestSpeakersSectionRef.current) {
          guestSpeakersSectionRef.current.classList.add('section-visible')
        }
      }, delay)
      delay += 800 // Wait for section background to fade in
      
      // Guest Speakers Title - slower fade
      setTimeout(() => {
        if (guestSpeakersTitleRef.current) {
          guestSpeakersTitleRef.current.classList.add('visible', 'slow-fade')
        }
      }, delay)
      delay += 600 // Wait longer for title to fade in gracefully
      
      // Guest Speakers Text - slower fade
      setTimeout(() => {
        if (guestSpeakersTextRef.current) {
          guestSpeakersTextRef.current.classList.add('visible', 'slow-fade')
        }
      }, delay)
      delay += 600
      
      // Guest Speakers Image - slower fade
      setTimeout(() => {
        if (guestSpeakersImageRef.current) {
          guestSpeakersImageRef.current.classList.add('visible', 'slow-fade')
        }
      }, delay)
      delay += 600
      
      // Professional Workshops Image
      setTimeout(() => {
        if (workshopsImageRef.current) {
          workshopsImageRef.current.classList.add('visible')
        }
      }, delay)
      delay += 400
      
      // Professional Workshops Title
      setTimeout(() => {
        if (workshopsTitleRef.current) {
          workshopsTitleRef.current.classList.add('visible')
        }
      }, delay)
      delay += 400
      
      // Professional Workshops Text
      setTimeout(() => {
        if (workshopsTextRef.current) {
          workshopsTextRef.current.classList.add('visible')
        }
      }, delay)
      delay += 400
      
      // Mentorship Title
      setTimeout(() => {
        if (mentorshipTitleRef.current) {
          mentorshipTitleRef.current.classList.add('visible')
        }
      }, delay)
      delay += 400
      
      // Mentorship Text
      setTimeout(() => {
        if (mentorshipTextRef.current) {
          mentorshipTextRef.current.classList.add('visible')
        }
      }, delay)
      delay += 400
      
      // Mentorship Image
      setTimeout(() => {
        if (mentorshipImageRef.current) {
          mentorshipImageRef.current.classList.add('visible')
        }
      }, delay)
      delay += 400
      
      // Alumni Image
      setTimeout(() => {
        if (alumniImageRef.current) {
          alumniImageRef.current.classList.add('visible')
        }
      }, delay)
      delay += 400
      
      // Alumni Title
      setTimeout(() => {
        if (alumniTitleRef.current) {
          alumniTitleRef.current.classList.add('visible')
        }
      }, delay)
      delay += 400
      
      // Alumni Text (last element)
      setTimeout(() => {
        if (alumniTextRef.current) {
          alumniTextRef.current.classList.add('visible')
        }
        // After the last element starts fading in, wait for animation to complete
        setTimeout(() => {
          setAllContentVisible(true)
        }, 800) // Wait for fade animation to complete
      }, delay)
    }
  }, [descriptionComplete])

  return (
    <div className="professional-growth-page">
      {/* Banner Section */}
      <section className="pg-banner">
        <div className="pg-banner-content">
          <h1 className="pg-title">
            <TypewriterText 
              text="Professional Growth"
              speed={80}
              shouldStart={currentSection === 0}
              onComplete={() => {
                setTimeout(() => {
                  setBannerComplete(true)
                  setCurrentSection(1)
                }, 500)
              }}
            />
          </h1>
          {bannerComplete && (
            <p ref={descriptionRef} className="pg-description fade-in-on-scroll">
              KTP is committed to offering opportunities to expand professionally, including guest speaker events, professional workshops, and mentorship programs.
            </p>
          )}
        </div>
      </section>

      {/* Section 1: Guest Speakers */}
      {descriptionComplete && (
        <section ref={guestSpeakersSectionRef} className="pg-section pg-section-white section-fade-in">
          <div className="pg-section-container">
            <div className="pg-section-content">
              <h2 ref={guestSpeakersTitleRef} className="pg-section-title pg-title-blue fade-in-on-scroll">
                Guest Speakers
              </h2>
              <p ref={guestSpeakersTextRef} className="pg-section-text pg-text-black fade-in-on-scroll">
                At weekly meetings, KTP hosts industry professionals who share insights on careers in technology, real-world experiences, and pathways into the tech industry.
              </p>
            </div>
            <div ref={guestSpeakersImageRef} className="pg-section-image fade-in-on-scroll">
              <img src="/ktpGuestSpeakers.png" alt="Guest Speakers" className="guest-speakers-image" />
            </div>
          </div>
        </section>
      )}

      {/* Section 2: Professional Workshops */}
      {descriptionComplete && (
        <section className="pg-section pg-section-dark">
          <div className="pg-section-container">
            <div ref={workshopsImageRef} className="pg-section-image fade-in-on-scroll">
              <img src="/ktp-prof-image.jpeg" alt="Professional Workshops" className="professional-workshops-image" />
            </div>
            <div className="pg-section-content">
              <h2 ref={workshopsTitleRef} className="pg-section-title pg-title-white fade-in-on-scroll">
                Professional Workshops
              </h2>
              <p ref={workshopsTextRef} className="pg-section-text pg-text-white fade-in-on-scroll">
                KTP holds resume and interview preparation workshops to help students confidently navigate recruiting processes.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Mentorship Program */}
      {descriptionComplete && (
        <section className="pg-section pg-section-white">
          <div className="pg-section-container">
            <div className="pg-section-content">
              <h2 ref={mentorshipTitleRef} className="pg-section-title pg-title-blue fade-in-on-scroll">
                Mentorship Program - KTP Launch
              </h2>
              <p ref={mentorshipTextRef} className="pg-section-text pg-text-black fade-in-on-scroll">
                This semester, new members are grouped with an industry professional mentor from one of these companies, meeting throughout the semester to learn about career paths, roles, and professional experiences. We also offer company visits to gain firsthand exposure to different industries, workplace environments, and professional teams.
              </p>
            </div>
            <div ref={mentorshipImageRef} className="pg-section-image fade-in-on-scroll">
              <img src="/ktpMentors.png" alt="Mentorship Program" className="mentors-image" />
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Academic Database & Alumni Network */}
      {descriptionComplete && (
        <section className="pg-section pg-section-dark">
          <div className="pg-section-container">
            <div ref={alumniImageRef} className="pg-section-image fade-in-on-scroll">
              <img src="/ktp-alumni-database.jpeg" alt="Academic Database & Alumni Network" className="alumni-database-image" />
            </div>
            <div className="pg-section-content">
              <h2 ref={alumniTitleRef} className="pg-section-title pg-title-white fade-in-on-scroll">
                Academic Database & Alumni Network
              </h2>
              <p ref={alumniTextRef} className="pg-section-text pg-text-white fade-in-on-scroll">
                KTP connects members to academic resources and a growing alumni network to support career development.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer showWhenReady={allContentVisible} />
    </div>
  )
}

export default ProfessionalGrowth
