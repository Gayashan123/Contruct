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
      title: "07. Reinforcement - 7.01 Tor Steel Reinforcement",
      data: [
        { no: '1.00999999', description: 'M.S./Tor Steel Rods including transport to site', ref: 'M-152', unit: 'kg', quantity: 50, rate: 68.00, amount: 3400.00 },
        { no: '1.019999981', description: 'Allow 15% of Items (1.01) for Wastage', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 510.00 },
        { no: '1.029999971', description: '16 BWG Binding Wire', ref: 'M-005', unit: 'Lbs', quantity: 1.5, rate: 100.00, amount: 150.00 },
        { no: '1.039999962', description: 'Allow 1.5% of Items (1.01) for spaces or chairs', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 51.00 },
        { no: '1.049999952', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 1, rate: 2000.00, amount: 2000.00 },
        { no: '1.059999943', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 1, rate: 1800.00, amount: 1800.00 },
      ],
      totalAmount: 7911.00,
      rates: [
        { type: '1 Cwt', amount: 7911.00 },
        { type: '1 Kg', amount: 158.22 },
      ],
    },
    {
      title: "07. Reinforcement - 7.02 Mild Steel Reinforcement",
      data: [
        { no: '1.00999999', description: 'M.S./Tor Steel Rods including transport to site', ref: 'M-068', unit: 'kg', quantity: 50, rate: 68.00, amount: 3400.00 },
        { no: '1.019999981', description: 'Allow 15% of Items (1.01) for Wastage', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 510.00 },
        { no: '1.029999971', description: '16 BWG Binding Wire', ref: 'M-005', unit: 'Lbs', quantity: 1.5, rate: 100.00, amount: 150.00 },
        { no: '1.039999962', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 1, rate: 2000.00, amount: 2000.00 },
        { no: '1.049999952', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 1, rate: 1800.00, amount: 1800.00 },
      ],
      totalAmount: 7860.00,
      rates: [
        { type: '1 Cwt', amount: 7860.00 },
        { type: '1 Kg', amount: 157.20 },
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
