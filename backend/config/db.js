const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bhargav@9491",
  database: "amar_organic_milk",
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    return;
  }

  console.log("✅ Connected to MySQL Database");
});

module.exports = connection;