import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-column">

          <h2>Amar Organic Milk</h2>

          <p>
            Fresh, pure and trusted organic milk delivered directly
            to your doorstep every day.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Subscription</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p>📍 Melbourne, Victoria</p>
          <p>📞 +61 XXX XXX XXX</p>
          <p>📧 info@amarorganicmilk.com</p>

        </div>

        {/* Follow Us */}

        <div className="footer-column">

          <h3>Follow Us</h3>

          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © 2026 Amar Organic Milk. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;