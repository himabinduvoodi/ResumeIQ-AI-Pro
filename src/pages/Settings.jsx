import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useTheme } from "../context/ThemeContext";

function Settings() {

  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.background = darkMode
      ? "#121212"
      : "#f4f7fc";
  }, [darkMode]);

  return (

    <div
      className="d-flex"
      style={{
        background: darkMode ? "#121212" : "#f4f7fc",
        minHeight: "100vh",
        color: darkMode ? "white" : "black",
      }}
    >

      <Sidebar />

      <div
        className="flex-grow-1"
        style={{
          marginLeft: "260px",
          padding: "30px",
        }}
      >

        <Topbar />

        <div
          className="card border-0 shadow-lg mt-4"
          style={{
            background: darkMode ? "#1f2937" : "white",
            color: darkMode ? "white" : "black",
          }}
        >

          <div className="card-body">

            <h2 className="mb-4">
              ⚙ Settings
            </h2>

            <div className="form-check form-switch">

              <input
                className="form-check-input"
                type="checkbox"
                checked={darkMode}
                onChange={toggleTheme}
              />

              <label className="form-check-label ms-2">

                Enable Dark Mode

              </label>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Settings;