"use client";

import React, { useState } from "react";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Link from "next/link";

import WallT from "./Wall_tiling"; // Component for wall tiling
import FloorT from "./Floor_tiling"; // Component for floor tiling (you need to create this component)

export default function Page() {
  const [activeTab, setActiveTab] = useState("wall_t"); // Default to Wall Tiling

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800">Tiling</h1>
      </div>

      {/* Tab Navigation Section */}
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => handleTabClick("wall_t")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "wall_t"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Wall Tiling
        </button>

        <button
          onClick={() => handleTabClick("floor_t")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "floor_t"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Floor Tiling
        </button>
      </div>

      {/* Content Section */}
      <div className="px-6">
        {activeTab === "wall_t" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Wall Tiling</h2>
            <WallT /> {/* Wall Tiling Component */}
          </div>
        )}

        {activeTab === "floor_t" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Floor Tiling</h2>
            <FloorT /> {/* Floor Tiling Component */}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
