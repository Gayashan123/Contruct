import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image'; // Importing Next.js Image component

// Assuming the image is located in the `public/Images` folder
export default function Index() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container with min height */}
      <Navbar />

      {/* Section with Image, Description, and Buttons */}
      <div className="relative flex-grow">
        <Image
          src="/Images/Home.jpg" // Path to the image in the public folder
          alt="Civil Engineering"
          width={1200} // Adjust the width as needed
          height={600} // Adjust the height as needed
          className="object-cover w-full h-96" // Make the image cover the available space
        />
        <div className="absolute bottom-10 left-10 text-white text-3xl font-semibold bg-black bg-opacity-50 p-4 rounded">
          <p>A Glimpse into Civil Engineering Projects</p>
        </div>
      </div>

      {/* Description and Buttons Section */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Civil Engineering: Building the Future
        </h2>
        <p className="text-lg text-center mb-6">
          Civil engineering is a professional engineering discipline that deals with the design,
          construction, and maintenance of the physical and naturally built environment, including
          works like roads, bridges, dams, and buildings.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700">
            Our Services
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
