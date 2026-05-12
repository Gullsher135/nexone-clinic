import React from 'react'

// ---COMPONENTS---
import HeroSection from '../Components/HeroSection'
import ProblemSection from '../Components/ProblemSection'
import SolutionSection from '../Components/SolutionSection'
import FeaturesSection from '../Components/FeaturesSection'
import GetStartSection from '../Components/GestStartSection'
import PlansSection from '../Components/PlansSection'
import InActionSection from '../Components/InActionSection'
import DigitizeYourClinic from '../Components/DigitizeYourClinic'
import Footer from '../Components/Footer'

const index = () => {
  return (
    <div>
        {/* ---COMPONENTS--- */}

        {/* --Hero Section-- */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* ---PROBLEM SECTION--- */}
        <div id="problem">
          <ProblemSection />
        </div>

        {/* ---SOLUTION SECTION--- */}
        <div id="solution">
          <SolutionSection />
        </div>

        {/* ---FEATURES SECTION--- */}
        <div id="features">
          <FeaturesSection />
        </div>

        {/* ---GET START SECTION */}
        <div id="get-started">
          <GetStartSection />
        </div>

        {/* ---PLANS SECTION--- */}
        <div id="pricing">
          <PlansSection />
        </div>

        {/* ---IN ACTION SECTION--- */}
        <div id="in-action">
          <InActionSection />
        </div>

        {/* ---DigitizeYourClinic--- */}
        <DigitizeYourClinic />

        {/* ---FOOTER--- */}
        <Footer />

    </div>
  )
}

export default index