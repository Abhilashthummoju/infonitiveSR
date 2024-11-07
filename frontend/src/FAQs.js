import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'; // Import react-responsive

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
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For mobile devices
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // For tablets

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Frequently Asked Questions</h1>
      <div style={faqsContainerStyle}>
        {faqsData.map((faq, index) => (
          <div key={index} style={faqCardStyle(isMobile)}>
            <div onClick={() => toggleFAQ(index)} style={faqHeaderStyle}>
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

// Inline CSS
const pageStyle = {
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: '#f8f9fa',
  color: '#333',
  padding: '40px 20px',
  textAlign: 'center',
  animation: 'fadeIn 1s ease-in-out',
};

const titleStyle = {
  fontSize: '2.5rem',
  margin: '20px 0',
  color: 'black',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
};

const faqsContainerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  marginTop: '30px',
  animation: 'fadeInUp 1.5s ease-in-out',
};

const faqCardStyle = (isMobile) => ({
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  overflow: 'hidden',
  cursor: 'pointer',
  padding: isMobile ? '10px' : '20px', // Mobile-friendly padding
});

const faqHeaderStyle = {
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#f1f1f1',
  },
};

const questionStyle = (isMobile) => ({
  fontSize: isMobile ? '1.2rem' : '1.5rem', // Adjust font size for mobile
  color: 'black',
  margin: 0,
});

const iconStyle = (isActive, isMobile) => ({
  fontSize: isMobile ? '1.2rem' : '1.5rem', // Adjust icon size for mobile
  color: isActive ? '#00796b' : '#aaa',
  transition: 'transform 0.3s',
  transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
});

const answerStyle = {
  padding: '15px 20px',
  fontSize: '1rem',
  color: '#555',
  lineHeight: '1.6',
  animation: 'fadeIn 0.5s ease-in-out',
};

const footerStyle = {
  marginTop: '60px',
  padding: '20px 0',
  borderTop: '1px solid #ddd',
  color: '#777',
  fontSize: '0.9rem',
};

const footerTextStyle = {
  margin: '0',
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
