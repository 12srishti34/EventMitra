import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";

function Navbar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (token) {
      setIsLoggedIn(true);
      setRole(userRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);

    navigate("/");
    window.location.reload(); // 🔥 navbar reset
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <div className="logo" onClick={() => navigate("/")}>
            <img src="/assets/EM logo.webp" alt="logo" />
            <span>EventMitra</span>
          </div>

          {/* Links */}
          <ul className="nav-links">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/services")}>Services</li>
            <li onClick={() => navigate("/about")}>About Us</li>
            <li onClick={() => navigate("/faqs")}>FAQs</li>
          </ul>

          {/* Actions */}
          <div className="nav-actions">

            {/* 👤 USER ONLY */}
            {isLoggedIn && role === "user" && (
              <button
                className="book-btn"
                onClick={() => navigate("/book")}
              >
                Customize Your Event
              </button>
            )}

            {/* 🔓 NOT LOGGED IN */}
            {!isLoggedIn && (
              <>
                <button
                  className="login-btn"
                  onClick={() => setShowModal(true)}
                >
                  Login
                </button>

                <button
                  className="signup-btn"
                  onClick={() => setShowModal(true)}
                >
                  Signup
                </button>
              </>
            )}

            {/* 🔐 LOGGED IN */}
            {isLoggedIn && (
              <>
                <button
                  className="dashboard-btn"
                  onClick={() => {
                    if (role === "vendor") {
                      navigate("/vendor-dashboard");
                    } else {
                      navigate("/user-dashboard");
                    }
                  }}
                >
                  Dashboard
                </button>

                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      </nav>

      {/* Modal */}
      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default Navbar;