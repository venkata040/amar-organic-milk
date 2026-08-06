const db = require("../config/db");

const getDashboardStats = (req, res) => {
  const sql = `
    SELECT
      (SELECT COUNT(*) FROM products) AS totalProducts,

      (SELECT COUNT(*) FROM orders) AS totalOrders,

      (SELECT IFNULL(SUM(total),0) FROM orders) AS totalRevenue,

      (
        SELECT COUNT(*)
        FROM orders
        WHERE DATE(created_at)=CURDATE()
      ) AS todaysOrders
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.json({
      success: true,
      stats: result[0],
    });
  });
};

module.exports = {
  getDashboardStats,
};