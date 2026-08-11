import { useState } from "react";
import { sendContactMessage } from "../services/contactService";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      alert(
        "Please fill in all required fields."
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
    <div
      style={{
        minHeight: "80vh",
        padding: "60px 7%",
        background: "#f7fbf7",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "45px",
        }}
      >
        <h1
          style={{
            color: "#24752b",
            fontSize: "48px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
          }}
        >
          We'd love to hear from you.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        {/* Contact Information */}
        <div
          style={{
            flex: "1 1 350px",
            background: "#24752b",
            color: "#fff",
            padding: "40px",
            borderRadius: "15px",
          }}
        >
          <h2>Get In Touch</h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
            }}
          >
            Have a question about our products,
            deliveries or subscriptions? Contact
            our team.
          </p>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <p>
              📧 admin@amarorganicmilk.com
            </p>

            <p>📞 0400000000</p>

            <p>
              📍 Melbourne, Victoria, Australia
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            flex: "1 1 500px",
            background: "#fff",
            padding: "40px",
            borderRadius: "15px",
            boxShadow:
              "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#24752b",
              marginBottom: "25px",
            }}
          >
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />

            <textarea
              name="message"
              placeholder="Your Message *"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              disabled={sending}
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "25px",
                background: sending
                  ? "#999"
                  : "#2d8435",
                color: "#fff",
                fontSize: "17px",
                fontWeight: "bold",
                cursor: sending
                  ? "not-allowed"
                  : "pointer",
              }}
            >
              {sending
                ? "Sending..."
                : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;