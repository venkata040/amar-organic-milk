const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

// JWT Middleware
const authenticateToken = require("./middleware/authMiddleware");
const requireAdmin = require("./middleware/adminMiddleware");

const app = express();

// ======================================
// Middleware
// ======================================
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ======================================
// Debug Middleware
// ======================================
app.use((req, res, next) => {
  console.log("====================================");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Body:", req.body);
  console.log("====================================");

  next();
});

// ======================================
// Home Route
// ======================================
app.get("/", (req, res) => {
  res.send("🚀 Amar Organic Milk Backend Running...");
});

// ======================================
// Test Database Connection
// ======================================
app.get("/test-db", (req, res) => {
  db.query(
    "SELECT NOW() AS currentTime",
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.json({
        success: true,
        databaseTime: result[0].currentTime,
      });
    }
  );
});

// ======================================
// TEST ROUTE
// ======================================
app.put("/test", (req, res) => {
  console.log("========== TEST ROUTE ==========");
  console.log("Headers:", req.headers);
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Body:", req.body);

  res.json({
    success: true,
    body: req.body,
  });
});

// ======================================
// Product Routes
// ======================================
app.use("/api/products", productRoutes);

// ======================================
// Order Routes
// ======================================
app.use("/api/orders", orderRoutes);

// ======================================
// Dashboard Routes
// ======================================
app.use("/api/dashboard", dashboardRoutes);

// ======================================
// Authentication Routes
// ======================================
app.use("/api/auth", authRoutes);

// ======================================
// User / Customer Routes
// ======================================
// Customer management is protected inside
// userRoutes.js using JWT + Admin middleware.
app.use("/api/users", userRoutes);

// ======================================
// Protected Authentication Test Route
// ======================================
// Any logged-in user can access this route.
app.get(
  "/api/auth/protected",
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: "You are authenticated.",
      user: req.user,
    });
  }
);

// ======================================
// Admin Only Test Route
// ======================================
// Only users with role = admin can access.
app.get(
  "/api/auth/admin-test",
  authenticateToken,
  requireAdmin,
  (req, res) => {
    res.json({
      success: true,
      message: "You are an admin.",
      user: req.user,
    });
  }
);

// ======================================
// 404 Handler
// ======================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ======================================
// Global Error Handler
// ======================================
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    error: err.message,
  });
});

// ======================================
// Start Server
// ======================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});