'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Labour from './labour';
import Plant from './plant';
import Materials from './Materials';

export default function Page() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col relative">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-14 text-center shadow-xl z-10 relative">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Construction Basic Prices</h1>
        <p className="mt-4 text-lg sm:text-xl font-medium">Manage materials, labor, and plant equipment efficiently.</p>
      </div>

      {/* Back Button (Appears when a section is selected) */}
      {activeSection && (
        <div className="flex justify-start p-6 z-20 relative">
          <button
            className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-900 transition duration-200"
            onClick={() => setActiveSection('')}
          >
            🔙 Back to Categories
          </button>
        </div>
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-6 z-10 relative">
        {/* Category Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          <button
            className={`bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-gradient-to-l text-white font-semibold py-6 px-10 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-teal-300 ${activeSection === 'Materials' ? 'ring-4 ring-teal-500' : ''}`}
            onClick={() => setActiveSection('Materials')}
          >
            🏗️ <span className="block mt-2 text-lg">Materials</span>
          </button>

          <button
            className={`bg-gradient-to-r from-yellow-500 to-orange-600 hover:bg-gradient-to-l text-white font-semibold py-6 px-10 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-yellow-300 ${activeSection === 'Labour' ? 'ring-4 ring-yellow-500' : ''}`}
            onClick={() => setActiveSection('Labour')}
          >
            👷‍♂️ <span className="block mt-2 text-lg">Labour</span>
          </button>

          <button
            className={`bg-gradient-to-r from-purple-600 to-indigo-700 hover:bg-gradient-to-l text-white font-semibold py-6 px-10 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-purple-300 ${activeSection === 'Plant' ? 'ring-4 ring-purple-500' : ''}`}
            onClick={() => setActiveSection('Plant')}
          >
            🚜 <span className="block mt-2 text-lg">Plant Equipment</span>
          </button>
        </div>

        {/* Selected Section Content */}
        <div className="w-full mt-12 px-8 py-6 bg-white shadow-lg rounded-lg border border-gray-200 z-10 relative">
          {activeSection === '' ? (
            <div className="text-center text-gray-700 text-xl font-medium">
              Please select a category to manage.
            </div>
          ) : (
            <div>
              {activeSection === 'Materials' && <Materials />}
              {activeSection === 'Labour' && <Labour />}
              {activeSection === 'Plant' && <Plant />}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
