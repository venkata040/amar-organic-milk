const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  createOrder,
  updateOrderStatus,
} = require("../controllers/orderController");

// ===============================
// Get All Orders
// ===============================
router.get("/", getAllOrders);

// ===============================
// Create New Order
// ===============================
router.post("/", createOrder);

// ===============================
// Update Order Status
// ===============================
router.put("/:id/status", updateOrderStatus);

module.exports = router;