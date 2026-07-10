import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Register() {

  const navigate = useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleRegister=()=>{

    if(!email || !password){

      alert("Please fill all fields");

      return;
    }

    localStorage.setItem("user",email);

    alert("Account Created Successfully ✅");

    navigate("/dashboard");

  };

  return(

    <div className="login-container">

      <div className="login-card">

        <h1>Create Account</h1>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Register
        </button>

        <p className="mt-3">

          Already have an account?

          <Link to="/">
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;