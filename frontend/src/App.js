// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import UsersPage from "./pages/Userspage";

const App = () => (
  <div className="app-container">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
);

export default App;