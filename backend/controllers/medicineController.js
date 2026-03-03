const Medicine = require("../models/Medicine");

// Add Medicine
exports.addMedicine = async (req, res) => {
  try {
    const {
      name,
      manufacturer,
      category,
      price,
      stock,
      expiryDate,
      description,
    } = req.body;

    const existing = await Medicine.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: "Medicine already exists" });
    }

    const medicine = await Medicine.create({
      name,
      manufacturer,
      category,
      price,
      stock,
      expiryDate,
      description,
    });

    res.status(201).json({
      message: "Medicine added successfully",
      medicine,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All
exports.getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
exports.updateMedicine = async (req, res) => {
  try {
    const updated = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Medicine updated",
      updated,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
exports.deleteMedicine = async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Medicine deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};