import React from "react";
import { useMediaQuery } from 'react-responsive';
import LogoImage from "./images/home-font.png";

const TempHome = () => {
  // Responsive breakpoints
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const heroSectionStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile? "flex-start": "center",
    justifyContent: "center",
    height: isMobile?"90vh":"100vh",
    background: "linear-gradient(180deg, #FFFFFF, #D9D9D9)",
    color: "#343a40",
    position: "relative",
    overflow: "hidden",
    padding: isMobile ? "5%" : "2%",
  };

  const servicesBarStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
    bottom: "10%",
    left: 0,
    width: "100%",
    background: "#ffffff",
    padding: "1% 0",
    borderRadius: "20px 20px 0 0",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    transform: "skewY(-5deg)",
    zIndex: 1,
  };

  const scrollingTextStyle = {
    display: "inline-block",
    animation: "scroll 20s linear infinite",
    fontFamily: "'Roboto', sans-serif",
    fontSize: isMobile ? "2vw" : "1.5vw",
    color: "#343a40",
    fontWeight: "bold",
    paddingLeft: "100%",
    whiteSpace: "nowrap",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
    letterSpacing: "0.1vw",
  };

  const descriptionStyle = {
    marginTop: "1%",
    maxWidth: isDesktop ? "80%" : "90%",
    padding: "2%",
    fontSize: isMobile ? "3vw" : "1.2vw",
    lineHeight: "1.6",
    color: "#343a40",
    fontFamily: "'Merriweather', serif",
    textAlign: "center",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
    borderTop: "1px solid #e0e0e0",
    borderBottom: "1px solid #e0e0e0",
    paddingTop: "2%",
    paddingBottom: "2%",
  };

  const imageStyle = {
    height: isMobile ? "50vw" : "30vw",
    width: isMobile ? "50vw" : "30vw",
    maxWidth: "80%",
    animation: "scaleUpDown 3s ease-in-out infinite",
    marginRight: isMobile ? "0" : "5%",
    marginTop:isMobile? 20: 0, 
  };

  const textContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: isMobile ? "0" : "5%",
    padding: "2%",
    background: "white", // Blue gradient
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    borderRadius: "15px",
    border: "2px solid #007bff", // Blue border
    backdropFilter: "blur(10px)",
    maxWidth: "90%",
    position: "relative",
    overflow: "hidden",
    animation: "fadeIn 1.5s ease-in-out",
  };

  return (
    <div id="home" style={heroSectionStyle}>
      <div className="text-container" style={textContainer}>
        <label className="heading">Welcome to Inofinitive SR!</label><br />
        <label className="sub-heading">Where Support Meets Success</label>
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
      <img src={LogoImage} alt="logo" style={imageStyle} />
      <div style={servicesBarStyle}>
        <div style={scrollingTextStyle}>
          <span>🌟 Customer Support | </span>
          <span>⚙️ Technical Support | </span>
          <span>📞 Telemarketing Services | </span>
          <span>🎤 Voice Support | </span>
          <span>💬 Non-Voice Support | </span>
          <span>🌐 ISP Technical Support | </span>
          <span>💻 Desktop and Laptop Support | </span>
          <span>📦 Outbound Calling | </span>
          <span>📞 Inbound Calling | </span>
          <span>🔧 Software and Hardware Support | </span>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          @keyframes scaleUpDown {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          .heading {
            color: #007bff; /* Blue text color */
            font-family: 'Merriweather', serif;
            font-size: ${isMobile ? "4vw" : "2.5vw"};
            font-weight: bold;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
            background: linear-gradient(90deg, #007bff, #00c0ff); /* Blue gradient text */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .sub-heading {
            color: #007bff; /* Blue text color */
            font-size: ${isMobile ? "3.5vw" : "2vw"};
            margin-top: 0.5%;
            font-family: 'Merriweather', serif;
            font-weight: bold;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            background: linear-gradient(90deg, #00c0ff, #007bff); /* Blue gradient text */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding: 0 3%;
          }
        `}
      </style>
    </div>
  );
};

export default TempHome;
