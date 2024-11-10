import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaPhone } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle(isMobile)}>
        <div style={footerSectionStyle(isMobile)}>
          <h3 style={headingStyle}>Our Services</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>Customer Support</li>
            <li style={listItemStyle}>Technical Support</li>
            <li style={listItemStyle}>Telemarketing Services</li>
          </ul>
        </div>
        <div style={footerSectionStyle(isMobile)}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p style={paragraphStyle}>Email: support@inofinitive.com</p>
          <p style={paragraphStyle}>Phone: +91-7416305104</p>
          <div style={socialIconsStyle}>
            <a href="https://www.instagram.com/inofinitive/" style={iconStyle}> 
              <FaInstagram />
            </a>
            <a href="https://whatsapp.com/channel/0029VaggzeF7Noa0MshelR00" style={iconStyle}>
              <FaWhatsapp />
            </a>
            <a href="#" style={iconStyle}>
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div style={footerSectionStyle(isMobile)}>
          <h3 style={headingStyle}>About Us</h3>
          <p style={paragraphStyle}>
            We are committed to providing exceptional services to our customers. Our team works tirelessly to ensure your satisfaction and success.
          </p>
        </div>
      </div>
      <div style={footerBottomWrapperStyle(isMobile)}>
        <div style={contactInfoStyle}>
          <FaPhone style={phoneIconStyle} />
          <span style={callTextStyle}>Call us at anytime: +91-7416305104</span>
        </div>
        <div style={emailInfoStyle}>
          <p style={footerTextStyle}>Email: support@inofinitive.com</p>
        </div>
      </div>
      <div style={{...footerBottomWrapperStyle(isMobile), textAlign: "center", justifyContent: "center", display: "flex"}}>
        <p style={footerTextStyle}>&copy; 2024 Inofinitive SR. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Enhanced CSS Styles with White and Blue Theme

const footerStyle = {
  backgroundColor: '#ffffff',
  color: '#1f3a68',
  padding: "60px 30px",
  paddingRight: 0,
  fontFamily: "'Arial', sans-serif",
  textAlign: 'center',
  boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
  animation: 'fadeIn 1.5s ease-in-out',
  transition: 'background-color 0.3s ease',
  display: isMobile? "flex":"",
  alignItems: "center",
  justifyContent:"center"
};

const footerContentStyle = (isMobile) => ({
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  margin: '0 auto',
  gap: '30px',
  paddingBottom: '30px',
  flexWrap: 'wrap',
});

const footerSectionStyle = (isMobile) => ({
  flex: isMobile ? '1' : '0.3',
  width: isMobile ? '100%' : 'auto',  // Use full width on mobile
  padding: isMobile ? '10px' : '20px', // Adjust padding for mobile
  borderRadius: '15px',
  backgroundColor: '#ffffff',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', // Shadow for sections
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  minHeight: '270px',
  marginBottom: '20px',
  boxSizing: 'border-box', // To prevent overflow due to padding
});

const headingStyle = {
  fontSize: '1.7rem',
  marginBottom: '20px',
  color: '#1f3a68',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  fontWeight: '600',
  transition: 'color 0.3s ease',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
  color: '#5a6e8f',
  marginTop: '15px',
};

const listItemStyle = {
  margin: '12px 0',
  fontSize: '1.1rem',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
};

const paragraphStyle = {
  margin: '15px 0',
  color: '#777',
  fontSize: '1rem',
  lineHeight: '1.6',
};

const socialIconsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
};

const iconStyle = {
  fontSize: '2rem',
  color: '#1f3a68',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const footerBottomWrapperStyle = (isMobile) => ({
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  justifyContent: isMobile ? 'center' : 'space-between',
  alignItems: 'center',
  borderTop: '1px solid #e0e0e0',
  padding: '20px 0',
  marginTop: '20px',
  textAlign: "center",
  backgroundColor: '#f9f9f9',
});

const contactInfoStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  color: '#1f3a68',
  fontWeight: '500',
};

const phoneIconStyle = {
  fontSize: '1.8rem',
};

const callTextStyle = {
  fontSize: '1.2rem',
  color: '#5a6e8f',
  textAlign: 'center',
};

const emailInfoStyle = {
  textAlign: 'center',
  marginTop: '10px',
};

const footerTextStyle = {
  margin: '0',
  color: '#777',
  fontSize: '0.9rem',
  opacity: 0.8,
  fontWeight: '400',
};

export default Footer;
