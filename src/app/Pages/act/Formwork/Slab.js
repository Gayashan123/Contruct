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
              <th class="p-2 border">Unit</th>
              <th class="p-2 border">Quantity</th>
              <th class="p-2 border">Rate (Rs.)</th>
              <th class="p-2 border">Amount (Rs.)</th>
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
      title: "Sawn timber formwork for underside of first floor slab",
      data: [
        { no: "1.01", item_description: "Sawn timber formwork for 20\" x 10\" concrete slab in ground floor - Making  panels", item_ref: "06.C.02", unit: "1 Use", quantity: 1, rate: 8816.00, amount: 8816.00 },
        { no: "1.02", item_description: "Allow 20% of Items ( 1.01 ) for Repairs", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 1763.20 },
        { no: "1.03", item_description: "Sawn timber formwork for underside of first floor slab - assembling", item_ref: "06.C.03", unit: "Sq", quantity: 1, rate: 8176.00, amount: 8176.00 },
        { no: "1.04", item_description: "Allow 20% of Items ( 1.03 ) for Wastage", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 1635.20 },
        { no: "1.039999962", item_description: "Carpenter - Assembling", item_ref: "L-008", unit: "Day", quantity: 1, rate: 2500.00, amount: 2500.00 },
        { no: "1.049999952", item_description: "U / SK Labourer - Assembling", item_ref: "L-007", unit: "Day", quantity: 4, rate: 1800.00, amount: 7200.00 },
        { no: "1.059999943", item_description: "Mould Oil", item_ref: "M-071", unit: "litre", quantity: 4.54, rate: 35.00, amount: 158.90 },
        { no: "1.070000052", item_description: "Wire Nails", item_ref: "M-161", unit: "Lbs", quantity: 2, rate: 50.00, amount: 100.00 },
        { no: "1.080000043", item_description: "Carpenter - dismantling, cleaning & repairing", item_ref: "L-008", unit: "Day", quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { no: "1.090000033", item_description: "U / SK Labourer - dismantling, cleaning & repairing", item_ref: "L-007", unit: "Day", quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 35199.30,
      rates: [
        { type: "Rate for 1 Sq", amount: 17599.65 },
        { type: "Rate (Say) 1 Sq", amount: 17600.00 },
        { type: "Rate (Say) 1 ft2", amount: 176.00 },
        { type: "Rate (Say) 1 m2", amount: 1893.76 },
        { type: "Ground floor 1 m2", amount: 1893.76 },
        { type: "First Floor 1 m2", amount: 2083.14 },
        { type: "Second Floor 1 m2", amount: 2291.45 },
        { type: "Third Floor 1 m2", amount: 2520.59 }
      ],
      floors: []
    },
    {
      title: "Sawn timber formwork for 20\" x 10\" concrete slab in ground floor - Making panels",
      data: [
        { no: "1.00999999", item_description: "1\" Thick Class II Timber", item_ref: "M-141", unit: "Sq.ft", quantity: 220, rate: 65.00, amount: 14300.00 },
        { no: "1.019999981", item_description: "Timber props 4\" x 2\"", item_ref: "M-144", unit: "L.ft", quantity: 121, rate: 65.00, amount: 7865.00 },
        { no: "1.029999971", item_description: "Wire Nails", item_ref: "M-161", unit: "Lbs", quantity: 4, rate: 50.00, amount: 200.00 },
        { no: "1.039999962", item_description: "Carpenter", item_ref: "L-008", unit: "Day", quantity: 3, rate: 2500.00, amount: 7500.00 },
        { no: "1.049999952", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 3, rate: 1800.00, amount: 5400.00 }
      ],
      totalAmount: 35265.00,
      rates: [
        { type: "Rate for 1 Use", amount: 8816.25 },
        { type: "Rate (Say) 1 Use", amount: 8816.00 }
      ],
      floors: []
    },
    {
      title: "Sawn timber formwork for underside of first floor slab - Assembling",
      data: [
        { no: "1.01", item_description: "Timber props 4\" x 2\"", item_ref: "M-144", unit: "L.ft", quantity: 690, rate: 65.00, amount: 44850.00 },
        { no: "1.02", item_description: "2\" x 2\" Class II Timber In Yokes", item_ref: "M-143", unit: "L.ft", quantity: 66, rate: 22.00, amount: 1452.00 },
        { no: "1.03", item_description: "Timber Wedges", item_ref: "M-151", unit: "No", quantity: 122, rate: 5.00, amount: 610.00 },
        { no: "1.04", item_description: "1\" Thick Class II Timber", item_ref: "M-141", unit: "Sq.ft", quantity: 33, rate: 65.00, amount: 2145.00 }
      ],
      totalAmount: 49057.00,
      rates: [
        { type: "Rate for 1 Use", amount: 8176.17 },
        { type: "Rate (Say) 1 Use", amount: 8176.00 }
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