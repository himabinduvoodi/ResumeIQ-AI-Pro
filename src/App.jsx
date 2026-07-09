import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/history"
        element={<History />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />
    </Routes>
  );
}

export default App;