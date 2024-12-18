import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useMediaQuery } from 'react-responsive';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Use your EmailJS credentials here
        const serviceID = 'service_f5s2f3r';
        const templateID = 'template_67u4k0g';
        const userID = 'DE7l6B5A8yl5l0LIH';

        emailjs
            .send(serviceID, templateID, formData, userID)
            .then((response) => {
                alert('Message sent successfully!');
                setFormData({ name: '', number: '', email: '', message: '' }); // Reset the form
            })
            .catch((error) => {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error);
            });
    };

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const focusedInputStyle = {
        boxShadow: "0 4px 15px rgba(0, 123, 255, 0.4)",
        borderColor: "#007bff",
        transform: "translateY(-2px)",
    };

    const sectionStyle = {
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        color: "white",
        padding: "30px",
    };

    const tempDiv = {
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        width: "100%",
        minWidth: "90%",
        height: "auto",
        borderRadius: 25,
        padding: 15,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
    };

    const ContactcontainerStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        padding: isMobile ? "15px" : "30px", // Adjust padding for mobile
        width: "100%", // Ensure the width doesn't overflow
        maxWidth: "500px", // Limit the maximum width to avoid it becoming too wide on large screens
        textAlign: "center",
        boxSizing: "border-box", // Include padding in width calculation
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        maxHeight: "600px",  // Prevent overflow on mobile
        overflow: "auto", // Add scrolling
        margin: "0 auto", // Center the container horizontally
    };
    

    const inputStyle = {
        width: "95%",
        padding: "12px",
        fontSize: "16px",
        color: "#333",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #ccc",
        borderRadius: "12px",
        outline: "none",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        marginBottom: "15px",
    };

    const SubmitbuttonStyle = {
        backgroundColor: isHovered ? "#333" : "#000",
        color: "white",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "30px",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.3s ease",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        width: "100%",
        maxWidth: "200px",
        margin: "0 auto",
    };

    // Media Queries using react-responsive
    

    return (
        <div id="contact" style={sectionStyle}>
            <div style={tempDiv}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        width: "100%",
                        justifyContent: "center",
                        margin: isMobile?0:"0 auto",  // Ensure the content is centered on mobile
                        padding: isMobile?0:"0 15px", // Added padding to prevent overflow
                    }}
                >
                    <div style={{
                        width: isMobile ? "100%" : "50%", 
                        textAlign: isMobile ? "center" : "left", 
                        marginBottom: isMobile ? "20px" : "0",
                    }}>
                        <h1 style={{ color: "black" }}>Contact Us</h1>
                        <h2 style={{ color: "black" }}>We’re Here to Help!</h2>
                        <p style={{ color: "black" }}>
                            We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.
                        </p>
                        {/* Social Media Links */}
                        <div style={{ marginTop: "20px" }}>
                            <a href="https://whatsapp.com/channel/0029VaggzeF7Noa0MshelR00" target="_blank" style={{ margin: "0 10px" }}><FaWhatsapp size={30} color="#25D366" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", padding: 6, borderRadius: 5 }} /></a>
                            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" style={{ margin: "0 10px" }}><FaLinkedin size={30} color="#0077b5" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", padding: 6, borderRadius: 5 }} /></a>
                            <a href="https://www.instagram.com/inofinitive/" target="_blank" style={{ margin: "0 10px" }}><FaInstagram size={30} color="#E4405F" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", padding: 6, borderRadius: 5 }} /></a>
                        </div>

                        {/* Contact Information */}
                        <div style={{ marginTop: "30px" }}>
                            <p style={{ color: "black" }}>Mobile: +91 123 456 7890</p>
                            <p style={{ color: "black" }}>Email: info@company.com</p>
                            <p style={{ color: "black" }}>Address: 123, Street Name, City, Country</p>
                        </div>
                    </div>

                    <div style={ContactcontainerStyle}>
                        <h2 style={{ color: "black", marginBottom: "20px" }}>Get Your Free Quote</h2>
                        <form onSubmit={sendEmail}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                style={isFocused ? { ...inputStyle, ...focusedInputStyle } : inputStyle}
                                placeholder="Enter your Name"
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                required
                            />
                            <input
                                type="text"
                                name="number"
                                value={formData.number}
                                onChange={handleInputChange}
                                style={isFocused ? { ...inputStyle, ...focusedInputStyle } : inputStyle}
                                placeholder="Enter your Number"
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                style={isFocused ? { ...inputStyle, ...focusedInputStyle } : inputStyle}
                                placeholder="Enter your Mail"
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                style={isFocused ? { ...inputStyle, height: "120px", ...focusedInputStyle } : { ...inputStyle, height: "120px" }}
                                placeholder="Enter your Message"
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                required
                            />
                            <button
                                type="submit"
                                style={SubmitbuttonStyle}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
