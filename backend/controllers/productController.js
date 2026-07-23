const db = require("../config/db");

const getProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.json({
      success: true,
      products: results,
    });
  });
};

module.exports = {
  getProducts,
};