import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Subscription from "./pages/Subscription";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  // Shopping Cart State
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Products */}
        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* Subscription */}
        <Route
          path="/subscription"
          element={<Subscription />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* Order Success */}
        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;