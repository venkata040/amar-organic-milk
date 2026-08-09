import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar({ cart }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid user data:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    alert("Logged out successfully.");

    navigate("/");
  };

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

        {/* User is NOT logged in */}
        {!user && (
          <>
            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/register" className="login-btn">
              Register
            </Link>
          </>
        )}

        {/* User IS logged in */}
        {user && (
          <>
            <span className="welcome-user">
              👤 {user.full_name}
            </span>

            {/* Admin Dashboard */}
            {user.role === "admin" && (
              <Link
                to="/admin/dashboard"
                className="login-btn"
              >
                Admin Dashboard
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="login-btn"
            >
              Logout
            </button>
          </>
        )}

        {/* Cart */}
        <Link to="/cart" className="cart-btn">
          🛒 Cart ({cart.length})
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;