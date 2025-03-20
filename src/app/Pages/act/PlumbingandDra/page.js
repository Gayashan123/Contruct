"use client";

import React, { useState } from "react";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Link from "next/link";

import Plumbing_Drainage from "./pluanddra"; // Component for plumbing and drainage

export default function Page() {
  const [activeTab, setActiveTab] = useState("Plumbing_Drainage"); // Default to Plumbing_Drainage

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800">Plumbing and Drainage</h1>
      </div>

      {/* Tab Navigation Section */}
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => handleTabClick("Plumbing_Drainage")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Plumbing_Drainage"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Plumbing and Drainage
        </button>
      </div>

      {/* Content Section */}
      <div className="px-6">
        {activeTab === "Plumbing_Drainage" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Plumbing and Drainage</h2>
            <Plumbing_Drainage /> {/* Plumbing and Drainage Component */}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
