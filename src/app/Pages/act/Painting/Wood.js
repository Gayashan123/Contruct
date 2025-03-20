'use client';

import React from 'react';

const TableComponent = ({ title, data, totalAmount, rates, floors }) => {
  return (
    <div className="p-4 bg-gray-100 w-full flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b pb-2">{title}</h2>

        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-2 border">No.</th>
              <th className="p-2 border">Item Description</th>
              <th className="p-2 border">Item Ref</th>
              <th className="p-2 border">Unit</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Rate (Rs.)</th>
              <th className="p-2 border">Amount (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="text-center border-b hover:bg-gray-100">
                <td className="p-2 border">{row.no}</td>
                <td className="p-2 border text-left">{row.description}</td>
                <td className="p-2 border">{row.ref || '-'}</td>
                <td className="p-2 border">{row.unit || '-'}</td>
                <td className="p-2 border">{row.quantity !== undefined ? row.quantity : '-'}</td>
                <td className="p-2 border">{row.rate !== undefined ? row.rate : '-'}</td>
                <td className="p-2 border font-semibold">{row.amount}</td>
              </tr>
            ))}
            <tr className="font-bold text-center bg-gray-300">
              <td colSpan={6} className="p-2 border">Total</td>
              <td className="p-2 border">{totalAmount}</td>
            </tr>
          </tbody>
        </table>

        {/* Rate Section */}
        <div className="mt-4">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {rates && rates.map((rate, index) => (
                <tr key={index} className="bg-yellow-200 text-center font-semibold border-b">
                  <td className="p-2 border">Rate (Say)</td>
                  <td className="p-2 border">{rate.type}</td>
                  <td className="p-2 border">{rate.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Floors Section (Only for the second table) */}
        {floors && floors.length > 0 && (
          <div className="mt-4">
            <h3 className="text-md font-semibold text-gray-800 mb-2 text-center border-b pb-2">Floors Analysis</h3>
            <table className="w-full border-collapse text-sm">
              <tbody>
                {floors.map((floor, index) => (
                  <tr key={index} className="bg-blue-200 text-center font-semibold border-b">
                    <td className="p-2 border">{floor.flo}</td>
                    <td className="p-2 border">{floor.rate}</td>
                    <td className="p-2 border">{floor.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default function LabourAnalysis() {
  const tableData = [
    {
      title: "Preparing and apply one coat of Alkali resistant primer and two coats of emulsion paint to walls.",
      data: [
        { no: '1.0', description: 'Primer', ref: 'M-075', unit: 'litre', quantity: 0.9, rate: 329, amount: 296.10 },
        { no: '1.01', description: 'Emulsion Paint', ref: 'M-043', unit: 'litre', quantity: 1.4, rate: 647, amount: 905.80 },
        { no: '1.02', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 0.1, rate:1.00, amount: 0.10 },
        { no: '1.03', description: '6" Brush', ref: 'M-021', unit: 'No', quantity: 0.1, rate: 720, amount: 72.00 },
        { no: '1.04', description: 'Sand Papers', ref: 'M-114', unit: 'Sheet', quantity: 2, rate: 20.00, amount: 40.00 },
        { no: '1.05', description: 'Painter', ref: 'L-001', unit: 'Day', quantity: 1.25, rate: 800.00, amount: 1000.00 },
        { no: '1.06', description: 'Allow 3% Items (1.06) for Scaffolding', ref: '-', unit: '-', quantity: "-", rate: "-", amount: 30.00 },
      ],
      totalAmount: 2344.00,
      rates: [
        { type: '1 Sq', amount: 2344.00 },
        { type: '1 ft', amount: 23.44 },
        { type: '1 m', amount: 252.21 },
      ],
    },
    {
      title: "Painting walls with emulsion paint (2 Coats)",
      data: [
        { no: '1.0', description: 'Emulsion Paint - first coat', ref: 'M-043', unit: 'litre', quantity: 0.757, rate: 280.00, amount: 211.96 },
        { no: '1.01', description: 'Emulsion Paint - Second coat', ref: 'M-043', unit: "litre", quantity: 0.649, rate: 280.00, amount: 181.72 },
        { no: '1.02', description: '6" Brush', ref: 'M-021', unit: 'No', quantity: 0.1, rate: 495, amount: 49.50 },
        { no: '1.03', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 0.1, rate:0.30, amount: 0.03 },
        { no: '1.04', description: 'Painter', ref: 'L-001', unit: 'Day', quantity: 0.75, rate:2500.00, amount: 1875.00 },
      ],
      totalAmount: 2374.00,
      rates: [
        { type: '1 Cube', amount: 2374.00 },
        { type: '1 ft³', amount: 23.74 },
        { type: '1 m³', amount: 255.44 },
      ],
      floors: [
        { flo: 'Ground floor', rate:"1m²", amount: 255.44 },
        { flo: 'First floor', rate:"1m²", amount: 280.99 },
        { flo: 'Second floor', rate:"1m²", amount: 309.09 },
        { flo: 'Third Floor', rate:"1m²", amount: 339.99 },
      ],
    },
    // Other table data as is...
  ];

  return (
    <div className="p-6 bg-gray-200 min-h-screen flex flex-col items-center">
      {tableData.map((table, index) => (
        <TableComponent key={index} {...table} />
      ))}
    </div>
  );
}
