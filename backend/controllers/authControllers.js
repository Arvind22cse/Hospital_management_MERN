const User = require("../models/User.js");



// =======================
// PATIENT SIGNUP
// =======================
exports.patientSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const patient = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "patient",
    });

    res.status(201).json({
      message: "Patient registered successfully",
      userId: patient._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =======================
// LOGIN (ALL ROLES)
// =======================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = generateToken(user);

    res.status(200).json({
      message: "Login successful",
      token,
      role: user.role,
      userId: user._id,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

// =======================
// PATIENT SIGNUP
// =======================
exports.patientSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const patient = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "patient",
    });

    res.status(201).json({
      message: "Patient registered successfully",
      userId: patient._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =======================
// LOGIN (ALL ROLES)
// =======================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = generateToken(user);

    res.status(200).json({
      message: "Login successful",
      token,
      role: user.role,
      userId: user._id,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};