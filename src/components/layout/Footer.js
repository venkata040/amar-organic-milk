import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ======================================
            Company
        ====================================== */}

        <div className="footer-column footer-company">

          <Link to="/" className="footer-logo">
            🥛 Amar Organic Milk
          </Link>

          <p>
            Fresh, pure and trusted organic milk
            delivered directly to your doorstep
            every day.
          </p>

          <div className="footer-organic">
            🌿 100% Fresh &nbsp; • &nbsp; 🐄 Farm Fresh
          </div>

        </div>

        {/* ======================================
            Quick Links
        ====================================== */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products">
                Products
              </Link>
            </li>

            <li>
              <Link to="/subscription">
                Subscription
              </Link>
            </li>

            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>

          </ul>

        </div>

        {/* ======================================
            Customer
        ====================================== */}

        <div className="footer-column">

          <h3>Customer</h3>

          <ul>

            <li>
              <Link to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                Create Account
              </Link>
            </li>

            <li>
              <Link to="/cart">
                Shopping Cart
              </Link>
            </li>

            <li>
              <Link to="/checkout">
                Checkout
              </Link>
            </li>

          </ul>

        </div>

        {/* ======================================
            Contact
        ====================================== */}

        <div className="footer-column">

          <h3>Contact Us</h3>

          <p>
            📍 Melbourne, Victoria, Australia
          </p>

          <p>
            📞 +61 XXX XXX XXX
          </p>

          <p>
            📧 info@amarorganicmilk.com
          </p>

          {/* Social Links */}

          <div className="footer-social">

            <span>Follow Us</span>

            <div className="social-links">

              <a
                href="#"
                aria-label="Facebook"
              >
                Facebook
              </a>

              <a
                href="#"
                aria-label="Instagram"
              >
                Instagram
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================
          Bottom Footer
      ====================================== */}

      <div className="footer-bottom">

        <div className="footer-divider"></div>

        <div className="copyright">

          <p>
            © {currentYear} Amar Organic Milk.
            All Rights Reserved.
          </p>

          <p className="portfolio-note">
            Freshness • Quality • Trust
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;