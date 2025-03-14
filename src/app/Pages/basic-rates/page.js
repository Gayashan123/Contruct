'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Labour from '../category/labour';
import Plant from '../category/plant';
import Materials from '../category/materials';

export default function Page() {
  const [activeTable, setActiveTable] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Back Button (Appears when a table is selected) */}
      {activeTable !== '' && (
        <div className="flex justify-start p-4">
          <button 
            className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg shadow-lg hover:bg-gray-600 transition-all"
            onClick={() => setActiveTable('')}
          >
            🔙 Back
          </button>
        </div>
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Construction Material Categories
        </h1>

        {/* Button Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
          <button 
            className={`bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ${activeTable === 'Materials' ? 'ring-4 ring-yellow-400' : ''}`}
            onClick={() => setActiveTable('Materials')}
          >
            🏗️ Material Table
          </button>
          <button 
            className={`bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ${activeTable === 'Labour' ? 'ring-4 ring-gray-400' : ''}`}
            onClick={() => setActiveTable('Labour')}
          >
            👷 Labour Table
          </button>
          <button 
            className={`bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ${activeTable === 'Plant' ? 'ring-4 ring-red-400' : ''}`}
            onClick={() => setActiveTable('Plant')}
          >
            🚜 Plant Table
          </button>
        </div>
      </div>

      {/* Display Selected Table */}
      <div className="p-6">
        {activeTable === '' && (
          <div className="text-center text-gray-700 text-xl font-semibold">
            Welcome! Please select a category to view the table.
          </div>
        )}
        {activeTable === 'Materials' && <Materials />}
        {activeTable === 'Labour' && <Labour />}
        {activeTable === 'Plant' && <Plant />}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
