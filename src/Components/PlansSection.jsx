import React from 'react'

// ---STYLE---
import '../style/plans.css'

// ---ICONS---
import AvailabilityIcon from '../assets/available.png';
import PremiumAvailabilityIcon from '../assets/premium.png';
import NotAvailableIcon from '../assets/not-vailable.png';

const PlansSection = () => {
  return (
    <div id="plans" className="plans-section section">
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
                <p><img src={AvailabilityIcon} alt="Included feature"/>Upto 3 doctors</p>
                <p><img src={AvailabilityIcon} alt="Included feature"/>500 patients</p>
                <p><img src={NotAvailableIcon} alt="Not included feature"/>LIMS/Pharmacy</p>
                <p><img src={NotAvailableIcon} alt="Not included feature"/>Email support</p>
              </div>

              <div className="button-container">
                <button className="btn">Get Basic</button>
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
                <p><img src={PremiumAvailabilityIcon} alt="Included feature"/>Unlimited doctors & patients</p>
                <p><img src={PremiumAvailabilityIcon} alt="Included feature"/>Full EHR + LIMS + Pharmacy</p>
                <p><img src={PremiumAvailabilityIcon} alt="Included feature"/>Full time maintenance</p>
                <p><img src={PremiumAvailabilityIcon} alt="Included feature"/>Free upgrades anytime</p>
                <p><img src={PremiumAvailabilityIcon} alt="Included feature"/>Priority WhatsApp support</p>
              </div>

              <div className="button-container">
                <button className="btn">Get Standard</button>
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
                <p><img src={AvailabilityIcon} alt="Included feature"/>Everything in standard</p>
                <p><img src={AvailabilityIcon} alt="Included feature"/>Advanced reports & analytics</p>
                <p><img src={AvailabilityIcon} alt="Included feature"/>Custom features on demand</p>
                <p><img src={AvailabilityIcon} alt="Included feature"/>Multi-branch support</p>
                <p><img src={AvailabilityIcon} alt="Included feature"/>WhatsApp report sharing + QR code access</p>
              </div>

              <div className="button-container">
                <button className="btn">Get Premium</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PlansSection