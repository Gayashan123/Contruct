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

export default function EarthWorkSupport() {
  const tableData = [
    {
      title: "02.B.01 Earth Work Support (Open Planking) in Trenches Up to a Depth of 5' 0\"",
      data: [
        { no: '1.00999999', description: 'Class II Timber (17.5 ft³ for 4 uses)', ref: 'M-140', unit: 'Cu.ft', quantity: 4.375, rate: 750.00, amount: 3281.25 },
        { no: '1.019999981', description: 'Carpenter', ref: 'L-008', unit: 'Day', quantity: 1, rate: 2500.00, amount: 2500.00 },
        { no: '1.029999971', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 3, rate: 1800.00, amount: 5400.00 },
      ],
      totalAmount: 11181.25,
      rates: [
        { type: '1 Sqr', amount: 7454.17 },
        { type: '1 m²', amount: 802.07 },
      ],
    },
    {
      title: "02.B.02 Earth Work Support (Close Planking) in Trenches Up to a Depth of 5' 0\"",
      data: [
        { no: '1.00999999', description: 'Class II Timber (30 ft³ for 4 uses)', ref: 'M-140', unit: 'Cu.ft', quantity: 7.5, rate: 750.00, amount: 5625.00 },
        { no: '1.019999981', description: 'Carpenter', ref: 'L-008', unit: 'Day', quantity: 2, rate: 2500.00, amount: 5000.00 },
        { no: '1.029999971', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 6, rate: 1800.00, amount: 10800.00 },
      ],
      totalAmount: 21425.00,
      rates: [
        { type: '1 Sqr', amount: 14283.33 },
        { type: '1 m²', amount: 1536.89 },
      ],
    },
    {
      title: "02.B.03 Earth Work Support (Close Planking) in Deep Excavation in Trenches Up to 15' 0\" Depth",
      data: [
        { no: '1.00999999', description: 'Class II Timber (100 ft³ for 4 uses)', ref: 'M-140', unit: 'Cu.ft', quantity: 25, rate: 750.00, amount: 18750.00 },
        { no: '1.019999981', description: 'Carpenter', ref: 'L-008', unit: 'Day', quantity: 8, rate: 2500.00, amount: 20000.00 },
        { no: '1.029999971', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 20, rate: 1800.00, amount: 36000.00 },
      ],
      totalAmount: 74750.00,
      rates: [
        { type: '1 Sqr', amount: 16611.11 },
        { type: '1 ft²', amount: 166.11 },
        { type: '1 m²', amount: 1787.36 },
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
