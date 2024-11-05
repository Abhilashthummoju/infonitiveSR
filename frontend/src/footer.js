import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

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
            <a
              href="#"
              style={iconStyle}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2) rotate(10deg)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1) rotate(0deg)')}
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              style={iconStyle}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2) rotate(10deg)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1) rotate(0deg)')}
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              style={iconStyle}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2) rotate(10deg)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1) rotate(0deg)')}
            >
              <FaLinkedin />
            </a>
          </div>
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
  backgroundColor: '#fafafa',
  color: '#444',
  padding: '50px 20px',
  fontFamily: "'Roboto', sans-serif",
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
  animation: 'fadeIn 1s ease-in-out',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto',
  flexWrap: 'wrap',
  gap: '50px',
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
};

const headingStyle = {
  fontSize: '2.2rem',
  marginBottom: '20px',
  color: '#ff5722',
  textTransform: 'uppercase',
  letterSpacing: '2px',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
  color: '#555',
  lineHeight: '1.8',
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
  marginTop: '40px',
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

export default Footer;
