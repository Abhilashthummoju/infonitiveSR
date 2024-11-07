import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone, faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{
      position: "fixed",
      width: "98%",
      top: 0,
      left: 0,
      padding: "15px 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: isHeroSection ? "transparent" : "#ffffff",
      color: isHeroSection ? "white" : "black",
      zIndex: 1000,
      transition: "background-color 0.3s, color 0.3s",
      borderBottom: isHeroSection ? "none" : "1px solid #ddd",
    }}>
      <div style={{
        fontSize: isMobile ? "1.2rem" : "1.5rem",
        fontWeight: "bold",
        color: "black",
        flex: 1,
      }}>
        Inofinitive SR
      </div>
      {isTabletOrMobile ? (
        <>
          <FontAwesomeIcon 
            icon={isMenuOpen ? faTimes : faBars} 
            style={{ fontSize: "1.5rem", cursor: "pointer", color:"black",marginRight:5 }}
            onClick={toggleMenu} 
          />
          {isMenuOpen && (
            <div style={{
              position: "absolute",
              top: "60px",
              right: 0,
              backgroundColor: "white",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              zIndex: 1000,
            }}>
              <ul style={{
                listStyle: "none",
                padding: "10px 0",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}>
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <li
                    key={item}
                    onClick={() => setIsDropdownOpen(item === "Services")}
                    style={{ position: "relative" }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      style={{
                        color: selectedSection === item.toLowerCase() ? "#0077ff" : "#000000",
                        textDecoration: "none",
                        fontSize: "1.1rem",
                        padding: "10px",
                        fontWeight: selectedSection === item.toLowerCase() ? "bold" : "normal",
                      }}
                      onClick={() => setSelectedSection(item.toLowerCase())}
                    >
                      {item} {item === "Services" && <FontAwesomeIcon icon={faCaretDown} />}
                    </a>
                    {item === "Services" && isDropdownOpen && (
                      <div style={{
                        position: "relative",
                        backgroundColor: "white",
                        marginTop: "10px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
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
            </div>
          )}
        </>
      ) : (
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
                  color: selectedSection === item.toLowerCase() ? "#0077ff" : isHeroSection ? "black" : "#000000",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  padding: "8px 12px",
                  fontWeight: selectedSection === item.toLowerCase() ? "bold" : "normal",
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
        width: "auto", // Ensures it only wraps the content
        flexShrink: 0, // Prevents it from growing or shrinking
        marginRight: "auto"
      }}>
        <FontAwesomeIcon icon={faSquarePhone} style={{ marginRight: "8px" }} />
        <span>Call us at: +91-7416305104</span>
      </div>
    </nav>
  );
}

export default Navbar;
