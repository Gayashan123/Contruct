import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white p-4 mt-8 shadow-lg">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold">Company</h3>
          <ul>
            <li>
              <Link href="/about">
                <span className="block hover:text-gray-300 cursor-pointer">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <span className="block hover:text-gray-300 cursor-pointer">Careers</span>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                <span className="block hover:text-gray-300 cursor-pointer">Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service">
                <span className="block hover:text-gray-300 cursor-pointer">Terms of Service</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold">Categories</h3>
          <ul>
            <li>
              <Link href="/category/materials">
                <span className="block hover:text-gray-300 cursor-pointer">Materials</span>
              </Link>
            </li>
            <li>
              <Link href="/category/labour">
                <span className="block hover:text-gray-300 cursor-pointer">Labour</span>
              </Link>
            </li>
            <li>
              <Link href="/category/plant">
                <span className="block hover:text-gray-300 cursor-pointer">Plant</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul>
            <li>
              <Link href="/search">
                <span className="block hover:text-gray-300 cursor-pointer">Search</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="block hover:text-gray-300 cursor-pointer">Contact</span>
              </Link>
            </li>
            <li>
              <Link href="/basic-prices">
                <span className="block hover:text-gray-300 cursor-pointer">Basic Prices</span>
              </Link>
            </li>
            <li>
              <Link href="/basic-rates">
                <span className="block hover:text-gray-300 cursor-pointer">Basic Rates</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm">© 2025 Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
}
