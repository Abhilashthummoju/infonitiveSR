import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import face from "./images/face.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

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
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
    flexDirection: isMobile ? "column" : "row",
    borderRadius: 25,
    width: isMobile ? "100%" : "95%",
    padding: isMobile ? 0 : 10,
    alignItems: "center",
    height: isMobile ? "auto" : "95%",
    background: "white",
    marginLeft: isMobile ? 0 : 25,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    margin: "auto",
  };

  const tempStyle = {
    height: "auto",
    width: isMobile ? "85%" : "80%",
    maxWidth: "900px",
    padding: isMobile ? "5px" : "40px",
    borderRadius: "15px",
    margin: isMobile ? "15px auto" : "auto",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
  };

  const pageStyle = {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f0f4f8",
    color: "#333",
    padding: isMobile ? "20px 0px" : "40px 20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const navigationContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: isMobile ? "auto" : 500,
    width: isMobile ? "100%" : 700,
    flexDirection: isMobile ? "column" : "row",
  };

  const testimonialsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    width: isMobile ? "90%" : 500,
  };

  const testimonialCardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: isMobile ? "100%" : 500,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const imageStyle = {
    width: isMobile ? "120px" : "170px",
    height: isMobile ? "120px" : "170px",
    borderRadius: "50%",
    marginBottom: "20px",
    border: "3px solid #fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  };

  const titleStyle = {
    fontSize: isMobile ? "2rem" : "3.2rem",
    fontWeight: "bold",
    margin: "20px 0",
    color: "#00796b",
    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    letterSpacing: "2px",
    textAlign: "center",
  };

  return (
    <div style={pageStyle}>
      <div style={container2Style}>
        <div style={tempStyle}>
          <h1 style={titleStyle}>What Our Clients Say</h1>
          <p style={{ fontSize: isMobile ? "1rem" : "1.2rem" }}>
            At Inofinitive SR, we transform customer experiences through
            dedicated support and exceptional service...
          </p>
        </div>
        <div style={navigationContainerStyle}>
          <button onClick={handlePrev} style={navButtonStyle}>
            <span style={{ fontSize: isMobile ? "1rem" : "1.5rem" }}>←</span>
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
              <h2>{testimonialsData[currentIndex].name}</h2>
              <p>{testimonialsData[currentIndex].feedback}</p>
            </div>
          </div>
          <button onClick={handleNext} style={navButtonStyle}>
            <span style={{ fontSize: isMobile ? "1rem" : "1.5rem" }}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline button styles
const navButtonStyle = {
  background: "linear-gradient(45deg, #2193b0, #6dd5ed)",
  border: "none",
  borderRadius: "50%",
  color: "#fff",
  padding: "10px",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  margin: "0 10px",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
};

export default Testimonials;
