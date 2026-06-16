import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      toast.success("Message sent! We'll be in touch soon.");
      setFormData({
        firstname: "",
        lastname: "",
        phoneNumber: "",
        subject: "",
        email: "",
        message: "",
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="contact-flex-container container">
        <div className="contact-form-container ">
          <h2 className="contact-form-title">Send Us A message</h2>
          <h2 className="contact-form-header">CONTACT US</h2>
          <form onSubmit={handleSubmit}>
            <div className="contact-inputs">
              <div className="name-inputs">
                <label>First Name</label>
                <input
                  className="name-input-field"
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <label>Last Name</label>
                <input
                  className="name-input-field"
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>
              <label>Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <label>Phone Number</label>
              <input
                className="input-field"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <label>Subject</label>
              <input
                className="input-field"
                type="text"
                name="subject"
                value={formData.subject}
                placeholder="Subject"
                onChange={handleChange}
              />
              <label>Message</label>
              <textarea
                className="input-field"
                name="message"
                value={formData.message}
                placeholder="Your Message"
                onChange={handleChange}
              />
              <button type="submit" className="contact-form-btn">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
        <div className="get-in-touch ">
          <h2 className="contact-form-title">We're Here For You</h2>
          <h2 className="contact-form-header">GET IN TOUCH</h2>
          <div className="get-in-touch-section">
            <div className="contact-get-in-touch-flex-container">
              <FontAwesomeIcon className="contact-icon contact-circle-icon" icon={faEnvelope} />

              <div className="icon-text-container">
                <h2 className="contact-icon-header">EMAIL US</h2>
                <p className="contact-icon-contact-info">info@huntleysauce.com</p>
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
    </>
  );
};

export default ContactForm;
