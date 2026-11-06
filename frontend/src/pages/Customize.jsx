import React from "react";
import "./Customize.css";
import { useNavigate } from "react-router-dom";

// 🎥 same video import
import bgVideo from "../assets/bg-video.mp4";

function Customize() {
  const navigate = useNavigate();

  const categories = [
    { name: "Personal Events", icon: "🎈" },
    { name: "Corporate Events", icon: "🏢" },
    { name: "Wedding Events", icon: "💍" },
    { name: "Birthday Parties", icon: "🎂" },
    { name: "Religious / Bhajan Kirtan", icon: "🙏" },
    { name: "College / Fest Events", icon: "🎤" },
  ];

  return (
    <div className="customize-page">

      {/* 🎥 BACKGROUND VIDEO */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* overlay */}
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className="content">

        {/* HERO */}
        <div className="customize-hero">
          <h1>Customize Your Event 🎉</h1>
          <p>Select your event type to get started</p>
        </div>

        {/* CATEGORY GRID */}
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="category-card"
              onClick={() => navigate(`/customize/${cat.name}`)}
            >
              <div className="icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Customize;