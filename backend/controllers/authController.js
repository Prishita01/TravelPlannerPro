// controllers/authController.js
const Destination = require('../models/Destination');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Function to register a new user
exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Create a new user document
    const newUser = new User({
      email,
      password: bcrypt.hashSync(password, 10), // Hash the password before saving it
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'An error occurred during user registration.' });
  }
};

// Function to log in an existing user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Create a JSON Web Token (JWT) for the user
    const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'An error occurred during user login.' });
  }
};
