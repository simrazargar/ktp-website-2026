import React, { useEffect, useRef, useState } from 'react'
import './SocialLife.css'

function SocialLife({ shouldStart = null, onSectionComplete }) {
  const carouselRef = useRef(null)
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

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel || !showContent) return

    let scrollAmount = 0
    const scrollSpeed = 0.8 // pixels per frame (slower)
    const scrollInterval = 16 // ~60fps

    const scroll = () => {
      scrollAmount += scrollSpeed
      carousel.scrollLeft = scrollAmount

      // Reset scroll position when reaching the end for seamless loop
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0
        carousel.scrollLeft = 0
      }
    }

    const intervalId = setInterval(scroll, scrollInterval)

    return () => {
      clearInterval(intervalId)
    }
  }, [showContent])

  // Social event images - ktpSocialImages 1-9, 10-11
  const socialImages = [
    '/ktpSocialEvents1.jpeg',
    '/ktpSocialEvents2.jpeg',
    '/ktpSocialEvents3.jpeg',
    '/ktpSocialEvents5.jpeg',
    '/ktpSocialEvents6.jpeg',
    '/ktpSocialEvents7.jpeg',
    '/ktpSocialEvents8.jpeg',
    '/ktpSocialEvents9.jpeg',
    '/ktpSocialEvents10.jpeg',
    '/ktpSocialEvents11.jpeg',
  ]

  return (
    <section className="social-life">
      <div className="social-life-container">
        <h2 className={`section-title centered fade-in-title ${showTitle ? 'visible' : ''}`}>
          Social Life
        </h2>
        {showContent && (
          <>
            <p className="social-life-description fade-in-item" style={{ animationDelay: '0.1s' }}>
              At KTP, we make sure to provide a mix of professional and fun events, and honor a work-hard play-hard mindset. From mixers and our big little program, to retreats, bonfires, movie nights, and picnics, we create a strong sense of brotherhood among members.
            </p>
            <div className="social-carousel-wrapper fade-in-item" style={{ animationDelay: '0.3s' }}>
          <div className="social-carousel" ref={carouselRef}>
            {socialImages.map((image, index) => (
              <div key={index} className="social-carousel-item">
                <img 
                  src={image} 
                  alt={`Social Event ${index + 1}`}
                  className="social-carousel-image"
                />
              </div>
            ))}
            {/* Duplicate images for seamless loop */}
            {socialImages.map((image, index) => (
              <div key={`duplicate-${index}`} className="social-carousel-item">
                <img 
                  src={image} 
                  alt={`Social Event ${index + 1}`}
                  className="social-carousel-image"
                />
              </div>
            ))}
          </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default SocialLife


