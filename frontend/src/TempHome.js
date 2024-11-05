import React from "react";
import LogoImage from "./images/home-font.png";

const TempHome = () => {
  const heroSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(180deg, #FFFFFF, #D9D9D9)",
    color: "#343a40", // Dark grey text for contrast
    textAlign: "center",
    position: "relative",
    paddingTop: 60,
    overflow: "hidden", // Prevent overflow from scrolling text
  };

  const servicesBarStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
    bottom: 60,
    left: 0,
    width: "100%",
    background: "#ffffff", // White background for the services bar
    padding: "15px 0",
    borderRadius: "25px 25px 0 0", // Rounded top corners
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Light shadow for depth
    transform: "skewY(-5deg)", // Skewing effect for a modern look
    zIndex: 1,
    animation: "fadeIn 1s", // Fade-in animation
  };

  const scrollingTextStyle = {
    display: "inline-block",
    animation: "scroll 20s linear infinite",
    fontFamily: "'Roboto', sans-serif", // Clean, modern font
    fontSize: "2rem", // Font size for readability
    color: "#343a40", // Dark text color
    fontWeight: "bold",
    paddingLeft: "100%", // Start from off-screen
    whiteSpace: "nowrap",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)", // Subtle text shadow
    letterSpacing: "1px", // Spacing between letters
  };

  const descriptionStyle = {
    marginTop: "20px",
    maxWidth: "800px",
    padding: "0 20px",
    fontSize: "1.5rem",
    lineHeight: "1.6",
    color: "#343a40",
    fontFamily: "'Merriweather', serif",
    textAlign: "center",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    height: 400,
    width: 400,
    animation: "scaleUpDown 3s ease-in-out infinite", // Add animation to image
  };

  return (
    <div id="home" style={heroSectionStyle}>
      <div style={{ display: "flex", flexDirection: "row", marginTop: -80, marginLeft: -100, gap: 80 }}>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              style={{
                color: "#007bff",
                fontFamily: "'Merriweather', serif",
                fontSize: 70,
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Welcome to Inofinitive SR!
            </label>
            <label
              style={{
                color: "#007bff",
                fontSize: 50,
                marginTop: 10,
                fontFamily: "'Merriweather', serif",
                fontWeight: "bold",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              Where Support Meets Success
            </label>
          </div>

          {/* Company Description */}
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
      </div>
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
                        0% {
                            transform: translateX(0); // Starts from the right edge
                        }
                        100% {
                            transform: translateX(-100%); // Moves to the left edge
                        }
                    }
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    @keyframes scaleUpDown {
                        0%, 100% {
                            transform: scale(1); // Original size
                        }
                        50% {
                            transform: scale(1.1); // Scale up by 10%
                        }
                    }
                `}
      </style>
    </div>
  );
};

export default TempHome;
