import React from "react";
import LogoImage from "./images/home-font.png";

const TempHome = () => {
  const heroSectionStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(180deg, #FFFFFF, #D9D9D9)",
    color: "#343a40",
    // textAlign: "center",
    position: "relative",
    overflow: "hidden",
    padding: "2%"
  };

  const servicesBarStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
    bottom: "5%",
    left: 0,
    width: "100%",
    background: "#ffffff",
    padding: "1% 0",
    borderRadius: "25px 25px 0 0",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    transform: "skewY(-5deg)",
    zIndex: 1,
  };

  const scrollingTextStyle = {
    display: "inline-block",
    animation: "scroll 20s linear infinite",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1.5vw",
    color: "#343a40",
    fontWeight: "bold",
    paddingLeft: "100%",
    whiteSpace: "nowrap",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
    letterSpacing: "0.1vw",
  };

  const descriptionStyle = {
    marginTop: "2%",
    maxWidth: "60%",
    padding: "0 5%",
    fontSize: "1.2vw",
    lineHeight: "1.6",
    color: "#343a40",
    fontFamily: "'Merriweather', serif",
    textAlign: "center",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    height: "30vw",
    width: "30vw",
    maxWidth: "80%",
    animation: "scaleUpDown 3s ease-in-out infinite",
  };


  const textContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }

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

          .heading {
            color: #007bff;
            font-family: 'Merriweather', serif;
            font-size: 2.5vw;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          }

          .sub-heading {
            color: #007bff;
            font-size: 2vw;
            margin-top: 1%;
            font-family: 'Merriweather', serif;
            font-weight: bold;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default TempHome;
