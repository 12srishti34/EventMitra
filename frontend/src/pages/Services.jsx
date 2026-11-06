// // import React, { useState, useEffect } from "react";
// // import "./Services.css";
// // import { getAllServices } from "../api/service";
// // import axios from "axios";

// // function Services() {
// //   const [services, setServices] = useState([]);
// //   const [filter, setFilter] = useState("");
// //   const [sort, setSort] = useState("");
// //   const [showModal, setShowModal] = useState(false);
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [formData, setFormData] = useState({
// //     userName: "",
// //     userEmail: "",
// //     message: "",
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [successMsg, setSuccessMsg] = useState("");

// //   useEffect(() => {
// //     fetchServices();
// //   }, []);

// //   const fetchServices = async () => {
// //     try {
// //       const res = await getAllServices();
// //       setServices(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const groupedServices = services.reduce((acc, service) => {
// //     const cat = service.category || "Others";
// //     if (!acc[cat]) acc[cat] = [];
// //     acc[cat].push(service);
// //     return acc;
// //   }, {});

// //   const handleFilterSort = (list) => {
// //     let updated = [...list];
// //     if (filter) updated = updated.filter((s) => (s.vendor?.location || "") === filter);
// //     if (sort === "low") updated.sort((a, b) => a.price - b.price);
// //     else if (sort === "high") updated.sort((a, b) => b.price - a.price);
// //     return updated;
// //   };

// //   // Open Enquiry Modal
// //   const handleEnquire = (service) => {
// //     setSelectedService(service);
// //     setShowModal(true);
// //     setFormData({ userName: "", userEmail: "", message: "" });
// //     setSuccessMsg("");
// //   };

// //   // Submit Enquiry
// //   const handleSubmit = async () => {
// //     if (!formData.userName || !formData.userEmail) {
// //       alert("Please enter name and email");
// //       return;
// //     }
// //     setLoading(true);
// //     try {
// //       await axios.post("/api/inquiries", {
// //         serviceId: selectedService._id,
// //         userName: formData.userName,
// //         userEmail: formData.userEmail,
// //         message: formData.message,
// //       });
// //       setSuccessMsg("Inquiry submitted successfully!");
// //       setFormData({ userName: "", userEmail: "", message: "" });
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to submit inquiry");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="services-page">
// //       <div className="filters">
// //         <select onChange={(e) => setFilter(e.target.value)}>
// //           <option value="">Filter by Location</option>
// //           <option value="Delhi">Delhi</option>
// //           <option value="Noida">Noida</option>
// //           <option value="Gurgaon">Gurgaon</option>
// //         </select>

// //         <select onChange={(e) => setSort(e.target.value)}>
// //           <option value="">Sort by Price</option>
// //           <option value="low">Low to High</option>
// //           <option value="high">High to Low</option>
// //         </select>
// //       </div>

// //       {Object.keys(groupedServices).length === 0 ? (
// //         <p>No services found</p>
// //       ) : (
// //         Object.keys(groupedServices).map((category) => {
// //           const filtered = handleFilterSort(groupedServices[category]);
// //           return (
// //             <div key={category} className="category">
// //               <h2>{category}</h2>
// //               <div className="carousel">
// //                 {filtered.map((service) => (
// //                   <div className="vendor-card" key={service._id}>
// //                     <h3>{service.title}</h3>
// //                     <p>{service.description}</p>
// //                     <p>💰 ₹{service.price}</p>
// //                     <p>📍 {service.vendor?.location || "Location"}</p>
// //                     <p>👤 {service.vendor?.name || "Vendor"}</p>
// //                     <button className="book-btn" onClick={() => handleEnquire(service)}>
// //                       Enquire Now
// //                     </button>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           );
// //         })
// //       )}

// //       {/* Enquiry Modal */}
// //       {showModal && (
// //         <div className="modal-overlay">
// //           <div className="modal-container">
// //             <h2>Enquire: {selectedService.title}</h2>

// //             {successMsg && <p className="success-msg">{successMsg}</p>}

// //             <input
// //               type="text"
// //               placeholder="Your Name"
// //               value={formData.userName}
// //               onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
// //             />
// //             <input
// //               type="email"
// //               placeholder="Your Email"
// //               value={formData.userEmail}
// //               onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
// //             />
// //             <textarea
// //               placeholder="Message"
// //               value={formData.message}
// //               onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// //             />
// //             <div className="modal-actions">
// //               <button onClick={handleSubmit} disabled={loading}>
// //                 {loading ? "Submitting..." : "Submit"}
// //               </button>
// //               <button onClick={() => setShowModal(false)}>Close</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Services;
// import React, { useState, useEffect } from "react";
// import "./Services.css";
// import { getAllServices } from "../api/service";
// import { addInquiry } from "../api/inquiry";

// function Services() {
//   const [services, setServices] = useState([]);
//   const [filter, setFilter] = useState("");
//   const [sort, setSort] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const [formData, setFormData] = useState({
//     userName: "",
//     userEmail: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");

//   useEffect(() => { fetchServices(); }, []);

//   const fetchServices = async () => {
//     try {
//       const res = await getAllServices();
//       setServices(res.data);
//     } catch (err) { console.error(err); }
//   };

//   const groupedServices = services.reduce((acc, service) => {
//     const cat = service.category || "Others";
//     if (!acc[cat]) acc[cat] = [];
//     acc[cat].push(service);
//     return acc;
//   }, {});

//   const handleFilterSort = (list) => {
//     let updated = [...list];
//     if (filter) updated = updated.filter((s) => (s.vendor?.location || "") === filter);
//     if (sort === "low") updated.sort((a, b) => a.price - b.price);
//     else if (sort === "high") updated.sort((a, b) => b.price - a.price);
//     return updated;
//   };

//   const handleEnquire = (service) => {
//     setSelectedService(service);
//     setShowModal(true);
//     setFormData({ userName: "", userEmail: "", message: "" });
//     setSuccessMsg("");
//   };

//   const handleSubmit = async () => {
//     if (!formData.userName || !formData.userEmail) {
//       alert("Please enter name and email");
//       return;
//     }
//     setLoading(true);
//     try {
//       await addInquiry({
//         serviceId: selectedService._id,
//         userName: formData.userName,
//         userEmail: formData.userEmail,
//         message: formData.message,
//       });
//       setSuccessMsg("Inquiry submitted successfully!");
//       setFormData({ userName: "", userEmail: "", message: "" });
//     } catch (err) {
//       console.error(err);
//       alert("Failed to submit inquiry");
//     } finally { setLoading(false); }
//   };

//   return (
//     <div className="services-page">
//       <div className="filters">
//         <select onChange={(e) => setFilter(e.target.value)}>
//           <option value="">Filter by Location</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Noida">Noida</option>
//           <option value="Gurgaon">Gurgaon</option>
//         </select>

//         <select onChange={(e) => setSort(e.target.value)}>
//           <option value="">Sort by Price</option>
//           <option value="low">Low to High</option>
//           <option value="high">High to Low</option>
//         </select>
//       </div>

//       {Object.keys(groupedServices).length === 0 ? (
//         <p>No services found</p>
//       ) : (
//         Object.keys(groupedServices).map((category) => {
//           const filtered = handleFilterSort(groupedServices[category]);
//           return (
//             <div key={category} className="category">
//               <h2>{category}</h2>
//               <div className="carousel">
//                 {filtered.map((service) => (
//                   <div className="vendor-card" key={service._id}>
//                     <h3>{service.title}</h3>
//                     <p>{service.description}</p>
//                     <p>💰 ₹{service.price}</p>
//                     <p>📍 {service.vendor?.location || "Location"}</p>
//                     <p>👤 {service.vendor?.name || "Vendor"}</p>
//                     <button className="book-btn" onClick={() => handleEnquire(service)}>
//                       Enquire Now
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })
//       )}

