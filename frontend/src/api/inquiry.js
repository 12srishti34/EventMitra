import axios from "axios";

const API = axios.create({
  baseURL: "/api/inquiries",
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const addInquiry = (data) => API.post("/", data);
export const getUserInquiries = () => API.get("/user");
export const getVendorInquiries = () => API.get("/vendor");
export const replyInquiry = (id, reply) => API.post(`/reply/${id}`, { reply });