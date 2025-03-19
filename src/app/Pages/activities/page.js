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
  { name: 'Concrete Work', link: '/pages/act/earth-work' },
  { name: 'Formwork', link:'/pages/act/earth-work' },
  { name: 'Reinforcement', link: '/pages/act/earth-work' },
  { name: 'Block Work', link: '/pages/act/Block-work' },
  { name: 'Brick Work', link: '/pages/act/Brick-work' },
  { name: 'Roof', link: '/pages/act/earth-work' },
  { name: 'Doors and Windows', link: '/pages/act/earth-work' },
  { name: 'Plumbing & Drainage', link: '/pages/act/earth-work' },
  { name: 'Plastering', link: '/pages/act/earth-work' },
  { name: 'Tiling', link: '/pages/act/earth-work' },
  { name: 'Ceiling', link: '/pages/act/earth-work' },
  { name: 'Painting', link: '/pages/act/earth-work' },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Back Button (Appears when a section is selected) */}
      {activeSection !== '' && (
        <div className="flex justify-start p-6">
          <button 
            className="px-6 py-3 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out"
            onClick={() => setActiveSection('')}
          >
            🔙 Back
          </button>
        </div>
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Welcome to Our Construction Activities Overview!
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl">
          Explore the different construction stages involved in your project. Select any of the activities below to learn more details. Let's build your dream project together with professionalism and care!
        </p>

        {/* Button Section */}
        {activeSection === '' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {sections.map((section, index) => (
              <Link key={index} href={section.link}>
                <button 
                  className="bg-blue-600 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {section.name}
                </button>
              </Link>
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
