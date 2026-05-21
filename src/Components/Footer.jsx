import React from 'react'
import '../style/footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Nexone Clinic</h2>
          <p>
            Modern clinic software for smooth patient care, secure records, and faster
            staff coordination — designed for a clean, professional experience.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#problem">Problem</a></li>
            <li><a href="#solution">Solution</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#plans">Pricing</a></li>
            <li><a href="#get-start">Get Started</a></li>
            <li><a href="#in-action">In Action</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-support">
          <h3>Contact</h3>
          <p>Email: nexonez64@gmail.com</p>
          <p>Phone: +923349471828</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Built for clinics that want powerful management without the clutter.</p>
        <p>© {year} Nexone Clinic. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
