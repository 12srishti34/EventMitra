// // require("dotenv").config();
// // const express = require("express");
// // const cors = require("cors");

// // const connectDB = require("./db/connect");

// // const app = express();

// // // middleware
// // app.use(cors());
// // app.use(express.json());

// // // DB connect
// // connectDB();

// // // routes
// // const authRoutes = require("./routes/auth.routes");
// // app.use("/api/auth", authRoutes);

// // const serviceRoutes = require("./routes/service.routes");
// // app.use("/api/services", serviceRoutes);

// // // test route
// // app.get("/", (req, res) => {
// //   res.send("API Running 🚀");
// // });

// // // server start
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// const connectDB = require("./db/connect");

// const app = express();

// // middleware
// app.use(cors());
// app.use(express.json());

// // DB connect
// connectDB();

// // routes
// const authRoutes = require("./routes/auth.routes");
// app.use("/api/auth", authRoutes);

// const serviceRoutes = require("./routes/service.routes");
// app.use("/api/services", serviceRoutes);

// // ✅ Inquiry Routes
// const inquiryRoutes = require("./routes/inquiry.routes");
// app.use("/api/inquiries", inquiryRoutes);

// // test route
// app.get("/", (req, res) => {
//   res.send("API Running 🚀");
// });

// // server start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// Routes
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

const serviceRoutes = require("./routes/service.routes");
app.use("/api/services", serviceRoutes);

const inquiryRoutes = require("./routes/inquiry.routes");
app.use("/api/inquiries", inquiryRoutes);

// Test route
app.get("/", (req, res) => res.send("API Running 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));