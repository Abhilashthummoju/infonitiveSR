import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePhone,
  faCaretDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
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
    <nav
      style={{
        position: "fixed",
        width: "100vw",
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
      }}
    >
      <style>
        {`
         @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceIn {
          0% {
            transform: scale(0.9);
          }
          60% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        `}
     
      </style>
      <div
        style={{
          fontSize: isMobile ? "1.2rem" : "1.5rem",
          fontWeight: "bold",
          color: "black",
          flex: 1,
        }}
      >
        Inofinitive SR
      </div>
      {isTabletOrMobile ? (
        <div style={{ marginRight: 30 }}>
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "black",
              marginRight: 5,
              transition: "transform 0.3s ease",
              transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div
              style={{
                position: "absolute",
                top: "60px",
                right: 0,
                backgroundColor: "#ffffff",
                width: "100%",
                textAlign: "center",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                zIndex: 1000,
                borderRadius: "12px",
                overflow: "hidden",
                animation: "slideDown 0.5s ease", // Slide-down effect
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  padding: "20px 0",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  background: "linear-gradient(135deg, #d7eaf3, #ffffff)",
                  borderRadius: "8px",
                  animation: "fadeIn 0.4s ease-in-out",
                  border: "solid",
                  borderColor: "black",
                  borderWidth: 3
                }}
              >
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <li
                    key={item}
                    onClick={() => setIsDropdownOpen(item === "Services")}
                    style={{
                      position: "relative",
                      padding: "12px 0",
                      cursor: "pointer",
                      transition: "background-color 0.4s ease, transform 0.4s ease",
                      borderRadius: "8px",
                      border: "solid",
                      borderColor: "blue",
                      borderWidth: 3
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#b3e5fc";
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      style={{
                        color:
                          selectedSection === item.toLowerCase()
                            ? "#0077ff"
                            : "#333333",
                        textDecoration: "none",
                        fontSize: "1.3rem",
                        padding: "12px 25px",
                        fontWeight:
                          selectedSection === item.toLowerCase() ? "600" : "500",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        transition: "color 0.3s ease",
                        animation: "bounceIn 0.5s ease forwards", // Bounce effect for links
                        border: "solid",
                        borderColor: "red",
                        borderWidth: 3
                      }}
                      onClick={() => setSelectedSection(item.toLowerCase())}
                    >
                      {item}{" "}
                      {item === "Services" && (
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          style={{
                            fontSize: "0.9rem",
                            transition: "transform 0.3s ease",
                            transform: isDropdownOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      )}
                    </a>
                    {item === "Services" && isDropdownOpen && (
                      <div
                      style={{
                        position: "relative",
                        backgroundColor: "#ffffff",
                        marginTop: "8px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                        borderRadius: "8px",
                        overflow: "hidden",
                        animation: "slideDown 0.4s ease", // Slide-down effect for submenu
                      }}
                      >
                        {[
                          "Customer Support",
                          "Technical Support",
                          "Telemarketing Services",
                        ].map((service) => (
                          <div
                            key={service}
                            style={{
                              padding: "12px 25px",
                              cursor: "pointer",
                              color: "#333",
                              fontSize: "1rem",
                              textAlign: "left",
                              transition:
                                "background-color 0.3s ease, transform 0.2s ease",
                              animation: "fadeIn 0.6s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#e3f2fd";
                              e.target.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "white";
                              e.target.style.transform = "scale(1)";
                            }}
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            margin: 0,
            padding: 0,
            flex: 2,
            justifyContent: "center",
          }}
        >
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              onMouseEnter={() =>
                item === "Services" && setIsDropdownOpen(true)
              }
              onMouseLeave={() =>
                item === "Services" && setIsDropdownOpen(false)
              }
            >
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  color:
                    selectedSection === item.toLowerCase()
                      ? "#0077ff"
                      : isHeroSection
                      ? "black"
                      : "#000000",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  padding: "8px 12px",
                  fontWeight:
                    selectedSection === item.toLowerCase() ? "bold" : "normal",
                }}
                onClick={() => setSelectedSection(item.toLowerCase())}
              >
                {item}{" "}
                {item === "Services" && <FontAwesomeIcon icon={faCaretDown} />}
              </a>
              {item === "Services" && isDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginTop: "10px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    zIndex: 1000,
                  }}
                >
                  {[
                    "Customer Support",
                    "Technical Support",
                    "Telemarketing Services",
                  ].map((service) => (
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
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      {!isMobile && (
        <div
          style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            fontWeight: "bold",
            color: "white",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#0077ff",
            borderRadius: "5px",
            padding: "8px 12px",
            width: "auto",
            flexShrink: 0,
            marginRight: 50,
          }}
        >
          <FontAwesomeIcon
            icon={faSquarePhone}
            style={{ marginRight: "8px" }}
          />
          <span>Call us at: +91-7416305104</span>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
