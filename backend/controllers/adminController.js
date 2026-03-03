const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

// =======================
// ADD DOCTOR
// =======================
exports.addDoctor = async (req, res) => {
  try {
    const { name, email, password, specialization } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const doctor = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "doctor",
      specialization,
    });

    res.status(201).json({
      message: "Doctor added successfully",
      doctorId: doctor._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =======================
// ADD RECEPTIONIST
// =======================
exports.addReceptionist = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const receptionist = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "receptionist",
    });

    res.status(201).json({
      message: "Receptionist added successfully",
      receptionistId: receptionist._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};