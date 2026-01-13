import React, { useState } from 'react'
import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import OurValues from '../components/OurValues'
import NetworkAndAlumni from '../components/NetworkAndAlumni'
import SocialLife from '../components/SocialLife'
import Contact from '../components/Contact'

function Home({ fadeInComplete = true }) {
  const [currentSection, setCurrentSection] = useState(0) // 0: Hero, 1: WhoWeAre, 2: OurValues, 3: NetworkAndAlumni, 4: SocialLife, 5: Contact

  const handleSectionComplete = (sectionIndex) => {
    setCurrentSection(sectionIndex + 1)
  }

  return (
    <>
      <Hero 
        shouldStart={currentSection === 0 && fadeInComplete}
        onSectionComplete={() => handleSectionComplete(0)}
      />
      <WhoWeAre 
        shouldStart={currentSection === 1}
        onSectionComplete={() => handleSectionComplete(1)}
      />
      <OurValues 
        shouldStart={currentSection === 2}
        onSectionComplete={() => handleSectionComplete(2)}
      />
      <NetworkAndAlumni 
        shouldStart={currentSection === 3}
        onSectionComplete={() => handleSectionComplete(3)}
      />
      <SocialLife 
        shouldStart={currentSection === 4}
        onSectionComplete={() => handleSectionComplete(4)}
      />
      <Contact 
        shouldStart={currentSection === 5}
        onSectionComplete={() => handleSectionComplete(5)}
      />
    </>
  )
}

export default Home

