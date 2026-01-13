import React, { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import TypewriterText from '../components/TypewriterText'
import './Rush.css'

function Rush() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [currentSection, setCurrentSection] = useState(0) // 0: Banner, 1: Timeline, 2: FAQ
  const [bannerComplete, setBannerComplete] = useState(false)
  const [rushTitleComplete, setRushTitleComplete] = useState(false)
  const [allContentComplete, setAllContentComplete] = useState(false)
  const rushSubtitleRef = useRef(null)
  const timelineRef = useRef(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  // Make elements visible immediately when they're rendered
  useEffect(() => {
    if (rushTitleComplete) {
      // Add visible class to subtitle and timeline immediately after rush title completes
      setTimeout(() => {
        if (rushSubtitleRef.current) {
          rushSubtitleRef.current.classList.add('visible')
        }
        if (timelineRef.current) {
          timelineRef.current.classList.add('visible')
        }
      }, 50)
      
      // Wait for FAQ section to be visible (fade-in-on-scroll elements)
      // Give enough time for all content to appear
      setTimeout(() => {
        setAllContentComplete(true)
      }, 2000)
    }
  }, [rushTitleComplete])

  const faqs = [
    {
      question: 'Who can rush KTP?',
      answer: 'Any undergraduate student at USC is allowed to rush — we gladly accept (and encourage) rushees from all disciplines!'
    },
    {
      question: 'What is KTP looking for?',
      answer: 'There\'s no cookie cutter "ideal" rushee — if there were, Kappa Theta Pi wouldn\'t be the multi-talented, interdisciplinary organization that it is! In our experience, the qualities you\'re looking for are often what we\'d love to have in new members. In the end, we are an org united by our love for technology, and people who are truly passionate about tech are the ones who usually fit in the best.'
    },
    {
      question: 'How would I benefit from KTP?',
      answer: 'KTP offers a supportive community of undergraduates who are all passionate about technology! Among other things, we offer mentoring in areas such as career advising, interview prep, resume development, and coursework. Additionally, we have current members and alumni working everywhere from the brightest startups to the tech giants of the corporate world. We believe that networking is far more than just professionalism — it\'s a process built on friendship, trust, and brotherhood.'
    },
    {
      question: 'Which majors are represented in KTP?',
      answer: 'KTP is made up of a diverse group of students from schools all across campus. Generally, our members tend to be computer science, AI for business, and economics and data science majors but we are proud to have actives with backgrounds in creative writing, psychology, business, women\'s studies, and entrepreneurship! We love (and encourage) rushees from all disciplines.'
    },
    {
      question: 'How much of a time commitment is the recruitment process?',
      answer: 'The rush process spans approximately 4 weeks with various events throughout. We encourage attendance at multiple events to get a comprehensive understanding of KTP, but we understand students have busy schedules.'
    },
    {
      question: 'Tips on rush, the application, and the interview?',
      answer: 'Attend multiple rush events to show genuine interest, be yourself in the application, ask questions about KTP\'s values and programs, and demonstrate your passion for technology and professional growth.'
    }
  ]

  return (
    <div className="rush-page">
      {/* Banner Section */}
      <section className="rush-banner">
        <img 
          src="/ktpRushHeader.jpeg" 
          alt="Rush Header" 
          className="rush-header-image"
          loading="eager"
        />
        <div className="rush-banner-text">
          <h1 className="rush-season">
            <TypewriterText 
              text="Spring '26"
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
            <>
              <h2 className="rush-title">
                <TypewriterText 
                  text="Rush"
                  speed={80}
                  shouldStart={bannerComplete}
                  onComplete={() => {
                    setTimeout(() => {
                      setRushTitleComplete(true)
                    }, 500)
                  }}
                />
              </h2>
              {rushTitleComplete && (
                <p ref={rushSubtitleRef} className="rush-subtitle fade-in-on-scroll">
                  Applications for Spring '26 are now open!
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      {rushTitleComplete && (
        <section 
          ref={timelineRef}
          className="rush-timeline-section fade-in-on-scroll"
        >
          <div className="rush-timeline-container">
            <img src="/ktpRushEvents.png" alt="Rush Events Timeline" className="rush-events-image" />
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="rush-faq-section">
        <div className="rush-faq-container">
          <h2 className="faq-title fade-in-on-scroll">
            Frequently Asked Questions
          </h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="faq-item fade-in-on-scroll"
              >
                <button
                  className={`faq-question ${openFAQ === index ? 'open' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-chevron">{openFAQ === index ? '▲' : '▼'}</span>
                </button>
                {openFAQ === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer showWhenReady={allContentComplete} />
    </div>
  )
}

export default Rush
