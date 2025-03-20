"use client";

import React, { useState } from "react";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Link from "next/link";
import Slab from "./Slab"; // Correct import for Slab component
import Beam from "./Beam"; // Correct import for Beam component
import Column from "./Column"; // Correct import for Column component


export default function Page() {
  const [activeTab, setActiveTab] = useState("Slab"); // Default to Steel section

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800">Formwork</h1>
      </div>

      {/* Tab Navigation Section */}
      <div className="flex justify-center space-x-6 mb-6">
       

        <button
          onClick={() => handleTabClick("Slab")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Slab"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Slab
        </button>

        <button
          onClick={() => handleTabClick("Beam")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Beam"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Beam
        </button>

        <button
          onClick={() => handleTabClick("Column")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Column"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Column
        </button>
      </div>

      {/* Content Section */}
      <div className="px-6">
       
        {activeTab === "Slab" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Slab</h2>
            <Slab /> {/* Render Slab component */}
          </div>
        )}

        {activeTab === "Beam" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Beam</h2>
            <Beam /> {/* Render Beam component */}
          </div>
        )}

        {activeTab === "Column" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Column</h2>
            <Column /> {/* Render Column component */}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
