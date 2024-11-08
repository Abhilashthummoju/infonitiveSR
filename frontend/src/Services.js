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
import "./Services.css"; // Adding an external CSS file for better organization

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // Define breakpoints
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <div id="services" className="services-section">
      <div className="hero-section">
        <h1 className="hero-title">Our Services</h1>
      </div>

      {/* Customer Support */}
      <div className="service-category">
        <h2 className="service-heading">Customer Support</h2>
        <div className="services-container">
          {[
            {
              icon: <FaHeadset size={40} color="#007BFF" />,
              title: "Voice Support",
              text: "Dedicated assistance via phone to address customer inquiries and provide real-time solutions.",
            },
            {
              icon: <FaComments size={40} color="#007BFF" />,
              title: "Non - Voice Support",
              text: "Comprehensive customer support through email, chat, and ticketing systems for efficient issue resolution.",
            },
            {
              icon: <FaTicketAlt size={40} color="#007BFF" />,
              title: "Ticketing Service",
              text: "A streamlined system for logging and managing customer queries to ensure timely responses and resolution.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`service-card ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.icon}
              <h1>{service.title}</h1>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Support */}
      <div className="service-category">
        <h2 className="service-heading">Technical Support</h2>
        <div className="services-container">
          {[
            {
              icon: <FaWifi size={40} color="#007BFF" />,
              title: "ISP Technical Queries",
              text: "Specialized assistance for resolving technical issues related to internet service providers.",
            },
            {
              icon: <FaLaptopCode size={40} color="#007BFF" />,
              title: "Software/Hardware",
              text: "Comprehensive assistance with software installations, updates, and hardware maintenance.",
            },
            {
              icon: <FaBox size={40} color="#007BFF" />,
              title: "Product-Related Queries",
              text: "Solutions for any problems encountered with products to enhance customer satisfaction.",
            },
          ].map((service, index) => (
            <div
              key={index + 3}
              className={`service-card ${
                hoveredIndex === index + 3 ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.icon}
              <h1>{service.title}</h1>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Telemarketing Services */}
      <div className="service-category">
        <h2 className="service-heading">Telemarketing Services</h2>
        <div className="services-container">
          {[
            {
              icon: <FaBuilding size={40} color="#007BFF" />,
              title: "Outbound Calling",
              text: "Proactive outreach to potential customers for sales and marketing of products and services.",
            },
            {
              icon: <FaPhoneVolume size={40} color="#007BFF" />,
              title: "Inbound/Outbound Calling",
              text: "Support for insurance inquiries and services through dedicated inbound and outbound call handling.",
            },
          ].map((service, index) => (
            <div
              key={index + 6}
              className={`service-card ${
                hoveredIndex === index + 6 ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index + 6)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.icon}
              <h1>{service.title}</h1>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
