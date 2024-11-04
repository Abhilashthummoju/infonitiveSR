// src/Navbar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons"; // Correctly importing the square phone icon

function Navbar() {
  const navbarStyle = {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    padding: "15px 30px",
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent
    color: "white",
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: "1.7rem",
    fontWeight: "bold",
  };

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    marginLeft: 400,
    padding: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginLeft: 50
  };

  const linkHoverStyle = {
    color: "#00f2fe",
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
    alignItems:'center',
    justifyConent: "ceter",
    borderRadius: 7,
    padding: 5
  }

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
      <FontAwesomeIcon icon={faSquarePhone} size="2x" style={{ marginRight: '8px',marginLeft:'5px' }} /> {/* Increased size to 2x */}
      call us at : 0000000000
      </div>
    </nav>
  );
}

export default Navbar;
