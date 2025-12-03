"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm text-green-400 mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Muahmed Ahmed. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/Mohammedhsbo?tab=repositories"
            target="_blank"
            className="text-green-400 hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://vercel.com/muhamedhsbos-projects"
            target="_blank"
            className="text-green-400 hover:text-white transition-colors duration-300"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
}
