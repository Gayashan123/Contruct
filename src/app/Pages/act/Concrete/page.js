'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Concrete from './Concrete';
import Screed from './screed_concreet';
import Mass_concreate from './Mass_concrete';
import Column from './Column';
import Beam from './Beam';
import Slab from './Slab';
import Lintol from './Lintol';

export default function Page() {
  const [activeTab, setActiveTab] = useState('Concrete'); // Default to Concrete

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800">Concrete Work</h1>
      </div>

      {/* Tab Navigation Section */}
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => handleTabClick('Concrete')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'Concrete' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Concrete
        </button>

        <button
          onClick={() => handleTabClick('Screed')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'Screed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Screed
        </button>

        <button
          onClick={() => handleTabClick('Mass_concreate')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'Mass_concreate' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Mass Concrete
        </button>

        <button
          onClick={() => handleTabClick('Column')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'Column' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Column
        </button>

        <button
          onClick={() => handleTabClick('Beam')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'Beam' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Beam
        </button>

        <button
          onClick={() => handleTabClick('Slab')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'Slab' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Slab
        </button>

        <button
          onClick={() => handleTabClick('Lintol')}
          className={`py-2 px-6 text-lg font-semibold ${activeTab === 'Lintol' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg hover:bg-blue-500 transition-all`}
        >
          Lintol
        </button>
      </div>

      {/* Content Section */}
      <div className="px-6">
        {activeTab === 'Concrete' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Concrete</h2>
            <Concrete />
          </div>
        )}

        {activeTab === 'Screed' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Screed Concrete</h2>
            <Screed />
          </div>
        )}

        {activeTab === 'Mass_concreate' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Mass Concrete</h2>
            <Mass_concreate />
          </div>
        )}

        {activeTab === 'Column' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Column</h2>
            <Column />
          </div>
        )}

        {activeTab === 'Beam' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Beam</h2>
            <Beam />
          </div>
        )}

        {activeTab === 'Slab' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Slab</h2>
            <Slab />
          </div>
        )}

        {activeTab === 'Lintol' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Lintol</h2>
            <Lintol />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
