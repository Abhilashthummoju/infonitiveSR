// src/Navbar.js
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is at the top or past a certain point
      if (window.scrollY > window.innerHeight * 0.5) { // Adjust this value as needed
        setIsHeroSection(false);
      } else {
        setIsHeroSection(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamic style based on the hero section visibility
  const navbarStyle = {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    backgroundColor: isHeroSection
      ? "rgba(255, 255, 255, 0.48)" // Transparent for the hero section
      : "white", // White for other sections
    color: isHeroSection ? "white" : "black",
    zIndex: 1000,
    height: 50,
    transition: "background-color 0.3s, color 0.3s",
  };

  const logoStyle = {
    fontSize: "1.7rem",
    fontWeight: "bold",
    color: isHeroSection ? "white" : "black",
  };

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    marginLeft: 400,
    padding: 0,
  };

  const linkStyle = {
    color: isHeroSection ? "white" : "black",
    textDecoration: "none",
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginLeft: 50,
  };

  const linkHoverStyle = {
    color: "blue",
  };

  const callusat = {
    color: "white",
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginLeft: 40,
    width: 300,
    height: 50,
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    padding: 5,
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Inofinitive SR</div>
      <ul style={navLinksStyle}>
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div style={callusat}>
        <FontAwesomeIcon
          icon={faSquarePhone}
          size="2x"
          style={{ marginRight: "8px", marginLeft: "5px" }}
        />
        call us at : 0000000000
      </div>
    </nav>
  );
}

export default Navbar;
