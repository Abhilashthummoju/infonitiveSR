import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqsData = [
    {
      question: 'What services does Inofinitive SR offer?',
      answer: 'We offer a range of services including customer support, technical support, and telemarketing services tailored to meet your business needs.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support via phone, email, or through our website’s contact form. We are available 24/7 to assist you.',
    },
    {
      question: 'Do you provide technical support for software issues?',
      answer: 'Yes, our technical support team is equipped to handle software and hardware issues efficiently and effectively.',
    },
    {
      question: 'What is the response time for support inquiries?',
      answer: 'We aim to respond to all inquiries within 1 hour during business hours and within 4 hours during off-hours.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Use react-responsive to handle responsiveness
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Frequently Asked Questions</h1>
      <div style={faqsContainerStyle}>
        {faqsData.map((faq, index) => (
          <div key={index} style={faqCardStyle(isMobile)}>
            <div onClick={() => toggleFAQ(index)} style={faqHeaderStyle(isMobile)}>
              <h2 style={questionStyle(isMobile)}>{faq.question}</h2>
              <span style={iconStyle(activeIndex === index, isMobile)}>+</span>
            </div>
            {activeIndex === index && <p style={answerStyle}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

// Enhanced CSS styles with animations and effects
const pageStyle = {
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: '#ffffff',
  color: '#333',
  padding: '40px 20px',
  textAlign: 'center',
  animation: 'fadeIn 1.5s ease-in-out',
  background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
};

const titleStyle = {
  fontSize: '2.8rem',
  margin: '20px 0',
  color: '#333',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  animation: 'fadeInUp 2s ease-in-out',
};

const faqsContainerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  marginTop: '30px',
  animation: 'fadeInUp 1.5s ease-in-out',
};

const faqCardStyle = (isMobile) => ({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
  marginBottom: '25px',
  padding: isMobile ? '12px' : '20px',
  transition: 'transform 0.3s, box-shadow 0.3s ease-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
  animation: 'fadeInUp 1s ease-in-out',
});

const faqHeaderStyle = (isMobile) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#00796b', // Softer, elegant color
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#004d40',
  },
  animation: 'fadeInUp 1s ease-in-out',
});

const questionStyle = (isMobile) => ({
  fontSize: isMobile ? '1.3rem' : '1.6rem',
  color: '#fff',
  margin: 0,
  fontWeight: '600',
  letterSpacing: '0.5px',
});

const iconStyle = (isActive, isMobile) => ({
  fontSize: isMobile ? '1.5rem' : '1.8rem',
  color: isActive ? '#fff' : '#ddd',
  transition: 'transform 0.3s, color 0.3s ease',
  transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
});

const answerStyle = {
  fontSize: '1rem',
  color: '#555',
  lineHeight: '1.8',
  padding: '15px 20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  animation: 'fadeIn 1s ease-in-out',
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
  @keyframes fadeInUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`, styleSheet.cssRules.length);

export default FAQs;
