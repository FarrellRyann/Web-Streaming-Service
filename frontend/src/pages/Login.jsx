// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    navigate("/users");
  };

  return (
    <div>
      <h1>Brvu</h1>
      <blockquote>
        "They walked the talk, not only talked the talk."
      </blockquote>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
