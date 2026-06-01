import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const ContactForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="contact-flex-container container">
        <div className="contact-form-container ">
          <h2 className="contact-form-title">Send Us A message</h2>
          <h2 className="contact-form-header">CONTACT US</h2>
          <div className="contact-inputs">
            <div className="name-inputs">
              <label>First Name</label>
              <input
                className="name-input-field"
                type="text"
                name="firstname"
                value={firstname}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label>Last Name</label>
              <input
                className="name-input-field"
                type="text"
                name="lastname"
                value={lastname}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <label>Email</label>
            <input
              className="input-field"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone Number</label>
            <input
              className="input-field"
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label>Subject</label>
            <input
              className="input-field"
              type="text"
              name="Subject"
              value={subject}
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <textarea
              className="input-field"
              name="message"
              value={message}
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="contact-form-btn">SEND MESSAGE</button>
          </div>
        </div>
        <div className="get-in-touch ">
          <h2 className="contact-form-title">We're Here For You</h2>
          <h2 className="contact-form-header">GET IN TOUCH</h2>
          <div className="get-in-touch-section">
            <div className="contact-get-in-touch-flex-container">
              <FontAwesomeIcon className="contact-icon contact-circle-icon" icon={faEnvelope} />

              <div className="icon-text-container">
                <h2 className="contact-icon-header">EMAIL US</h2>
                <p className="contact-icon-contact-info">huntleyssauce@yahoo.com</p>
                <p className="contact-icon-contact-info">We aim to respond within 24 hours.</p>
              </div>
            </div>
            <div className="contact-get-in-touch-flex-container">
              <FontAwesomeIcon className="contact-icon contact-circle-icon" icon={faPhone} />

              <div className="icon-text-container">
                <h2 className="contact-icon-header">CALL US</h2>
                <p className="contact-icon-contact-info">(301) 326-6063</p>
                <p className="contact-icon-contact-info">Monday - Friday: 9:00 AM - 5:00PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
