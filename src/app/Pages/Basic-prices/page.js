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
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="bg-gray-800 text-white py-8 text-center shadow-md">
        <h1 className="text-3xl font-semibold">Construction Resource Management</h1>
        <p className="mt-2 text-lg">Manage construction materials, labor, and equipment efficiently.</p>
      </div>

      {/* Back Button (Appears when a section is selected) */}
      {activeSection && (
        <div className="flex justify-start p-4">
          <button
            className="px-6 py-2 bg-gray-400 text-white font-semibold rounded-md shadow-sm hover:bg-gray-500 transition duration-200"
            onClick={() => setActiveSection('')}
          >
            🔙 Back
          </button>
        </div>
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Category Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-xl">
          <button
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-200 ${activeSection === 'Materials' ? 'ring-4 ring-gray-400' : ''}`}
            onClick={() => setActiveSection('Materials')}
          >
            🏗️ Materials
          </button>

          <button
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-200 ${activeSection === 'Labour' ? 'ring-4 ring-gray-400' : ''}`}
            onClick={() => setActiveSection('Labour')}
          >
            👷‍♂️ Labour
          </button>

          <button
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-200 ${activeSection === 'Plant' ? 'ring-4 ring-gray-400' : ''}`}
            onClick={() => setActiveSection('Plant')}
          >
            🚜 Plant Equipment
          </button>
        </div>

        {/* Selected Section Content */}
        <div className="w-full mt-8 px-6 py-4 bg-white shadow-md rounded-lg border border-gray-300">
          {activeSection === '' ? (
            <div className="text-center text-gray-700 text-xl font-semibold">
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
