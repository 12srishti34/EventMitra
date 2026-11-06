// const express = require("express");
// const router = express.Router();

// const {
//   addService,
//   getVendorServices,
//   getAllServices,
//   updateService,
//   deleteService
// } = require("../controllers/service.controller");

// const authMiddleware = require("../middleware/auth.middleware");


// // ➕ ADD SERVICE
// router.post("/", authMiddleware, addService);

// // 📋 GET VENDOR SERVICES
// router.get("/my", authMiddleware, getVendorServices);

// // 🌍 GET ALL SERVICES
// router.get("/", getAllServices);

// // ✏️ UPDATE
// router.put("/:id", authMiddleware, updateService);

// // ❌ DELETE
// router.delete("/:id", authMiddleware, deleteService);

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  addService,
  getVendorServices,
  getAllServices,
  updateService,
  deleteService
} = require("../controllers/service.controller");

const authMiddleware = require("../middleware/auth.middleware");

// ➕ ADD SERVICE
router.post("/", authMiddleware, addService);

// 📋 GET VENDOR SERVICES
router.get("/my", authMiddleware, getVendorServices);

// 🌍 GET ALL SERVICES
router.get("/", getAllServices);

// ✏️ UPDATE SERVICE
router.put("/:id", authMiddleware, updateService);

// ❌ DELETE SERVICE
router.delete("/:id", authMiddleware, deleteService);

module.exports = router;