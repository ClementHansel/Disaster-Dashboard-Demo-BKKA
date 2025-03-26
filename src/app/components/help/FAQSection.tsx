"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I calibrate sensors?",
    answer:
      "Go to the settings page and click on the calibration button for the desired sensor.",
  },
  {
    question: "What do the alerts mean?",
    answer:
      "Alerts indicate sensor anomalies. Click an alert for details about the issue.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can fill out the support form on this page or call our support hotline.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left font-semibold text-blue-600"
            aria-expanded={activeIndex === index} // Corrected: Using boolean directly
          >
            {item.question}
          </button>
          {activeIndex === index && (
            <p className="mt-1 text-gray-700">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
