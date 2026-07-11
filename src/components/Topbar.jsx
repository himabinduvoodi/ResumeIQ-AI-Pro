import {
  FaBell,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Topbar() {

  const { darkMode } = useTheme();

  const email = localStorage.getItem("user");

  const profile = JSON.parse(
    localStorage.getItem("profile")
  );

  const profileImage =
    localStorage.getItem("profileImage");

  const user =
    profile?.name ||
    (email
      ? email
          .split("@")[0]
          .replace(/\./g, " ")
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) =>
            c.toUpperCase()
          )
      : "User");

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
        duration: .5,
      }}
      className="d-flex justify-content-between align-items-center mb-4"
      style={{
        background: darkMode
          ? "#1e293b"
          : "#ffffff",
        color: darkMode
          ? "#fff"
          : "#000",
        padding: "20px 25px",
        borderRadius: "20px",
        boxShadow:
          "0 8px 20px rgba(0,0,0,.08)",
      }}
    >

      {/* Left */}

      <div>

        <h2 className="fw-bold mb-1">

          👋 {greeting}, {user}

        </h2>

        <p
          style={{
            color: darkMode
              ? "#cbd5e1"
              : "#6b7280",
            margin: 0,
          }}
        >

          Let's build an ATS-friendly resume today 🚀

        </p>

      </div>

      {/* Right */}

      <div className="d-flex align-items-center gap-3">

        {/* Search */}

        <div
          className="d-flex align-items-center"
          style={{
            background: darkMode
              ? "#334155"
              : "#f5f7fb",
            padding: "10px 15px",
            borderRadius: "12px",
            width: "280px",
          }}
        >

          <FaSearch
            className="me-2"
            color={
              darkMode
                ? "#fff"
                : "#2563eb"
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
            }}
          />

        </div>

        {/* Notification */}

        <button
          className="btn rounded-circle"
          style={{
            background: darkMode
              ? "#334155"
              : "#f5f7fb",
            color: darkMode
              ? "#fff"
              : "#000",
          }}
        >

          <FaBell />

        </button>

        {/* User */}

        <div className="d-flex align-items-center">

          <img
            src={
              profileImage ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              objectFit: "cover",
              border:
                "3px solid #2563eb",
              marginRight: "10px",
            }}
          />

          <div>

            <h6 className="fw-bold mb-0">

              {user}

            </h6>

            <small
              style={{
                color: darkMode
                  ? "#cbd5e1"
                  : "#6b7280",
              }}
            >

              ResumeIQ User

            </small>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default Topbar;