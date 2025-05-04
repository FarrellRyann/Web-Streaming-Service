import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <h1>Brvu</h1>
      <blockquote>
        "Your experience is our priority."
      </blockquote>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
