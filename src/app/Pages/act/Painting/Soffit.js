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
      title: "Preparing and applying one coat of alkali-resistant primer and two coats of emulsion paint to the soffit of slabs",
      data: [
        { "no": "1.00", "description": "Primer", "ref": "M-075", "unit": "litre", "quantity": 0.9, "rate": null, "amount": null },
        { "no": "1.01", "description": "Emulsion Paint", "ref": "M-043", "unit": "litre", "quantity": 1.5, "rate": null, "amount": null },
        { "no": "1.02", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 0.1, "rate": null, "amount": null },
        { "no": "1.03", "description": "6\" Brush", "ref": "M-021", "unit": "No", "quantity": 0.1, "rate": null, "amount": null },
        { "no": "1.04", "description": "Painter", "ref": "L-001", "unit": "Day", "quantity": 1.75, "rate": 800.00, "amount": 1400.00 },
        { "no": "1.05", "description": "Allow 3% of Items (1.05) for Scaffolding", "ref": "-", "unit": "-", "quantity": null, "rate": null, "amount": 42.00 }
      ],
      totalAmount: 1442.00,
      rates: [
        { type: "1 Sq", amount: 1442.00 },
        { type: "1 ft²", amount: 14.42 },
        { type: "1 m²", amount: 155.16 }
      ],
      floors: [
        {flo:"Ground Floor",rate: "1 m²",amount: 155.16},
        {flo:"First Floor",rate: "1 m²",amount: 170.68},
        {flo:"Second Floor",rate: "1 m²",amount: 187.74},
        {flo:"Third Floor",rate: "1 m²",amount: 206.52},
      ]
    }
  ];

  return (
    <div className="p-6 bg-gray-200 min-h-screen flex flex-col items-center">
      {tableData.map((table, index) => (
        <TableComponent key={index} {...table} />
      ))}
    </div>
  );
}
