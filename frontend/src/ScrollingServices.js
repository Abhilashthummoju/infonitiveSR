import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const ScrollingServices = () => {
  const [hovered, setHovered] = useState(null);

  // Media queries for responsiveness
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const containerStyle = {
    width: "100%",
    overflow: "hidden",
    background: "#FFFFFF",
    padding: isMobile ? "10px 0" : "20px 0",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  };

  const servicesWrapperStyle = {
    display: "flex",
    gap: isMobile ? "1rem" : "1.5rem",
    animation: "scroll 15s linear infinite",
    whiteSpace: "nowrap",
  };

  const cardStyle = {
    background: "linear-gradient(135deg, #ff6a00, #ee0979)",
    borderRadius: "20px",
    color: "white",
    padding: isMobile ? "15px 20px" : "25px 35px",
    minWidth: isMobile ? "150px" : isTablet ? "200px" : "240px",
    textAlign: "center",
    fontSize: isMobile ? "0.9rem" : isTablet ? "1.1rem" : "1.2rem",
    fontWeight: "bold",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
    userSelect: "none",
    transform: "scale(1)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    border: "2px solid transparent",
    backgroundClip: "border-box",
    paddingBottom: isMobile ? "25px" : "35px",
  };

  const hoveredCardStyle = {
    transform: "scale(1.1)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
    background: "linear-gradient(135deg, #f70061, #ff6a00)",
  };

  const services = [
    "🌟 Customer Support",
    "⚙️ Technical Support",
    "📞 Telemarketing Services",
    "🎤 Voice Support",
    "💬 Non-Voice Support",
    "🌐 ISP Technical Support",
    "💻 Desktop and Laptop Support",
    "📦 Outbound Calling",
    "📞 Inbound Calling",
    "🔧 Software and Hardware Support",
  ];

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    if (styleSheet) {
      styleSheet.insertRule(`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <div style={containerStyle}>
      <div style={servicesWrapperStyle}>
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(hovered === index ? hoveredCardStyle : {}),
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingServices;
