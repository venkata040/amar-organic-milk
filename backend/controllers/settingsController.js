const db = require("../config/db");

// ======================================
// Get Store Settings
// ======================================
const getSettings = (req, res) => {
  const query = `
    SELECT
      id,
      store_name,
      store_email,
      store_phone,
      store_address,
      updated_at
    FROM settings
    ORDER BY id ASC
    LIMIT 1
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Get Settings Error:", err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch settings.",
        error: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Settings not found.",
      });
    }

    res.json({
      success: true,
      settings: results[0],
    });
  });
};

// ======================================
// Update Store Settings
// ======================================
const updateSettings = (req, res) => {
  const {
    store_name,
    store_email,
    store_phone,
    store_address,
  } = req.body;

  if (!store_name) {
    return res.status(400).json({
      success: false,
      message: "Store name is required.",
    });
  }

  const query = `
    UPDATE settings
    SET
      store_name = ?,
      store_email = ?,
      store_phone = ?,
      store_address = ?
    WHERE id = (
      SELECT id FROM (
        SELECT id
        FROM settings
        ORDER BY id ASC
        LIMIT 1
      ) AS temp
    )
  `;

  db.query(
    query,
    [
      store_name,
      store_email,
      store_phone,
      store_address,
    ],
    (err, result) => {
      if (err) {
        console.error("Update Settings Error:", err);

        return res.status(500).json({
          success: false,
          message: "Failed to update settings.",
          error: err.message,
        });
      }

      res.json({
        success: true,
        message: "Settings updated successfully.",
      });
    }
  );
};

module.exports = {
  getSettings,
  updateSettings,
};