// // import React, { useState, useEffect } from "react";
// // import "./VendorDashboard.css";
// // import {
// //   getVendorServices,
// //   addService,
// //   updateService,
// //   deleteService,
// // } from "../api/service";

// // function VendorDashboard() {
// //   const [showForm, setShowForm] = useState(false);
// //   const [services, setServices] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [filterCategory, setFilterCategory] = useState("all");

// //   const [formData, setFormData] = useState({
// //     title: "",
// //     description: "",
// //     category: "",
// //     pricingType: "fixed",
// //     price: "",
// //     customQuestions: [],
// //   });

// //   const [question, setQuestion] = useState("");
// //   const [editId, setEditId] = useState(null); // for edit mode

// //   // 🔥 FETCH VENDOR SERVICES FROM BACKEND
// //   useEffect(() => {
// //     fetchServices();
// //   }, []);

// //   const fetchServices = async () => {
// //     try {
// //       const res = await getVendorServices();
// //       setServices(res.data);
// //     } catch (err) {
// //       console.error("Fetch services error:", err);
// //     }
// //   };

// //   // ➕ ADD QUESTION
// //   const addQuestion = () => {
// //     if (!question) return;
// //     setFormData({
// //       ...formData,
// //       customQuestions: [...formData.customQuestions, question],
// //     });
// //     setQuestion("");
// //   };

// //   // ➕ ADD OR UPDATE SERVICE
// //   const handleSubmit = async () => {
// //     try {
// //       if (editId) {
// //         // Update service
// //         await updateService(editId, formData);
// //       } else {
// //         // Add service
// //         await addService(formData);
// //       }

// //       fetchServices();
// //       setShowForm(false);
// //       setFormData({
// //         title: "",
// //         description: "",
// //         category: "",
// //         pricingType: "fixed",
// //         price: "",
// //         customQuestions: [],
// //       });
// //       setEditId(null);
// //     } catch (err) {
// //       console.error("Add/Update service error:", err);
// //     }
// //   };

// //   // ❌ DELETE SERVICE
// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this service?")) return;
// //     try {
// //       await deleteService(id);
// //       fetchServices();
// //     } catch (err) {
// //       console.error("Delete service error:", err);
// //     }
// //   };

// //   // ✏️ EDIT SERVICE
// //   const handleEdit = (service) => {
// //     setFormData({
// //       title: service.title,
// //       description: service.description,
// //       category: service.category,
// //       pricingType: service.pricingType,
// //       price: service.price,
// //       customQuestions: service.customQuestions || [],
// //     });
// //     setEditId(service._id);
// //     setShowForm(true);
// //   };

// //   // 🔍 FILTER + SEARCH
// //   const filteredServices = services.filter((s) => {
// //     return (
// //       (filterCategory === "all" || s.category === filterCategory) &&
// //       s.title.toLowerCase().includes(search.toLowerCase())
// //     );
// //   });

// //   // 📊 INSIGHTS
// //   const totalServices = services.length;
// //   const totalBookings = services.reduce((a, b) => a + (b.bookings || 0), 0);
// //   const avgPrice =
// //     services.reduce((a, b) => a + Number(b.price || 0), 0) /
// //     (services.length || 1);

// //   return (
// //     <div className="vendor-dashboard">
// //       <h1>Vendor Dashboard</h1>

// //       {/* 📊 INSIGHTS */}
// //       <div className="insights">
// //         <div className="card">Total Services: {totalServices}</div>
// //         <div className="card">Total Bookings: {totalBookings}</div>
// //         <div className="card">Avg Price: ₹ {avgPrice.toFixed(0)}</div>
// //       </div>

// //       {/* 🔍 SEARCH + FILTER */}
// //       <div className="controls">
// //         <input
// //           placeholder="Search service..."
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //         />

// //         <select onChange={(e) => setFilterCategory(e.target.value)}>
// //           <option value="all">All</option>
// //           {Array.from(new Set(services.map((s) => s.category))).map((cat) => (
// //             <option key={cat} value={cat}>{cat}</option>
// //           ))}
// //         </select>
// //       </div>

// //       <div className="dashboard-actions">
// //         <button onClick={() => setShowForm(true)}>➕ Add Service</button>
// //       </div>

