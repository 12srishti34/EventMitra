import React from "react";
import { useLocation } from "react-router-dom";
import "./MyBookings.css";

function MyBookings() {
  const location = useLocation();
  const bookings = location.state?.bookings || [];

  return (
    <div className="my-bookings">
      <h1>My Bookings 📦</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Vendor</th>
              <th>Date</th>
              <th>Price</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id}>
                <td>{b.service}</td>
                <td>{b.vendor}</td>
                <td>{new Date(b.date).toLocaleDateString()}</td>
                <td>₹{b.price}</td>
                <td>{b.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyBookings;