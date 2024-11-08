import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  FaLaptopCode,
  FaHeadset,
  FaTicketAlt,
  FaComments,
  FaWifi,
  FaBox,
  FaPhoneVolume,
  FaBuilding,
} from "react-icons/fa";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // Define breakpoints
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #FFFFFF, #D9D9D9)",
    padding: isMobile?"5px":"30px",
  };

  const heroSectionStyle = {
    background: "linear-gradient(135deg, #e0f7fa, #b2dfdb)",
    color: "black",
    padding: isMobile ? "20px" : "30px 150px",
    borderRadius: "10px",
    margin: "20px auto",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
    animation: "fadeIn 1.5s ease-out",
    textAlign: "center",
  };

  const heroTitleStyle = {
    fontSize: isMobile ? "2rem" : "3rem",
    margin: "0",
    letterSpacing: "2px",
    animation: "slideInFromLeft 1.5s ease-out",
  };

  const ServicescontainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    padding: "20px",
    width: isMobile ? "90%" : isTablet ? "45%" : "280px",
    minHeight: "350px", // Setting a minimum height for each service card
    margin: "10px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const hoverEffect = {
    transform: "translateY(-10px)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
  };

  return (
    <div id="services" style={sectionStyle}>
      <div style={heroSectionStyle}>
        <h1 style={heroTitleStyle}>Our Services</h1>
      </div>

      {/* Customer Support */}
      <div style={{ marginBottom: 20, width: "100%" }}>
        <div>
          <h2 style={{ textAlign: "center", color: "black" }}>Customer Support</h2>
        </div>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { icon: <FaHeadset size={40} color="#007BFF" />, title: "Voice Support", text: "Dedicated assistance via phone to address customer inquiries and provide real-time solutions." },
            { icon: <FaComments size={40} color="#007BFF" />, title: "Non - Voice Support", text: "Comprehensive customer support through email, chat, and ticketing systems for efficient issue resolution." },
            { icon: <FaTicketAlt size={40} color="#007BFF" />, title: "Ticketing Service", text: "A streamlined system for logging and managing customer queries to ensure timely responses and resolution." },
          ].map((service, index) => (
            <div
              key={index}
              style={hoveredIndex === index ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.icon}
              <h1 style={{ color: "black" }}>{service.title}</h1>
              <p style={{ color: "black" }}>{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Support */}
      <div style={{ marginBottom: 20, width: "100%" }}>
        <div>
          <h2 style={{ textAlign: "center", color: "black" }}>Technical Support</h2>
        </div>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { icon: <FaWifi size={40} color="#007BFF" />, title: "ISP Technical Queries", text: "Specialized assistance for resolving technical issues related to internet service providers." },
            { icon: <FaLaptopCode size={40} color="#007BFF" />, title: "Software/Hardware", text: "Comprehensive assistance with software installations, updates, and hardware maintenance." },
            { icon: <FaBox size={40} color="#007BFF" />, title: "Product-Related Queries", text: "Solutions for any problems encountered with products to enhance customer satisfaction." },
          ].map((service, index) => (
            <div
              key={index}
              style={hoveredIndex === index + 3 ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
              onMouseEnter={() => setHoveredIndex(index + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.icon}
              <h1 style={{ color: "black" }}>{service.title}</h1>
              <p style={{ color: "black" }}>{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Telemarketing Services */}
      <div style={{ width: "100%" }}>
        <div>
          <h2 style={{ textAlign: "center", color: "black" }}>Telemarketing Services</h2>
        </div>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { icon: <FaBuilding size={40} color="#007BFF" />, title: "Outbound Calling", text: "Proactive outreach to potential customers for sales and marketing of products and services." },
            { icon: <FaPhoneVolume size={40} color="#007BFF" />, title: "Inbound/Outbound Calling", text: "Support for insurance inquiries and services through dedicated inbound and outbound call handling." },
          ].map((service, index) => (
            <div
              key={index}
              style={hoveredIndex === index + 6 ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
              onMouseEnter={() => setHoveredIndex(index + 6)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.icon}
              <h1 style={{ color: "black" }}>{service.title}</h1>
              <p style={{ color: "black" }}>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
