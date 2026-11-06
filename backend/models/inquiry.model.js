const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
  date: { type: Date, default: Date.now },
  reply: { type: String, default: "" },
});

module.exports = mongoose.model("Inquiry", inquirySchema);