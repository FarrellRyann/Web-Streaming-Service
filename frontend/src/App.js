// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import untuk routing
import LandingPage from "./pages/Login"; // Halaman LandingPage
import LoginPage from "./pages/Login"; // Halaman Login
import RegisterPage from "./pages/Register"; // Halaman Register
import UsersPage from "./pages/Userspage"; // Halaman Users/Profile

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} /> {/* Halaman utama */}
    <Route path="/login" element={<LoginPage />} /> {/* Halaman login */}
    <Route path="/register" element={<RegisterPage />} /> {/* Halaman register */}
    <Route path="/users" element={<UsersPage />} /> {/* Halaman pengguna */}
    <Route path="*" element={<Navigate to="/" replace />} /> {/* Fallback jika tidak ditemukan */}
  </Routes>
);

export default App;
