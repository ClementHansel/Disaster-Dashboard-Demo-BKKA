"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProfileForm: React.FC = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit updated profile info (e.g., call API)
    console.log({ name, email, phone, profileImage });
    alert("Profile updated!");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Profile Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter your name"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter your email"
            aria-label="Email"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone
          </label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter your phone number"
            aria-label="Phone"
          />
        </div>
        <div>
          <label
            htmlFor="profileImage"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Profile Image
          </label>
          <input
            id="profileImage"
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setProfileImage(reader.result as string);
                };
                reader.readAsDataURL(file);
              }
            }}
            className="p-2 border rounded w-full"
            aria-label="Profile Image"
          />
          {profileImage && (
            <div className="mt-2">
              <Image
                src={profileImage}
                alt="Profile Preview"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
