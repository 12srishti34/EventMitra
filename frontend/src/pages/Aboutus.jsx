import React from "react";
import "./Aboutus.css";

function About() {
  return (
    <div className="about-page">

      

      {/* Main Content */}
      <section className="about-content">
        <p>
          EventMitra is designed to simplify the process of event planning by
          bringing vendors and users together on a single platform. Our goal is
          to create a smooth and convenient experience where users can explore,
          compare, and book services without any hassle.
        </p>

        <p>
          We focus on connecting small-scale vendors with potential clients,
          helping them grow their business while making their day-to-day booking
          and management tasks easier and more organized.
        </p>

        <p>
          At the same time, EventMitra ensures that users get access to all
          essential services like decoration, catering, venues, and more — all
          in one place. This makes event planning faster, easier, and more
          reliable.
        </p>
      </section>

      {/* Purpose Section */}
      <section className="purpose">
        <h2>Our Purpose</h2>
        <ul>
          <li>Connect small vendors with clients</li>
          <li>Simplify vendor booking and management</li>
          <li>Provide all event services in one place</li>
          <li>Make event planning easy and convenient</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <h3>EventMitra</h3>
        <p>Making Events Simple & Memorable ✨</p>
        <p>Email: support@eventmitra.com</p>
        <p>Phone: +91 9876543210</p>
      </footer>

    </div>
  );
}

export default About;