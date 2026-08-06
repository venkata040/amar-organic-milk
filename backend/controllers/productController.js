const db = require("../config/db");

// ======================================
// Get All Products
// ======================================
const getProducts = (req, res) => {
  const sql = "SELECT * FROM products ORDER BY id DESC";

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

// ======================================
// Add Product
// ======================================
const addProduct = (req, res) => {
  console.log("========== ADD PRODUCT ==========");
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Body:", req.body);
  console.log("=================================");

  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is missing.",
    });
  }

  const {
    name,
    description,
    price,
    image,
    stock,
    category,
  } = req.body;

  const sql = `
    INSERT INTO products
    (name, description, price, image, stock, category)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, description, price, image, stock, category],
    (err, result) => {
      if (err) {
        console.error(err);

        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Product added successfully.",
        productId: result.insertId,
      });
    }
  );
};

// ======================================
// Update Product
// ======================================
const updateProduct = (req, res) => {
  const { id } = req.params;

  const {
    name,
    description,
    price,
    image,
    stock,
    category,
  } = req.body;

  const sql = `
    UPDATE products
    SET
      name = ?,
      description = ?,
      price = ?,
      image = ?,
      stock = ?,
      category = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [name, description, price, image, stock, category, id],
    (err, result) => {
      if (err) {
        console.error(err);

        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Product not found.",
        });
      }

      res.json({
        success: true,
        message: "Product updated successfully.",
      });
    }
  );
};

// ======================================
// Delete Product
// ======================================
const deleteProduct = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM products WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully.",
    });
  });
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};