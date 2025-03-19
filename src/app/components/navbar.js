'use client'; // Add this at the top to indicate this is a client-side component

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <div className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo or brand name */}
        <div className="text-xl font-bold cursor-pointer">
          
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <span className="cursor-pointer">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/pages/basic-prices">
                <span className="cursor-pointer">Basic Prices</span>
              </Link>
            </li>
            <li>
              <Link href="/pages/basic-rates">
                <span className="cursor-pointer">Basic Rates</span>
              </Link>
            </li>
            <li>
              <Link href="/pages/activities">
                <span className="cursor-pointer">Activities</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="Menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden mt-4 space-y-4 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span className="cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/pages/basic-prices" onClick={() => setIsMenuOpen(false)}>
              <span className="cursor-pointer">Basic Prices</span>
            </Link>
          </li>
          <li>
            <Link href="/pages/basic-rates" onClick={() => setIsMenuOpen(false)}>
              <span className="cursor-pointer">Basic Rates</span>
            </Link>
          </li>
          <li>
            <Link href="/pages/activities" onClick={() => setIsMenuOpen(false)}>
              <span className="cursor-pointer">Activities</span>
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
}