// //       {/* ➕ FORM */}
// //       {showForm && (
// //         <div className="modal-overlay">
// //           <div className="modal-container">
// //             <div className="service-form">
// //               <input
// //                 placeholder="Service Name"
// //                 value={formData.title}
// //                 onChange={(e) =>
// //                   setFormData({ ...formData, title: e.target.value })
// //                 }
// //               />

// //               <textarea
// //                 placeholder="Description"
// //                 value={formData.description}
// //                 onChange={(e) =>
// //                   setFormData({ ...formData, description: e.target.value })
// //                 }
// //               />

// //               <input
// //                 placeholder="Category"
// //                 value={formData.category}
// //                 onChange={(e) =>
// //                   setFormData({ ...formData, category: e.target.value })
// //                 }
// //               />

// //               <input
// //                 type="number"
// //                 placeholder="Price"
// //                 value={formData.price}
// //                 onChange={(e) =>
// //                   setFormData({ ...formData, price: e.target.value })
// //                 }
// //               />

// //               <h3>Custom Questions</h3>
// //               <input
// //                 placeholder="Add Question"
// //                 value={question}
// //                 onChange={(e) => setQuestion(e.target.value)}
// //               />
// //               <button onClick={addQuestion}>+ Add Question</button>

// //               {formData.customQuestions.map((q, i) => (
// //                 <p key={i}>• {q}</p>
// //               ))}

// //               <button onClick={handleSubmit}>
// //                 {editId ? "Update" : "Submit"}
// //               </button>
// //               <button onClick={() => { setShowForm(false); setEditId(null); }}>
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* 📦 SERVICE LIST */}
// //       <div className="service-list">
// //         {filteredServices.map((s) => (
// //           <div key={s._id} className="service-card">
// //             <h3>{s.title}</h3>
// //             <p>{s.description}</p>
// //             <p>₹ {s.price}</p>

// //             <div className="actions">
// //               <button onClick={() => handleEdit(s)}>Edit</button>
// //               <button onClick={() => handleDelete(s._id)}>Delete</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default VendorDashboard;
// import React, { useState, useEffect } from "react";
// import "./VendorDashboard.css";
// import {
//   getVendorServices,
//   addService,
//   updateService,
//   deleteService,
// } from "../api/service";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// function VendorDashboard() {
//   const [showForm, setShowForm] = useState(false);
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filterCategory, setFilterCategory] = useState("all");
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category: "",
//     pricingType: "fixed",
//     price: "",
//     customQuestions: [],
//   });
//   const [question, setQuestion] = useState("");
//   const [editId, setEditId] = useState(null);

//   // extra info dummy data
//   const [monthlyData, setMonthlyData] = useState([]);

//   // fetch services from backend
//   useEffect(() => {
//     fetchServices();
//     // dummy monthly data for charts
//     setMonthlyData([
//       { month: "Jan", income: 50000, orders: 12 },
//       { month: "Feb", income: 75000, orders: 18 },
//       { month: "Mar", income: 30000, orders: 8 },
//       { month: "Apr", income: 90000, orders: 20 },
//       { month: "May", income: 45000, orders: 10 },
//       { month: "Jun", income: 60000, orders: 15 },
//     ]);
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const res = await getVendorServices();
//       setServices(res.data);
//     } catch (err) {
//       console.error("Fetch services error:", err);
//     }
//   };

//   const addQuestion = () => {
//     if (!question) return;
//     setFormData({
//       ...formData,
//       customQuestions: [...formData.customQuestions, question],
//     });
//     setQuestion("");
//   };

//   const handleSubmit = async () => {
//     try {
//       if (editId) await updateService(editId, formData);
//       else await addService(formData);

//       fetchServices();
//       setShowForm(false);
//       setFormData({
//         title: "",
//         description: "",
//         category: "",
//         pricingType: "fixed",
//         price: "",
//         customQuestions: [],
//       });
//       setEditId(null);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure?")) return;
//     try {
//       await deleteService(id);
//       fetchServices();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleEdit = (service) => {
//     setFormData({
//       title: service.title,
//       description: service.description,
//       category: service.category,
//       pricingType: service.pricingType,
//       price: service.price,
//       customQuestions: service.customQuestions || [],
//     });
//     setEditId(service._id);
//     setShowForm(true);
//   };

