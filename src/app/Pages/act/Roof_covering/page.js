"use client";

import React, { useState } from "react";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Link from "next/link";
import RoofCovering from "./Roof_cover";
import RoofPlumbing from "./Roof_plubing";

export default function Page() {
  const [activeTab, setActiveTab] = useState("RoofCovering"); // Default to Roof Covering & Frame

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800">Painting</h1>
      </div>

      {/* Tab Navigation Section */}
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => handleTabClick("RoofCovering")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "RoofCovering"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Roof Covering & Frame
        </button>

        <button
          onClick={() => handleTabClick("RoofPlumbing")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "RoofPlumbing"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Roof Plumbing
        </button>
      </div>

      {/* Content Section */}
      <div className="px-6">
        {activeTab === "RoofCovering" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Roof Covering & Frame</h2>
            <RoofCovering />
          </div>
        )}

        {activeTab === "RoofPlumbing" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Roof Plumbing</h2>
            <RoofPlumbing />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
