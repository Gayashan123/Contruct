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
                <td className="p-2 border text-left">{row.item_description}</td>
                <td className="p-2 border">{row.item_ref || '-'}</td>
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
      title: "2\" thick Cement Concrete screed 1:3:6 (1 1/2) in foundation at depth not exceeding 5' 0\"",
      data: [
        { no: "1.00999999", item_description: "Mixing Concrete 1:3:6(1 1/2\")", item_ref: "05.A.02", unit: "Cube", quantity: 0.1667, rate: 41850.00, amount: 6976.40 },
        { no: "1.019999981", item_description: "SK Labour", item_ref: "L-003", unit: "Day", quantity: 0.125, rate: 2000.00, amount: 250.00 },
        { no: "1.029999971", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.5, rate: 1800.00, amount: 900.00 }
      ],
      totalAmount: 8126.40,
      rates: [
        { type: "Rate for 1 Sqr", amount: 8126.40 },
        { type: "Rate (Say) 1 Sqr", amount: 8130.00 },
        { type: "Rate (Say) 1 ft2", amount: 81.30 },
        { type: "Rate (Say) 1 m2", amount: 874.79 }
      ]
    },
    {
      title: "3\" Thick cement concrete 1:3:6(1-1/2\") screed in foundation at depths not exceeding 5' 0\"",
      data: [
        { no: "1.00999999", item_description: "Mixing Concrete 1:3:6(1 1/2\")", item_ref: "05.A.02", unit: "Cube", quantity: 0.25, rate: 41850.00, amount: 10462.50 },
        { no: "1.019999981", item_description: "SK Labour", item_ref: "L-003", unit: "Day", quantity: 0.125, rate: 2000.00, amount: 250.00 },
        { no: "1.029999971", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.75, rate: 1800.00, amount: 1350.00 }
      ],
      totalAmount: 12062.50,
      rates: [
        { type: "Rate for 1 Sqr", amount: 12062.50 },
        { type: "Rate (Say) 1 Sqr", amount: 12060.00 },
        { type: "Rate (Say) 1 ft2", amount: 120.60 },
        { type: "Rate (Say) 1 m2", amount: 1297.66 }
      ]
    },
    {
      title: "6\" Thick cement concrete 1:2-1/2:5(1\") in floor (Mass concrete)",
      data: [
        { no: "1.00999999", item_description: "Mixing Concrete 1:2 1/2 : 5(1\")", item_ref: "05.A.03", unit: "Cube", quantity: 0.5, rate: 43950.00, amount: 21975.00 },
        { no: "1.024999976", item_description: "Water", item_ref: "M-157", unit: "Gal", quantity: 200, rate: 0.30, amount: 60.00 },
        { no: "1.029999971", item_description: "SK Labour", item_ref: "L-003", unit: "Day", quantity: 0.5, rate: 2000.00, amount: 1000.00 },
        { no: "1.039999962", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 1.25, rate: 1800.00, amount: 2250.00 }
      ],
      totalAmount: 25285.00,
      rates: [
        { type: "Rate for 1 Sqr", amount: 25285.00 },
        { type: "Rate (Say) 1 Sqr", amount: 25290.00 },
        { type: "Rate (Say) 1 ft2", amount: 252.90 },
        { type: "Rate (Say) 1 m2", amount: 2721.20 }
      ]
    }
  ];

  return (
    <div className="p-6 bg-gray-200 min-h-screen flex flex-col items-center">
      {tableData.map((table, index) => (
        <TableComponent key={index} title={table.title} data={table.data} totalAmount={table.totalAmount} rates={table.rates} floors={table.floors} />
      ))}
    </div>
  );
}