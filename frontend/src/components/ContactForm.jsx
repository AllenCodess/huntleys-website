import { useState } from "react";

const ContactForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="contact-form-container container">
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
    </>
  );
};

export default ContactForm;
