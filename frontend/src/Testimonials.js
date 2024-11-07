import React, { useState, useEffect } from "react";
import face from "./images/face.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const testimonialsData = [
    {
      name: "John Doe",
      feedback:
        "Inofinitive SR has revolutionized our customer service process. The support team is highly professional and efficient.",
      image: "face",
    },
    {
      name: "Jane Smith",
      feedback:
        "The technical support we received was exceptional. The staff was knowledgeable and resolved our issues promptly.",
      image: "face",
    },
    {
      name: "Mark Johnson",
      feedback:
        "Thanks to Inofinitive SR, our telemarketing efforts have improved significantly. We are now reaching more clients than ever!",
      image: "face",
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


  const container2Style = {
    display: "flex",
    flexDirection: "row",
    borderRadius: 25,
    width: "95%",
    padding: 10,
    alignItems: "center",
    height: "95%",
    background: "white",
    marginLeft: 25,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
  };


  const tempStyle = {
    height: "auto", // Adjust to auto to fit content
    width: "80%", // Width is more balanced for a centered look
    maxWidth: "900px", // Prevents it from stretching too much on larger screens
    padding: "40px",
    borderRadius: "15px", // Slightly smaller border radius for modern look
    marginLeft: "auto", // Centering the container
    marginRight: "auto",
    background: "linear-gradient(to right, rgba(79, 172, 254, 0.5), rgba(0, 242, 254, 0.5))",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)", // Enhanced depth
    animation: "fadeIn 1s ease-in-out",
    transform: "scale(1.02)", // Slight zoom in for emphasis
    transition: "transform 0.3s ease-in-out", // Smooth transition effect for hover
  };
  
  const titleStyle = {
    fontSize: "3.2rem", // Larger title for emphasis
    fontWeight: "bold",
    margin: "20px 0",
    color: "#00796b",
    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)", // Deeper shadow for 3D effect
    letterSpacing: "2px", // More pronounced letter spacing
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif", // More modern font
    animation: "slideUp 1s ease-out",
  };
  
  const paragraphStyle = {
    fontSize: "1.2rem", // Slightly larger text for better readability
    color: "#444", // Slightly darker text for contrast
    lineHeight: "1.8", // More space between lines for easier reading
    margin: "20px 0",
    textAlign: "justify",
    fontFamily: "'Arial', sans-serif",
    animation: "fadeIn 1.5s ease-out",
    opacity: 0,
    animationFillMode: "forwards", // Ensures animation is persistent
    transform: "translateY(10px)", // Starts slightly lower for a smoother fade
  };
  
  return (
    <div style={pageStyle}>
      <div style={container2Style}>
        <div style={tempStyle}>
          <h1 style={titleStyle}>What Our Clients Say</h1>
          <p style={paragraphStyle}>
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
                src={face}
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
          
         @keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px); // Starts below and fades in
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes hoverScale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05); // Slight scale effect on hover for more engagement
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
