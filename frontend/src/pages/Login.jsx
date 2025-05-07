
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Di sini kamu bisa menambahkan validasi login jika diperlukan
    console.log("Login clicked");
    navigate("/users"); // Path disesuaikan dengan App.js
  };

  return (
    <div className="login-page">
      <div className="login-quote">
        <h2>
          What they said about <span className="highlight">BlockVyu</span>:
        </h2>
        <p className="quote">
          “They <span className="blue">walked the talk</span>, not only{" "}
          <span className="blue">talked the talk</span>.”
        </p>
        <p style={{ fontSize: "14px", marginTop: "10px" }}>
          -Mr. Chicken (Psychiatric Hospital's English Teacher)
        </p>
      </div>

      <div className="login-card">
        <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Sign In</button>
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={() => navigate("/register")}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
