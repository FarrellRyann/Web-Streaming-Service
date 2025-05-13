const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// JWT Secret Key - In production, use environment variable
const JWT_SECRET = 'your-secret-key'; // TODO: Move to .env file

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // TODO: Move to .env file
  database: 'blockvyu'
});

db.connect(err => {
  if (err) {
    console.error('MySQL Connection Error:', err);
    process.exit(1);
  }
  console.log('MySQL Connected...');
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token.' });
    req.user = user;
    next();
  });
};

// =====================
//      REGISTER
// =====================
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if email already exists
    const [existingUsers] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (existingUsers.length > 0) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await db.promise().query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Registration failed.' });
  }
});

// =====================
//        LOGIN
// =====================
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Get user from database
    const [users] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    const user = users[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Login successful.',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Login failed.' });
  }
});

// Protected route example
app.get('/users/profile', authenticateToken, async (req, res) => {
  try {
    const [user] = await db.promise().query(
      'SELECT id, username, email FROM users WHERE id = ?',
      [req.user.id]
    );
    
    if (!user[0]) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json(user[0]);
  } catch (error) {
    console.error('Profile Error:', error);
    res.status(500).json({ message: 'Failed to fetch profile.' });
  }
});

// =====================
//       START
// =====================
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
