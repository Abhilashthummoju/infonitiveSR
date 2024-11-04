// src/App.js
import React from "react";
import Navbar from "./Navbar";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlassdoor,
} from "react-icons/fa"; // Importing social media icons
import logoImage from "./images/home-font.png";
import { FaLaptopCode, FaHeadset, FaTicketAlt, FaComments, FaWifi,FaBox,FaPhoneVolume,FaBuilding } from "react-icons/fa"; // Importing relevant icons


function App() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const focusedInputStyle = {
    boxShadow: "0 4px 15px rgba(0, 123, 255, 0.4)",
    borderColor: "#007bff",
    transform: "translateY(-2px)",
  };

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

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "10px",
    color: "black",
  };

  const paragraphStyle = {
    fontSize: "16px",
    marginBottom: "20px",
    color: "black",
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

  const sectionStyle = {
    height: "auto", // Fixed height for all sections
    display: "flex", // Flexbox for centering content
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // textAlign: "center",
    background: "linear-gradient(to right, #4facfe, #00f2fe)", // Same gradient background
    color: "white", // White text color
    padding: "30px", // Padding for sections
  };

  const footerStyle = {
    backgroundColor: "#007BFF", // Footer background color
    color: "white",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    bottom: 0,
    width: "100%",
  };

  const socialMediaIconsStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const ServicescontainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Shadow effect
    padding: "30px",
    width: "280px",
    // textAlign: "center",
    height: 300,
    margin: 10,
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for movement and shadow on hover
    cursor: "pointer", // Pointer to indicate interactivity
  };

  const ContactcontainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Shadow effect
    padding: "30px",
    width: "500px",
    textAlign: "center",
    height: 500,
    margin: 10,
    transition:
      "transform 0.3s easeContactcontainerStyle, box-shadow 0.3s ease", // Smooth transition for movement and shadow on hover
    cursor: "pointer", // Pointer to indicate interactivity
    marginLeft: 130,
  };
  const hoverEffect = {
    transform: "translateY(-10px)", // Moves the container slightly upwards
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)", // Stronger shadow effect on hover
  };

  const inputStyle = {
    width: "100%",
    maxWidth: "400px",
    padding: "12px 20px",
    fontSize: "16px",
    color: "#333",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "1px solid #ccc",
    borderRadius: "12px",
    outline: "none",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    marginBottom: 25
  };

  const SubmitbuttonStyle = {
    backgroundColor: isHovered ? "#333" : "#000", // Darker black on hover
    color: "white",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)", // Slightly scales up on hover
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Subtle shadow effect
    width: 170
  };
  return (
    <div className="App">
      <Navbar />

      {/* ================================================= Main Section ============================================= */}
      <div style={heroSectionStyle}>
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

      {/* ================================================= Services Section ============================================= */}

      <div id="services" style={{...sectionStyle,background:"white"}}>
        <h3 style={{color:"black"}}>What we provide</h3>
        <h1 style={{ marginTop: -11,color:"black" }}>Our Services</h1>

        {/* <============customer support ============> */}
        <div style={{ marginBottom: 20 }}>
          <div>
            <h2 style={{ textAlign: "center",color:"black" }}>Customer Support</h2>
          </div>

          {/* SERVICES BOXES */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={
                isHovered
                  ? { ...ServicescontainerStyle, ...hoverEffect }
                  : ServicescontainerStyle
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
               <FaHeadset size={40} color="#007BFF" />
              <h1 style={{ color: "black" }}>Voice Support</h1>
              <p style={{color:"black"}} >Dedicated assistance via phone to address customer inquiries and provide real-time solutions..</p>
            </div>

            <div
              style={
                isHovered
                  ? { ...ServicescontainerStyle, ...hoverEffect }
                  : ServicescontainerStyle
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaComments size={40} color="#007BFF" />
              <h1 style={{ color: "black" }}>Non - Voice Support</h1>
              <p style={{color:"black"}}>Comprehensive customer support through email, chat, and ticketing systems for efficient issue resolution.</p>
            </div>

            <div
              style={
                isHovered
                  ? { ...ServicescontainerStyle, ...hoverEffect }
                  : ServicescontainerStyle
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaTicketAlt size={40} color="#007BFF" />
              <h1 style={{ color: "black" }}>Ticketing Service</h1>
              <p style={{color:"black"}}>A streamlined system for logging and managing customer queries to ensure timely responses and resolution.</p>
            </div>
          </div>
        </div>

        {/* <============Technical Support ==========> */}
        <div style={{ marginBottom: 20 }}>
          <div>
            <h2 style={{ textAlign: "center",color:"black" }}>Technical Support</h2>
          </div>

          {/* SERVICES BOXES */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={
                isHovered
                  ? { ...ServicescontainerStyle, ...hoverEffect }
                  : ServicescontainerStyle
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
        <FaWifi size={40} color="#007BFF" />      
        <h1 style={{ color: "black" }}> ISP Technical Queries</h1>
              <p style={{color:"black"}}>Specialized assistance for resolving technical issues related to internet service providers.</p>
            </div>

            <div
              style={
                isHovered
                  ? { ...ServicescontainerStyle, ...hoverEffect }
                  : ServicescontainerStyle
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaLaptopCode size={40} color="#007BFF" />
              <h1 style={{ color: "black" }}> Software/Hardware</h1>
              <p style={{color:"black"}}> Comprehensive assistance with software installations, updates, and hardware maintenance.</p>
            </div>
            <div
              style={
                isHovered
                  ? { ...ServicescontainerStyle, ...hoverEffect }
                  : ServicescontainerStyle
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaBox size={40} color="#007BFF" />
              <h1 style={{ color: "black" }}>Product-Related Queries</h1>
              <p style={{color:"black"}}>Solutions for any problems encountered with products to enhance customer satisfaction.</p>
            </div>
          </div>
        </div>

        {/* =============>Tele Marketing ============> */}

        <div>
          <div>
            <h2 style={{ textAlign: "center",color:"black" }}>Telemarketing Services</h2>
          </div>

          {/* SERVICES BOXES */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={
                isHovered
                  ? { ...ServicescontainerStyle, ...hoverEffect }
                  : ServicescontainerStyle
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
<FaBuilding size={40} color="#007BFF" />

              <FaPhoneVolume size={40} color="#007BFF" />

              <h1 style={{ color: "black" }}>Outbound Calling</h1>
              <p style={{ color: "black" }}>Proactive outreach to potential customers for sales and marketing of products and services.</p>
            </div>

            <div
              style={
                isHovered
                  ? { ...ServicescontainerStyle, ...hoverEffect }
                  : ServicescontainerStyle
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h1 style={{ color: "black" }}>Inbound/Outbound Calling</h1>
              <p style={{ color: "black" }}>Support for insurance inquiries and services through dedicated inbound and outbound call handling.</p>
            </div>

            <div
              style={
                isHovered
                  ? { ...ServicescontainerStyle, ...hoverEffect }
                  : ServicescontainerStyle
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h1 style={{ color: "black" }}>Vpice & Non-Voice</h1>
              <p>This container has a hover effect with movement and shadow.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= About Section ============================================= */}
      <div id="about" style={sectionStyle}>
        <h2>About Us</h2>
        <p>
          We are dedicated to providing top-notch support and services to help
          you thrive.
        </p>
      </div>

      {/* ================================================= TestiMonials Section ============================================= */}

      <div id="testimonials" style={sectionStyle}>
        <h2>Testimonials</h2>
        <p>
          "Inofinitive SR has transformed the way we handle customer support.
          Highly recommend!"
        </p>
        <p>
          "Their team is responsive and always willing to help. A fantastic
          partner to have!"
        </p>
      </div>

      {/* ================================================= FAQS Section ============================================= */}

      <div id="faqs" style={sectionStyle}>
        <h2>Frequently Asked Questions</h2>
        <p>
          <strong>Q: How can I contact support?</strong>
        </p>
        <p>
          A: You can reach us via email at support@inofinitivesr.com or through
          our contact form.
        </p>
        <p>
          <strong>Q: What services do you offer?</strong>
        </p>
        <p>
          A: We offer customer support, technical support, and telemarketing
          services.
        </p>
      </div>

      {/* ================================================= Contact Section ============================================= */}

      <div id="contact" style={sectionStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // border: "solid",
            // borderWidth: 2,
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ width: 600,marginLeft:20 }}>
            <h1>Contact Us</h1>
            <h2>We’re Here to Help!</h2>
            <label>We’re happy to answer any questions you may have and we help you determine which of our services best fit your needs.</label>

          </div>
          <div style={ContactcontainerStyle}>
            <h2 style={{ color: "black" }}>Get Your Free Quote</h2>
            <input
              type="text"
              style={
                isFocused ? { ...inputStyle, ...focusedInputStyle } : inputStyle
              }
              placeholder="Enter your Name"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            /><br />
            <input
              type="text"
              style={
                isFocused ? { ...inputStyle, ...focusedInputStyle } : inputStyle
              }
              placeholder="Enter your Number"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />{" "}<br />
            <input
              type="text"
              style={
                isFocused ? { ...inputStyle, ...focusedInputStyle } : inputStyle
              }
              placeholder="Enter your Mail"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />{" "} <br />
            <input
              type="text"
              style={
                isFocused ? { ...{height: 100}, ...inputStyle, ...focusedInputStyle } : {...inputStyle,...{height:100}}
              }
              placeholder="Enter your Message"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
             <button
      style={SubmitbuttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Submit
    </button>
            <></>
          </div>
        </div>
      </div>

      {/* ================================================= Footer Section ============================================= */}
      <footer style={footerStyle}>
        <p>&copy; 2024 Inofinitive SR. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <p>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
          >
            Facebook
          </a>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
          >
            Twitter
          </a>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
