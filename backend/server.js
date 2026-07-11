import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Authentication Routes
app.use("/api/auth", authRoutes);

// Home Route
app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS currentTime");

    res.status(200).json({
      success: true,
      message: "Backend + MySQL Connected Successfully 🚀",
      databaseTime: rows[0].currentTime,
    });

  } catch (error) {

    console.error("========== DATABASE ERROR ==========");
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Database Connection Failed",
      error: error.message,
      code: error.code,
      errno: error.errno,
      sqlState: error.sqlState,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});