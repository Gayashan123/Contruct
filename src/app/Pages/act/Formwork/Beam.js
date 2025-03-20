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
      title: "Sawn timber formwork to 9\" x 9\" cement concrete column in ground floor",
      data: [
        { no: "1.00999999", item_description: "Sawn timber formwork to 9\" x 9\" cement concrete column in ground floor - Making Mould", item_ref: "06.A.02", unit: "1 Use", quantity: 1, rate: 994.00, amount: 994.00 },
        { no: "1.019999981", item_description: "Bolts 16mm 18\" (12 nos 20 uses)", item_ref: "M-010", unit: "No", quantity: 0.6, rate: 75.00, amount: 45.00 },
        { no: "1.029999971", item_description: "Mould Oil", item_ref: "M-071", unit: "litre", quantity: 0.5, rate: 35.00, amount: 17.50 },
        { no: "1.039999962", item_description: "Timber props 4\" x 2\"", item_ref: "M-144", unit: "L.ft", quantity: 3.5, rate: 65.00, amount: 227.50 },
        { no: "1.049999952", item_description: "Carpenter - assembling", item_ref: "L-008", unit: "Day", quantity: 0.25, rate: 2500.00, amount: 625.00 },
        { no: "1.059999943", item_description: "U / SK Labourer - assembling", item_ref: "L-007", unit: "Day", quantity: 0.25, rate: 1800.00, amount: 450.00 },
        { no: "1.070000052", item_description: "Carpenter - dismantling, cleaning & repairing", item_ref: "L-008", unit: "Day", quantity: 0.25, rate: 2500.00, amount: 625.00 },
        { no: "1.080000043", item_description: "U / SK Labourer - dismantling, cleaning & repairing", item_ref: "L-007", unit: "Day", quantity: 0.25, rate: 1800.00, amount: 450.00 }
      ],
      totalAmount: 3434.00,
      rates: [
        { type: "Rate for 1 Sq", amount: 22893.33 },
        { type: "Rate (Say) 1 Sq", amount: 22893.00 },
        { type: "Rate (Say) 1 ft2", amount: 228.93 },
        { type: "Rate (Say) 1 m2", amount: 2463.29 },
        { type: "Ground floor - First Floor 1 m2", amount: 2463.29 },
        { type: "First Floor - Second Floor 1 m2", amount: 2709.62 },
        { type: "Second Floor - Third Floor 1 m2", amount: 2980.58 },
        { type: "Third Floor - Fourth Floor 1 m2", amount: 3278.63 }
      ],
      floors: []
    },
    {
      title: "Sawn timber formwork to 9\" x 9\" cement concrete column in ground floor - Making Mould",
      data: [
        { no: "1.00999999", item_description: "1\" Thick Class II Timber", item_ref: "M-141", unit: "Sq.ft", quantity: 18.15, rate: 65.00, amount: 1179.75 },
        { no: "1.019999981", item_description: "2\" x 2\" Class II Timber In Yokes", item_ref: "M-143", unit: "L.ft", quantity: 17.1, rate: 22.00, amount: 376.20 },
        { no: "1.029999971", item_description: "2\" x 1\" Class II Timber Battens.", item_ref: "M-142", unit: "L.ft", quantity: 16.12, rate: 12.00, amount: 193.44 },
        { no: "1.039999962", item_description: "Wire Nails", item_ref: "M-161", unit: "Lbs", quantity: 1.5, rate: 50.00, amount: 75.00 },
        { no: "1.049999952", item_description: "Carpenter", item_ref: "L-008", unit: "Day", quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { no: "1.059999943", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.5, rate: 1800.00, amount: 900.00 }
      ],
      totalAmount: 3974.39,
      rates: [
        { type: "Rate for 1 Use", amount: 993.60 },
        { type: "Rate (Say) 1 Use", amount: 994.00 }
      ],
      floors: []
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