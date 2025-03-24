'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const sections = [
  { name: 'Site Preparation & Excavation', link: '/pages/act/site-prepapartion' },
  { name: 'Earth Work Support and Filling', link: '/pages/act/Earth-work' },
  { name: 'Anti Termite Treatment & DPC', link:  '/pages/act/Anti-termite'},
  { name: 'Random Rubble Masonry Work', link: '/pages/act/Random_rubble' },
  { name: 'Concrete Work', link: '/pages/act/Concrete' },
  { name: 'Formwork', link:'/pages/act/Formwork' },
  { name: 'Reinforcement', link: '/pages/act/Reinforcement' },
  { name: 'Block Work', link: '/pages/act/Block-work' },
  { name: 'Brick Work', link: '/pages/act/Brick-work' },
  { name: 'Roof', link: '/pages/act/Roof_covering' },
  { name: 'Doors and Windows', link: '/pages/act/earth-work' },
  { name: 'Plumbing & Drainage', link: '/pages/act/PlumbingandDra' },
  { name: 'Plastering', link: '/pages/act/Plastering' },
  { name: 'Tiling', link: '/pages/act/Tiling' },
  { name: 'Ceiling', link: '/pages/act/Ceiling' },
  { name: 'Painting', link: '/pages/act/Painting' },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState('');

  // Handle section selection
  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Back Button (Appears when a section is selected) */}
      {activeSection && (
        <div className="flex justify-start px-6 py-4">
          <button 
            className="px-6 py-3 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none transition duration-300 ease-in-out"
            onClick={() => setActiveSection('')}
          >
            🔙 Back
          </button>
        </div>
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center max-w-2xl">
          Welcome to Our Construction Activities Overview!
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl">
          Explore the different construction stages involved in your project. Select any of the activities below to learn more details. Let's build your dream project together with professionalism and care!
        </p>

        {/* Button Section */}
        {activeSection === '' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
            {sections.map((section, index) => (
              <Link 
                key={index} 
                href={section.link} 
                prefetch={true} // Ensuring that the page is prefetched for better speed
                passHref
              >
                <button 
                  className="bg-white text-gray-800 font-semibold py-4 px-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 focus:outline-none"
                  onClick={() => handleSectionClick(section.name)} // Using handler for better control
                >
                  {section.name}
                </button>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-700 text-xl font-semibold max-w-md mx-auto">
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
