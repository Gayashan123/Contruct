import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white p-8 mt-8 shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className="flex justify-between gap-8">
        {/* Company Section */}
        <div className="hover:scale-105 transition-all duration-300">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul>

          <li>
              <Link href="/">
                <span className="block hover:text-gray-300 cursor-pointer">HOME</span>
              </Link>
            </li>




            <li>
              <Link href="/pages/about-us">
                <span className="block hover:text-gray-300 cursor-pointer">About Us</span>
              </Link>
            </li>
           
           
          
          </ul>
        </div>

        

        {/* Quick Links Section */}
        <div className="hover:scale-105 transition-all duration-300">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
           
            <li>
              <Link href="/pages/contact-us">
                <span className="block hover:text-gray-300 cursor-pointer">Contact</span>
              </Link>
            </li>
            <li>
              <Link href="/pages/basic-prices">
                <span className="block hover:text-gray-300 cursor-pointer">Basic Prices</span>
              </Link>
            </li>
            <li>
              <Link href="/pages/basic-rates">
                <span className="block hover:text-gray-300 cursor-pointer">Basic Rates</span>
              </Link>
            </li>

            <li>
              <Link href="/pages/activities">
                <span className="block hover:text-gray-300 cursor-pointer">Activities</span>
              </Link>
            </li>


          </ul>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-8 text-center hover:scale-105 transition-all duration-300">
        <p className="text-sm">© 2025 Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
}
