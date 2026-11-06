const express = require("express");
const router = express.Router();
const Inquiry = require("../models/inquiry.model");
const Service = require("../models/service.model");
const authMiddleware = require("../middleware/auth.middleware");

// ➕ Add new inquiry
router.post("/", async (req, res) => {
  try {
    const { serviceId, userName, userEmail, message } = req.body;
    if (!serviceId || !userName || !userEmail)
      return res.status(400).json({ message: "Missing fields" });

    const inquiry = new Inquiry({
      service: serviceId,
      name: userName,
      email: userEmail,
      message: message || "",
      date: new Date(),
    });

    await inquiry.save();
    res.status(201).json({ message: "Inquiry submitted", inquiry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Get inquiries for user
router.get("/user", authMiddleware, async (req, res) => {
  try {
    const inquiries = await Inquiry.find({ email: req.user.email })
      .populate("service", "title category vendor")
      .sort({ date: -1 });
    res.json(inquiries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Get inquiries for vendor
router.get("/vendor", authMiddleware, async (req, res) => {
  try {
    const services = await Service.find({ vendor: req.user._id });
    const serviceIds = services.map((s) => s._id);
    const inquiries = await Inquiry.find({ service: { $in: serviceIds } })
      .populate("service", "title")
      .sort({ date: -1 });
    res.json(inquiries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Reply to an inquiry
router.post("/reply/:id", authMiddleware, async (req, res) => {
  try {
    const { reply } = req.body;
    if (!reply) return res.status(400).json({ message: "Reply cannot be empty" });

    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) return res.status(404).json({ message: "Inquiry not found" });

    inquiry.reply = reply;
    await inquiry.save();
    res.json({ message: "Replied successfully", inquiry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;