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
import TempHome from "./TempHome";

function App() {

  return (
    <div className="App">
      <Navbar />

      {/* ================================================= Main Section ============================================= */}
      {/* <Home /> */}
      <TempHome />

      
      {/* ================================================= About Section ============================================= */}

      <AboutUs />

      {/* ================================================= Services Section ============================================= */}
      <Services />

      {/* ================================================= TestiMonials Section ============================================= */}

      <Testimonials />

      {/* ================================================= FAQS Section ============================================= */}

      <FAQs />

      {/* ================================================= Contact Section ============================================= */}

      <ContactUs />

      {/* ================================================= Footer Section ============================================= */}
      <Footer />
    </div>
  );
}

export default App;
