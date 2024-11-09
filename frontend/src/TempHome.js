import React from "react";
import { useMediaQuery } from "react-responsive";
import LogoImage from "./images/home-font.png";
import ScrollingServices from "./ScrollingServices";

const TempHome = () => {
  // Responsive breakpoints
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const heroSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: isMobile ? "90vh" : "100vh",
    background: "linear-gradient(180deg, #FFFFFF, #D9D9D9)",
    color: "#343a40",
    position: "relative",
    overflow: "hidden",
    padding: isMobile ? "5%" : "2%",
    textAlign: "center",
  };

  const textContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "rgba(255, 255, 255, 0.85)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    borderRadius: "15px",
    border: "2px solid #007bff",
    maxWidth: isMobile ? "90%" : "60%",
    padding: "2%",
    position: "relative",
    animation: "fadeIn 1.5s ease-in-out",
    backdropFilter: "blur(10px)",
    transform: "translateY(20px)",
    transition: "all 0.3s ease-in-out",
    animation: "bounceIn 1.5s ease-out",
    height: isMobile ? "50%" : "60vh",
  };

  const imageStyle = {
    height: isMobile ? "0" : isMobile ? "50vw" : "40vw", // Hide image on mobile
    width: isMobile ? "0" : isMobile ? "50vw" : "40vw",
    maxWidth: "80%",
    animation: "scaleUpDown 3s ease-in-out infinite",
    marginLeft: 20
  };

  const headingStyle = {
    fontSize: isMobile ? "6vw" : "3vw",
    fontWeight: "700",
    color: "#007bff",
    margin: "10px 0",
    lineHeight: "1.2",
    fontFamily: "'Poppins', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "2px",
    animation: "slideInLeft 1.5s ease-in-out",
  };

  const subHeadingStyle = {
    fontSize: isMobile ? "4vw" : "2.5vw",
    fontWeight: "500",
    color: "#343a40",
    margin: "10px 0",
    lineHeight: "1.4",
    fontFamily: "'Lora', serif",
    textTransform: "capitalize",
    animation: "slideInRight 1.5s ease-in-out",
  };

  const descriptionStyle = {
    marginTop: "1%",
    maxWidth: isDesktop ? "80%" : "90%",
    fontSize: isMobile ? "4vw" : "1.2vw",
    lineHeight: "1.6",
    color: "#343a40",
    fontFamily: "'Merriweather', serif",
    textAlign: "center",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
    paddingTop: "2%",
    paddingBottom: "2%",
  };

  const circleContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: isMobile ? "1rem" : "2rem", // Adjust gap for mobile
    marginTop: "2rem",
    position: "absolute",
    bottom: "5%",
    width: "100%",
    padding:"0px 90px",
    flexDirection :"row", // Stack vertically on mobile
  };

  const circleCardStyle = {
    width: isMobile ? "80px" : "100px",
    height: isMobile ? "80px" : "100px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ff6a00, #ee0979)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: isMobile ? "0.8rem" : "1rem",
    textAlign: "center",
    padding: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    animation: "pulse 2s infinite",
  };

  const hoverEffect = {
    transform: "scale(1.1)",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
  };

  return (
    <div id="home" style={heroSectionStyle}>
      <div style={{ position: "absolute", top: "10%" }}>
        <ScrollingServices />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          paddingTop: "10%",
          justifyContent: "center",
        }}
      >
        <div className="text-container" style={textContainerStyle}>
          <h1 style={headingStyle}>Welcome to Inofinitive SR!</h1>
          <h2 style={subHeadingStyle}>Where Support Meets Success</h2>
          <p style={descriptionStyle}>
            At Inofinitive SR, we are dedicated to providing exceptional support
            and services to our clients. Our team of professionals is committed
            to ensuring your success through tailored solutions that meet your
            unique needs. Whether you require customer support, technical
            assistance, or telemarketing services, we are here to help you
            navigate your challenges and achieve your goals. Together, we can
            build a brighter future!
          </p>
        </div>
        {/* Hide the image on mobile */}
        {!isMobile && <img src={LogoImage} alt="logo" style={imageStyle} />}
      </div>

      {/* Circle Cards Section */}
      {/* <div style={circleContainerStyle}>
        <div style={{ ...circleCardStyle, ...hoverEffect }}>Customer Support</div>
        <div style={{ ...circleCardStyle, ...hoverEffect }}>Technical Support</div>
        <div style={{ ...circleCardStyle, ...hoverEffect }}>Telemarketing Support</div>
      </div> */}

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounceIn {
            0% { transform: scale(0.5); opacity: 0; }
            80% { transform: scale(1.05); opacity: 0.9; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes scaleUpDown {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          @keyframes slideInLeft {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default TempHome;
