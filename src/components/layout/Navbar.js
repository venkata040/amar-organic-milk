import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        🥛 Amar Organic Milk
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/subscription">Subscription</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      {/* Buttons */}
      <div className="nav-buttons">

        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/cart" className="cart-btn">
          🛒 Cart
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;