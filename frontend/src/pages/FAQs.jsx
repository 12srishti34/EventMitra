import React, { useState } from "react";
import "./FAQs.css";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a service on EventMitra?",
      answer: "Simply browse services, select a vendor, and click on 'Book Now' to proceed."
    },
    {
      question: "Can I customize my event services?",
      answer: "Yes, you can fully customize services like decoration, catering, and more."
    },
    {
      question: "Are the vendors verified?",
      answer: "Yes, we ensure all vendors are verified for quality and reliability."
    },
    {
      question: "Can I filter vendors based on location?",
      answer: "Yes, you can filter vendors by location and price for better selection."
    },
    {
      question: "Do you support small-scale vendors?",
      answer: "Absolutely! Our platform is designed to promote small-scale vendors."
    },
    {
      question: "Is there any booking fee?",
      answer: "No hidden charges. You only pay for the services you select."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, bookings can be modified or cancelled based on vendor policies."
    },
    {
      question: "How can vendors manage bookings?",
      answer: "Vendors get a dashboard to manage bookings, inquiries, and availability."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">

      <h1>Frequently Asked Questions ❓</h1>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            className={`faq-item ${activeIndex === index ? "active" : ""}`} 
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>

            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default FAQs;