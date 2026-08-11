const db = require("../config/db");

// ======================================
// Create Contact Message
// ======================================
const createContactMessage = (req, res) => {
  const {
    name,
    email,
    phone,
    message,
  } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required.",
    });
  }

  const query = `
    INSERT INTO contact_messages
    (
      name,
      email,
      phone,
      message
    )
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      name,
      email,
      phone || null,
      message,
    ],
    (err, result) => {
      if (err) {
        console.error(
          "Create Contact Message Error:",
          err
        );

        return res.status(500).json({
          success: false,
          message: "Failed to send message.",
          error: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message:
          "Your message has been sent successfully.",
        messageId: result.insertId,
      });
    }
  );
};

// ======================================
// Get All Contact Messages
// Admin Only
// ======================================
const getContactMessages = (req, res) => {
  const query = `
    SELECT
      id,
      name,
      email,
      phone,
      message,
      status,
      created_at
    FROM contact_messages
    ORDER BY created_at DESC
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error(
        "Get Contact Messages Error:",
        err
      );

      return res.status(500).json({
        success: false,
        message: "Failed to fetch contact messages.",
        error: err.message,
      });
    }

    res.json({
      success: true,
      messages: results,
    });
  });
};

// ======================================
// Update Message Status
// Admin Only
// ======================================
const updateContactMessageStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const allowedStatuses = [
    "new",
    "read",
    "replied",
  ];

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message:
        "Invalid status. Use new, read or replied.",
    });
  }

  const query = `
    UPDATE contact_messages
    SET status = ?
    WHERE id = ?
  `;

  db.query(
    query,
    [status, id],
    (err, result) => {
      if (err) {
        console.error(
          "Update Contact Message Error:",
          err
        );

        return res.status(500).json({
          success: false,
          message:
            "Failed to update message status.",
          error: err.message,
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Message not found.",
        });
      }

      res.json({
        success: true,
        message:
          "Message status updated successfully.",
      });
    }
  );
};

module.exports = {
  createContactMessage,
  getContactMessages,
  updateContactMessageStatus,
};