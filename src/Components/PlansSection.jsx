import React from 'react'

// ---STYLE---
import '../style/plans.css'

// ---ICONS---
import AvailabilityIcon from '../assets/available.png';
import PremiumAvailabilityIcon from '../assets/premium.png';
import NotAvailableIcon from '../assets/not-vailable.png';

const PlansSection = () => {
  return (
    <div className="plans-section section">
        <h1>Transparent daily pricing</h1>

        <div className="popular-container">
            <p>Most Popular</p>
          </div>

        <div className="plans-cards">

            <div className="card basic">
              <div className="split">
                <div className="left">
                  <h2>200 <span>PKR/DAY</span></h2>
                </div>


                <div className="right">
                  <p>Basic</p>
                </div>
              </div>

              <div className="pkg-features">
                <p><img src={AvailabilityIcon}/>Upto 3 doctors</p>
                <p><img src={AvailabilityIcon}/>500 pateints</p>
                <p><img src={NotAvailableIcon}/>LIMS/Pharmacy</p>
                <p><img src={NotAvailableIcon}/>Email support</p>
              </div>

              <div className="button-container">
                <button className="btn" onClick={() => window.open('https://wa.me/923349471828?text=Hi%20Nexone%20Clinic%2C%20I%20want%20to%20get%20Basic%20plan')}>Get Basic</button>
              </div>

            </div>


            <div className="card standard">
              <div className="split">
                <div className="left">
                  <h2>300 <span>PKR/DAY</span></h2>
                </div>
                <div className="right">
                  <p>Standard</p>
                </div>
              </div>

              <div className="pkg-features">
                <p><img src={PremiumAvailabilityIcon}/>Unlimited doctors & patients</p>
                <p><img src={PremiumAvailabilityIcon}/>Full EHR + LIMS + Pharmacy</p>
                <p><img src={PremiumAvailabilityIcon}/>Full time maintenance</p>
                <p><img src={PremiumAvailabilityIcon}/>Free upgrades anytime</p>
                <p><img src={PremiumAvailabilityIcon}/>Priority WhatsApp support</p>
              </div>

              <div className="button-container">
                <button className="btn" onClick={() => window.open('https://wa.me/923349471828?text=Hi%20Nexone%20Clinic%2C%20I%20want%20to%20get%20Standard%20plan')}>Get Standard</button>
              </div>
            </div>

            
            <div className="card premium">
              <div className="split">
                <div className="left">
                  <h2>500 <span>PKR/DAY</span></h2>
                </div>
                <div className="right">
                  <p>Premium</p>
                </div>
              </div>

              <div className="pkg-features">
                <p><img src={AvailabilityIcon}/>Everything in standard</p>
                <p><img src={AvailabilityIcon}/>Advanced reports & analytics</p>
                <p><img src={AvailabilityIcon}/>Custom features on demand</p>
                <p><img src={AvailabilityIcon}/>Multi-branch support</p>
                <p><img src={AvailabilityIcon}/>Whatsapp report sharing + QR code access</p>
              </div>

              <div className="button-container">
                <button className="btn" onClick={() => window.open('https://wa.me/923349471828?text=Hi%20Nexone%20Clinic%2C%20I%20want%20to%20get%20Premium%20plan')}>Get Premium</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PlansSection