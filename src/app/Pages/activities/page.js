'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const sections = [
  'Site Preparation & Excavation',
  'Earth Work Support and Filling',
  'Anti Termite Treatment & DPC',
  'Random Rubble Masonry Work',
  'Concrete Work',
  'Formwork',
  'Reinforcement',
  'Block Work',
  'Brick Work',
  'Roof',
  'Doors and Windows',
  'Plumbing & Drainage',
  'Plastering',
  'Tiling',
  'Ceiling',
  'Painting',
];

export default function Page() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Back Button (Appears when a section is selected) */}
      {activeSection !== '' && (
        <div className="flex justify-start p-4">
          <button 
            className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg shadow-lg hover:bg-gray-600 transition-all"
            onClick={() => setActiveSection('')}
          >
            🔙 Back
          </button>
        </div>
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Our Construction Activities Overview!
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Explore the different construction stages involved in your project. Select any of the activities below to learn more details. Let's build your dream project together!
        </p>

        {/* Button Section */}
        {activeSection === '' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
            {sections.map((section, index) => (
              <button 
                key={index} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 text-center"
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-700 text-xl font-semibold">
            <p>Details for <span className="font-bold text-blue-600">{activeSection}</span> will be displayed here soon.</p>
            <p className="mt-4 text-gray-500">Stay tuned for more detailed insights on each construction activity.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
