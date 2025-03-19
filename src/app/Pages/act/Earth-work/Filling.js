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
      title: "Backfilling to trenches with selected earth available at site",
      data: [
        { no: '02.A.01', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 1, rate: 1800, amount: 1800.00 },
        { no: '1.01', description: 'Allow 2.5% of Items for Tools', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 45.00 },
      ],
      totalAmount: 1845.00,
      rates: [
        { type: '1 Cube', amount: 1845.00 },
        { type: '1 ft³', amount: 18.45 },
        { type: '1 m³', amount: 652.00 },
      ],
    },
    {
      title: "Backfilling to trenches with Imported Material",
      data: [
        { no: '02.A.02', description: 'Earth Delivered at Site', ref: 'M-042', unit: 'Cube', quantity: 1, rate: 1500, amount: 1500.00 },
        { no: '1.01', description: 'Allow 15% of Items for Compacting', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 225.00 },
        { no: '1.02', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 1.25, rate: 1800, amount: 2250.00 },
      ],
      totalAmount: 3975.00,
      rates: [
        { type: '1 Cube', amount: 3975.00 },
        { type: '1 ft³', amount: 39.75 },
        { type: '1 m³', amount: 1405.00 },
      ],
    },
    {
      title: "Filling under floors including levelling, watering & compacting in 3\" layers with available earth at site",
      data: [
        { no: '02.A.03', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2, rate: 1800, amount: 3600.00 },
        { no: '1.01', description: 'Allow 2.5% of Items for Tools', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 90.00 },
      ],
      totalAmount: 3690.00,
      rates: [
        { type: '1 Cube', amount: 3690.00 },
        { type: '1 ft³', amount: 36.90 },
        { type: '1 m³', amount: 1304.00 },
      ],
    },
    {
      title: "Filling under floors including levelling, watering & compacting in 3\" layers with imported selected earth",
      data: [
        { no: '02.A.04', description: 'Earth Delivered at Site', ref: 'M-042', unit: 'Cu', quantity: 1, rate: 1500, amount: 1500.00 },
        { no: '1.01', description: 'Allow 15% of Items for Compaction', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 225.00 },
        { no: '1.02', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2, rate: 1800, amount: 3600.00 },
      ],
      totalAmount: 5362.50,
      rates: [
        { type: '1 Cube', amount: 5362.50 },
        { type: '1 ft³', amount: 53.63 },
        { type: '1 m³', amount: 1894.88 },
        { type: '1 m³ with compaction', amount: 2463.34 },
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
