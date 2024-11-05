// src/App.js
import React from "react";
import Navbar from "./Navbar";
 // Importing social media icons
import Footer from "./footer";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import FAQs from "./FAQs";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";

function App() {


  return (
    <div className="App">
      <Navbar />

      {/* ================================================= Main Section ============================================= */}
      <Home />

      
      {/* ================================================= About Section ============================================= */}

      <AboutUs />

      {/* ================================================= Services Section ============================================= */}
      <Services />

      {/* ================================================= TestiMonials Section ============================================= */}

      <Testimonials />

      {/* ================================================= FAQS Section ============================================= */}

      <FAQs />

      {/* ================================================= Contact Section ============================================= */}

      {/* <div id="contact" style={sectionStyle}>
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
      </div> */}
      <ContactUs />

      {/* ================================================= Footer Section ============================================= */}
      <Footer />
    </div>
  );
}

export default App;
