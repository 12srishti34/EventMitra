// import axios from "axios";

// const API = "http://localhost:5000/api/services";

// // 🔐 TOKEN CONFIG
// const authHeader = () => ({
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`
//   }
// });

// // 🌍 GET ALL SERVICES (public)
// export const getAllServices = () => axios.get(API);

// // 👤 GET VENDOR SERVICES
// export const getVendorServices = () => 
//   axios.get(`${API}/my`, authHeader());

// // ➕ ADD SERVICE
// export const addService = (data) => 
//   axios.post(API, data, authHeader());

// // ✏️ UPDATE SERVICE
// export const updateService = (id, data) => 
//   axios.put(`${API}/${id}`, data, authHeader());

// // ❌ DELETE SERVICE
// export const deleteService = (id) => 
//   axios.delete(`${API}/${id}`, authHeader());
import axios from "axios";

const API = "http://localhost:5000/api/services";

// 🔐 TOKEN CONFIG
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

// 🌍 GET ALL SERVICES (public)
export const getAllServices = () => axios.get(API);

// 👤 GET VENDOR SERVICES
export const getVendorServices = () => axios.get(`${API}/my`, authHeader());

// ➕ ADD SERVICE
export const addService = (data) => axios.post(API, data, authHeader());

// ✏️ UPDATE SERVICE
export const updateService = (id, data) => axios.put(`${API}/${id}`, data, authHeader());

// ❌ DELETE SERVICE
export const deleteService = (id) => axios.delete(`${API}/${id}`, authHeader());