import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const [user] = await pool.query(
      "SELECT * FROM users WHERE email=?",
      [email]
    );

    if (user.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users(name,email,password) VALUES(?,?,?)",
      [name, email, hashedPassword]
    );

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Login
export const login = async (req, res) => {
  try {

    console.log("========== LOGIN REQUEST ==========");
    console.log(req.body);

    const { email, password } = req.body;

    const [user] = await pool.query(
      "SELECT * FROM users WHERE email=?",
      [email]
    );

    console.log("User Found:", user);

    if (user.length === 0) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      user[0].password
    );

    console.log("Password Match:", validPassword);

    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      { id: user[0].id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    console.log("Login Success");

    res.json({
      success: true,
      token,
      user: {
        id: user[0].id,
        name: user[0].name,
        email: user[0].email,
      },
    });

  } catch (error) {
    console.log("LOGIN ERROR");
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};