const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["user", "vendor"],
    default: "user"
  },
  location: String   // add this line
}, { timestamps: true });

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: {
//     type: String,
//     enum: ["user", "vendor"],
//     default: "user"
//   }
// }, { timestamps: true });

 module.exports = mongoose.model("User", userSchema);

