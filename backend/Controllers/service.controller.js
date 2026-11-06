// const Service = require("../models/service.model");

// //add services
// exports.addService = async (req, res) => {
//   try {
//     const { title, price, category } = req.body;

//     if (!title || !price || !category) {
//       return res.status(400).json({ message: "Required fields missing" });
//     }

//     const service = new Service({
//       ...req.body,
//       vendor: req.user.id
//     });

//     await service.save();

//     res.status(201).json(service);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// // GET VENDOR SERVICES
// exports.getVendorServices = async (req, res) => {
//   try {
//     const services = await Service.find({ vendor: req.user.id });

//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// // GET ALL SERVICES (PUBLIC)
// exports.getAllServices = async (req, res) => {
//   try {
//     const services = await Service.find()
//       .populate("vendor", "name email location"); // 🔥 FIX

//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// //UPDATE SERVICE (SECURE)
// exports.updateService = async (req, res) => {
//   try {
//     const service = await Service.findById(req.params.id);

//     if (!service) {
//       return res.status(404).json({ message: "Service not found" });
//     }

//     // 🔒 CHECK OWNER
//     if (service.vendor.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Unauthorized" });
//     }

//     const updated = await Service.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// // DELETE SERVICE (SECURE)
// exports.deleteService = async (req, res) => {
//   try {
//     const service = await Service.findById(req.params.id);

//     if (!service) {
//       return res.status(404).json({ message: "Service not found" });
//     }

//     // 🔒 CHECK OWNER
//     if (service.vendor.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Unauthorized" });
//     }

//     await Service.findByIdAndDelete(req.params.id);

//     res.json({ message: "Service deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const Service = require("../models/service.model");

// ➕ ADD SERVICE
exports.addService = async (req, res) => {
  try {
    const { title, price, category } = req.body;
    if (!title || !price || !category)
      return res.status(400).json({ message: "Required fields missing" });

    const service = new Service({ ...req.body, vendor: req.user.id });
    await service.save();

    res.status(201).json(service);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// 📋 GET VENDOR SERVICES
exports.getVendorServices = async (req, res) => {
  try {
    const services = await Service.find({ vendor: req.user.id });
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// 🌍 GET ALL SERVICES (PUBLIC)
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate(
      "vendor",
      "name email role location"
    );
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// ✏️ UPDATE SERVICE
exports.updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });

    if (service.vendor.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// ❌ DELETE SERVICE
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });

    if (service.vendor.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};