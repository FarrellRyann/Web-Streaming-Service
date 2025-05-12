import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button onClick={() => navigate('/login')}>Register</button>
      <p>
        Already have an account?{' '}
        <span className="link" onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
};

export default Register;