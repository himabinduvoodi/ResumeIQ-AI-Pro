import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <div
      className="d-flex justify-content-between align-items-center mb-4"
      style={{
        background: "#ffffff",
        padding: "20px 25px",
        borderRadius: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Left Section */}

      <div>
        <h2 className="fw-bold mb-1">Dashboard</h2>
        <p className="text-muted mb-0">
          Welcome to ResumeIQ AI Pro 👋
        </p>
      </div>

      {/* Right Section */}

      <div className="d-flex align-items-center gap-3">

        {/* Search Box */}

        <div
          className="d-flex align-items-center"
          style={{
            background: "#f5f7fb",
            padding: "10px 15px",
            borderRadius: "12px",
            width: "280px",
          }}
        >
          <FaSearch className="text-primary me-2" />

          <input
            type="text"
            placeholder="Search..."
            className="form-control border-0 bg-transparent shadow-none"
          />
        </div>

        {/* Notification */}

        <button className="btn btn-light rounded-circle p-3">
          <FaBell />
        </button>

        {/* User */}

        <div className="d-flex align-items-center">

          <FaUserCircle
            size={45}
            className="text-primary me-2"
          />

          <div>

            <h6 className="mb-0 fw-bold">
              Himabindu
            </h6>

            <small className="text-muted">
              Student
            </small>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Topbar;