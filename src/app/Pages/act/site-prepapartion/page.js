"use client";

import React, { useState } from 'react';
import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';
import Link from 'next/link';
import Preparation from './site_prepare';
import Excavation from './excavation';

export default function Page() {
  const [activeTab, setActiveTab] = useState('site_preparation'); // Default to Site Preparation

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800">Site Preparation and Excavation</h1>
      </div>

      {/* Tab Navigation Section */}
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => handleTabClick('site_preparation')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'site_preparation' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Site Preparation
        </button>
        <button
          onClick={() => handleTabClick('excavation')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'excavation' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Excavation
        </button>
      </div>

      {/* Content Section */}
      <div className="px-6">
        {activeTab === 'site_preparation' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Site Preparation</h2>
            <Preparation />
          </div>
        )}

        {activeTab === 'excavation' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Excavation</h2>
            <Excavation />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
