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
              <td colSpan={6} className="p-2 border">Total for 1Sqr</td>
              <td className="p-2 border">{totalAmount}</td>
            </tr>

            <tr className="font-bold text-center bg-gray-300">
              <td colSpan={6} className="p-2 border">Rate For 1 Sqr</td>
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
                  <td className="p-2 border">Rate  (Say)</td>
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

export default function EarthWorkSupport() {
  const tableData = [
    {
      title: "03.A.01 Anti-Termite treatment on excavated foundation and compacted soil under floors.",
      data: [
        { no: '1', description: 'D. D. T. Powder', ref: 'M-038', unit: 'Lbs', quantity: 16, rate: 25.00, amount: 400.00 },
        { no: '1.0', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 20, rate: 0.30, amount: 6.00 },
        { no: '1.01', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 0.5, rate: 1800.00, amount: 900.00 },
      ],
      totalAmount: 1306.00,
      rates: [
        { type: '1 Sqr', amount: 1306.00 },
        { type: '1 ft²', amount: 13.06 },
        { type: '1 m²', amount: 140.53 },
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
