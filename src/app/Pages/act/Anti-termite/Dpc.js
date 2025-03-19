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
              <td colSpan={6} className="p-2 border">Total For 1 Sqr</td>
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
                  <td className="p-2 border">Rate(Say)</td>
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
      title: "03.B.01 3/4\" thick DPC in cement sand 1:2 finished with 2 coats hot tar and blinded with sand",
      data: [
        { no: '1', description: 'Cement', ref: 'M-026', unit: 'Bag', quantity: 2.25, rate: 980.00, amount: 2205.00 },
        { no: '1.01', description: 'Sand', ref: 'M-113', unit: 'Cube', quantity: 0.11, rate: 20000.00, amount: 2200.00 },
        { no: '1.02', description: 'Bitumen', ref: 'M-006', unit: 'Gal', quantity: 1.5, rate: 80.00, amount: 120.00 },
        { no: '1.03', description: 'Fire Wood', ref: 'M-046', unit: 'Lbs', quantity: 10, rate: 250.00, amount: 2500.00 },
        { no: '1.04', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 10, rate: 0.30, amount: 3.00 },
        { no: '1.05', description: 'Mason', ref: 'L-009', unit: 'Day', quantity: 1.25, rate: 2500.00, amount: 3125.00 },
        { no: '1.06', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2.5, rate: 1800.00, amount: 4500.00 },
      ],
      totalAmount: 14653.00,
      rates: [
        { type: '1 Sqr', amount: 14653.00 },
        { type: '1 ft²', amount: 146.53 },
        { type: '1 m²', amount: 1576.66 },
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
