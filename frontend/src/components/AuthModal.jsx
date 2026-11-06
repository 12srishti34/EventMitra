import React, { useState } from "react";
import "./AuthModal.css";
import { signupUser, loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      let res;

      if (isLogin) {
        // 🔐 LOGIN
        res = await loginUser({ email, password });
        alert("✅ Login Successful! 🚀");

        // save from backend
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);

        // 🔥 redirect based on backend role
        if (res.data.role === "vendor") {
          navigate("/vendor-dashboard");
        } else {
          navigate("/user-dashboard");
        }

      } else {
        // 📝 SIGNUP
        res = await signupUser({
          name,
          email,
          password,
          role
        });

        alert("✅ Signup Successful! 🎉");

        // save
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", role);

        // 🔥 redirect based on selected role (IMPORTANT FIX)
        if (role === "vendor") {
          navigate("/vendor-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      }

      // 🔥 reload for navbar update
      window.location.reload();

    } catch (err) {
      alert(err.response?.data?.msg || "❌ Something went wrong");
    }
  };

  return (
    <div className="auth-overlay">
  <div className="auth-container">
        {/* LEFT */}
        <div className="modal-left">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>

          {!isLogin && (
            <div className="input-group">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Full Name</label>
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          {!isLogin && (
            <div className="input-group">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>
          )}

          <button className="auth-btn" onClick={handleSubmit}>
            {isLogin ? "Login" : "Create Account"}
          </button>

          <p
            onClick={() => setIsLogin(!isLogin)}
            className="switch-text"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </p>
        </div>

        {/* RIGHT */}
        <div className="modal-right">
          <h3>EventMitra 🎉</h3>
          <p>Plan your dream event with ease ✨</p>
        </div>

        {/* CLOSE */}
        <span className="close-btn" onClick={onClose}>
          ×
        </span>

      </div>
    </div>
  );
}

export default AuthModal;