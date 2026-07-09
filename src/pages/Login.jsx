import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>ResumeIQ AI Pro</h1>

        <p>AI Powered Resume Analyzer</p>

        <input
          type="email"
          placeholder="Enter your Email"
        />

        <input
          type="password"
          placeholder="Enter your Password"
        />

        <button
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>

        <span>
          Don't have an account? Sign Up
        </span>

      </div>
    </div>
  );
}

export default Login;