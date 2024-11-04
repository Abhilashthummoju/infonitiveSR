// src/App.js
import React from "react";
import Navbar from "./Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn,  } from 'react-icons/fa'; // Importing social media icons

function App() {
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
    overflow: "hidden", // Hide overflow to maintain design
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
    left: 140,
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
    backgroundColor: "#007BFF", // Primary button color
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

  const mountainStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "auto",
  };

  const sectionStyle = {
    height: "500px", // Fixed height for all sections
    display: "flex", // Flexbox for centering content
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "linear-gradient(to right, #4facfe, #00f2fe)", // Same gradient background
    color: "white", // White text color
    padding: "20px", // Padding for sections
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

  return (
    <div className="App">
      <Navbar />
      <div style={heroSectionStyle}>
        <div style={containerStyle}>
          <h1 style={headingStyle}>Where Support Meets Success</h1>
          <p style={paragraphStyle}>
            At Inofinitive SR, we believe that every interaction matters. Our focus on building strong relationships with clients ensures that we understand your unique challenges and goals. By leveraging the latest technologies and industry best practices, we provide proactive solutions that not only address immediate needs but also foster long-term success. Trust us to be your reliable partner in navigating the complexities of customer engagement and support, empowering you to thrive in today’s competitive landscape.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Contact Us
          </button>
          <div style={socialMediaIconsStyle}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
              <FaFacebookF size={24} color="#007BFF" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
              <FaInstagram size={24} color="#E1306C" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
              <FaLinkedinIn size={24} color="#0077B5" />
            </a>
            {/* <a href="https://www.glassdoor.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
              <FaGlassdoor size={24} color="#00B5B8" />
            </a> */}
          </div>
        </div>
        <div style={{ position: "absolute", right: 140 }}>
          <img src={"/images/pngegg.png"} alt="Logo" style={{ width: "500px", height: "400px" }} />
        </div>
      </div>

      {/* Sections Below the Hero Section */}
      <div id="about" style={sectionStyle}>
        <h2>About Us</h2>
        <p>We are dedicated to providing top-notch support and services to help you thrive.</p>
      </div>

      <div id="services" style={sectionStyle}>
        <h2>Our Services</h2>
        <p>Explore our range of services tailored to meet your needs:</p>
        <ul style={{ color: "black", textAlign: "left", margin: 0 }}>
          <li>Customer Support</li>
          <li>Technical Support</li>
          <li>Telemarketing Services</li>
        </ul>
      </div>

      <div id="testimonials" style={sectionStyle}>
        <h2>Testimonials</h2>
        <p>"Inofinitive SR has transformed the way we handle customer support. Highly recommend!"</p>
        <p>"Their team is responsive and always willing to help. A fantastic partner to have!"</p>
      </div>

      <div id="faqs" style={sectionStyle}>
        <h2>Frequently Asked Questions</h2>
        <p><strong>Q: How can I contact support?</strong></p>
        <p>A: You can reach us via email at support@inofinitivesr.com or through our contact form.</p>
        <p><strong>Q: What services do you offer?</strong></p>
        <p>A: We offer customer support, technical support, and telemarketing services.</p>
      </div>

      <div id="contact" style={sectionStyle}>
        <h2>Contact Us</h2>
        <p>Get in touch with us for more information and support.</p>
        <p>Email: support@inofinitivesr.com</p>
      </div>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; 2024 Inofinitive SR. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <p>
          <a href="#" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>Facebook</a>
          <a href="#" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>Twitter</a>
          <a href="#" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
