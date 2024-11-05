import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <h3 style={headingStyle}>Our Services</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>Customer Support</li>
            <li style={listItemStyle}>Technical Support</li>
            <li style={listItemStyle}>Telemarketing Services</li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p style={paragraphStyle}>Email: support@inofinitive.com</p>
          <p style={paragraphStyle}>Phone: +91-1234567890</p>
          <div style={socialIconsStyle}>
            <a href="#" style={iconStyle}>
              <FaInstagram />
            </a>
            <a href="#" style={iconStyle}>
              <FaFacebook />
            </a>
            <a href="#" style={iconStyle}>
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div style={footerSectionStyle}>
          <h3 style={headingStyle}>About Us</h3>
          <p style={paragraphStyle}>
            We are committed to providing exceptional services to our customers. Our team works tirelessly to ensure your satisfaction and success.
          </p>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <div style={contactInfoStyle}>
          <FaPhone style={{ ...phoneIconStyle, transform: 'rotate(180deg)' }} /> {/* Rotate phone icon */}
          <span style={callTextStyle}>Call us at anytime: +91-1234567890</span>
        </div>
        <div style={emailInfoStyle}>
          <p style={footerTextStyle}>Email: support@inofinitive.com</p>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p style={footerTextStyle}>&copy; 2024 Inofinitive SR. All rights reserved.</p>
      </div>
    </footer>
  );
};

// CSS Styles
const footerStyle = {
  backgroundColor: '#F5F5F5',
  color: '#444',
  padding: '50px 20px',
  fontFamily: "'Arial', sans-serif", // Changed to a more professional font
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.2)',
  animation: 'fadeIn 1s ease-in-out',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  margin: '0 auto',
  flexWrap: 'wrap',
  gap: '20px',
};

const footerSectionStyle = {
  flex: '1',
  minWidth: '300px',
  padding: '20px',
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  transform: 'translateY(20px)',
  animation: 'slideUp 0.8s ease forwards',
  opacity: '0',
  height: '250px',
  animationDelay: '0.2s', // Delay for staggered animation
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  color: '#000',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontFamily: "'Times New Roman', sans-serif", // Consistent font choice
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
  color: '#555',
  lineHeight: '1.8',
  animation: 'fadeIn 1s ease-in-out',
};

const listItemStyle = {
  margin: '12px 0',
  fontSize: '1.1rem',
  transition: 'color 0.3s',
  cursor: 'pointer',
};

const paragraphStyle = {
  margin: '10px 0',
  color: '#666',
  fontSize: '1rem',
  animation: 'fadeIn 1s ease-in-out',
};

const socialIconsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '25px',
  marginTop: '20px',
};

const iconStyle = {
  fontSize: '2.5rem',
  color: '#ff5722',
  transition: 'transform 0.4s, color 0.3s',
  cursor: 'pointer',
  textDecoration: 'none',
};

const footerBottomStyle = {
  // marginTop: '40px',
  padding: '10px 0',
  borderTop: '1px solid #ddd',
  color: '#888',
  fontSize: '0.9rem',
  letterSpacing: '0.8px',
};

const footerTextStyle = {
  margin: '0',
  animation: 'fadeIn 2s ease-in-out',
};

const contactInfoStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  // marginBottom: '20px',
};

const phoneIconStyle = {
  fontSize: '1.5rem',
  marginRight: '10px',
  color: '#ff5722',
  transition: 'transform 0.3s', // Add a transform transition for animations
};

const callTextStyle = {
  fontSize: '1rem',
  color: '#666',
  animation: 'fadeIn 1s ease-in-out',
};

const emailInfoStyle = {
  textAlign: 'right',
  marginTop: -20,
  marginRight: 10
};

// Injecting Keyframes for Animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes slideUp {
    from { transform: translateY(40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`, styleSheet.cssRules.length);

// Adding animation for the entire footer
styleSheet.insertRule(`
  footer {
    animation: fadeIn 1.2s ease-in-out;
  }
`, styleSheet.cssRules.length);

export default Footer;
