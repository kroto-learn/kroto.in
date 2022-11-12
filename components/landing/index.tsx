import React, { useRef } from 'react'
import Courses from './courses'
import Hero from './hero'
import OurTeam from './our-team'
import Signup from './signup'
import Solution from './solution'
import TutorialHell from './tutorial-hell'

export const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) return window.scrollTo(0, ref.current.offsetTop)
}

export default function Landing() {
  const solutionRef = useRef<HTMLDivElement>(null)
  const signupRef = useRef<HTMLDivElement>(null)
  const scrollToSolution = () => scrollToRef(solutionRef)
  return (
    <div>
      <Hero scrollToSolution={scrollToSolution} />
      {/* <TutorialHell scrollToSolution={scrollToSolution} /> */}

      <div ref={solutionRef}>
        <Solution />
      </div>

      <div id="courses">
        <Courses />
      </div>

      <div id="our-team">
        <OurTeam />
      </div>

      <div id="sign-up" ref={signupRef}>
        <Signup />
      </div>
    </div>
  )
}
