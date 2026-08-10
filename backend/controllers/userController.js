const db = require("../config/db");

// ======================================
// Get All Customers
// ======================================
const getAllCustomers = (req, res) => {
  const query = `
    SELECT
      id,
      full_name,
      email,
      phone,
      role
    FROM users
    ORDER BY id DESC
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Get Customers Error:", err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch customers.",
        error: err.message,
      });
    }

    res.json({
      success: true,
      customers: results,
    });
  });
};

module.exports = {
  getAllCustomers,
};