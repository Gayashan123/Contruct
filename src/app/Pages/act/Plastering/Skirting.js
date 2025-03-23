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

        {/* Floors Section */}
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
        "title": "1/2\" x 6\" Skirting in cement and sand 1:3 projected or flush to walls finished with floating including forming groove",
        "data": [
          {
            "no": 1,
            "description": "Cement",
            "ref": "M-026",
            "unit": "Bag",
            "quantity": 0.1,
            "rate": 980.00,
            "amount": 98.00
          },
          {
            "no": 2,
            "description": "Sand",
            "ref": "M-113",
            "unit": "Cu",
            "quantity": 0.003,
            "rate": 20000.00,
            "amount": 60.00
          },
          {
            "no": 3,
            "description": "Coloured Pigment",
            "ref": "M-035",
            "unit": "Lbs",
            "quantity": 0.25,
            "rate": 175.00,
            "amount": 43.75
          },
          {
            "no": 4,
            "description": "Mason",
            "ref": "L-009",
            "unit": "Day",
            "quantity": 0.375,
            "rate": 2500.00,
            "amount": 937.50
          },
          {
            "no": 5,
            "description": "U / SK Labourer",
            "ref": "L-007",
            "unit": "Day",
            "quantity": 0.312,
            "rate": 1800.00,
            "amount": 561.60
          }
        ],
        "totalAmount": 1700.85,
        "rates": [
          {
            "type": "1ft",
            "amount": 170.00
          },
          {
            "type": "1m",
            "amount": 557.60
          }
        ],
        "floors": [
          {
            "flo": "Ground floor",
            "rate": "1m",
            "amount": 557.60
          },
          {
            "flo": "First Floor",
            "rate": "1m",
            "amount": 613.36
          },
          {
            "flo": "Second Floor",
            "rate": "1m",
            "amount": 674.70
          },
          {
            "flo": "3rd floor",
            "rate": "1m",
            "amount": 742.17
          }
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
