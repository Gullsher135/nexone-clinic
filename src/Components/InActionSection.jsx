import React from "react";

// ---STYLE---
import "../style/in-action.css";

// ---IMAGES---
import Dashboard from "../assets/dashboard.png";
import PatientRegistation from "../assets/patient-registration.png";

const InActionSection = () => {
  return (
    <div id="in-action" className="in-action-section section">
      <h1>See Nexone Clinic in action</h1>
      <p>Live previews of dashboard, patient form, and medical report</p>

      <div className="screen-overview-container">
        <div className="dashboard-overview overview">
          <div className="text">
            <h2>Dashboard Overview</h2>
            <p>
              Manage patients, appointments, medical records, and daily
              operations from one centralized dashboard. Track recent activity,
              monitor key statistics, and access important information quickly
              with a clean and user-friendly interface designed to simplify
              hospital and clinic management workflows.
            </p>
          </div>

          <div className="visual">
            <img src={Dashboard} alt="Dashboard Overview" />
          </div>
        </div>

        <div className="patient-registration-overview overview">
          <div className="visual">
            <img src={PatientRegistation} alt="Dashboard Overview" />
          </div>

          <div className="text">
            <h2>Patient Registration</h2>
            <p>
              Easily register new patients and maintain accurate records with a
              simple and organized registration system. Store personal details,
              contact information, medical history, and appointment data
              efficiently to ensure smooth patient management and faster service
              handling.
            </p>
          </div>
        </div>

        <div className="ehr-overview overview">
          <div className="text">
            <h2>EHR Overview</h2>
            <p>
              Access and manage complete electronic health records in one secure
              place. View patient history, diagnoses, prescriptions, test
              results, and treatment details efficiently to improve accuracy,
              streamline workflows, and support better healthcare decisions.
            </p>
          </div>

          <div className="visual">
            <img src={Dashboard} alt="Dashboard Overview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InActionSection;
