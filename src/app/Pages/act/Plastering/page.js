"use client";

import React, { useState } from "react";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Link from "next/link";
import Wood from "./Wood";
import Wall from "./Wall";
import Steel from "./Steel";
import Soffit from "./Soffit";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Wall"); // Default to Site Preparation

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
          onClick={() => handleTabClick("Wall")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Wall"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Wall
        </button>

        <button
          onClick={() => handleTabClick("Steel")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Steel"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Steel
        </button>

        <button
          onClick={() => handleTabClick("Wood")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Wood"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >Wood</button>


<button
          onClick={() => handleTabClick("Soffit")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Soffit"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >Soffit</button>









      </div>

      {/* Content Section */}
      <div className="px-6">
        {activeTab === "Wall" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Wall</h2>
            <Wall />
          </div>
        )}

        {activeTab === "Steel" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Steel</h2>
            <Steel />
          </div>
        )}

        {activeTab === "Wood" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Wood</h2>
            <Wood />
          </div>
        )}

        {activeTab === "Soffit" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Soffit</h2>
            <Soffit />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
