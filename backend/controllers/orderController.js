const db = require("../config/db");

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
  createOrder,
};