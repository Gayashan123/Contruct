"use client";

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
      title: "04.01 Random Rubble Masonry in cement mortar 1:5 in foundation",
      data: [
        { no: '1.01', description: '6" - 9" Rubble', ref: 'M-111', unit: 'Cube', quantity: 1.3, rate: 5000.00, amount: 6500.00 },
        { no: '1.02', description: 'Cement', ref: 'M-026', unit: 'Bag', quantity: 3, rate: 1075.00, amount: 3225.00 },
        { no: '1.03', description: 'Sand', ref: 'M-113', unit: 'Cube', quantity: 0.3, rate: 18000.00, amount: 5400.00 },
        { no: '1.04', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 100, rate: 0.30, amount: 30.00 },
        { no: '1.05', description: 'Mason', ref: 'L-009', unit: 'Day', quantity: 4, rate: 2500.00, amount: 10000.00 },
        { no: '1.06', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 6, rate: 1600.00, amount: 9600.00 },
      ],
      totalAmount: 34755.00,
      rates: [
        { type: '1 Cube', amount: 34755.00 },
        { type: '1 ft³', amount: 347.55 },
        { type: '1 m³', amount: 12280.92 },
      ],
    },
    {
      title: "04.02 Random Rubble Masonry in cement mortar 1:5 in Superstructure",
      data: [
        { no: '1.01', description: '6" - 9" Rubble', ref: 'M-111', unit: 'Cu', quantity: 1.3, rate: 2500.00, amount: 3250.00 },
        { no: '1.02', description: 'Cement', ref: 'M-026', unit: 'Bag', quantity: 5, rate: 980.00, amount: 4900.00 },
        { no: '1.03', description: 'Sand', ref: 'M-113', unit: 'Cu', quantity: 0.3, rate: 20000.00, amount: 6000.00 },
        { no: '1.04', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 100, rate: 0.30, amount: 30.00 },
        { no: '1.05', description: 'Mason', ref: 'L-009', unit: 'Day', quantity: 4.5, rate: 2500.00, amount: 11250.00 },
        { no: '1.06', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 7, rate: 1800.00, amount: 12600.00 },
        { no: '1.07', description: 'Allow 3% of Items (1.05, 1.06) for Scaffolding', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 715.50 },
      ],
      totalAmount: 38745.50,
      rates: [
        { type: '1 Cube', amount: 38745.50 },
        { type: '1 ft³', amount: 387.46 },
        { type: '1 m³', amount: 13691.17 },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {tableData.map((item, index) => (
        <TableComponent
          key={index}
          title={item.title}
          data={item.data}
          totalAmount={item.totalAmount}
          rates={item.rates}
        />
      ))}
    </div>
  );
}
