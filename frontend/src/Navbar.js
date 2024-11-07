import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive"; // Importing react-responsive hook

function Navbar() {
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home");

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmallScreen = useMediaQuery({ maxWidth: 480 });

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
    padding: isMobile ? "10px 15px" : "15px 30px",
    display: "flex",
    alignItems: "center",
    backgroundColor: isHeroSection ? "#F5F5F5" : "white",
    color: isHeroSection ? "white" : "black",
    zIndex: 1000,
    height: 50,
    transition: "background-color 0.3s, color 0.3s",
    borderBottom: "0.01px solid #D6C0B3",
    paddingBottom: isMobile ? "10px" : "20px",
  };

  const logoStyle = {
    fontSize: isSmallScreen ? "1.2rem" : isMobile ? "1.5rem" : "1.7rem",
    fontWeight: "bold",
    color: "black",
    marginLeft: isSmallScreen ? 15 : isMobile ? 0 : 50,
  };

  const navLinksStyle = {
    listStyle: "none",
    display: isMobile ? "none" : "flex",
    gap: "20px",
    marginLeft: isMobile ? 0 : 260,
    padding: 0,
  };

  const linkStyle = (isSelected) => ({
    color: isSelected ? "white" : isHeroSection ? "black" : "black",
    textDecoration: "none",
    fontSize: isSmallScreen ? "1.2rem" : "1.4rem",
    marginLeft: 10,
    position: "relative",
    fontFamily: "Times New Roman",
    backgroundColor: isSelected ? "blue" : "transparent",
    padding: "10px 15px",
    borderRadius: "5px",
  });

  const callusat = {
    color: "white",
    fontSize: isSmallScreen ? "1.2rem" : "1.4rem",
    fontWeight: "bold",
    marginLeft: isMobile ? 20 : 120,
    width: isMobile ? "auto" : 300,
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
    width: "200px",
  };

  const dropdownItemStyle = {
    padding: "10px 20px",
    cursor: "pointer",
    color: "black",
  };

  const handleDropdownClick = (section) => {
    setIsDropdownOpen(false);
    setSelectedSection(section.replace(/ /g, "").toLowerCase());
    document
      .getElementById(section.replace(/ /g, "").toLowerCase())
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Inofinitive SR</div>
      <ul style={navLinksStyle}>
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li
            key={item}
            onMouseEnter={() => {
              if (item === "Services") setIsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              if (item === "Services") setIsDropdownOpen(false);
            }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              style={linkStyle(selectedSection === item.toLowerCase())}
              onClick={() => {
                setSelectedSection(item.toLowerCase());
              }}
            >
              {item} {item === "Services" && <FontAwesomeIcon icon={faCaretDown} />}
            </a>
            {item === "Services" && isDropdownOpen && (
              <div style={dropdownStyle}>
                {["Customer Support", "Technical Support", "Telemarketing Services"].map(
                  (service) => (
                    <div
                      key={service}
                      style={dropdownItemStyle}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleDropdownClick(service)}
                    >
                      {service}
                    </div>
                  )
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div style={callusat}>
        <FontAwesomeIcon icon={faSquarePhone} size="2x" style={{ marginRight: "8px", marginLeft: "5px" }} />
        <label style={{ fontSize: isSmallScreen ? 16 : 20 }}>call us at : 7416305104</label>
      </div>
    </nav>
  );
}

export default Navbar;
