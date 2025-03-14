'use client';

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const data = [
  {
    trade: 'CONCRETE',
    materials: [
      { description: 'Cement', unit: 'gal', price: '200.00' },
      { description: 'Sand', unit: 'cube.', price: '500.00' },
      { description: 'Metal 3/4 "', unit: 'cube.', price: '600.00' },
      { description: 'Metal 1 "', unit: 'cube.', price: '650.00' },
      { description: 'Metal 2 "', unit: 'cube.', price: '700.00' },
      { description: 'Water', unit: 'gal', price: '50.00' },
    ],
    labour: [
      { description: 'Skilled Labour', unit: 'day', price: '1,000.00' },
      { description: 'Unskilled Labour', unit: 'day', price: '600.00' },
      { description: 'Vibrator Operator', unit: 'day', price: '1,000.00' },
      { description: 'Concrete Mixer Operator', unit: 'day', price: '1,000.00' },
    ],
    plant: [
      { description: 'Concrete Mixer', unit: 'hour', price: '150.00' },
      { description: 'Vibrator', unit: 'hour', price: '120.00' },
    ],
  },
];

export default function BasicPrices() {
  const [priceData, setPriceData] = useState(data);

  const handlePriceChange = (section, index, value) => {
    const updatedPriceData = [...priceData];
    updatedPriceData[0][section][index].price = value; // update price for materials, labour, or plant
    setPriceData(updatedPriceData);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Basic Prices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Trade</th>
                <th className="py-2 px-4 border">Material Description</th>
                <th className="py-2 px-4 border">Unit</th>
                <th className="py-2 px-4 border">Basic Price</th>
                <th className="py-2 px-4 border">Labour Description</th>
                <th className="py-2 px-4 border">Unit</th>
                <th className="py-2 px-4 border">Basic Price</th>
                <th className="py-2 px-4 border">Plant Description</th>
                <th className="py-2 px-4 border">Unit</th>
                <th className="py-2 px-4 border">Basic Price</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                item.materials.map((mat, matIndex) => (
                  <tr key={index + '-' + matIndex} className="text-center">
                    {matIndex === 0 && (
                      <td rowSpan={item.materials.length} className="py-2 px-4 border font-bold">{item.trade}</td>
                    )}
                    <td className="py-2 px-4 border">{mat.description}</td>
                    <td className="py-2 px-4 border">{mat.unit}</td>
                    <td className="py-2 px-4 border">
                      <input 
                        type="text" 
                        value={mat.price} 
                        onChange={(e) => handlePriceChange('materials', matIndex, e.target.value)} 
                        className="border p-1"
                      />
                    </td>
                    {item.labour[matIndex] ? (
                      <>
                        <td className="py-2 px-4 border">{item.labour[matIndex].description}</td>
                        <td className="py-2 px-4 border">{item.labour[matIndex].unit}</td>
                        <td className="py-2 px-4 border">
                          <input 
                            type="text" 
                            value={item.labour[matIndex].price} 
                            onChange={(e) => handlePriceChange('labour', matIndex, e.target.value)} 
                            className="border p-1"
                          />
                        </td>
                      </>
                    ) : (
                      <><td className="border"></td><td className="border"></td><td className="border"></td></>
                    )}
                    {item.plant[matIndex] ? (
                      <>
                        <td className="py-2 px-4 border">{item.plant[matIndex].description}</td>
                        <td className="py-2 px-4 border">{item.plant[matIndex].unit}</td>
                        <td className="py-2 px-4 border">
                          <input 
                            type="text" 
                            value={item.plant[matIndex].price} 
                            onChange={(e) => handlePriceChange('plant', matIndex, e.target.value)} 
                            className="border p-1"
                          />
                        </td>
                      </>
                    ) : (
                      <><td className="border"></td><td className="border"></td><td className="border"></td></>
                    )}
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
