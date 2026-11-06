// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true
//     },
//     description: String,

//     category: String,

//     pricingType: {
//       type: String,
//       enum: ["fixed", "per_person", "package"],
//       default: "fixed"
//     },

//     price: Number,

//     customQuestions: [String],

//     vendor: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User"
//     }

//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Service", serviceSchema);
const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    category: String,
    pricingType: {
      type: String,
      enum: ["fixed", "per_person", "package"],
      default: "fixed"
    },
    price: Number,
    customQuestions: [String],
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);