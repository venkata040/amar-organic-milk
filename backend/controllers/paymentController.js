const db = require("../config/db");

// ======================================
// Get Payment Information
// ======================================
const getAllPayments = (req, res) => {
  const query = `
    SELECT
      id,
      customer_name,
      email,
      payment_method,
      total,
      status,
      created_at
    FROM orders
    ORDER BY created_at DESC
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Get Payments Error:", err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch payment information.",
        error: err.message,
      });
    }

    res.json({
      success: true,
      payments: results,
    });
  });
};

module.exports = {
  getAllPayments,
};