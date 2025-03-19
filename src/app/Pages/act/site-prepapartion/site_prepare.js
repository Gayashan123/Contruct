'use client';

import React from 'react';

const TableComponent = ({ title, data, totalAmount, rates }) => {
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
              {rates.map((rate, index) => (
                <tr key={index} className="bg-yellow-200 text-center font-semibold border-b">
                  <td className="p-2 border">Rate (Say)</td>
                  <td className="p-2 border">{rate.type}</td>
                  <td className="p-2 border">{rate.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default function LabourAnalysis() {
  const tableData = [
    {
      title: "Clearing site and grubbing up all small trees not exceeding 500mm girth and including bushes, scrubs, undergrowth hedges etc.",
      data: [
        { no: '1', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 0.75, rate: 1800, amount: 1350 },
        { no: '1.01', description: 'Allow 2.5% of Items (1.01) for Tools', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 33.75 },
      ],
      totalAmount: 1383.75,
      rates: [
        { type: '1 Sqr', amount: 1383.75 },
        { type: '1 ft²', amount: 13.84 },
        { type: '1 m²', amount: 148.89 },
      ],
    },
    {
      title: "Cutting turf Sods, loading to hand carts and transporting up to 30 Yards, laying and watering for 30 days",
      data: [
        { no: '1.01', description: 'U / SK Labourer - cutting turf sods, loading & unloading', ref: 'L-007', unit: 'Day', quantity: 2.5, rate: 1800, amount: 4500.00 },
        { no: '1.02', description: 'U / SK Labourer - laying turf sods', ref: 'L-007', unit: 'Day', quantity: 0.5, rate: 1800, amount: 900.00 },
        { no: '1.03', description: 'U / SK Labourer - watering', ref: 'L-007', unit: 'Day', quantity: 1.5, rate: 1800, amount: 2700.00 },
        { no: '1.0a', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 60, rate: 0.30, amount: 18.00 },
      ],
      totalAmount: 8118.00,
      rates: [
        { type: '1 Sqr', amount: 8118.00 },
        { type: '1 ft²', amount: 81.18 },
        { type: '1 m²', amount: 873.50 },
      ],
    },
    {
      title: "Removing top soil to a Depth not Exceeding 6\" & Depositing as Directed within Site",
      data: [
        { no: '1', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 10, rate: 1800, amount: 18000.00 },
        { no: '1.01', description: 'Allow 2.5% of Items (1.01) for Tools', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 450 },
      ],
      totalAmount: 18450,
      rates: [
        { type: '1 Sqr', amount: 1845.00 },
        { type: '1 ft²', amount: 18.45 },
        { type: '1 m²', amount: 198.52 },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-200 min-h-screen flex flex-col items-center">
      {tableData.map((table, index) => (
        <TableComponent key={index} {...table} />
      ))}
    </div>
  );
}
