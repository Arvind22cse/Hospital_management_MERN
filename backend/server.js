const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

// Load .env explicitly from this directory so nodemon or different CWD won't break it
const dotenvResult = dotenv.config({ path: path.join(__dirname, ".env") });
if (dotenvResult.error) {
  console.warn("⚠️  .env not found or failed to load:", dotenvResult.error.message || dotenvResult.error);
}
const app = express();

app.use(cors());
app.use(express.json());

// Ensure DB URI is provided
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not set. Please add it to your .env file.");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => {
    console.error("Mongo Error:", err.message);
    process.exit(1);
  });

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/medicine", require("./routes/medicineRoutes"))
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});