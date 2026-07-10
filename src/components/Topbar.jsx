import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

function Topbar() {

  const { darkMode } = useTheme();

  const profile =
    JSON.parse(localStorage.getItem("profile")) || {};

  const profileImage =
    localStorage.getItem("profileImage");

  const email =
    localStorage.getItem("user") || "";

  let user = profile.name;

  if (!user || user.trim() === "") {

    user = email
      ? email
          .split("@")[0]
          .replace(/\./g, " ")
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())
      : "User";

  }

  return (

    <div
      className="d-flex justify-content-between align-items-center mb-4"
      style={{
        background: darkMode ? "#1f2937" : "#ffffff",
        color: darkMode ? "white" : "black",
        padding: "20px 25px",
        borderRadius: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >

      {/* Left */}

      <div>

        <h2 className="fw-bold mb-1">
          Dashboard
        </h2>

        <p
          className="mb-0"
          style={{
            color: darkMode ? "#d1d5db" : "#6b7280",
          }}
        >
          Welcome to ResumeIQ AI Pro 👋
        </p>

      </div>

      {/* Right */}

      <div
        className="d-flex align-items-center gap-3"
      >

        {/* Search */}

        <div
          className="d-flex align-items-center"
          style={{
            background: darkMode
              ? "#374151"
              : "#f5f7fb",
            padding: "10px 15px",
            borderRadius: "12px",
            width: "280px",
          }}
        >

          <FaSearch
            className="me-2"
            color="#2563eb"
          />

          <input
            type="text"
            placeholder="Search..."
            className="form-control border-0 shadow-none"
            style={{
              background: "transparent",
              color: darkMode
                ? "white"
                : "black",
            }}
          />

        </div>

        {/* Notification */}

        <button
          className="btn rounded-circle p-3"
          style={{
            background: darkMode
              ? "#374151"
              : "#f8f9fa",
            color: darkMode
              ? "white"
              : "black",
          }}
        >

          <FaBell />

        </button>

        {/* User */}

        <div
          className="d-flex align-items-center"
        >

          {profileImage ? (

            <img
              src={profileImage}
              alt="Profile"
              className="rounded-circle me-2"
              style={{
                width: "45px",
                height: "45px",
                objectFit: "cover",
              }}
            />

          ) : (

            <FaUserCircle
              size={45}
              className="text-primary me-2"
            />

          )}

          <div>

            <h6 className="mb-0 fw-bold">
              {user}
            </h6>

            <small
              style={{
                color: darkMode
                  ? "#d1d5db"
                  : "#6b7280",
              }}
            >
              Student
            </small>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Topbar;