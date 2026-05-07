"use client";

import { useState } from "react";
import axios from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  website: string | null;
};

export default function ProjectLeadModal({ isOpen, onClose, website }: Props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!name || !phone) {
        alert("Name and phone are required");
        return;
      }

      try {
        setLoading(true);

        // ✅ save lead
        await axios.post("https://vanurtech-backend-admin-2-8vsl.onrender.com/api/v1/lead", {
          name,
          phone,
        });

        // ✅ close popup
        onClose();

        // ✅ open project after submit
        if (website) {
          window.open(website, "_blank");
        }

        setName("");
        setPhone("");
      } catch (error) {
        alert("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-lg rounded-2xl bg-gradient-to-br from-[#14001f]/90 to-[#0b0014]/90 p-8 backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Get in <span className="text-purple-400">Touch</span>
          </h2>
          <button onClick={onClose} className="text-white/60 text-xl">✕</button>
        </div>

       
      </div>
    </div>
  );
}
