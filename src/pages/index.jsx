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

// ---STYLE---
import '../style/media.css'

const index = () => {
  return (
    <div>
        {/* ---COMPONENTS--- */}

        {/* --Hero Section-- */}
        <HeroSection />

        {/* ---PROBLEM SECTION--- */}
        <ProblemSection />

        {/* ---SOLUTION SECTION--- */}
        <SolutionSection />

        {/* ---FEATURES SECTION--- */}
        <FeaturesSection />

        {/* ---GET START SECTION */}
        <GetStartSection />

        {/* ---PLANS SECTION--- */}
        <PlansSection />

        {/* ---IN ACTION SECTION--- */}
        <InActionSection />

        {/* ---DigitizeYourClinic--- */}
        <DigitizeYourClinic />

        {/* ---FOOTER--- */}
        <Footer />
    </div>
  )
}

export default index