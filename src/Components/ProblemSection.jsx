import React from "react";

// ---STYLES---
import "../style/problem.css";

// ---ICONS---
import PateintIcon from "../assets/patient-records.png";
import ReportsDelayIcon from "../assets/reports-delay.png";
import BillingIcon from "../assets/billing.png";
import TimeIcon from "../assets/time.png";

const ProblemSection = () => {
  return (
    <div className="problem-section section">
      <h1>Still managing your clinics manually?</h1>
      <p>
        Paper‑based systems create hidden costs and frustration every single
        day.
      </p>

      <div className="cards problem-cards">
        <div className="card lost-records">
          <div className="icon">
            <img src={PateintIcon} alt="Patient Records Icon" />
          </div>

          <div className="text-container">
            <h2>Lost Patient Record</h2>
            <p>Handwritten files get misplaced, <br /> delaying treatment.</p>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <img src={ReportsDelayIcon} alt="Reports Delay Icon" />
          </div>

          <div className="text-container">
            <div className="text-container">
              <h2>Report delays</h2>
            <p>Lab & prescription management <br />takes hours.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <img src={BillingIcon} alt="Billing Icon" />
          </div>

          <div className="text-container">
            <h2>Billing errors</h2>
            <p>Manual invoices cause revenue <br /> leakage.</p>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <img src={TimeIcon} alt="Time Icon" />
          </div>

          <div className="text-container">
            <h2>Time waste</h2>
            <p>2+ hours daily on admin tasks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
