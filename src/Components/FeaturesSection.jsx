import React from "react";

// ---STYLES---
import "../style/features.css";

// ---ICONS---
import patientManagementIcon from "../assets/patient.png";
import labIcon from "../assets/lab.png";
import smartBillingIcon from "../assets/smart-billing.png";
import doctorManagementIcon from "../assets/doctor-management.png";
import ehrRecordsIcon from "../assets/ehr.png";
import dailyReportsIcon from "../assets/reports.png";

const FeaturesSection = () => {
  return (
    <div className="features-section section">
      <h1>Everything you need</h1>

      <div className="features-cards-container">
        <div className="card patient-management">
          <img src={patientManagementIcon} alt="Patient Management Icon" />
          <h3>Patient Management</h3>
          <p>Centralized registry with complete history.</p>
        </div>
        <div className="card lab">
          <img src={labIcon} alt="Lab & Reports Icon" />
          <h3>Lab & Reports</h3>
          <p>Integrated LIMS, track results.</p>
        </div>
        <div className="card smart-billing">
          <img src={smartBillingIcon} alt="Smart Billing Icon" />
          <h3>Smart Billing</h3>
          <p>Invoice, credit notes, revenue tracking.</p>
        </div>
        <div className="card doctor-management">
          <img src={doctorManagementIcon} alt="Doctor Management Icon" />
          <h3>Doctor Management</h3>
          <p>Profiles, schedule, consultation fees.</p>
        </div>
        <div className="card ehr-records">
          <img src={ehrRecordsIcon} alt="EHR Records Icon" />
          <h3>EHR Records</h3>
          <p>Secure electronic health records.</p>
        </div>
        <div className="card daily-reports">
          <img src={dailyReportsIcon} alt="Daily Reports Icon" />
          <h3>Daily Reports</h3>
          <p>Analytics dashboard, revenue charts</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
