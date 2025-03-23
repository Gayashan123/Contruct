"use client";

import React, { useState } from "react";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Rendering from "./Rendering";
import Skirting from "./Skirting";
import SoffitPlastering from "./Sofit_plastering";
import WallPlastering from "./Wall_plastering";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Skirting");

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
          onClick={() => handleTabClick("Skirting")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Skirting"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Skirting
        </button>

        <button
          onClick={() => handleTabClick("Rendering")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "Rendering"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Rendering
        </button>

        <button
          onClick={() => handleTabClick("SoffitPlastering")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "SoffitPlastering"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Soffit Plastering
        </button>

        <button
          onClick={() => handleTabClick("WallPlastering")}
          className={`py-2 px-6 text-lg font-semibold ${
            activeTab === "WallPlastering"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg hover:bg-blue-500 transition-all`}
        >
          Wall Plastering
        </button>
      </div>

      {/* Content Section */}
      <div className="px-6">
        {activeTab === "Skirting" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Skirting</h2>
            <Skirting />
          </div>
        )}

        {activeTab === "Rendering" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Rendering</h2>
            <Rendering />
          </div>
        )}

        {activeTab === "SoffitPlastering" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Soffit Plastering</h2>
            <SoffitPlastering />
          </div>
        )}

        {activeTab === "WallPlastering" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Wall Plastering</h2>
            <WallPlastering />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
