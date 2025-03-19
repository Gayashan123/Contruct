'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Random from './Random';


export default function Page() {
  const [activeTab, setActiveTab] = useState('random'); // Default to Filling

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800"> Random Rubble Masonry Work</h1>
      </div>

      {/* Tab Navigation Section */}
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => handleTabClick('random')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'random' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Random Rubble
        </button>
        
      </div>

      {/* Content Section */}
      <div className="px-6">
        {activeTab === 'random' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4"></h2>
            <Random />
          </div>
        )}

       
      </div>

      <Footer />
    </div>
  );
}
