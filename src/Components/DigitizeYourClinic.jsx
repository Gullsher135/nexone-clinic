import React from 'react'

// ---STYLE---
import '../style/DigitizeYourClinic.css'

// ---ICONS---
import { HiOutlineShieldCheck } from "react-icons/hi2";
import WhatsAppIcon from "../assets/WhatsApp.png";

const DigitizeYourClinic = () => {
  return (
    <div id="contact" className="digitze-your-clinic ">
        <h1>Ready to digitize your clinic?</h1>
        <p>Join hundreds of clinics that saved 15+ hours per week.</p>


         <div className="buttons-digitize-container">
        <button className="filled_btn demo-btn">
          {<HiOutlineShieldCheck className="demo-icon" />}Get Free Demo
        </button>
        <button className="outlined_btn whatsapp-btn" onClick={() => window.open('https://wa.me/923358433067?text=Hi%20Nexone%20Clinic%2C%20I%20want%20a%20demo')}>
          {<img src={WhatsAppIcon} alt="WhatsApp icon" className="whatsapp-icon"/>}Contact on Whatsapp
        </button>
      </div>
    </div>
  )
}

export default DigitizeYourClinic