const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://tharunselladuraiperumal_db_user:jjUR1cwDFZDKRDnn@hospitalmanagment.fwfy49m.mongodb.net/hospitalDB?retryWrites=true&w=majority")
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => console.log("Mongo Error:", err.message));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});