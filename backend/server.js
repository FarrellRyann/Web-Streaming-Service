const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt'); // (optional) kalau nanti mau pakai hash

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Koneksi ke MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ganti jika ada password
  database: 'blockvyu'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Register
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  console.log('Register attempt:', username, email, password); // Debug

  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  
  // Optional kalau pakai bcrypt:
  // const hashedPassword = await bcrypt.hash(password, 10);
  // db.query(sql, [username, email, hashedPassword], ...

  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error('Registration error:', err);
      return res.status(500).send('Registration failed.');
    }
    res.status(200).send('User registered successfully!');
  });
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', email, password); // Debug

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).send('Login failed.');
    }
    if (results.length > 0) {
      console.log('Login success:', results[0]); // Debug
      res.status(200).json({ message: 'Login successful', user: results[0] });
    } else {
      console.log('Login failed: invalid credentials');
      res.status(401).send('Invalid credentials');
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
