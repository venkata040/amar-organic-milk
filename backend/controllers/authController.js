const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ======================================
// Register User
// ======================================
const register = async (req, res) => {
  console.log("====================================");
  console.log("REGISTER API");
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Body:", req.body);
  console.log("====================================");

  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is missing.",
      });
    }

    const {
      full_name,
      email,
      phone,
      password,
    } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide full_name, email and password.",
      });
    }

    // Check if email already exists
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            error: err.message,
          });
        }

        if (result.length > 0) {
          return res.status(400).json({
            success: false,
            message: "Email already exists.",
          });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        db.query(
          `INSERT INTO users
          (full_name, email, phone, password)
          VALUES (?, ?, ?, ?)`,
          [
            full_name,
            email,
            phone,
            hashedPassword,
          ],
          (err, result) => {
            if (err) {
              return res.status(500).json({
                success: false,
                error: err.message,
              });
            }

            res.status(201).json({
              success: true,
              message: "User registered successfully.",
              userId: result.insertId,
            });
          }
        );
      }
    );
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// ======================================
// Login User
// ======================================
const login = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            error: err.message,
          });
        }

        if (result.length === 0) {
          return res.status(401).json({
            success: false,
            message: "Invalid email or password.",
          });
        }

        const user = result[0];

        const passwordMatch = await bcrypt.compare(
          password,
          user.password
        );

        if (!passwordMatch) {
          return res.status(401).json({
            success: false,
            message: "Invalid email or password.",
          });
        }

        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            role: user.role,
          },
          process.env.JWT_SECRET || "amar_organic_milk_secret",
          {
            expiresIn: "24h",
          }
        );

        res.json({
          success: true,
          message: "Login successful.",
          token,
          user: {
            id: user.id,
            full_name: user.full_name,
            email: user.email,
            phone: user.phone,
            role: user.role,
          },
        });
      }
    );
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};