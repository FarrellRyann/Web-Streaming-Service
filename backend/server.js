const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt'); // Uncomment jika mau pakai hashing

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Koneksi ke MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ganti jika ada
  database: 'blockvyu'
});

db.connect(err => {
  if (err) {
    console.error('MySQL Connection Error:', err);
    process.exit(1);
  }
  console.log('MySQL Connected...');
});

// =====================
//      REGISTER
// =====================
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const checkEmail = 'SELECT * FROM users WHERE email = ?';
  db.query(checkEmail, [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error checking email' });

    if (results.length > 0) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
      if (err) {
        console.error('Insert Error:', err);
        return res.status(500).json({ message: 'Registration failed.' });
      }
      res.status(201).json({ message: 'User registered successfully.' });
    });
  });
});

// =====================
//        LOGIN
// =====================
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Login Error:', err);
      return res.status(500).json({ message: 'Login failed.' });
    }

    if (results.length > 0) {
      const user = results[0];
      return res.status(200).json({
        message: 'Login successful.',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        }
      });
    } else {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }
  });
});

// =====================
//       START
// =====================
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
