'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Filling from './Filling';
import EarthWorkSupport from './earth_support';

export default function Page() {
  const [activeTab, setActiveTab] = useState('filling'); // Default to Filling

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800">Filling and Earth Work Support</h1>
      </div>

      {/* Tab Navigation Section */}
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => handleTabClick('filling')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'filling' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Filling
        </button>
        <button
          onClick={() => handleTabClick('earth_work_support')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'earth_work_support' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Earth Work Support
        </button>
      </div>

      {/* Content Section */}
      <div className="px-6">
        {activeTab === 'filling' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filling</h2>
            <Filling />
          </div>
        )}

        {activeTab === 'earth_work_support' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Earth Work Support</h2>
            <EarthWorkSupport />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
