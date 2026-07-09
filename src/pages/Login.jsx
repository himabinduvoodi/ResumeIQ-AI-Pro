import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter Email and Password");
      return;
    }

    localStorage.setItem("user", email);

    alert("Login Successful ✅");

    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>ResumeIQ AI Pro</h1>

        <p>AI Powered Resume Analyzer</p>

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;