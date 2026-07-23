const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Amar Organic Milk Backend Running...");
});

// Test Database Connection
app.get("/test-db", (req, res) => {
  db.query("SELECT NOW() AS currentTime", (err, result) => {
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
  });
});

// Product Routes
app.use("/api/products", productRoutes);

// Order Routes
app.use("/api/orders", orderRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});