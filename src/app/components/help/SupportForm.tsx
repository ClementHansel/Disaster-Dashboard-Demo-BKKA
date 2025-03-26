"use client";

import React, { useState } from "react";
import FormInput from "../shared/FormInput";

const SupportForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send the support request (e.g., API call)
    console.log({ name, email, subject, message });
    alert("Support request submitted!");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Contact Support</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          id="support-name"
          label="Name"
          value={name}
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          id="support-email"
          label="Email"
          type="email"
          value={email}
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          id="support-subject"
          label="Subject"
          value={subject}
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <div>
          <label
            htmlFor="support-message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="support-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your issue..."
            className="p-2 border rounded w-full"
            aria-label="Message"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default SupportForm;
