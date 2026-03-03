const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
// const authorizeRoles = require("../middleware/roleMiddleware");
function authorizeRoles(...roles) {
  return function (req, res, next) {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access Denied: Insufficient Permissions",
      });
    }
    next();
  };
}

const {
  addMedicine,
  getAllMedicines,
  updateMedicine,
  deleteMedicine,
} = require("../controllers/medicineController");

// Admin Only
router.post("/add", protect, authorizeRoles("admin"), addMedicine);
router.get("/all", protect, authorizeRoles("admin"), getAllMedicines);
router.put("/update/:id", protect, authorizeRoles("admin"), updateMedicine);
router.delete("/delete/:id", protect, authorizeRoles("admin"), deleteMedicine);

module.exports = router;