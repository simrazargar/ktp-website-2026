import React, { useState, useEffect, useRef } from 'react'
import './TypewriterText.css'

function TypewriterText({ text, className = '', speed = 20, onComplete, shouldStart = null }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const elementRef = useRef(null)

  // If shouldStart is provided, use it. Otherwise, use IntersectionObserver
  useEffect(() => {
    if (shouldStart !== null) {
      if (shouldStart && !hasStarted) {
        setHasStarted(true)
        setIsTyping(true)
      }
      return
    }

    // Fallback to IntersectionObserver if shouldStart is not provided
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            setIsTyping(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [hasStarted, shouldStart])

  useEffect(() => {
    if (!hasStarted || isHovered) {
      if (isHovered && isComplete) {
        setDisplayedText(text)
        setIsTyping(false)
      }
      return
    }

    if (isTyping && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)

      return () => clearTimeout(timeout)
    } else if (isTyping && displayedText.length === text.length) {
      setIsTyping(false)
      setIsComplete(true)
      if (onComplete) onComplete()
    }
  }, [displayedText, text, isTyping, hasStarted, isHovered, speed, onComplete, isComplete])

  return (
    <span
      ref={elementRef}
      className={`${className} ${isComplete ? 'typewriter-complete' : ''}`}
      onMouseEnter={() => isComplete && setIsHovered(true)}
      onMouseLeave={() => isComplete && setIsHovered(false)}
    >
      {isHovered && isComplete ? text : displayedText}
      {isTyping && !isHovered && <span className="typewriter-cursor">|</span>}
    </span>
  )
}

export default TypewriterText

