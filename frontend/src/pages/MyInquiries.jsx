import React from "react";
import { useLocation } from "react-router-dom";
import "./UserDashboard.css"; // Same styling as dashboard

function MyInquiries() {
  const location = useLocation();
  const inquiries = location.state?.inquiries || []; // state se data le lo

  return (
    <div className="my-inquiries-page">
      <h1>My Inquiries ✉️</h1>

      {inquiries.length === 0 ? (
        <p>No inquiries yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Vendor</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inq) => (
              <tr key={inq.id}>
                <td>{inq.service}</td>
                <td>{inq.vendor}</td>
                <td>{inq.date}</td>
                <td>{inq.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyInquiries;