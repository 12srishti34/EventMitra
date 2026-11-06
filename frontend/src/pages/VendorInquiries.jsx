// // import React, { useEffect, useState } from "react";
// // import { getVendorInquiries, replyInquiry } from "../api/inquiry";

// // function VendorInquiries() {
// //   const [inquiries, setInquiries] = useState([]);
// //   const [replyText, setReplyText] = useState({});

// //   useEffect(() => {
// //     fetchInquiries();
// //   }, []);

// //   const fetchInquiries = async () => {
// //     try {
// //       const res = await getVendorInquiries();
// //       setInquiries(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleReply = async (id) => {
// //     if (!replyText[id]) return;
// //     try {
// //       await replyInquiry(id, replyText[id]);
// //       fetchInquiries();
// //       setReplyText({ ...replyText, [id]: "" });
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <div className="vendor-inquiries">
// //       <h1>Received Inquiries</h1>
// //       {inquiries.length === 0 ? (
// //         <p>No inquiries yet.</p>
// //       ) : (
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Service</th>
// //               <th>Message</th>
// //               <th>Date</th>
// //               <th>Reply</th>
// //               <th>Action</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {inquiries.map((inq) => (
// //               <tr key={inq._id}>
// //                 <td>{inq.service?.title}</td>
// //                 <td>{inq.message}</td>
// //                 <td>{new Date(inq.date).toLocaleDateString()}</td>
// //                 <td>{inq.reply || "Pending"}</td>
// //                 <td>
// //                   <input
// //                     placeholder="Reply..."
// //                     value={replyText[inq._id] || ""}
// //                     onChange={(e) =>
// //                       setReplyText({ ...replyText, [inq._id]: e.target.value })
// //                     }
// //                   />
// //                   <button onClick={() => handleReply(inq._id)}>Send</button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // }

// // export default VendorInquiries;
// import React, { useState, useEffect } from "react";
// import { getVendorInquiries, replyInquiry } from "../api/inquiry";

// function VendorInquiries() {
//   const [inquiries, setInquiries] = useState([]);
//   const [replyText, setReplyText] = useState({});

//   useEffect(() => { fetchInquiries(); }, []);

//   const fetchInquiries = async () => {
//     try { const res = await getVendorInquiries(); setInquiries(res.data); }
//     catch (err) { console.error(err); }
//   };

//   const handleReply = async (id) => {
//     if (!replyText[id]) return;
//     try { await replyInquiry(id, replyText[id]); fetchInquiries(); setReplyText({ ...replyText, [id]: "" }); }
//     catch (err) { console.error(err); }
//   };

//   return (
//     <div className="vendor-inquiries">
//       <h1>Received Inquiries</h1>
//       {inquiries.length === 0 ? <p>No inquiries yet.</p> : (
//         <table>
//           <thead>
//             <tr><th>Service</th><th>Message</th><th>Date</th><th>Reply</th><th>Action</th></tr>
//           </thead>
//           <tbody>
//             {inquiries.map(inq => (
//               <tr key={inq._id}>
//                 <td>{inq.service?.title}</td>
//                 <td>{inq.message}</td>
//                 <td>{new Date(inq.date).toLocaleDateString()}</td>
//                 <td>{inq.reply || "Pending"}</td>
//                 <td>
//                   <input placeholder="Reply..." value={replyText[inq._id] || ""} onChange={e => setReplyText({ ...replyText, [inq._id]: e.target.value })}/>
//                   <button onClick={() => handleReply(inq._id)}>Send</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default VendorInquiries;
// src/pages/VendorInquiries.jsx
import React, { useState, useEffect } from "react";
import "./VendorInquiries.css";
function VendorInquiries() {
  // Dummy inquiries
  const [inquiries, setInquiries] = useState([]);
  const [replyText, setReplyText] = useState({});

  useEffect(() => {
    const fakeInquiries = [
      { _id: 1, service: { title: "Wedding Photography" }, message: "Can you provide an album?", date: "2026-04-01", reply: "" },
      { _id: 2, service: { title: "DJ & Sound System" }, message: "Do you have lighting setup?", date: "2026-04-03", reply: "Yes, we have." },
      { _id: 3, service: { title: "Catering Service" }, message: "Can you do vegan menu?", date: "2026-04-05", reply: "" },
      { _id: 4, service: { title: "Decoration Service" }, message: "Do you provide stage decoration?", date: "2026-04-07", reply: "Pending" },
    ];
    setInquiries(fakeInquiries);
  }, []);

  const handleReply = (id) => {
    if (!replyText[id]) return;

    // Update inquiry reply locally
    setInquiries(prev =>
      prev.map(inq =>
        inq._id === id ? { ...inq, reply: replyText[id] } : inq
      )
    );

    // Clear input
    setReplyText({ ...replyText, [id]: "" });
  };

  return (
    <div className="vendor-inquiries">
      <h1>Received Inquiries</h1>
      {inquiries.length === 0 ? (
        <p>No inquiries yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Message</th>
              <th>Date</th>
              <th>Reply</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map(inq => (
              <tr key={inq._id}>
                <td>{inq.service?.title}</td>
                <td>{inq.message}</td>
                <td>{new Date(inq.date).toLocaleDateString()}</td>
                <td>{inq.reply || "Pending"}</td>
                <td>
                  <input
                    placeholder="Reply..."
                    value={replyText[inq._id] || ""}
                    onChange={e => setReplyText({ ...replyText, [inq._id]: e.target.value })}
                  />
                  <button onClick={() => handleReply(inq._id)}>Send</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default VendorInquiries;