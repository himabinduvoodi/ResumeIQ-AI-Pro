import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaHistory,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaRobot,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      className="position-fixed top-0 start-0 text-white"
      style={{
        width: "260px",
        height: "100vh",
        background: "linear-gradient(180deg,#0f172a,#1e3a8a)",
        padding: "30px 20px",
        boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      {/* Logo */}

      <div className="text-center mb-5">

        <div
          className="d-inline-flex justify-content-center align-items-center mb-3"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "#2563eb",
            fontSize: "30px",
          }}
        >
          <FaRobot />
        </div>

        <h3 className="fw-bold mb-1">
          ResumeIQ AI
        </h3>

        <small className="text-light">
          Smart Resume Analyzer
        </small>

      </div>

      {/* Navigation */}

      <NavLink
        to="/dashboard"
        className="text-decoration-none text-white d-block mb-3"
      >
        <div className="p-3 rounded-4 bg-primary">
          <FaHome className="me-2" />
          Dashboard
        </div>
      </NavLink>

      <NavLink
        to="/history"
        className="text-decoration-none text-white d-block mb-3"
      >
        <div className="p-3 rounded-4">
          <FaHistory className="me-2" />
          History
        </div>
      </NavLink>

      <NavLink
        to="/profile"
        className="text-decoration-none text-white d-block mb-3"
      >
        <div className="p-3 rounded-4">
          <FaUser className="me-2" />
          Profile
        </div>
      </NavLink>

      <NavLink
        to="/settings"
        className="text-decoration-none text-white d-block"
      >
        <div className="p-3 rounded-4">
          <FaCog className="me-2" />
          Settings
        </div>
      </NavLink>

      {/* Logout */}

      <div
        className="position-absolute bottom-0 start-0 w-100 p-4"
      >
        <button className="btn btn-danger w-100 rounded-4">
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;