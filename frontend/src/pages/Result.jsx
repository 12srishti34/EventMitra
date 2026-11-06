import React from "react";
import { useLocation } from "react-router-dom";
import "./Result.css";

function Results() {
  const { state } = useLocation();

  // ✅ All vendors with service type
  const vendors = [
    { name: "Royal Decor", service: "Decor", price: 5000 },
    { name: "Sharma Caterers", service: "Catering", price: 3000 },
    { name: "DJ Beats", service: "DJ", price: 4000 },
    { name: "Grand Venue", service: "Venue", price: 20000 },
  ];

  // 🔥 FILTER LOGIC
  const filteredVendors = vendors.filter(v =>
    state?.preferences?.includes(v.service)
  );

  return (
    <div className="results-page">

      <h1>Suggested Vendors 🎯</h1>

      <p><strong>Event:</strong> {state?.eventType}</p>
      <p><strong>Budget:</strong> ₹{state?.budget}</p>

      <div className="vendor-list">
        {filteredVendors.length > 0 ? (
          filteredVendors.map((v, i) => (
            <div className="vendor-card" key={i}>
              <h3>{v.name}</h3>
              <p>{v.service}</p>
              <p>₹{v.price}</p>

              <button className="book">Book Now</button>
              <button className="enquire">Enquire</button>
            </div>
          ))
        ) : (
          <p>No vendors found for selected services 😔</p>
        )}
      </div>

    </div>
  );
}

export default Results;