const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware.js");
// const authorizeRoles = require("../middleware/roleMiddleware.js");
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
  addDoctor,
  addReceptionist,
} = require("../controllers/adminController");

router.post(
  "/add-doctor",
  protect,
  authorizeRoles("admin"),
  addDoctor
);

router.post(
  "/add-receptionist",
  protect,
  authorizeRoles("admin"),
  addReceptionist
);

module.exports = router;