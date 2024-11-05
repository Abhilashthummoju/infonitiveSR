import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const testimonialsData = [
    {
      name: "John Doe",
      feedback:
        "Inofinitive SR has revolutionized our customer service process. The support team is highly professional and efficient.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Jane Smith",
      feedback:
        "The technical support we received was exceptional. The staff was knowledgeable and resolved our issues promptly.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Mark Johnson",
      feedback:
        "Thanks to Inofinitive SR, our telemarketing efforts have improved significantly. We are now reaching more clients than ever!",
      image: "https://via.placeholder.com/100",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  //   const handleNext = () => {
  //     setAnimationDirection('slide-left');
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);

  const handleNext = () => {
    setAnimationDirection("slide-left");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setAnimationDirection("slide-right");
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const tempStyle = {
    height: 500,
    width: 500,
    // backgroundColor: "red",
    padding: 20,
    borderRadius: 30,
    marginLeft: 50,
  };

  const container2Style = {
    display: "flex",
    flexDirection:"row",
    borderRadius:25,
    width:"95%",
    padding: 10,
    alignItems:"center",
    height:"95%",
    background:"white",
    marginLeft: 25,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
}


  return (
    <div style={pageStyle}>
      <div style={container2Style}>
        <div style={tempStyle}>
          <h1 style={titleStyle}>What Our Clients Say</h1>
          <p>
            At Inofinitive SR, we transform customer experiences through
            dedicated support and exceptional service. Our integrated voice and
            non-voice customer support has boosted client satisfaction by 30%,
            while our technical support has reduced downtime by 40%, allowing
            businesses to focus on what they do best. With our telemarketing
            services, we've driven a 25% increase in lead conversions,
            connecting businesses with their target audience effectively. By
            fostering trust through reliable communication, we empower our
            clients to thrive in their industries. Partner with us and
            experience the difference that exceptional service can make.
          </p>
        </div>

        <div style={navigationContainerStyle}>
          <button onClick={handlePrev} style={navButtonStyle}>
            <span style={arrowLeftStyle}>←</span>
          </button>
          <div style={testimonialsContainerStyle}>
            <div
              className={`testimonial-card ${animationDirection}`}
              style={testimonialCardStyle}
            >
              <img
                src={testimonialsData[currentIndex].image}
                alt={testimonialsData[currentIndex].name}
                style={imageStyle}
              />
              <h2 style={nameStyle}>{testimonialsData[currentIndex].name}</h2>
              <p style={feedbackStyle}>
                {testimonialsData[currentIndex].feedback}
              </p>
            </div>
          </div>
          <button onClick={handleNext} style={navButtonStyle}>
            <span style={arrowRightStyle}>→</span>
          </button>
        </div>
      </div>

      {/* Inline CSS for sliding animations */}
      <style>
        {`
          .testimonial-card {
            transition: transform 0.6s ease-in-out;
            opacity: 1;
            position: relative;
          }
          
          .testimonial-card.slide-left {
            animation: slideLeft 0.6s forwards;
          }
          
          .testimonial-card.slide-right {
            animation: slideRight 0.6s forwards;
          }
          
          @keyframes slideLeft {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes slideRight {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

// Inline CSS
const pageStyle = {
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: "#F5F5F5",
  color: "#333",
  padding: "40px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
};

const titleStyle = {
  fontSize: "2.5rem",
  margin: "20px 0",
  color: "#00796b",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
};

const navigationContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 500,
  width: 700,
  marginLeft: 100,
};

const navButtonStyle = {
  background: "linear-gradient(45deg, #2193b0, #6dd5ed)",
  border: "none",
  borderRadius: "50%",
  color: "#fff",
  fontSize: "1.5rem",
  padding: "10px",
  cursor: "pointer",
  transition: "transform 0.3s",
  margin: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
  height: "50px",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
};

const arrowLeftStyle = {
  animation: "bounceLeft 1s infinite",
};

const arrowRightStyle = {
  animation: "bounceRight 1s infinite",
};

const testimonialsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "40px",
  height: 500,
  width: 500,
};

const testimonialCardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  padding: "30px",
  width: "500px",
  transition: "transform 0.3s, box-shadow 0.3s",
};

const imageStyle = {
  width: "170px",
  height: "170px",
  borderRadius: "50%",
  marginBottom: "35px",
  transition: "transform 0.3s",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  marginTop: 20,
};

const nameStyle = {
  fontSize: "1.6rem",
  color: "#00796b",
  marginBottom: "10px",
  fontWeight: "bold",
  letterSpacing: "1px",
};

const feedbackStyle = {
  fontSize: "1rem",
  color: "#555",
  lineHeight: "1.6",
  fontStyle: "italic",
};

export default Testimonials;
