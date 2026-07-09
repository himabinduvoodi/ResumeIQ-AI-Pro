import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Settings() {

  const [darkMode, setDarkMode] = useState(false);

  const [notifications, setNotifications] = useState(true);

  useEffect(() => {

    const savedDark =
      JSON.parse(localStorage.getItem("darkMode"));

    const savedNotify =
      JSON.parse(localStorage.getItem("notifications"));

    if (savedDark !== null) {
      setDarkMode(savedDark);
    }

    if (savedNotify !== null) {
      setNotifications(savedNotify);
    }

  }, []);

  const saveSettings = () => {

    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );

    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );

    alert("Settings Saved Successfully!");

  };

  return (

    <div
      className="d-flex"
      style={{
        background: darkMode ? "#222" : "#f4f7fc",
        minHeight: "100vh",
      }}
    >

      <Sidebar />

      <div
        className="flex-grow-1"
        style={{
          marginLeft: "260px",
          padding: "30px",
          color: darkMode ? "white" : "black",
        }}
      >

        <Topbar />

        <div
          className="card shadow border-0 rounded-4 mt-4"
        >

          <div className="card-body p-4">

            <h2 className="fw-bold mb-4">
              ⚙ Settings
            </h2>

            <div className="form-check form-switch mb-4">

              <input
                className="form-check-input"
                type="checkbox"
                checked={darkMode}
                onChange={() =>
                  setDarkMode(!darkMode)
                }
              />

              <label className="form-check-label">

                Enable Dark Mode

              </label>

            </div>

            <div className="form-check form-switch mb-4">

              <input
                className="form-check-input"
                type="checkbox"
                checked={notifications}
                onChange={() =>
                  setNotifications(!notifications)
                }
              />

              <label className="form-check-label">

                Enable Notifications

              </label>

            </div>

            <button
              className="btn btn-primary"
              onClick={saveSettings}
            >

              Save Settings

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Settings;