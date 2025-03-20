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
      title: 'Cement Concrete 1:2:4(3/4") in 6" X 6" Beams Upto 1st floor level',
      data: [
        {
          no: '1.01',
          description: 'Mixing Concrete 1:2:4(3/4")',
          ref: '05.A.04',
          unit: 'Cu',
          quantity: 0.45,
          rate: 45_590.00,
          amount: 20_515.50
        },
        {
          no: '1.02',
          description: 'Hire of Vibrator',
          ref: 'P-002',
          unit: 'Day',
          quantity: 1,
          rate: 3_500.00,
          amount: 3_500.00
        },
        {
          no: '1.03',
          description: 'Mason',
          ref: 'L-009',
          unit: 'Day',
          quantity: 1,
          rate: 2_500.00,
          amount: 2_500.00
        },
        {
          no: '1.04',
          description: 'U / SK Labourer',
          ref: 'L-007',
          unit: 'Day',
          quantity: 4,
          rate: 1_800.00,
          amount: 7_200.00
        },
        {
          no: '1.05',
          description: 'SK Labourer (Vibrator)',
          ref: 'L-004',
          unit: 'Day',
          quantity: 1,
          rate: 2_000.00,
          amount: 2_000.00
        },
        {
          no: '1.06',
          description: 'Jute Hessian',
          ref: 'M-063',
          unit: 'Sq.ft',
          quantity: 90,
          rate: 3.50,
          amount: 315.00
        },
        {
          no: '1.07',
          description: 'Water',
          ref: 'M-157',
          unit: 'Gal',
          quantity: 180,
          rate: 0.30,
          amount: 54.00
        },
        {
          no: '1.08',
          description: 'U / SK Labourer (curing)',
          ref: 'L-007',
          unit: 'Day',
          quantity: 0.5,
          rate: 1_800.00,
          amount: 900.00
        }
      ],
      totalAmount: 38_010.28,
      rates: [
        { type: '1 ft', amount: 211.17 },
        { type: '1 Cube', amount: 84_467.28 },
        { type: '1 m', amount: 688.80 },
        { type: 'Ground floor', amount: 29_848.06 },
        { type: 'First Floor', amount: 32_832.86 },
        { type: 'Second Floor', amount: 36_116.15 },
        { type: 'Third Floor', amount: 39_727.76 }
      ],
      floors: [
        { flo: 'Ground floor', rate: 688.80, amount: 29_848.06 },
        { flo: 'First Floor', rate: 757.68, amount: 32_832.86 },
        { flo: 'Second Floor', rate: 833.45, amount: 36_116.15 },
        { flo: 'Third Floor', rate: 916.79, amount: 39_727.76 }
      ]
    },

    {
        "title": "Cement Concrete 1:2:4 (3/4\") in 9\" X 6\" Beams Upto 1st Floor Level",
        "data": [
          {
            "no": "1.01",
            "description": "Mixing Concrete 1:2:4 (3/4\")",
            "ref": "05.A.04",
            "unit": "Cu",
            "quantity": 0.45,
            "rate": 45590.00,
            "amount": 20515.50
          },
          {
            "no": "1.02",
            "description": "Hire of Vibrator",
            "ref": "P-002",
            "unit": "Day",
            "quantity": 1,
            "rate": 3500.00,
            "amount": 3500.00
          },
          {
            "no": "1.03",
            "description": "Mason",
            "ref": "L-009",
            "unit": "Day",
            "quantity": 1,
            "rate": 2500.00,
            "amount": 2500.00
          },
          {
            "no": "1.04",
            "description": "U / SK Labourer",
            "ref": "L-007",
            "unit": "Day",
            "quantity": 4,
            "rate": 1800.00,
            "amount": 7200.00
          },
          {
            "no": "1.05",
            "description": "SK Labourer (Vibrator)",
            "ref": "L-004",
            "unit": "Day",
            "quantity": 1,
            "rate": 2000.00,
            "amount": 2000.00
          },
          {
            "no": "1.06",
            "description": "Jute Hessian",
            "ref": "M-063",
            "unit": "Sq.ft",
            "quantity": 75,
            "rate": 3.50,
            "amount": 262.50
          },
          {
            "no": "1.07",
            "description": "Water",
            "ref": "M-157",
            "unit": "Gal",
            "quantity": 150,
            "rate": 0.30,
            "amount": 45.00
          },
          {
            "no": "1.08",
            "description": "U / SK Labourer (curing)",
            "ref": "L-007",
            "unit": "Day",
            "quantity": 0.5,
            "rate": 1800.00,
            "amount": 900.00
          }
        ],
        "totalAmount": 37948.78,
        "rates": [
          { "type": "1 ft", "amount": 316.24 },
          { "type": "1 Cube", "amount": 84330.61 },
          { "type": "1 m", "amount": 1049.60 },
          { "type": "Ground floor", "amount": 29798.59 },
          { "type": "First Floor", "amount": 32778.45 },
          { "type": "Second Floor", "amount": 36056.29 },
          { "type": "Third Floor", "amount": 39661.92 }
        ],
        "floors": [
          { "flo": "Ground floor", "rate": 1049.60, "amount": 29798.59 },
          { "flo": "First Floor", "rate": 1154.56, "amount": 32778.45 },
          { "flo": "Second Floor", "rate": 1270.02, "amount": 36056.29 },
          { "flo": "Third Floor", "rate": 1397.02, "amount": 39661.92 }
        ]
      },
      {
        "title": "Cement Concrete 1:2:4 (3/4\") in 9\" X 9\" Beams Upto 1st Floor Level",
        "data": [
          {
            "no": "1.01",
            "description": "Mixing Concrete 1:2:4 (3/4\")",
            "ref": "05.A.04",
            "unit": "Cu",
            "quantity": 0.45,
            "rate": 45590.00,
            "amount": 20515.50
          },
          {
            "no": "1.02",
            "description": "Hire of Vibrator",
            "ref": "P-002",
            "unit": "Day",
            "quantity": 1,
            "rate": 3500.00,
            "amount": 3500.00
          },
          {
            "no": "1.03",
            "description": "Mason",
            "ref": "L-009",
            "unit": "Day",
            "quantity": 1,
            "rate": 2500.00,
            "amount": 2500.00
          },
          {
            "no": "1.04",
            "description": "U / SK Labourer",
            "ref": "L-007",
            "unit": "Day",
            "quantity": 4,
            "rate": 1800.00,
            "amount": 7200.00
          },
          {
            "no": "1.05",
            "description": "SK Labourer (Vibrator)",
            "ref": "L-004",
            "unit": "Day",
            "quantity": 1,
            "rate": 2000.00,
            "amount": 2000.00
          },
          {
            "no": "1.06",
            "description": "Jute Hessian",
            "ref": "M-063",
            "unit": "Sq.ft",
            "quantity": 60,
            "rate": 3.50,
            "amount": 210.00
          },
          {
            "no": "1.07",
            "description": "Water",
            "ref": "M-157",
            "unit": "Gal",
            "quantity": 120,
            "rate": 0.30,
            "amount": 36.00
          },
          {
            "no": "1.08",
            "description": "U / SK Labourer (curing)",
            "ref": "L-007",
            "unit": "Day",
            "quantity": 0.5,
            "rate": 1800.00,
            "amount": 900.00
          }
        ],
        "totalAmount": 37887.28,
        "rates": [
          { "type": "1 ft", "amount": 473.59 },
          { "type": "1 Cube", "amount": 84193.94 },
          { "type": "1 m", "amount": 1541.60 },
          { "type": "Ground floor", "amount": 29749.12 },
          { "type": "First Floor", "amount": 32724.03 },
          { "type": "Second Floor", "amount": 35996.43 },
          { "type": "Third Floor", "amount": 39596.07 }
        ],
        "floors": [
          { "flo": "Ground floor", "rate": 1541.60, "amount": 29749.12 },
          { "flo": "First Floor", "rate": 1695.76, "amount": 32724.03 },
          { "flo": "Second Floor", "rate": 1865.34, "amount": 35996.43 },
          { "flo": "Third Floor", "rate": 2051.87, "amount": 39596.07 }
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
