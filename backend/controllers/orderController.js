const db = require("../config/db");

// ======================================
// Get All Orders
// ======================================
const getAllOrders = (req, res) => {
  const sql = `
    SELECT *
    FROM orders
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.json({
      success: true,
      orders: results,
    });
  });
};

// ======================================
// Update Order Status
// ======================================
const updateOrderStatus = (req, res) => {
  console.log("========== UPDATE ORDER STATUS ==========");
  console.log("Params:", req.params);
  console.log("Body:", req.body);

  const { id } = req.params;
  const { status } = req.body || {};

  if (!status) {
    return res.status(400).json({
      success: false,
      message: "Status is required.",
    });
  }

  const sql = `
    UPDATE orders
    SET status = ?
    WHERE id = ?
  `;

  db.query(sql, [status, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    res.json({
      success: true,
      message: "Order status updated successfully.",
    });
  });
};

// ======================================
// Create Order
// ======================================
const createOrder = (req, res) => {
  const {
    customer_name,
    phone,
    email,
    address,
    city,
    postal_code,
    payment_method,
    total,
    items,
  } = req.body;

  const orderSql = `
    INSERT INTO orders
    (customer_name, phone, email, address, city, postal_code, payment_method, total)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    orderSql,
    [
      customer_name,
      phone,
      email,
      address,
      city,
      postal_code,
      payment_method,
      total,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      const orderId = result.insertId;

      if (!items || items.length === 0) {
        return res.json({
          success: true,
          orderId,
        });
      }

      const orderItems = items.map((item) => [
        orderId,
        item.id,
        item.quantity,
        item.price,
      ]);

      const itemSql = `
        INSERT INTO order_items
        (order_id, product_id, quantity, price)
        VALUES ?
      `;

      db.query(itemSql, [orderItems], (err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            error: err.message,
          });
        }

        res.json({
          success: true,
          orderId,
        });
      });
    }
  );
};

module.exports = {
  getAllOrders,
  updateOrderStatus,
  createOrder,
};