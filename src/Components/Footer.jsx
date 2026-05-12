import React from 'react'

// ---STYLE---
import '../style/footer.css'

// ---ICONS---
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section footer-brand">
          <h2>Nexone Clinic</h2>
          <p>Simplifying clinic management with powerful digital solutions.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#problem">Problem</a></li>
            <li><a href="#solution">Solution</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#get-started">Get Started</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#in-action">In Action</a></li>
          </ul>
        </div>

        {/* Features */}
        <div className="footer-section">
          <h3>Features</h3>
          <ul>
            <li><a href="#patient-management">Patient Management</a></li>
            <li><a href="#appointments">Appointments</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#analytics">Analytics</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section footer-contact">
          <h3>Contact</h3>
          <div className="contact-item">
            <MdEmail className="contact-icon" />
            <a href="mailto:nexonez64@gmail.com">nexonez64@gmail.com</a>
          </div>
          <div className="contact-item">
            <MdPhone className="contact-icon" />
            <a href="tel:+923349471828">+92 334 9471 828</a>
          </div>
          <div className="contact-item">
            <MdLocationOn className="contact-icon" />
            <span>Pakistan</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Nexone Clinic. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy</a>
          <span>•</span>
          <a href="#terms">Terms</a>
          <span>•</span>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
