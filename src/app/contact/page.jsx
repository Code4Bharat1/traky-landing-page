"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact submitted:", formData);
    alert("Thank you! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-200 via-blue-200 to-white p-4">
      {/* Back to Home above the white card, centered */}
      <button
        onClick={() => router.push("/")}
        className="mb-6 text-blue-600 font-semibold hover:underline"
      >
        ← Back to Home
      </button>

      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Contact Sales
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold hover:shadow-lg transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
