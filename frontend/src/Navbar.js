import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home");

  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  useEffect(() => {
    const handleScroll = () => {
      setIsHeroSection(window.scrollY <= window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownClick = (section) => {
    setIsDropdownOpen(false);
    setSelectedSection(section.replace(/ /g, "").toLowerCase());
    document
      .getElementById(section.replace(/ /g, "").toLowerCase())
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      padding: "15px 20px",
      display: "flex",
      alignItems: "center",
      backgroundColor: isHeroSection ? "transparent" : "#ffffff",
      color: isHeroSection ? "black" : "black",
      zIndex: 1000,
      transition: "background-color 0.3s, color 0.3s",
      borderBottom: isHeroSection ? "none" : "1px solid #ddd",
    }}>
      <div style={{
        fontSize: isMobile ? "1.2rem" : "1.5rem",
        fontWeight: "bold",
        color: isHeroSection ? "black" : "black",
        flex: 1,
      }}>
        Inofinitive SR
      </div>
      {!isTabletOrMobile && (
        <ul style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
          flex: 2,
          justifyContent: "center",
        }}>
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              onMouseEnter={() => item === "Services" && setIsDropdownOpen(true)}
              onMouseLeave={() => item === "Services" && setIsDropdownOpen(false)}
            >
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  color: selectedSection === item.toLowerCase() ? "#ffffff" : isHeroSection ? "black" : "#000000",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  padding: "8px 12px",
                  fontWeight: selectedSection === item.toLowerCase() ? "bold" : "normal",
                  backgroundColor: selectedSection === item.toLowerCase() ? "#0077ff" : "transparent",
                  borderRadius: "5px",
                }}
                onClick={() => setSelectedSection(item.toLowerCase())}
              >
                {item} {item === "Services" && <FontAwesomeIcon icon={faCaretDown} />}
              </a>
              {item === "Services" && isDropdownOpen && (
                <div style={{
                  position: "absolute",
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginTop: "10px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                  zIndex: 1000,
                  display: "block",
                  width: "200px",
                }}>
                  {["Customer Support", "Technical Support", "Telemarketing Services"].map(
                    (service) => (
                      <div
                        key={service}
                        style={{
                          padding: "10px 20px",
                          cursor: "pointer",
                          color: "black",
                        }}
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
      )}
      <div style={{
        fontSize: isMobile ? "1rem" : "1.1rem",
        fontWeight: "bold",
        color: "white",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0077ff",
        borderRadius: "5px",
        padding: "8px 12px",
        flex: isMobile ? 1 : "auto",
        justifyContent: "center"
      }}>
        <FontAwesomeIcon icon={faSquarePhone} style={{ marginRight: "8px" }} />
        <span>Call us at: 7416305104</span>
      </div>
    </nav>
  );
}

export default Navbar;
