import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const [user, setUser] = useState({ name: "User" });
  const [bookings, setBookings] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) setUser(loggedUser);

    // Dummy bookings
    const fakeBookings = [
      { id: 1, service: "Wedding Photography", vendor: "Ravi Sharma", date: "2026-05-10", price: 50000, paymentStatus: "Paid" },
      { id: 2, service: "DJ & Sound System", vendor: "DJ Beats", date: "2026-06-01", price: 15000, paymentStatus: "Pending" },
      { id: 3, service: "Catering Service", vendor: "Foodies Hub", date: "2026-07-05", price: 30000, paymentStatus: "Paid" },
      { id: 4, service: "Decoration Service", vendor: "DecorX", date: "2026-08-12", price: 20000, paymentStatus: "Pending" }
    ];
    setBookings(fakeBookings);

    // Dummy inquiries
    const fakeInquiries = [
      { id: 1, service: "Wedding Photography", vendor: "Ravi Sharma", date: "2026-04-01", status: "Responded" },
      { id: 2, service: "DJ & Sound System", vendor: "DJ Beats", date: "2026-04-03", status: "Pending" },
      { id: 3, service: "Catering Service", vendor: "Foodies Hub", date: "2026-04-05", status: "Responded" },
      { id: 4, service: "Decoration Service", vendor: "DecorX", date: "2026-04-07", status: "Pending" }
    ];
    setInquiries(fakeInquiries);

    const spent = fakeBookings.reduce((sum, b) => sum + b.price, 0);
    setTotalSpent(spent);
  }, []);

  const handleBookingsClick = () => {
    navigate("/my-bookings", { state: { bookings } });
  };

  const handleInquiriesClick = () => {
    navigate("/my-inquiries", { state: { inquiries } });
  };

  return (
    <div className="user-dashboard">
      <h1>Welcome, {user.name} 👤</h1>

      <div className="dashboard-cards">
        <div className="card" onClick={handleBookingsClick} style={{ cursor: "pointer" }}>
          <h3>My Bookings 📦</h3>
          <p>{bookings.length} bookings</p>
        </div>

        <div className="card" onClick={handleInquiriesClick} style={{ cursor: "pointer" }}>
          <h3>My Inquiries ✉️</h3>
          <p>{inquiries.length} inquiries</p>
        </div>

        <div className="card">
          <h3>Total Spent 💰</h3>
          <p>₹{totalSpent}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;