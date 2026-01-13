import React, { useState, useEffect } from 'react'
import './EntranceAnimation.css'

function EntranceAnimation({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [panelsExpanding, setPanelsExpanding] = useState(false)
  const [showWord1, setShowWord1] = useState(false)
  const [showWord2, setShowWord2] = useState(false)
  const [showLine, setShowLine] = useState(false)
  const [showWord3, setShowWord3] = useState(false)
  const [showWord4, setShowWord4] = useState(false)

  useEffect(() => {
    // Show words one at a time: technology, leadership, excellence, brotherhood
    const word1Timer = setTimeout(() => {
      setShowWord1(true)
    }, 200)

    const word2Timer = setTimeout(() => {
      setShowWord2(true)
    }, 800)

    const lineTimer = setTimeout(() => {
      setShowLine(true)
    }, 1400)

    const word3Timer = setTimeout(() => {
      setShowWord3(true)
    }, 2000)

    const word4Timer = setTimeout(() => {
      setShowWord4(true)
    }, 2600)

    // Start expanding panels after all text is visible
    const expandTimer = setTimeout(() => {
      setPanelsExpanding(true)
    }, 3600)

    // Hide entrance after animation completes
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      if (onComplete) {
        onComplete()
      }
    }, 4500) // Total animation duration (including fade out) - shortened from 6500ms

    return () => {
      clearTimeout(word1Timer)
      clearTimeout(word2Timer)
      clearTimeout(lineTimer)
      clearTimeout(word3Timer)
      clearTimeout(word4Timer)
      clearTimeout(expandTimer)
      clearTimeout(hideTimer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="entrance-animation">
      <div className="entrance-content">
        <div className="entrance-text">
          <div className="entrance-text-line entrance-text-line-top">
            <span className={`entrance-word ${showWord1 ? 'visible' : ''}`}>technology</span>
            <span className={`entrance-word ${showWord2 ? 'visible' : ''}`}>leadership</span>
          </div>
          <div className={`entrance-bar ${showLine ? 'visible' : ''}`}></div>
          <div className="entrance-text-line entrance-text-line-bottom">
            <span className={`entrance-word ${showWord3 ? 'visible' : ''}`}>excellence</span>
            <span className={`entrance-word ${showWord4 ? 'visible' : ''}`}>brotherhood</span>
          </div>
        </div>
      </div>
      <div className={`entrance-panel entrance-panel-top ${panelsExpanding ? 'expanding' : ''}`}></div>
      <div className={`entrance-panel entrance-panel-bottom ${panelsExpanding ? 'expanding' : ''}`}></div>
    </div>
  )
}

export default EntranceAnimation

