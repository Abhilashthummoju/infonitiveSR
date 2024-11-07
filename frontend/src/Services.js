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
} from "react-icons/fa"; // Importing relevant icons

const Services = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Define breakpoints
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const sectionStyle = {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #FFFFFF, #D9D9D9)",
    color: "white",
    padding: "30px",
  };

  const heroSectionStyle = {
    background: "linear-gradient(135deg, #e0f7fa, #b2dfdb)",
    color: "black",
    padding: "30px 150px",
    borderRadius: "10px",
    margin: "20px auto",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
    animation: "fadeIn 1.5s ease-out",
  };

  const heroTitleStyle = {
    fontSize: "3rem",
    margin: "0",
    letterSpacing: "2px",
    animation: "slideInFromLeft 1.5s ease-out",
  };

  const ServicescontainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    padding: "30px",
    width: isMobile ? "90%" : isTablet ? "45%" : "280px",
    height: 300,
    margin: 10,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
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
      <div style={{ marginBottom: 20 }}>
        <div>
          <h2 style={{ textAlign: "center", color: "black" }}>Customer Support</h2>
        </div>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
          <div
            style={isHovered ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaHeadset size={40} color="#007BFF" />
            <h1 style={{ color: "black" }}>Voice Support</h1>
            <p style={{ color: "black" }}>
              Dedicated assistance via phone to address customer inquiries and provide real-time solutions.
            </p>
          </div>

          <div
            style={isHovered ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaComments size={40} color="#007BFF" />
            <h1 style={{ color: "black" }}>Non - Voice Support</h1>
            <p style={{ color: "black" }}>
              Comprehensive customer support through email, chat, and ticketing systems for efficient issue resolution.
            </p>
          </div>

          <div
            style={isHovered ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaTicketAlt size={40} color="#007BFF" />
            <h1 style={{ color: "black" }}>Ticketing Service</h1>
            <p style={{ color: "black" }}>
              A streamlined system for logging and managing customer queries to ensure timely responses and resolution.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Support */}
      <div style={{ marginBottom: 20 }}>
        <div>
          <h2 style={{ textAlign: "center", color: "black" }}>Technical Support</h2>
        </div>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
          <div
            style={isHovered ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaWifi size={40} color="#007BFF" />
            <h1 style={{ color: "black" }}> ISP Technical Queries</h1>
            <p style={{ color: "black" }}>
              Specialized assistance for resolving technical issues related to internet service providers.
            </p>
          </div>

          <div
            style={isHovered ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaLaptopCode size={40} color="#007BFF" />
            <h1 style={{ color: "black" }}> Software/Hardware</h1>
            <p style={{ color: "black" }}>
              Comprehensive assistance with software installations, updates, and hardware maintenance.
            </p>
          </div>

          <div
            style={isHovered ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaBox size={40} color="#007BFF" />
            <h1 style={{ color: "black" }}>Product-Related Queries</h1>
            <p style={{ color: "black" }}>
              Solutions for any problems encountered with products to enhance customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Telemarketing Services */}
      <div>
        <div>
          <h2 style={{ textAlign: "center", color: "black" }}>Telemarketing Services</h2>
        </div>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
          <div
            style={isHovered ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaBuilding size={40} color="#007BFF" />
            <h1 style={{ color: "black" }}>Outbound Calling</h1>
            <p style={{ color: "black" }}>
              Proactive outreach to potential customers for sales and marketing of products and services.
            </p>
          </div>

          <div
            style={isHovered ? { ...ServicescontainerStyle, ...hoverEffect } : ServicescontainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaPhoneVolume size={40} color="#007BFF" />
            <h1 style={{ color: "black" }}>Inbound/Outbound Calling</h1>
            <p style={{ color: "black" }}>
              Support for insurance inquiries and services through dedicated inbound and outbound call handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
