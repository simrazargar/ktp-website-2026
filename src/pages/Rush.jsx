import React, { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import TypewriterText from '../components/TypewriterText'
import InstagramEmbed from '../components/InstagramEmbed'
import './Rush.css'

function Rush() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [currentSection, setCurrentSection] = useState(0) // 0: Banner, 1: Timeline, 2: FAQ
  const [bannerComplete, setBannerComplete] = useState(false)
  const [rushTitleComplete, setRushTitleComplete] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [timelineVisible, setTimelineVisible] = useState(false)
  const [imageVisible, setImageVisible] = useState(false)
  const [faqVisible, setFaqVisible] = useState(false)
  const [allContentComplete, setAllContentComplete] = useState(false)

  const rushSubtitleRef = useRef(null)
  const timelineTitleRef = useRef(null)
  const timelineItemsRef = useRef([])
  const instagramEmbedRef = useRef(null)
  const faqTitleRef = useRef(null)
  const faqItemsRef = useRef([])

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  // Fade in subtitle after rush title completes
  useEffect(() => {
    if (rushTitleComplete) {
      setTimeout(() => {
        if (rushSubtitleRef.current) {
          rushSubtitleRef.current.classList.add('visible')
          setSubtitleVisible(true)
        }
      }, 50)
    }
  }, [rushTitleComplete])

  // Fade in Timeline section after subtitle completes
  useEffect(() => {
    if (subtitleVisible) {
      const timer = setTimeout(() => {
        setTimelineVisible(true)
        if (timelineTitleRef.current) {
          timelineTitleRef.current.classList.add('visible')
        }
        timelineItemsRef.current.forEach((ref, index) => {
          if (ref) {
            setTimeout(() => {
              ref.classList.add('visible')
            }, index * 100)
          }
        })
      }, 900)

      return () => clearTimeout(timer)
    }
  }, [subtitleVisible])

  // Fade in Instagram embed after Timeline animation completes
  useEffect(() => {
    if (timelineVisible) {
      const timer = setTimeout(() => {
        setImageVisible(true)
        if (instagramEmbedRef.current) {
          instagramEmbedRef.current.classList.add('visible')
        }
      }, 900)

      return () => clearTimeout(timer)
    }
  }, [timelineVisible])

  // Fade in FAQ section after Instagram embed animation completes
  useEffect(() => {
    if (imageVisible) {
      const timer = setTimeout(() => {
        setFaqVisible(true)
        if (faqTitleRef.current) {
          faqTitleRef.current.classList.add('visible')
        }
        faqItemsRef.current.forEach((ref, index) => {
          if (ref) {
            setTimeout(() => {
              ref.classList.add('visible')
            }, index * 100)
          }
        })
      }, 900)

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

  const timelineEvents = [
    {
      date: '8/27',
      dateISO: '2026-08-27',
      title: 'Info Session #1',
      time: '7:30 - 8:30 pm',
      location: 'DMC 300A'
    },
    {
      date: '8/31',
      dateISO: '2026-08-31',
      title: 'Speed Dating',
      time: '7:30 - 8:30 pm',
      location: 'SCA Courtyard'
    },
    {
      date: '9/01',
      dateISO: '2026-09-01',
      title: 'Info Session #2',
      time: '7:30 - 8:30 pm',
      location: 'DMC 300A'
    },
    {
      date: '9/02',
      dateISO: '2026-09-02',
      title: 'Resume Workshop',
      time: '7:30 - 8:30 pm',
      location: 'TBD'
    }
  ]

  const lastEventDate = new Date(
    `${timelineEvents[timelineEvents.length - 1].dateISO}T23:59:59`
  )
  const rushComplete = new Date() > lastEventDate

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
              text="Fall '26"
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
                    Applications for Spring 27' will be opening next month.
                  </p>
                  {rushComplete && (
                    <p className="rush-complete-banner">
                      This semester's rush events have concluded — thanks to everyone who came out! Stay tuned for Spring '27.
                    </p>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="rush-timeline-section">
        <div className="rush-timeline-container">
          <h2 ref={timelineTitleRef} className="timeline-title fade-in-on-scroll">
            Rush Schedule
          </h2>
          <div className="timeline-list">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={el => timelineItemsRef.current[index] = el}
                className="timeline-item fade-in-on-scroll"
              >
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3 className="timeline-event-title">{event.title}</h3>
                  <p className="timeline-event-meta">
                    {event.time} · {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="rush-instagram-section">
        <div ref={instagramEmbedRef} className="rush-instagram-container fade-in-on-scroll">
          <InstagramEmbed />
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
