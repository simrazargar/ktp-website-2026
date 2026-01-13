import React, { useState } from 'react'
import Footer from '../components/Footer'
import TypewriterText from '../components/TypewriterText'
import './Eboard.css'

function Eboard() {
  const [currentSection, setCurrentSection] = useState(0) // 0: Title, 1: Subtitle, 2: Grid
  const [titleComplete, setTitleComplete] = useState(false)
  const [allContentComplete, setAllContentComplete] = useState(false)
  const boardMembers = [
    {
      role: 'Co-President',
      name: 'Daniel Lee'
    },
    {
      role: 'Co-President',
      name: 'Samantha Guernsey'
    },
    {
      role: 'Secretary',
      name: 'Nick Stitle'
    },
    {
      role: 'Treasurer',
      name: 'Nicole Amer'
    },
    {
      role: 'Director of Recruitment',
      name: 'Rylnn Chavez'
    },
    {
      role: 'Director of Membership',
      name: 'Tanzil Hussain'
    },
    {
      role: 'Director of Technology Development',
      name: 'Simra Zargar'
    },
    {
      role: 'Director of Professional and Academic Development',
      name: 'Allison Lin'
    },
    {
      role: 'Director of Marketing',
      name: 'Cici He'
    },
    {
      role: 'Social Events Coordinator',
      name: 'Josh Kang'
    }
  ]

  return (
    <div className="eboard-page">
      <div className="eboard-container">
        <h1 className="eboard-title">
          <TypewriterText 
            text="Executive Board"
            speed={80}
            shouldStart={currentSection === 0}
            onComplete={() => {
              setTimeout(() => {
                setTitleComplete(true)
                setCurrentSection(1)
                // Calculate when all animations complete: last animation starts at 0.5s delay + 0.8s duration = 1.3s
                setTimeout(() => {
                  setAllContentComplete(true)
                }, 1300)
              }, 500)
            }}
          />
        </h1>
        {titleComplete && (
          <>
            <p 
              className="eboard-subtitle fade-in-item" 
              style={{ animationDelay: '0.1s' }}
              onAnimationEnd={() => {
                setTimeout(() => setCurrentSection(2), 300)
              }}
            >
              Meet the dedicated members of Kappa Theta Pi
            </p>
            <div className="eboard-separator fade-in-item" style={{ animationDelay: '0.3s' }}></div>
          </>
        )}
        {titleComplete && (
          <div className="eboard-grid fade-in-item" style={{ animationDelay: '0.5s' }}>
          {boardMembers.map((member, index) => (
            <div key={index} className="eboard-card">
              {member.name === 'Daniel Lee' && member.role === 'Co-President' ? (
                <a 
                  href="https://www.linkedin.com/in/daniel-lee-usc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eboard-image-link"
                >
                  <img 
                    src="/daniel-lee.jpeg" 
                    alt="Daniel Lee" 
                    className="eboard-image eboard-image-clickable"
                  />
                </a>
              ) : member.name === 'Samantha Guernsey' && member.role === 'Co-President' ? (
                <a 
                  href="https://www.linkedin.com/in/samguernsey/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eboard-image-link"
                >
                  <img 
                    src="/sam-g.jpeg" 
                    alt="Samantha Guernsey" 
                    className="eboard-image eboard-image-clickable"
                  />
                </a>
              ) : member.name === 'Nicole Amer' && member.role === 'Treasurer' ? (
                <a 
                  href="https://www.linkedin.com/in/nicole-amer-17563a333/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eboard-image-link"
                >
                  <img 
                    src="/nicole-amer.jpeg" 
                    alt="Nicole Amer" 
                    className="eboard-image eboard-image-clickable"
                  />
                </a>
              ) : member.name === 'Rylnn Chavez' && member.role === 'Director of Recruitment' ? (
                <a 
                  href="https://www.linkedin.com/in/rylnnchavez/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eboard-image-link"
                >
                  <img 
                    src="/rylnn-chavez.jpeg" 
                    alt="Rylnn Chavez" 
                    className="eboard-image eboard-image-clickable"
                  />
                </a>
              ) : member.name === 'Tanzil Hussain' && member.role === 'Director of Membership' ? (
                <a 
                  href="https://www.linkedin.com/in/tanzilhussain/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eboard-image-link"
                >
                  <img 
                    src="/tanzil-hussain.jpeg" 
                    alt="Tanzil Hussain" 
                    className="eboard-image eboard-image-clickable"
                  />
                </a>
              ) : member.name === 'Simra Zargar' && member.role === 'Director of Technology Development' ? (
                <a 
                  href="https://www.linkedin.com/in/simra-zargar-a3a254243/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eboard-image-link"
                >
                  <img 
                    src="/simra-zargar.jpeg" 
                    alt="Simra Zargar" 
                    className="eboard-image eboard-image-clickable"
                  />
                </a>
              ) : member.name === 'Allison Lin' && member.role === 'Director of Professional and Academic Development' ? (
                <a 
                  href="https://www.linkedin.com/in/allisonlin9/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eboard-image-link"
                >
                  <img 
                    src="/allison-lin.jpeg" 
                    alt="Allison Lin" 
                    className="eboard-image eboard-image-clickable"
                  />
                </a>
              ) : member.name === 'Cici He' && member.role === 'Director of Marketing' ? (
                <a 
                  href="https://www.linkedin.com/in/xi-li-he/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eboard-image-link"
                >
                  <img 
                    src="/cici-he.jpeg" 
                    alt="Cici He" 
                    className="eboard-image eboard-image-clickable"
                  />
                </a>
              ) : member.name === 'Josh Kang' && member.role === 'Social Events Coordinator' ? (
                <a 
                  href="https://www.linkedin.com/in/joshkang3/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eboard-image-link"
                >
                  <img 
                    src="/josh-kang.jpg" 
                    alt="Josh Kang" 
                    className="eboard-image eboard-image-clickable"
                  />
                </a>
              ) : member.name === 'Nick Stitle' && member.role === 'Secretary' ? (
                <a 
                  href="https://www.linkedin.com/in/nicklas-stitle/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="eboard-image-link"
                >
                  <img 
                    src="/nick-stitle.jpeg" 
                    alt="Nick Stitle" 
                    className="eboard-image eboard-image-clickable"
                  />
                </a>
              ) : (
                <div className="eboard-image-placeholder"></div>
              )}
              <p className="eboard-role">{member.role}</p>
              <p className="eboard-name">{member.name}</p>
            </div>
          ))}
          </div>
        )}
      </div>
      <Footer showWhenReady={allContentComplete} />
    </div>
  )
}

export default Eboard

