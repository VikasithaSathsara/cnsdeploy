import emailjs from "emailjs-com";
import React, { useState } from "react";
import swal from "sweetalert";
import "./ContactUs.css";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (validateEmail(value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address!");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      const formData = {
        name: e.target.name.value,
        email: email,
        message: e.target.message.value,
      };

      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formData,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            swal("Success", "Your message has been sent!", "success");
            setPopupVisible(true);
            setTimeout(() => setPopupVisible(false), 2000);
          },
          (error) => {
            console.log("FAILED...", error);
            swal("Error", "There was an error sending your message.", "error");
          }
        );

      // Reset form fields
      e.target.reset();
      setEmail("");
    } else {
      setEmailError("Invalid email address!");
    }
  };

  return (
    <div id="contact-section">
      <div className="section" id="contact-details">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <p><br></br><br></br>Email: cnsb233@gmail.com</p>
          <p>Telephone: +94-777-983264</p>
          <p>Address: No:38/2, Godaduwa Rd, Kapuhempola, Akmeemana, Galle.</p>
        </div>
      </div>

      <div className="section" id="contact-form">
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name (John Doe)"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Your Email (example@domain.com)"
          />
          {emailError && <div className="error">{emailError}</div>}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Type your message here"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      <div className="section" id="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31739.826663287346!2d80.2223134347656!3d6.066041600000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae171001b952ce9%3A0xcce4b3f47bbdf7e3!2sC%20%26%20S%20Badminton%20Complex%20(PVT)%20Ltd!5e0!3m2!1sen!2slk!4v1717599934147!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="C&S Badminton Complex Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;