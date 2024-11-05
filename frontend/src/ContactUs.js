import React from 'react';
import { FaLaptopCode, FaHeadset, FaTicketAlt, FaComments, FaWifi,FaBox,FaPhoneVolume,FaBuilding } from "react-icons/fa"; // Importing relevant icons

const ContactUs = () =>{
    const [isHovered, setIsHovered] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
  
    const focusedInputStyle = {
      boxShadow: "0 4px 15px rgba(0, 123, 255, 0.4)",
      borderColor: "#007bff",
      transform: "translateY(-2px)",
    };
  
   
    const sectionStyle = {
      height: "auto", // Fixed height for all sections
      display: "flex", // Flexbox for centering content
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // textAlign: "center",
      background: "linear-gradient(to right, #4facfe, #00f2fe)", // Same gradient background
      color: "white", // Whie text color
      padding: "30px", // Padding for sections
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
   
  
    return(
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
          <div style={{ width: 600,marginLeft:20}}>
            <h1 style={{color:"black"}}>Contact Us</h1>
            <h2 style={{color:"black"}}>We’re Here to Help!</h2>
            <label style={{color:"black"}}>We’re happy to answer any questions you may have and we help you determine which of our services best fit your needs.</label>

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
    )
}

export default ContactUs;