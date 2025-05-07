  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import "../styles/register.css";

  const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      users: "",
      email: "",
      password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      try {
        console.log("Registration data:", formData);
        navigate("/login");
      } catch (err) {
        setError(err.message || "Registration failed");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="register-page">
        <div className="register-quote">
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

        <div className="register-card">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="users"
              placeholder="Users"
              value={formData.users}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input"
            />
            <button type="submit" disabled={loading} className="submit-button">
              {loading ? "Signing up..." : "Sign up"}
            </button>
            {error && <p className="error-message">{error}</p>}
            <p>
              Already have an account?{" "}
              <span onClick={() => navigate("/login")} className="login-link">
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  };

  export default Register;
