import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"; // Importing down arrow icon

function Navbar() {
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home"); // Track selected section

  useEffect(() => {
    const handleScroll = () => {
      setIsHeroSection(window.scrollY <= window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    backgroundColor: isHeroSection ? "#F5F5F5" : "white",
    color: isHeroSection ? "white" : "black",
    zIndex: 1000,
    height: 50,
    transition: "background-color 0.3s, color 0.3s",
    borderBottom: '0.01px solid #D6C0B3', 
    paddingBottom: '20px',
    borderColor: "blue"
  };

  const logoStyle = {
    fontSize: "1.7rem",
    fontWeight: "bold",
    color: isHeroSection ? "black" : "black",
    marginLeft: 50,
  };

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    marginLeft: 260,
    padding: 0,
  };

  const linkStyle = (isSelected) => ({
    color: isSelected ? "white" : isHeroSection ? "black" : "black",
    textDecoration: "none",
    fontSize: "1.4rem",
    marginLeft: 10,
    position: "relative",
    fontFamily: 'Times New Roman',
    backgroundColor: isSelected ? "blue" : "transparent", // Blue background for selected section
    padding: "10px 15px",
    borderRadius: "5px", // Slightly rounded corners for the selected section
  });

  const callusat = {
    color: "white",
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginLeft: 160,
    width: 300,
    height: 50,
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    padding: 5,
  };

  const dropdownStyle = {
    position: "absolute",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    zIndex: 1000,
    display: isDropdownOpen ? "block" : "none",
    width: "200px", // Set a fixed width for dropdown
  };

  const dropdownItemStyle = {
    padding: "10px 20px",
    cursor: "pointer",
    color: "black",
  };

  const dropdownItemHoverStyle = {
    backgroundColor: "#f0f0f0",
  };

  const handleDropdownClick = (section) => {
    setIsDropdownOpen(false);
    setSelectedSection(section.replace(/ /g, '').toLowerCase()); // Update selected section
    document.getElementById(section.replace(/ /g, '').toLowerCase()).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Inofinitive SR</div>
      <ul style={navLinksStyle}>
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              style={linkStyle(selectedSection === item.toLowerCase())} // Use linkStyle function to determine styles
              onMouseEnter={() => {
                if (item === "Services") setIsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                if (item === "Services") setIsDropdownOpen(false);
              }}
              onClick={() => {
                setSelectedSection(item.toLowerCase()); // Update selected section on click
              }}
            >
              {item} {item === "Services" && <FontAwesomeIcon icon={faCaretDown} />} {/* Down arrow */}
            </a>
            {item === "Services" && (
              <div
                style={dropdownStyle}
                onMouseEnter={() => setIsDropdownOpen(true)} // Keep dropdown open on hover
                onMouseLeave={() => setIsDropdownOpen(false)} // Close on mouse leave
              >
                {["Customer Support", "Technical Support", "Telemarketing Services"].map(service => (
                  <div
                    key={service}
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.target.style = dropdownItemHoverStyle)}
                    onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                    onClick={() => handleDropdownClick(service)} // Navigate to section on click
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
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
