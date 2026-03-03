const express = require("express");
const router = express.Router();

const { patientSignup, login } = require("../controllers/authControllers.js");

router.post("/signup", patientSignup);
router.post("/login", login);

module.exports = router;