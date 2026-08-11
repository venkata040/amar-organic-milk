import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendContactMessage } from "../../services/contactService";
import "./ContactSection.css";

function ContactSection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  // ======================================
  // Handle Input Changes
  // ======================================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ======================================
  // Submit Contact Form
  // ======================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      alert(
        "Please fill in your name, email and message."
      );

      return;
    }

    try {
      setSending(true);

      const response =
        await sendContactMessage(formData);

      alert(
        response.message ||
          "Your message has been sent successfully."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        error.message ||
          "Failed to send your message."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section">

      {/* ====================================== */}
      {/* Section Title */}
      {/* ====================================== */}

      <h2>Contact Us</h2>

      <div className="contact-container">

        {/* ====================================== */}
        {/* Left Side */}
        {/* ====================================== */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            We would love to hear from you.
            Contact us for fresh organic milk,
            subscriptions, or any enquiries.
          </p>

          <div className="info-item">
            <span>📍</span>

            <p>
              Melbourne, Victoria, Australia
            </p>
          </div>

          <div className="info-item">
            <span>📞</span>

            <p>
              +61 XXX XXX XXX
            </p>
          </div>

          <div className="info-item">
            <span>📧</span>

            <p>
              info@amarorganicmilk.com
            </p>
          </div>

          {/* View Full Contact Page */}

          <button
            className="contact-page-btn"
            onClick={() =>
              navigate("/contact")
            }
          >
            View Contact Page →
          </button>

        </div>

        {/* ====================================== */}
        {/* Right Side */}
        {/* ====================================== */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={sending}
          >
            {sending
              ? "Sending..."
              : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactSection;