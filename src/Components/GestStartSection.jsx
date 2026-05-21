import React from 'react'

// ---STYLE---
import '../style/get-start.css'

// ---IMAGES---
import Bobs from '../assets/bobs.png'

const GestStartSection = () => {
  return (
    <div id="get-start" className="get-start-section section">
      <h1>Get started in 3 steps</h1>
      <div className="bobs">
        <img src={Bobs} alt="" />
      </div>

      <div className="text">

        <div className="step-1 step">
          <h3>Setup your clinic</h3>
          <p>Add staff, roles, categories.</p>
        </div>

        <div className="step-2 step">
          <h3>Add patients & tests</h3>
          <p>Register, schedule, upload catalog.</p>
        </div>

        <div className="step-3 step">
          <h3>Generate reports instantly</h3>
          <p>Bills, medical reports, analytics.</p>
        </div>

      </div>
    </div>
  )
}

export default GestStartSection