"use client";

import React, { useState } from "react";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Link from "next/link";

import Ceiling from "./Ceiling";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Ceiling"); // Default to Ceiling

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800">Ceiling</h1>
      </div>

      {/* Tab Navigation Section */}
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => handleTabClick("Ceiling")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Ceiling"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Ceiling
        </button>

        
      </div>

      {/* Content Section */}
      <div className="px-6">
        {activeTab === "Ceiling" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ceiling</h2>
            <Ceiling />
          </div>
        )}

        
      </div>

      <Footer />
    </div>
  );
}