//       {/* Enquiry Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-container">
//             <h2>Enquire: {selectedService.title}</h2>

//             {successMsg && <p className="success-msg">{successMsg}</p>}

//             <input
//               type="text"
//               placeholder="Your Name"
//               value={formData.userName}
//               onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={formData.userEmail}
//               onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
//             />
//             <textarea
//               placeholder="Message"
//               value={formData.message}
//               onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//             />
//             <div className="modal-actions">
//               <button onClick={handleSubmit} disabled={loading}>
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//               <button onClick={() => setShowModal(false)}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Services;
import React, { useState, useEffect } from "react";
import "./Services.css";
import { getAllServices } from "../api/service";

function Services() {
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => { fetchServices(); }, []);

  const fetchServices = async () => {
    try {
      const res = await getAllServices();
      setServices(res.data);
    } catch (err) { console.error(err); }
  };

  const groupedServices = services.reduce((acc, service) => {
    const cat = service.category || "Others";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(service);
    return acc;
  }, {});

  const handleFilterSort = (list) => {
    let updated = [...list];
    if (filter) updated = updated.filter((s) => (s.vendor?.location || "") === filter);
    if (sort === "low") updated.sort((a, b) => a.price - b.price);
    else if (sort === "high") updated.sort((a, b) => b.price - a.price);
    return updated;
  };

  const handleEnquire = (service) => {
    setSelectedService(service);
    setShowModal(true);
    setFormData({ userName: "", userEmail: "", message: "" });
    setSuccessMsg("");
  };

  // 🔹 FRONTEND ONLY ENQUIRY
  const handleSubmit = () => {
    if (!formData.userName || !formData.userEmail) {
      alert("Please enter name and email");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMsg("Enquiry placed successfully!");
      setFormData({ userName: "", userEmail: "", message: "" });
    }, 1000); // simulate network delay
  };

  return (
    <div className="services-page">
      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Filter by Location</option>
          <option value="Delhi">Delhi</option>
          <option value="Noida">Noida</option>
          <option value="Gurgaon">Gurgaon</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {Object.keys(groupedServices).length === 0 ? (
        <p>No services found</p>
      ) : (
        Object.keys(groupedServices).map((category) => {
          const filtered = handleFilterSort(groupedServices[category]);
          return (
            <div key={category} className="category">
              <h2>{category}</h2>
              <div className="carousel">
                {filtered.map((service) => (
                  <div className="vendor-card" key={service._id}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <p>💰 ₹{service.price}</p>
                    <p>📍 {service.vendor?.location || "Location"}</p>
                    <p>👤 {service.vendor?.name || "Vendor"}</p>
                    <button className="book-btn" onClick={() => handleEnquire(service)}>
                      Enquire Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}

      {/* Enquiry Modal */}
      {showModal && (
        <div className="services-overlay">
  <div className="services-modal">
            <h2>Enquire: {selectedService?.title}</h2>

            {successMsg && <p className="success-msg">{successMsg}</p>}

            <input
              type="text"
              placeholder="Your Name"
              value={formData.userName}
              onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.userEmail}
              onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <div className="modal-actions">
              <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;