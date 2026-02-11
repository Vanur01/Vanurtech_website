"use client";

import React from "react";
import { Phone } from "lucide-react";

const PhoneButton = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "7077004890";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handlePhoneClick}
      className="fixed bottom-20 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Call us"
    >
      <Phone className="h-5 w-5" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Call us
      </span>
    </button>
  );
};

export default PhoneButton;