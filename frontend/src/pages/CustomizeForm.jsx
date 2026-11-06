// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./CustomizeForm.css";

// function CustomizeForm() {
//   const navigate = useNavigate();
//   const { category } = useParams();

//   const [formData, setFormData] = useState({
//     eventType: "",
//     preferences: [],
//     budget: "",
//     location: "",
//     date: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCheckbox = (e) => {
//     const { value, checked } = e.target;

//     if (checked) {
//       setFormData({
//         ...formData,
//         preferences: [...formData.preferences, value],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         preferences: formData.preferences.filter((p) => p !== value),
//       });
//     }
//   };

//   const handleSubmit = () => {
//     navigate("/results", { state: formData });
//   };

//   return (
//     <div className="form-page">
//       {/* MAIN LAYOUT */}
//       <div className="form-container">
//         {/* LEFT - FORM */}
//         <div className="form-card">
//           <div className="form-group">
//             <label>Select Event Type</label>
//             <select name="eventType" onChange={handleChange}>
//               <option value="">Select</option>
//               <option>Birthday</option>
//               <option>Anniversary</option>
//               <option>Wedding</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Select Services</label>
//             <div className="checkbox-group">
//               {["Decor", "Catering", "DJ", "Venue"].map((item) => (
//                 <label key={item} className="checkbox-card">
//                   <input type="checkbox" value={item} onChange={handleCheckbox} />
//                   <span>{item}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="form-group">
//             <label>Budget (₹)</label>
//             <input type="number" name="budget" onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label>Location</label>
//             <input type="text" name="location" onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label>Date</label>
//             <input type="date" name="date" onChange={handleChange} />
//           </div>

//           <button className="submit-btn" onClick={handleSubmit}>
//             Generate Plan 🚀
//           </button>
//         </div>

//         {/* RIGHT - CATEGORY DISPLAY */}
//         <div className="category-preview">
//           <h2>{category}</h2>
//           <p>Your selected event category</p>

//           {/* optional image */}
//           <img 
//             src={`/images/${category?.toLowerCase()}.jpg`} 
//             alt={category}
//           />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default CustomizeForm;

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CustomizeForm.css";

// ✅ Import images from assets
import birthdayImg from "../assets/birthday.jpeg";
import anniversaryImg from "../assets/anniversairy.jpeg";
import weddingImg from "../assets/wedding.jpeg";

function CustomizeForm() {
  const navigate = useNavigate();
  const { category } = useParams();

  // ✅ Image mapping (safe + clean)
  const images = {
    birthday: birthdayImg,
    anniversary: anniversaryImg,
    wedding: weddingImg,
  };

  const [formData, setFormData] = useState({
    eventType: "",
    preferences: [],
    budget: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        preferences: [...formData.preferences, value],
      });
    } else {
      setFormData({
        ...formData,
        preferences: formData.preferences.filter((p) => p !== value),
      });
    }
  };

  const handleSubmit = () => {
    navigate("/results", { state: formData });
  };

  return (
    <div className="form-page">
      <div className="form-container">

        {/* LEFT SIDE - FORM */}
        <div className="form-card">
          <div className="form-group">
            <label>Select Event Type</label>
            <select name="eventType" onChange={handleChange}>
              <option value="">Select</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Wedding</option>
            </select>
          </div>

          <div className="form-group">
            <label>Select Services</label>
            <div className="checkbox-group">
              {["Decor", "Catering", "DJ", "Venue"].map((item) => (
                <label key={item} className="checkbox-card">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCheckbox}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Budget (₹)</label>
            <input
              type="number"
              name="budget"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            Generate Plan 🚀
          </button>
        </div>

        {/* RIGHT SIDE - CATEGORY PREVIEW */}
        <div className="category-preview">
          <h2>{category}</h2>
          <p>Your selected event category</p>

          <img
            src={images[category?.toLowerCase()] || birthdayImg}
            alt={category}
          />
        </div>

      </div>
    </div>
  );
}

export default CustomizeForm;