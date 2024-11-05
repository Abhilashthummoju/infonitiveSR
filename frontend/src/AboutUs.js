import React from 'react';
import mission from './images/missin.webp'
import vision from './images/vision.webp'
import values from './images/values.webp'

const AboutUs = () => {
  return (
    <div id="about" style={pageStyle}>
      <div style={heroSectionStyle}>
        <h1 style={heroTitleStyle}>Welcome to Inofinitive SR</h1>
        <p style={heroSubtitleStyle}>
          We are dedicated to delivering world-class support and telecommunication services with passion and innovation.
        </p>
      </div>
      <div style={contentSectionStyle}>
        <div style={contentCardStyle}>
          <img
            src={mission} // Replace with your image URL
            alt="Our Mission"
            style={imageStyle}
          />
          <h2 style={cardHeadingStyle}>Our Mission</h2>
          <p style={cardTextStyle}>
            At Inofinitive SR, our mission is to empower businesses by providing top-notch customer and technical support,
            ensuring seamless operations and unmatched client satisfaction.
          </p>
        </div>
        <div style={contentCardStyle}>
          <img
            src={vision} // Replace with your image URL
            alt="Our Vision"
            style={imageStyle}
          />
          <h2 style={cardHeadingStyle}>Our Vision</h2>
          <p style={cardTextStyle}>
            We envision a world where every business, big or small, can thrive with the help of our reliable, efficient,
            and cutting-edge support and telecommunication solutions.
          </p>
        </div>
        <div style={contentCardStyle}>
          <img
            src={values} // Replace with your image URL
            alt="Our Values"
            style={imageStyle}
          />
          <h2 style={cardHeadingStyle}>Our Values</h2>
          <p style={cardTextStyle}>
            Integrity, innovation, and excellence are the cornerstones of our work. We believe in delivering the highest
            quality of service while fostering a culture of continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

// Inline CSS
const pageStyle = {
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: '#f3f4f6',
  color: '#444',
  padding: '40px 20px',
  textAlign: 'center',
  overflow: 'hidden',
};

const heroSectionStyle = {
  background: 'linear-gradient(135deg, #e0f7fa, #b2dfdb)',
  color: 'black',
  padding: '80px 20px',
  borderRadius: '10px',
  margin: '20px auto',
  boxShadow: '0 15px 25px rgba(0, 0, 0, 0.15)',
  animation: 'fadeIn 1.5s ease-out',
};

const heroTitleStyle = {
  fontSize: '3rem',
  margin: '0',
  letterSpacing: '2px',
  animation: 'slideInFromLeft 1.5s ease-out',
};

const heroSubtitleStyle = {
  fontSize: '1.2rem',
  marginTop: '15px',
  animation: 'slideInFromRight 2s ease-out',
};

const contentSectionStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginTop: '50px',
  gap: '40px',
  animation: 'fadeIn 1.5s ease-in-out',
};

const contentCardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  width: '300px',
  transition: 'transform 0.4s, box-shadow 0.4s',
  animation: 'slideUp 1.2s forwards',
  transform: 'translateY(50px)',
};

const imageStyle = {
  width: '100%',
  borderRadius: '10px',
  marginBottom: '15px',
  animation: 'zoomIn 1.5s ease-out',
};

const cardHeadingStyle = {
  fontSize: '1.6rem',
  color: '#00796b',
  marginBottom: '10px',
  animation: 'pulse 2s infinite',
};

const cardTextStyle = {
  fontSize: '1rem',
  color: 'black',
  lineHeight: '1.6',
};


// Injecting Keyframes for Animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes slideInFromLeft {
    from { transform: translateX(-100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes slideInFromRight {
    from { transform: translateX(100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes zoomIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`, styleSheet.cssRules.length);

export default AboutUs;
