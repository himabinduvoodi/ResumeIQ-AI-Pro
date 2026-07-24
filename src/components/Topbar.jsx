import {
  FaBell,
  FaSearch,
  FaMoon,
  FaSun,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

function Topbar() {
  const { darkMode, toggleTheme } = useTheme();

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "long",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const profile = JSON.parse(localStorage.getItem("profile"));
  const profileImage = localStorage.getItem("profileImage");

  const user =
    profile?.name ||
    storedUser?.name ||
    storedUser?.email ||
    "User";

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="d-flex justify-content-between align-items-center mb-4"
      style={{
        background: darkMode
          ? "rgba(15,23,42,.9)"
          : "rgba(255,255,255,.9)",
        backdropFilter: "blur(15px)",
        padding: "22px 28px",
        borderRadius: "22px",
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      {/* LEFT */}

      <div>

        <h2
          className="fw-bold mb-1"
          style={{
            color: darkMode
              ? "#fff"
              : "#111827",
          }}
        >
          👋 {greeting}, {user}
        </h2>

        <p
          className="mb-2"
          style={{
            color: darkMode
              ? "#CBD5E1"
              : "#6B7280",
          }}
        >
          Welcome back to ResumeIQ AI Pro 🚀
        </p>

        <small
          style={{
            color: darkMode
              ? "#94A3B8"
              : "#64748B",
          }}
        >
          <FaCalendarAlt className="me-2" />
          {time}
        </small>

      </div>

      {/* RIGHT */}

      <div
        className="d-flex align-items-center"
        style={{
          gap: "18px",
        }}
      >

        {/* Search */}

        <div
          className="d-flex align-items-center"
          style={{
            background: darkMode
              ? "#1E293B"
              : "#F8FAFC",
            borderRadius: "14px",
            padding: "10px 16px",
            width: "300px",
          }}
        >

          <FaSearch
            color={
              darkMode
                ? "#fff"
                : "#2563EB"
            }
          />

          <input
            type="text"
            placeholder="Search..."
            className="form-control border-0 shadow-none"
            style={{
              background: "transparent",
              color: darkMode
                ? "#fff"
                : "#000",
              marginLeft: "10px",
            }}
          />

        </div>

        {/* Theme */}

        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: .9,
          }}
          onClick={toggleTheme}
          className="btn rounded-circle"
          style={{
            width: "48px",
            height: "48px",
            background: darkMode
              ? "#1E293B"
              : "#F8FAFC",
          }}
        >

          {darkMode ? (
            <FaSun
              color="#FFD43B"
            />
          ) : (
            <FaMoon
              color="#2563EB"
            />
          )}

        </motion.button>

        {/* Notification */}

        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          style={{
            position: "relative",
          }}
        >

          <button
            className="btn rounded-circle"
            style={{
              width: "48px",
              height: "48px",
              background: darkMode
                ? "#1E293B"
                : "#F8FAFC",
            }}
          >

            <FaBell
              color={
                darkMode
                  ? "#fff"
                  : "#2563EB"
              }
            />

          </button>

          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "12px",
              height: "12px",
              background: "#ef4444",
              borderRadius: "50%",
            }}
          />

        </motion.div>

        {/* Profile */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          className="d-flex align-items-center"
        >

          <img
            src={
              profileImage ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #2563EB",
            }}
          />

          <div className="ms-3">

            <h6
              className="fw-bold mb-0"
              style={{
                color: darkMode
                  ? "#fff"
                  : "#111827",
              }}
            >
              {user}
            </h6>

            <small
              style={{
                color: darkMode
                  ? "#94A3B8"
                  : "#64748B",
              }}
            >
              AI Resume Developer
            </small>

          </div>

        </motion.div>

      </div>

    </motion.div>
  );
}

export default Topbar;