import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaHistory,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaRobot,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged Out Successfully 👋");
    navigate("/");
  };

  const menuStyle = ({ isActive }) => ({
    padding: "14px 18px",
    borderRadius: "14px",
    marginBottom: "10px",
    color: "#fff",
    background: isActive
      ? "linear-gradient(90deg,#2563eb,#3b82f6)"
      : "transparent",
    transition: "0.3s",
    fontWeight: isActive ? "600" : "400",
  });

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

        <h3 className="fw-bold">ResumeIQ AI</h3>

        <small>Smart Resume Analyzer</small>
      </div>

      <NavLink
        to="/dashboard"
        style={menuStyle}
        className="text-decoration-none d-block"
      >
        <FaHome className="me-2" />
        Dashboard
      </NavLink>

      <NavLink
        to="/history"
        style={menuStyle}
        className="text-decoration-none d-block"
      >
        <FaHistory className="me-2" />
        History
      </NavLink>

      <NavLink
        to="/profile"
        style={menuStyle}
        className="text-decoration-none d-block"
      >
        <FaUser className="me-2" />
        Profile
      </NavLink>

      <NavLink
        to="/settings"
        style={menuStyle}
        className="text-decoration-none d-block"
      >
        <FaCog className="me-2" />
        Settings
      </NavLink>

      <div className="position-absolute bottom-0 start-0 w-100 p-4">
        <button
          className="btn btn-danger w-100 rounded-4"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;