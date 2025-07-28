"use client";
import { CONNECT } from "@/lib/data";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end">
      {/* Contact Buttons */}
      <div
        className={`flex flex-col items-end gap-3 mb-2 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 hidden translate-y-4 pointer-events-none"
        }`}
      >
        {CONNECT.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2  hover:scale-105 cursor-pointer gradient-blur hover:bg-black text-black px-4 py-3 rounded-full shadow-lg transition-all duration-300 animate-fade-in`}
            title={item.name}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-8 h-8 rounded-full "
            />
            {item.name}
          </a>
        ))}
      </div>
      {/* Main Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`w-16 h-16 rounded-full bg-gradient-to-br from-secondary-400 to-primary-500 shadow-xl flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl relative group ${
          open ? "rotate-45" : ""
        }`}
        aria-label="Liên hệ tư vấn"
        style={{ outline: "none" }}
      >
        <MessageSquare
          className={`w-8 h-8 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
        {/* Ping effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-30 animate-ping"></span>
      </button>
    </div>
  );
}
