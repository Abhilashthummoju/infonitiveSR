import React from 'react';
import { useMediaQuery } from 'react-responsive';
import mission from './images/missin.webp';
import vision from './images/vision.webp';
import values from './images/values.webp';

const AboutUs = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const pageStyle = {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#f3f4f6',
    color: '#444',
    padding: isTabletOrMobile ? '20px' : '40px 20px',
    textAlign: 'center',
  };

  const heroSectionStyle = {
    background: 'linear-gradient(135deg, #e0f7fa, #b2dfdb)',
    color: 'black',
    padding: isTabletOrMobile ? '30px 20px' : '60px 20px',
    borderRadius: '10px',
    margin: '20px auto',
    maxWidth: '100%',
    boxShadow: '0 15px 25px rgba(0, 0, 0, 0.15)',
  };

  const heroTitleStyle = {
    fontSize: isMobile ? '1.5rem' : isTabletOrMobile ? '2rem' : '2.5rem',
    margin: '0',
    letterSpacing: '1.5px',
  };

  const heroSubtitleStyle = {
    fontSize: isTabletOrMobile ? '1rem' : '1.2rem',
    marginTop: '15px',
  };

  const contentSectionStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '40px',
  };

  const contentCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: isMobile ? '100%' : '280px',
    maxWidth: '100%',
    transition: 'transform 0.4s, box-shadow 0.4s',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '15px',
  };

  const cardHeadingStyle = {
    fontSize: '1.3rem',
    color: '#00796b',
    marginBottom: '10px',
  };

  const cardTextStyle = {
    fontSize: isTabletOrMobile ? '0.9rem' : '1rem',
    color: 'black',
    lineHeight: '1.6',
  };

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
          <img src={mission} alt="Our Mission" style={imageStyle} />
          <h2 style={cardHeadingStyle}>Our Mission</h2>
          <p style={cardTextStyle}>
            At Inofinitive SR, our mission is to empower businesses by providing top-notch customer and technical support, ensuring seamless operations and unmatched client satisfaction.
          </p>
        </div>
        <div style={contentCardStyle}>
          <img src={vision} alt="Our Vision" style={imageStyle} />
          <h2 style={cardHeadingStyle}>Our Vision</h2>
          <p style={cardTextStyle}>
            We envision a world where every business, big or small, can thrive with the help of our reliable, efficient, and cutting-edge support and telecommunication solutions.
          </p>
        </div>
        <div style={contentCardStyle}>
          <img src={values} alt="Our Values" style={imageStyle} />
          <h2 style={cardHeadingStyle}>Our Values</h2>
          <p style={cardTextStyle}>
            Integrity, innovation, and excellence are the cornerstones of our work. We believe in delivering the highest quality of service while fostering a culture of continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
