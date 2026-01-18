import React, { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import TypewriterText from '../components/TypewriterText'
import './Rush.css'

function Rush() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [currentSection, setCurrentSection] = useState(0) // 0: Banner, 1: Timeline, 2: FAQ
  const [bannerComplete, setBannerComplete] = useState(false)
  const [rushTitleComplete, setRushTitleComplete] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [imageVisible, setImageVisible] = useState(false)
  const [faqVisible, setFaqVisible] = useState(false)
  const [allContentComplete, setAllContentComplete] = useState(false)
  const rushSubtitleRef = useRef(null)
  const timelineRef = useRef(null)
  const timelineImageRef = useRef(null)
  const faqTitleRef = useRef(null)
  const faqItemsRef = useRef([])

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  // Make elements visible immediately when they're rendered
  useEffect(() => {
    if (rushTitleComplete) {
      // Add visible class to subtitle immediately after rush title completes
      setTimeout(() => {
        if (rushSubtitleRef.current) {
          rushSubtitleRef.current.classList.add('visible')
          setSubtitleVisible(true)
        }
      }, 50)
    }
  }, [rushTitleComplete])

  // Fade in image after subtitle animation completes
  useEffect(() => {
    if (subtitleVisible) {
      // Wait for subtitle fade-in animation to complete (800ms) plus a small delay
      const timer = setTimeout(() => {
        setImageVisible(true)
        if (timelineImageRef.current) {
          timelineImageRef.current.classList.add('visible')
        }
      }, 900) // 800ms animation + 100ms delay
      
      return () => clearTimeout(timer)
    }
  }, [subtitleVisible])

  // Fade in FAQ section after image animation completes
  useEffect(() => {
    if (imageVisible) {
      // Wait for image fade-in animation to complete (800ms) plus a small delay
      const timer = setTimeout(() => {
        setFaqVisible(true)
        if (faqTitleRef.current) {
          faqTitleRef.current.classList.add('visible')
        }
        // Fade in FAQ items with a slight stagger
        faqItemsRef.current.forEach((ref, index) => {
          if (ref) {
            setTimeout(() => {
              ref.classList.add('visible')
            }, index * 100)
          }
        })
      }, 900) // 800ms animation + 100ms delay
      
      return () => clearTimeout(timer)
    }
  }, [imageVisible])

  // Set all content complete after FAQ fades in
  useEffect(() => {
    if (faqVisible) {
      const timer = setTimeout(() => {
        setAllContentComplete(true)
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [faqVisible])

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
                <>
                  <p ref={rushSubtitleRef} className="rush-subtitle fade-in-on-scroll">
                    Applications for Spring '26 are now open!
                  </p>
                  <div className="rush-timeline-container">
                    <img 
                      ref={timelineImageRef}
                      src="/ktp-rushevents.png" 
                      alt="Rush Events Timeline" 
                      className="rush-events-image fade-in-on-scroll"
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="rush-faq-section">
        <div className="rush-faq-container">
          <h2 
            ref={faqTitleRef}
            className="faq-title fade-in-on-scroll"
          >
            Frequently Asked Questions
          </h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                ref={el => faqItemsRef.current[index] = el}
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
