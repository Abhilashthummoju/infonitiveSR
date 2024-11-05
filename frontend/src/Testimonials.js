import React from 'react';

const Testimonials = () => {

    // Adding Event Listeners
React.useEffect(() => {
    const cards = document.querySelectorAll('[style*="testimonialCardStyle"]');
    cards.forEach(card => {
      card.addEventListener('mouseover', handleCardMouseOver);
      card.addEventListener('mouseout', handleCardMouseOut);
    });
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseover', handleCardMouseOver);
        card.removeEventListener('mouseout', handleCardMouseOut);
      });
    };
  }, []); 
  const testimonialsData = [
    {
      name: 'John Doe',
      feedback: 'Inofinitive SR has revolutionized our customer service process. The support team is highly professional and efficient.',
      image: 'https://via.placeholder.com/100', // Replace with an actual image URL
    },
    {
      name: 'Jane Smith',
      feedback: 'The technical support we received was exceptional. The staff was knowledgeable and resolved our issues promptly.',
      image: 'https://via.placeholder.com/100', // Replace with an actual image URL
    },
    {
      name: 'Mark Johnson',
      feedback: 'Thanks to Inofinitive SR, our telemarketing efforts have improved significantly. We are now reaching more clients than ever!',
      image: 'https://via.placeholder.com/100', // Replace with an actual image URL
    },
  ];

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>What Our Clients Say</h1>
      <div style={testimonialsContainerStyle}>
        {testimonialsData.map((testimonial, index) => (
          <div style={testimonialCardStyle} key={index}>
            <img src={testimonial.image} alt={testimonial.name} style={imageStyle} />
            <h2 style={nameStyle}>{testimonial.name}</h2>
            <p style={feedbackStyle}>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS
const pageStyle = {
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: '#e9ecef',
  color: '#333',
  padding: '40px 20px',
  textAlign: 'center',
  animation: 'fadeIn 1s ease-in-out',
};

const titleStyle = {
  fontSize: '2.5rem',
  margin: '20px 0',
  color: '#00796b',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  animation: 'bounce 1.5s infinite',
};

const testimonialsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '40px',
  marginTop: '30px',
  animation: 'fadeInUp 1.5s ease-in-out',
};

const testimonialCardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  padding: '30px',
  width: '300px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  animation: 'slideIn 1s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
};

const imageStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  marginBottom: '15px',
  transition: 'transform 0.3s',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const nameStyle = {
  fontSize: '1.6rem',
  color: '#00796b',
  marginBottom: '10px',
  fontWeight: 'bold',
  letterSpacing: '1px',
};

const feedbackStyle = {
  fontSize: '1rem',
  color: '#555',
  lineHeight: '1.6',
  fontStyle: 'italic',
  transition: 'color 0.3s',
};

// Hover Effects
const testimonialCardHoverStyle = {
  transform: 'translateY(-10px)',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
};

const imageHoverStyle = {
  transform: 'scale(1.1)',
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

styleSheet.insertRule(`
  @keyframes slideIn {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes scaleUp {
    from { transform: scale(0.95); }
    to { transform: scale(1); }
  }
`, styleSheet.cssRules.length);

// Add Hover Effect Event Listeners
const handleCardMouseOver = (e) => {
  e.currentTarget.style.transform = testimonialCardHoverStyle.transform;
  e.currentTarget.style.boxShadow = testimonialCardHoverStyle.boxShadow;
  const image = e.currentTarget.querySelector('img');
  if (image) {
    image.style.transform = imageHoverStyle.transform;
  }
};

const handleCardMouseOut = (e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  const image = e.currentTarget.querySelector('img');
  if (image) {
    image.style.transform = 'scale(1)';
  }
};



export default Testimonials;
