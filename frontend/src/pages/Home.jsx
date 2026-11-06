import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

// 🎥 IMPORT VIDEO
import bgVideo from "../assets/bg-video.mp4";

// 📸 IMPORT IMAGES
import decorImg from "../assets/decor.jpeg";
import cateringImg from "../assets/catering.jpeg";
import djImg from "../assets/dj.webp";
import venueImg from "../assets/venue.jpeg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* 🎥 GLOBAL BACKGROUND VIDEO */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="overlay"></div>

      {/* MAIN CONTENT */}
      <div className="content">

        {/* HERO SECTION */}
        <section className="hero">
          <h1>Welcome to EventMitra 🎉</h1>
          <p>
            Plan and manage your events easily with top vendors, customization,
            and seamless booking experience.
          </p>
          <button className="hero-btn" onClick={() => navigate("/book")}>
            Get Started
          </button>
        </section>

        {/* SERVICES SECTION */}
        <section className="services">
          <h2>Services Offered</h2>
          <div className="carousel">
            <div className="card" onClick={() => navigate("/services/decor")}>
              <img src={decorImg} alt="Decor" />
              <h3>Decoration</h3>
              <p>Beautiful event decoration for every occasion.</p>
            </div>

            <div className="card" onClick={() => navigate("/services/catering")}>
              <img src={cateringImg} alt="Catering" />
              <h3>Catering</h3>
              <p>Delicious food with multiple cuisine options.</p>
            </div>

            <div className="card" onClick={() => navigate("/services/dj")}>
              <img src={djImg} alt="DJ" />
              <h3>DJ & Music</h3>
              <p>Make your event lively with top DJs.</p>
            </div>

            <div className="card" onClick={() => navigate("/services/venue")}>
              <img src={venueImg} alt="Venue" />
              <h3>Venue</h3>
              <p>Perfect venues for all types of events.</p>
            </div>
          </div>
        </section>

        {/* VENDORS SECTION */}
        <section className="vendors">
          <h2>Popular Vendors</h2>
          <div className="vendor-grid">
            <div className="vendor-card" onClick={() => navigate("/vendor/sharma")}>
              <h3>Sharma Caterers</h3>
              <p>Top-rated catering service ⭐</p>
            </div>

            <div className="vendor-card" onClick={() => navigate("/vendor/royal")}>
              <h3>Royal Decorators</h3>
              <p>Premium decoration services ✨</p>
            </div>

            <div className="vendor-card" onClick={() => navigate("/vendor/djbeats")}>
              <h3>DJ Beats</h3>
              <p>Best DJ in town 🎶</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="faqs">
          <h2>FAQs</h2>
          <div className="faq-item" onClick={() => alert("Go to booking page")}>
            <p><strong>Q:</strong> How to book?</p>
            <p><strong>A:</strong> Click on Book Now and select services.</p>
          </div>

          <div className="faq-item" onClick={() => alert("Customization info")}>
            <p><strong>Q:</strong> Can I customize?</p>
            <p><strong>A:</strong> Yes, fully customizable.</p>
          </div>
        </section>

        {/* BOOK SECTION */}
        <section className="book">
          <h2>Ready to Plan?</h2>
          <button className="btn" onClick={() => navigate("/book")}>
            Book Now
          </button>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <h3>Contact Us</h3>
          <p onClick={() => window.location.href="mailto:support@eventmitra.com"}>
            Email: support@eventmitra.com
          </p>
          <p onClick={() => alert("Calling...")}>
            Phone: +91 9876543210
          </p>
        </footer>

      </div>
    </div>
  );
}

export default Home;