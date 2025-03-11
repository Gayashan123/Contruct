import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image'; // Importing Next.js Image component
import Contact from './contact';
import About from './about';

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container with min height */}
      <Navbar />

      {/* Section with Image, Description, and Buttons */}
      <div className="relative flex-grow">
        <Image
          src="/Images/civil.jpg" // Path to the image in the public folder
          alt="Civil Engineering"
          width={1200} // Adjust the width as needed
          height={600} // Adjust the height as needed
          className="object-cover w-full h-96" // Make the image cover the available space
        />

        {/* Container for the text and buttons */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent flex flex-col justify-center items-center text-white z-10">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Civil Engineering: Building the Future
          </h2>
          <p className="text-lg mb-6 text-center max-w-3xl px-4 text-gray-300 leading-relaxed">
            Civil engineering is a professional engineering discipline that deals with the design,
            construction, and maintenance of the physical and naturally built environment, including
            works like roads, bridges, dams, and buildings. Our team is committed to improving and
            shaping the future of infrastructure.
          </p>

          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
            <button className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Spacing between Contact Us and About sections */}
      <div className="my-16"> {/* Added margin for spacing */}
        <Contact />
      </div>

      <div className="my-16"> {/* Added margin for spacing */}
        <About />
      </div>

      <Footer />
    </div>
  );
}
