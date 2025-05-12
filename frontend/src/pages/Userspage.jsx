import React from 'react';
import '../styles/users.css';

const users = [
  { id: 1, color: 'blue', img: '/avatars/blue.png' },
  { id: 2, color: 'red', img: '/avatars/red.png' },
  { id: 3, color: 'gray', img: '/avatars/gray.png' },
  { id: 4, color: 'yellow', img: '/avatars/yellow.png' },
];

const Users = () => {
  return (
    <div className="users-page">
      <header className="header">
        <img src="/logo.png" alt="BlockVyu Logo" className="logo" />
      </header>

      <main className="users-main">
        <h1>Who’s watching?</h1>
        <div className="avatars">
          {users.map(user => (
            <img key={user.id} src={user.img} alt={`User ${user.color}`} className="avatar" />
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/logo-white.png" alt="BlockVyu White Logo" />
          </div>
          <div className="footer-links">
            <a href="#">FAQ</a>
            <a href="#">Cookies Preferences</a>
            <a href="#">Help Center</a>
            <a href="#">Privacy & Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Any question? Contact 1234–5678</p>
          <p>© BlockVyu 2025, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Users;
