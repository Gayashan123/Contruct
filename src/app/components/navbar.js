'use client'; // Add this at the top to indicate this is a client-side component

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <div className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo or brand name */}
        <div className="text-xl font-bold">Your Brand</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <span className="hover:text-gray-300 cursor-pointer">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/basic-prices">
                <span className="hover:text-gray-300 cursor-pointer">Basic Prices</span>
              </Link>
            </li>
            <li>
              <Link href="/basic-rates">
                <span className="hover:text-gray-300 cursor-pointer">Basic Rates</span>
              </Link>
            </li>
            <li>
              <Link href="/activities">
                <span className="hover:text-gray-300 cursor-pointer">Activities</span>
              </Link>
            </li>
            <li className="relative group">
              <span className="hover:text-gray-300 cursor-pointer">Categories</span>
              <ul className="absolute hidden group-hover:block bg-gray-700 text-white py-2 rounded-lg shadow-md mt-1">
                <li>
                  <Link href="/category/materials">
                    <span className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">Materials</span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/labour">
                    <span className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">Labour</span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/plant">
                    <span className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">Plant</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/search">
                <span className="hover:text-gray-300 cursor-pointer">Search</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-gray-300 cursor-pointer">Contact</span>
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
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
        } md:hidden mt-4 space-y-4`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <Link href="/">
              <span className="hover:text-gray-300 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/basic-prices">
              <span className="hover:text-gray-300 cursor-pointer">Basic Prices</span>
            </Link>
          </li>
          <li>
            <Link href="/basic-rates">
              <span className="hover:text-gray-300 cursor-pointer">Basic Rates</span>
            </Link>
          </li>
          <li>
            <Link href="/activities">
              <span className="hover:text-gray-300 cursor-pointer">Activities</span>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <span className="hover:text-gray-300 cursor-pointer">Search</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-gray-300 cursor-pointer">Contact</span>
            </Link>

 </li>


 <li>
             
                  <Link href="/category/materials">
                    <span className="hover:text-gray-300 cursor-pointer">Materials</span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/labour">
                    <span className="hover:text-gray-300 cursor-pointer">Labour</span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/plant">
                    <span className="hover:text-gray-300 cursor-pointer">Plant</span>
                  </Link>
                </li>
              
            

        </ul>
      </div>
    </div>
  );
}
