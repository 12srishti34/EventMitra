import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/Aboutus";
import FAQs from "./pages/FAQs";
import Customize from "./pages/Customize";
import CustomizeForm from "./pages/CustomizeForm";
import Results from "./pages/Result";
import UserDashboard from "./pages/UserDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import MyBookings from "./pages/MyBookings";
import VendorInquiries from "./pages/VendorInquiries"; // path apke project ke hisab se
import MyInquiries from "./pages/MyInquiries"; // path apke project ke hisab se path apke project ke hisab se
import { Routes, Route } from "react-router-dom";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <Navbar onLoginClick={() => setIsAuthOpen(true)} />

      {/* Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/book" element={<Customize />} />
        <Route path="/customize/:category" element={<CustomizeForm />} />
        <Route path="/results" element={<Results />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/my-bookings" element={<MyBookings />} />
         <Route path="/my-inquiries" element={<MyInquiries />} />
          <Route path="/vendor-inquiries" element={<VendorInquiries />} />
      </Routes>
    </div>
  );
}

export default App;