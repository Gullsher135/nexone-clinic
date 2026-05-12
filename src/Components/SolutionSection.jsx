import React from 'react'

// --STYLES---
import '../style/solution.css'

// ---ICONS---
import Check from '../assets/check.png'

// ---IMAGE---
import WorkflowImage from '../assets/workflow.png'

const SolutionSection = () => {
  return (
   <div className="solution-section section">

    <div className="features">
        <h1>Nexone Clinic makes <br /> everything easy</h1>

        <div className="features-cards">

            <div className="card digital-records">
                <div className="icon">
                    <img src={Check} alt="Check Icon" />
                </div>

                <div className="text">
                    <h3>Digital Patient Records</h3>
                    <p>Instant access to complete patient  history</p>
                </div>
            </div>

            <div className="card report-generation">
                <div className="icon">
                    <img src={Check} alt="Check Icon" />
                </div>

                <div className="text">
                    <h3>Instant Report Generation</h3>
                    <p>Printable, professional lab & clinical reports</p>
                </div>
            </div>
            <div className="card smart-billing">
                <div className="icon">
                    <img src={Check} alt="Check Icon" />
                </div>

                <div className="text">
                    <h3>Smart Billing System</h3>
                    <p>Automated calculations & revenue tracking</p>
                </div>
            </div>
            <div className="card multi-role">
                <div className="icon">
                    <img src={Check} alt="Check Icon" />
                </div>

                <div className="text">
                    <h3>Multi-Role Support</h3>
                    <p>Admin, doctor, lab, reception, pharmacy</p>
                </div>
            </div>
        </div>
    </div>


    <div className="workflow">
        <p>One unified plaxtform to manage patient records, diagnostic reports, and billing — built for every role in your clinic, from reception to pharmacy.</p>
        <img src={WorkflowImage} alt="" />
    </div>

   </div>
  )
}

export default SolutionSection