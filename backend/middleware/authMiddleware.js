const jwt = require("jsonwebtoken");

// ======================================
// Verify JWT Token
// ======================================
const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check Authorization header
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    // Expected format:
    // Authorization: Bearer TOKEN
    const parts = authHeader.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization format.",
      });
    }

    const token = parts[1];

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "amar_organic_milk_secret"
    );

    // Store user information in request
    req.user = decoded;

    next();
  } catch (error) {
    console.error("JWT Error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

module.exports = authenticateToken;