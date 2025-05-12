import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Userspage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userspage" element={<Users />} />
    </Routes>
  );
}

export default App;