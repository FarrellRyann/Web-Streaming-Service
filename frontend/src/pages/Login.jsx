import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={() => navigate('/userspage')}>Login</button>
      <p>
        Don&apos;t have an account?{' '}
        <span className="link" onClick={() => navigate('/register')}>Register</span>
      </p>
    </div>
  );
};

export default Login;