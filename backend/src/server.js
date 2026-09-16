const app = require("./app");
const pool = require("./config/database");

const PORT = process.env.PORT || 5000;

pool.query("SELECT NOW()", (error, result) => {
  if (error) {
    console.error("Database connection failed:", error.message);
    return;
  }

  console.log("Database connected successfully");
  console.log("PostgreSQL time:", result.rows[0].now);
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const shutdown = async () => {
  console.log("Shutting down server...");

  server.close(async () => {
    try {
      await pool.end();
      console.log("Database connection closed");
      process.exit(0);
    } catch (error) {
      console.error("Error closing database:", error.message);
      process.exit(1);
    }
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);