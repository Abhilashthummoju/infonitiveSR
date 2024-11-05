import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
import logoImage from "./images/home-font.png";

const Home =  () =>{

    
      const heroSectionStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)", // Gradient blue background
        color: "white",
        textAlign: "center",
        position: "relative", // Position relative for mountain
        // overflow: "hidden", 
        paddingTop: 60// Hide overflow to maintain design
      };
    
      const containerStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.9)", // More opaque for better readability
        borderRadius: "15px", // Rounded corners
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // More pronounced shadow
        padding: "30px", // Increased spacing inside the box
        maxWidth: "400px", // Max width for the box
        margin: "50px auto", // Center the box in the middle of the page
        textAlign: "center", // Center text inside the box
        position: "absolute", // Relative positioning
        zIndex: 1, // Bring the content above the mountain
        left: 120,
      };
    
      const buttonStyle = {
        backgroundColor: "black", // Primary button color
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "16px",
        marginTop: 20,
        width: "90%",
      };
    
      const buttonHoverStyle = {
        backgroundColor: "#0056b3", // Darker blue for hover effect
      };
    
    
      const socialMediaIconsStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      };
     
      
      const headingStyle = {
        fontSize: '1.8rem',
        marginBottom: '20px',
        color: '#ffab00',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      };
      
      const paragraphStyle = {
        margin: '10px 0',
        color: '#d1d1d1',
        fontSize: '0.95rem',
      };



    return(
        <div   id="home" style={heroSectionStyle}>
        <div style={containerStyle}>
          <h1 style={headingStyle}>Where Support Meets Success</h1>
          <p style={paragraphStyle}>
            At Inofinitive SR, we believe that every interaction matters. Our
            focus on building strong relationships with clients ensures that we
            understand your unique challenges and goals. By leveraging the
            latest technologies and industry best practices, we provide
            proactive solutions that not only address immediate needs but also
            foster long-term success. Trust us to be your reliable partner in
            navigating the complexities of customer engagement and support,
            empowering you to thrive in today’s competitive landscape.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Contact Us
          </button>
          <div style={socialMediaIconsStyle}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px" }}
            >
              <FaFacebookF size={24} color="#007BFF" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px" }}
            >
              <FaInstagram size={24} color="#E1306C" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px" }}
            >
              <FaLinkedinIn size={24} color="#0077B5" />
            </a>
          </div>
        </div>
        <div style={{ position: "absolute", right: 140 }}>
          <img
            src={logoImage}
            alt="Logo"
            style={{ width: "700px", height: "700px" }}
          />
        </div>
        <svg
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
        }}
      >
        <path
          fill="#ffffff" // Color of the wave
          fillOpacity="1"
          d="M1440,96L1392,122.7C1344,149,1248,203,1152,202.7C1056,203,960,149,864,144C768,139,672,181,576,192C480,203,384,181,288,176C192,171,96,181,48,186.7L0,192L0,320L48,320C96,320,192,320,288,320C384,320,480,320,576,320C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320Z"
        ></path>
      </svg>
      </div>
    )
}

export default Home;
