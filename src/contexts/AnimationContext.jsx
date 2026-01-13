import React, { createContext, useContext, useState } from 'react'

const AnimationContext = createContext()

export const useAnimation = () => {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider')
  }
  return context
}

export const AnimationProvider = ({ children }) => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0)
  const [completedAnimations, setCompletedAnimations] = useState(new Set())

  const registerAnimation = (index) => {
    return {
      shouldStart: currentAnimationIndex === index,
      onComplete: () => {
        setCompletedAnimations(prev => new Set([...prev, index]))
        setCurrentAnimationIndex(prev => prev + 1)
      }
    }
  }

  const resetAnimations = () => {
    setCurrentAnimationIndex(0)
    setCompletedAnimations(new Set())
  }

  return (
    <AnimationContext.Provider value={{ registerAnimation, resetAnimations }}>
      {children}
    </AnimationContext.Provider>
  )
}

