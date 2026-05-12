import React from "react";

// ---IMAGES---
import heroImage from "../assets/hero-image.png";
import Dashboard from "../assets/dashboard.png";

// ---STYLES---
import "../style/hero.css";

// ---ICONS---
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";
import WhatsAppIcon from "../assets/WhatsApp.png";





const HeroSection = () => {

    // ---NAVIGATE---

  return (
    <div className="hero-section">
      <div className="image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>

      <div className="text-container">
        <h1>
          Complete Clinic Management And <br /> <span>EHR System</span>
        </h1>
        <p>
          Manage patients, reports, billing and staff — all in one simple
          software. Digitize your <br />
          clinic today.
        </p>
      </div>

      <div className="buttons-container">
        <button className="filled_btn demo-btn" onClick={() => window.open('https://wa.me/923349471828?text=Hi%20Nexone%20Clinic%2C%20I%20want%20a%20demo')}>
          {<HiOutlineShieldCheck className="demo-icon" />}Get Free Demo
        </button>
        <button className="outlined_btn whatsapp-btn" onClick={() => window.open('https://wa.me/923349471828?text=Hi%20Nexone%20Clinic%2C%20I%20want%20a%20demo')}>
          {<img src={WhatsAppIcon} className="whatsapp-icon"/>}Contact on Whatsapp
        </button>
      </div>

      .<div className="dashboard-image-container">
        <img src={Dashboard} alt="Dashboard" className="dashboard-image" />
      </div>
    </div>
  );
};

export default HeroSection;
