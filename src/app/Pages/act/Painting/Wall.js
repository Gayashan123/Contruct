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
      title: "Preparing and apply one coat of Alkali resistant primer and two coats of emulsion paint to walls.",
      data: [
        { no: '1.0', description: 'Primer', ref: 'M-075', unit: 'litre', quantity: 0.9, rate: 329, amount: 296.10 },
        { no: '1.01', description: 'Emulsion Paint', ref: 'M-043', unit: 'litre', quantity: 1.4, rate: 647, amount: 905.80 },
        { no: '1.02', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 0.1, rate:1.00, amount: 0.10 },
        { no: '1.03', description: '6" Brush', ref: 'M-021', unit: 'No', quantity: 0.1, rate: 720, amount: 72.00 },
        { no: '1.04', description: 'Sand Papers', ref: 'M-114', unit: 'Sheet', quantity: 2, rate: 20.00, amount: 40.00 },
        { no: '1.05', description: 'Painter', ref: 'L-001', unit: 'Day', quantity: 1.25, rate: 800.00, amount: 1000.00 },
        { no: '1.06', description: 'Allow 3% Items (1.06) for Scaffolding', ref: '-', unit: '-', quantity: "-", rate: "-", amount: 30.00 },
      ],
      totalAmount: 2344.00,
      rates: [
        { type: '1 Sq', amount: 2344.00 },
        { type: '1 ft', amount: 23.44 },
        { type: '1 m', amount: 252.21 },
      ],
    },
    {
      title: "Painting walls with emulsion paint (2 Coats)",
      data: [
        { no: '1.0', description: 'Emulsion Paint - first coat', ref: 'M-043', unit: 'litre', quantity: 0.757, rate: 280.00, amount: 211.96 },
        { no: '1.01', description: 'Emulsion Paint - Second coat', ref: 'M-043', unit: "litre", quantity: 0.649, rate: 280.00, amount: 181.72 },
        { no: '1.02', description: '6" Brush', ref: 'M-021', unit: 'No', quantity: 0.1, rate: 495, amount: 49.50 },
        { no: '1.03', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 0.1, rate:0.30, amount: 0.03 },
        { no: '1.04', description: 'Painter', ref: 'L-001', unit: 'Day', quantity: 0.75, rate:2500.00, amount: 1875.00 },
      ],
      totalAmount: 2374.00,
      rates: [
        { type: '1 Cube', amount: 2374.00 },
        { type: '1 ft³', amount: 23.74 },
        { type: '1 m³', amount: 255.44 },
      ],
      floors: [ // Added floors only for this table
        { flo: 'Ground floor', rate:"1m²", amount: 255.44 },
        { flo: 'First floor', rate:"1m²", amount: 280.99 },
        { flo: 'Second floor', rate:"1m²", amount: 309.09 },
        { flo: 'Third Floor', rate:"1m²", amount: 339.99 },
      ],
    },
  {
    title: "White or colourwashing two coats in single storey",
    data: [
      { "no": "1.0", "description": "Boild Lime", "ref": "M-009", "unit": "Cwt", "quantity": 0.5, "rate": 300.00, "amount": 150.00 },
      { "no": "1.01", "description": "Salt", "ref": "M-112", "unit": "Lbs", "quantity": 2, "rate": 10.00, "amount": 20.00 },
      { "no": "1.02", "description": "Yellow Ochre", "ref": "M-166", "unit": "Lbs", "quantity": 0.5, "rate": 15.00, "amount": 7.50 },
      { "no": "1.03", "description": "Blue", "ref": "M-008", "unit": "Ozs", "quantity": 2, "rate": 10.00, "amount": 20.00 },
      { "no": "1.04", "description": "6\" Brush", "ref": "M-021", "unit": "No", "quantity": 0.333, "rate": 495.00, "amount": 165.83 },
      { "no": "1.05", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 10, "rate": 0.30, "amount": 3.00 },
      { "no": "1.07", "description": "Painter", "ref": "L-001", "unit": "Day", "quantity": 2.5, "rate": 2500.00, "amount": 687.50 },
      { "no": "1.08", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 2.5, "rate": 1800.00, "amount": 500.00 },
      { "no": "1.09", "description": "Allow 3% of Items (1.07, 1.08 ) for Scaffolding", "ref": "-", "unit": "-", "quantity": "-", "rate": "-", "amount": 35.63 }
    ],
    totalAmount: 1589.46,
    rates: [
      { "type": "1 Sqr", "amount": 159.00 },
      { "type": "1 ft²", "amount": 1.59 },
      { "type": "1 m²", "amount": 17.11 }
    ]
  },

  {
    title: "White or colourwashing two coats in two storeyed building",
    
    data: [
      { "no": "1.00999999", "description": "Boild Lime", "ref": "M-009", "unit": "Cwt", "quantity": 0.5, "rate": 300.00, "amount": 150.00 },
      { "no": "1.019999981", "description": "Salt", "ref": "M-112", "unit": "Lbs", "quantity": 2, "rate": 10.00, "amount": 20.00 },
      { "no": "1.029999971", "description": "Yellow Ochre", "ref": "M-166", "unit": "Lbs", "quantity": 0.5, "rate": 15.00, "amount": 7.50 },
      { "no": "1.039999962", "description": "Blue", "ref": "M-008", "unit": "Ozs", "quantity": 2, "rate": 10.00, "amount": 20.00 },
      { "no": "1.049999952", "description": "6\" Brush", "ref": "M-021", "unit": "No", "quantity": 0.333, "rate": 495.00, "amount": 164.84 },
      { "no": "1.059999943", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 10, "rate": 0.30, "amount": 3.00 },
      { "no": "1.070000052", "description": "Painter", "ref": "L-001", "unit": "Day", "quantity": 3, "rate": 2500.00, "amount": 7500.00 },
      { "no": "1.080000043", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 3, "rate": 1800.00, "amount": 5400.00 },
      { "no": "1.090000033", "description": "Allow 3% of Items (1.07, 1.08 ) for Scaffolding", "ref": "-", "unit": "-", "quantity": "-", "rate": "-", "amount": 387.00 }
    ],
    totalAmount: 13652.34,
    rates: [
      { "type": "1 Sqr", "amount": 1365.00 },
      { "type": "1 ft²", "amount": 13.65 },
      { "type": "1 m²", "amount": 146.87 }
    ]
  },
{

  title: "Cement washing to walls of single storeyed building 2 coats",
  
  data: [
    { "no": "1.00999999", "description": "Cement", "ref": "M-026", "unit": "Bag", "quantity": 0.625, "rate": 980.00, "amount": 612.50 },
    { "no": "1.019999981", "description": "6\" Coir Brush", "ref": "M-034", "unit": "No", "quantity": 1, "rate": 45.00, "amount": 45.00 },
    { "no": "1.029999971", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 5, "rate": 0.30, "amount": 1.50 },
    { "no": "1.039999962", "description": "Painter", "ref": "L-001", "unit": "Day", "quantity": 2, "rate": 2500.00, "amount": 5000.00 },
    { "no": "1.049999952", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 2, "rate": 1800.00, "amount": 3600.00 },
    { "no": "1.059999943", "description": "Allow 3% of Items (1.04, 1.05 ) for Scaffolding", "ref": "-", "unit": "-", "quantity": "-", "rate": "-", "amount": 258.00 }
  ],
  totalAmount: 9517.00,
  rates: [
    { "type": "1 Sqr", "amount": 952.00 },
    { "type": "1 ft²", "amount": 9.52 },
    { "type": "1 m²", "amount": 102.44 }
  ],
  floors: [
    { "floor": "Ground floor", "rate": "1m²", "amount": 102.44 },
    { "floor": "First Floor", "rate": "1m²", "amount": 112.68 },
    { "floor": "Second Floor", "rate": "1m²", "amount": 123.95 },
    { "floor": "Third Floor", "rate": "1m²", "amount": 136.34 }
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