//   const filteredServices = services.filter(
//     (s) =>
//       (filterCategory === "all" || s.category === filterCategory) &&
//       s.title.toLowerCase().includes(search.toLowerCase())
//   );

//   // dashboard insights
//   const totalServices = services.length;
//   const totalBookings = services.reduce((a, b) => a + (b.bookings || 0), 0);
//   const avgPrice =
//     services.reduce((a, b) => a + Number(b.price || 0), 0) /
//     (services.length || 1);

//   return (
//     <div className="vendor-dashboard">
//       <h1>Vendor Dashboard</h1>

//       {/* INSIGHTS CARDS */}
//       <div className="insights">
//         <div className="card">Total Services: {totalServices}</div>
//         <div className="card">Total Bookings: {totalBookings}</div>
//         <div className="card">Avg Price: ₹ {avgPrice.toFixed(0)}</div>
//         <div className="card">Useful Info</div>
//       </div>

//       {/* SEARCH + FILTER */}
//       <div className="controls">
//         <input
//           placeholder="Search service..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select onChange={(e) => setFilterCategory(e.target.value)}>
//           <option value="all">All</option>
//           {Array.from(new Set(services.map((s) => s.category))).map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* ACTION BUTTONS */}
//       <div className="dashboard-actions">
//         <button onClick={() => setShowForm(true)}>➕ Add Service</button>
//         <button>📊 Reports</button>
//         <button>⭐ Ratings</button>
//         <button>📦 Orders</button>
//       </div>

//       {/* FORM */}
//       {showForm && (
//         <div className="modal-overlay">
//           <div className="modal-container">
//             <div className="service-form">
//               <input
//                 placeholder="Service Name"
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData({ ...formData, title: e.target.value })
//                 }
//               />
//               <textarea
//                 placeholder="Description"
//                 value={formData.description}
//                 onChange={(e) =>
//                   setFormData({ ...formData, description: e.target.value })
//                 }
//               />
//               <input
//                 placeholder="Category"
//                 value={formData.category}
//                 onChange={(e) =>
//                   setFormData({ ...formData, category: e.target.value })
//                 }
//               />
//               <input
//                 type="number"
//                 placeholder="Price"
//                 value={formData.price}
//                 onChange={(e) =>
//                   setFormData({ ...formData, price: e.target.value })
//                 }
//               />

//               <h3>Custom Questions</h3>
//               <input
//                 placeholder="Add Question"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//               />
//               <button onClick={addQuestion}>+ Add Question</button>
//               {formData.customQuestions.map((q, i) => (
//                 <p key={i}>• {q}</p>
//               ))}

//               <button onClick={handleSubmit}>
//                 {editId ? "Update" : "Submit"}
//               </button>
//               <button onClick={() => { setShowForm(false); setEditId(null); }}>
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* SERVICE LIST */}
//       <div className="service-list">
//         {filteredServices.map((s) => (
//           <div key={s._id} className="service-card">
//             <h3>{s.title}</h3>
//             <p>{s.description}</p>
//             <p>₹ {s.price}</p>
//             <div className="actions">
//               <button onClick={() => handleEdit(s)}>Edit</button>
//               <button onClick={() => handleDelete(s._id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* GRAPHS - MONTHLY INCOME / ORDERS */}
//       <div className="recharts-wrapper">
//         <h3>Monthly Income & Orders</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={monthlyData}>
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="income" fill="#ff7a00" name="Income" />
//             <Bar dataKey="orders" fill="#3498db" name="Orders" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// export default VendorDashboard;
import React, { useState, useEffect } from "react";
import "./VendorDashboard.css";
import {
  getVendorServices,
  addService,
  updateService,
  deleteService,
} from "../api/service";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import VendorInquiries from "./VendorInquiries"; // ✅ import inquiries component

function VendorDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [showInquiries, setShowInquiries] = useState(false); // 🔹 state to toggle inquiries modal
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    pricingType: "fixed",
    price: "",
    customQuestions: [],
  });
  const [question, setQuestion] = useState("");
  const [editId, setEditId] = useState(null);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    fetchServices();
    setMonthlyData([
      { month: "Jan", income: 50000, orders: 12 },
      { month: "Feb", income: 75000, orders: 18 },
      { month: "Mar", income: 30000, orders: 8 },
      { month: "Apr", income: 90000, orders: 20 },
      { month: "May", income: 45000, orders: 10 },
      { month: "Jun", income: 60000, orders: 15 },
    ]);
  }, []);

  const fetchServices = async () => {
    try {
      const res = await getVendorServices();
      setServices(res.data);
    } catch (err) {
      console.error("Fetch services error:", err);
    }
  };

  const addQuestion = () => {
    if (!question) return;
    setFormData({
      ...formData,
      customQuestions: [...formData.customQuestions, question],
    });
    setQuestion("");
  };

  const handleSubmit = async () => {
    try {
      if (editId) await updateService(editId, formData);
      else await addService(formData);

      fetchServices();
      setShowForm(false);
      setFormData({
        title: "",
        description: "",
        category: "",
        pricingType: "fixed",
        price: "",
        customQuestions: [],
      });
      setEditId(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await deleteService(id);
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (service) => {
    setFormData({
      title: service.title,
      description: service.description,
      category: service.category,
      pricingType: service.pricingType,
      price: service.price,
      customQuestions: service.customQuestions || [],
    });
    setEditId(service._id);
    setShowForm(true);
  };

  const filteredServices = services.filter(
    (s) =>
      (filterCategory === "all" || s.category === filterCategory) &&
      s.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalServices = services.length;
  const totalBookings = services.reduce((a, b) => a + (b.bookings || 0), 0);
  const avgPrice =
    services.reduce((a, b) => a + Number(b.price || 0), 0) /
    (services.length || 1);

  return (
    <div className="vendor-dashboard">
      <h1>Vendor Dashboard</h1>

      {/* INSIGHTS */}
      <div className="insights">
        <div className="card">Total Services: {totalServices}</div>
        <div className="card">Total Bookings: {totalBookings}</div>
        <div className="card">Avg Price: ₹ {avgPrice.toFixed(0)}</div>
        <div className="card">Useful Info</div>
      </div>

      {/* SEARCH + FILTER */}
      <div className="controls">
        <input
          placeholder="Search service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All</option>
          {Array.from(new Set(services.map((s) => s.category))).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* ACTION BUTTONS */}
      <div className="dashboard-actions">
        <button onClick={() => setShowForm(true)}>➕ Add Service</button>
        <button>📊 Reports</button>
        <button>⭐ Ratings</button>
        <button>📦 Orders</button>
        <button onClick={() => setShowInquiries(true)}>💬 My Inquiries</button> {/* 🔹 new button */}
      </div>

      {/* SERVICE FORM MODAL */}
      {showForm && (
        <div className="vendor-overlay">
          <div className="modal-container">
            <div className="service-form">
              <input
                placeholder="Service Name"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <input
                placeholder="Category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
              <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />

              <h3>Custom Questions</h3>
              <input
                placeholder="Add Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <button onClick={addQuestion}>+ Add Question</button>
              {formData.customQuestions.map((q, i) => (
                <p key={i}>• {q}</p>
              ))}

              <button onClick={handleSubmit}>{editId ? "Update" : "Submit"}</button>
              <button onClick={() => { setShowForm(false); setEditId(null); }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* INQUIRIES MODAL */}
      {showInquiries && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button
              className="close-modal"
              onClick={() => setShowInquiries(false)}
            >
              ✖
            </button>
            <VendorInquiries />
          </div>
        </div>
      )}

      {/* SERVICE LIST */}
      <div className="service-list">
        {filteredServices.map((s) => (
          <div key={s._id} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <p>₹ {s.price}</p>
            <div className="actions">
              <button onClick={() => handleEdit(s)}>Edit</button>
              <button onClick={() => handleDelete(s._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* MONTHLY CHART */}
      <div className="recharts-wrapper">
        <h3>Monthly Income & Orders</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#ff7a00" name="Income" />
            <Bar dataKey="orders" fill="#3498db" name="Orders" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default VendorDashboard;