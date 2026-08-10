const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// JWT authentication middleware
const authenticateToken = require("../middleware/authMiddleware");

// Admin authorization middleware
const requireAdmin = require("../middleware/adminMiddleware");

// ======================================
// Get Products
// ======================================
// Public route
// Customers can view products without logging in
router.get("/", getProducts);

// ======================================
// Add Product
// ======================================
// Admin only
router.post(
  "/",
  authenticateToken,
  requireAdmin,
  addProduct
);

// ======================================
// Update Product
// ======================================
// Admin only
router.put(
  "/:id",
  authenticateToken,
  requireAdmin,
  updateProduct
);

// ======================================
// Delete Product
// ======================================
// Admin only
router.delete(
  "/:id",
  authenticateToken,
  requireAdmin,
  deleteProduct
);

module.exports = router;