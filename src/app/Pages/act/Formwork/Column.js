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
      title: "Sawn timber formwork for concrete beams in ground floor",
      data: [
        { no: 1, description: "Sawn timber formwork for 9\" x 12\" concrete beams in ground floor - Making the mould", ref: "06.B.02", unit: "1 Use", quantity: 1, rate: 3645.00, amount: 3645.00 },
        { no: 2, description: "Sawn timber formwork for concrete beams in ground floor-Assembling", ref: "06.B.03", unit: "1 Use", quantity: 1, rate: 1568.00, amount: 1568.00 },
        { no: 3, description: "Allow 10% of Items (1.02) for Repairs", ref: "-", unit: "-", quantity: "-", rate: "-", amount: 156.80 },
        { no: 4, description: "Carpenter - Assembling", ref: "L-008", unit: "Day", quantity: 1, rate: 2500.00, amount: 2500.00 },
        { no: 5, description: "U / SK Labourer - Assembling", ref: "L-007", unit: "Day", quantity: 2, rate: 1800.00, amount: 3600.00 },
        { no: 6, description: "Mould Oil", ref: "M-071", unit: "litre", quantity: 0.5, rate: 35.00, amount: 17.50 },
        { no: 7, description: "Wire Nails", ref: "M-161", unit: "Lbs", quantity: 0.5, rate: 65.00, amount: 32.50 },
        { no: 8, description: "Carpenter - dismantling, cleaning & repairing", ref: "L-008", unit: "Day", quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { no: 9, description: "U / SK Labourer - dismantling, cleaning & repairing", ref: "L-007", unit: "Day", quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 16369.80,
      rates: [
        { type: "1 Sq", amount: 29763.00 },
        { type: "1 ft2", amount: 297.63 },
        { type: "1 m2", amount: 3202.50 }
      ],
      floors: [
        { flo: "Ground floor", rate: "1m2", amount: 3202.50 },
        { flo: "First Floor", rate: "1m2", amount: 3522.75 },
        { flo: "Second Floor", rate: "1m2", amount: 3875.02 },
        { flo: "Third Floor", rate: "1m2", amount: 4262.53 }
      ]
    },
    {
      title: "Sawn timber formwork for 9\" x 12\" concrete beams in ground floor - Making the mould",
      data: [
        { no: 1, description: "1\" Thick Class II Timber", ref: "M-141", unit: "Sq.ft", quantity: 60, rate: 65.00, amount: 3900.00 },
        { no: 2, description: "2\" x 1\" Class II Timber Battens", ref: "M-142", unit: "L.ft", quantity: 24, rate: 12.00, amount: 288.00 },
        { no: 3, description: "2\" x 2\" Class II Timber In Yokes", ref: "M-143", unit: "L.ft", quantity: 45, rate: 22.00, amount: 990.00 },
        { no: 4, description: "4\"X2\" Timber bearers", ref: "M-144", unit: "L.ft", quantity: 30, rate: 65.00, amount: 1950.00 },
        { no: 5, description: "Wire Nails", ref: "M-161", unit: "Lbs", quantity: 2, rate: 50.00, amount: 100.00 },
        { no: 6, description: "Carpenter", ref: "L-008", unit: "Day", quantity: 1.5, rate: 2500.00, amount: 3750.00 },
        { no: 7, description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 14578.00,
      rates: [
        { type: "1 Use", amount: 3645.00 }
      ]
    },
    {
      title: "Sawn timber formwork for concrete beams in ground floor-Assembling - Materials",
      data: [
        { no: 1, description: "Timber props 4\" x 2\"", ref: "M-144", unit: "L.ft", quantity: 110, rate: 65.00, amount: 7150.00 },
        { no: 2, description: "2\" x 2\" Class II Timber for bracings", ref: "M-143", unit: "L.ft", quantity: 80, rate: 22.00, amount: 1760.00 },
        { no: 3, description: "1\" Thick Class II Timber base plate", ref: "M-141", unit: "Sq.ft", quantity: 6, rate: 65.00, amount: 390.00 },
        { no: 4, description: "Timber Wedges", ref: "M-151", unit: "No", quantity: 22, rate: 5.00, amount: 110.00 }
      ],
      totalAmount: 9410.00,
      rates: [
        { type: "1 Use", amount: 1568.00 }
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