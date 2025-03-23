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
            {data && data.map((row, index) => (
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
              {rates && rates.map((rate, index) => (
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
                {floors && floors.map((floor, index) => (
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
      "title": "3/4\" thick rendering in cement and sand 1:3 finished smooth",
      "data": [
        {
          "no": 1,
          "description": "Cement",
          "ref": "M-026",
          "unit": "Bag",
          "quantity": 1.75,
          "rate": 980.00,
          "amount": 1715.00
        },
        {
          "no": 2,
          "description": "Sand",
          "ref": "M-113",
          "unit": "Cu",
          "quantity": 0.08,
          "rate": 20000.00,
          "amount": 1600.00
        },
        {
          "no": 3,
          "description": "Water",
          "ref": "M-157",
          "unit": "Gal",
          "quantity": 10,
          "rate": 0.30,
          "amount": 3.00
        },
        {
          "no": 4,
          "description": "Mason",
          "ref": "L-009",
          "unit": "Day",
          "quantity": 1.25,
          "rate": 2500.00,
          "amount": 3125.00
        },
        {
          "no": 5,
          "description": "U / SK Labourer",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 2,
          "rate": 1800.00,
          "amount": 3600.00
        },
        {
          "no": 6,
          "description": "U / SK Labourer - curing",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 0.25,
          "rate": 1800.00,
          "amount": 450.00
        }
      ],
      "totalAmount": 10493.00,
      "rates": [
        {
          "type": "1 Sq",
          "amount": 10493.00
        },
        {
          "type": "1 ft²",
          "amount": 104.93
        },
        {
          "type": "1 m²",
          "amount": 1129.05
        }
      ],
      "floors": [
        {
          "flo": "Ground floor",
          "rate": "1 m²",
          "amount": 1129.05
        },
        {
          "flo": "First Floor",
          "rate": "1 m²",
          "amount": 1241.95
        },
        {
          "flo": "Second Floor",
          "rate": "1 m²",
          "amount": 1366.15
        },
        {
          "flo": "Third Floor",
          "rate": "1 m²",
          "amount": 1502.76
        }
      ]
    },
    {
      "title": "1/2\" thick rendering in cement and sand 1:3 finished smooth",
      "data": [
        {
          "no": 1,
          "description": "Cement",
          "ref": "M-026",
          "unit": "Bag",
          "quantity": 1.07,
          "rate": 980.00,
          "amount": 1048.60
        },
        {
          "no": 2,
          "description": "Sand",
          "ref": "M-113",
          "unit": "Cu",
          "quantity": 0.05,
          "rate": 20000.00,
          "amount": 1000.00
        },
        {
          "no": 3,
          "description": "Water",
          "ref": "M-157",
          "unit": "Gal",
          "quantity": 10,
          "rate": 0.30,
          "amount": 3.00
        },
        {
          "no": 4,
          "description": "Mason",
          "ref": "L-009",
          "unit": "Day",
          "quantity": 1,
          "rate": 2500.00,
          "amount": 2500.00
        },
        {
          "no": 5,
          "description": "U / SK Labourer",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 1.5,
          "rate": 1800.00,
          "amount": 2700.00
        }
      ],
      "totalAmount": 7251.60,
      "rates": [
        {
          "type": "1 Sq",
          "amount": 7252.00
        },
        {
          "type": "1 ft²",
          "amount": 72.52
        },
        {
          "type": "1 m²",
          "amount": 780.32
        }
      ],
      "floors": []
    },
    {
      "title": "1/2\" thick rendering in cement and sand 1:2 in floors, finished smooth",
      "data": [
        {
          "no": 1,
          "description": "Cement",
          "ref": "M-026",
          "unit": "Bag",
          "quantity": 1.5,
          "rate": 980.00,
          "amount": 1470.00
        },
        {
          "no": 2,
          "description": "Sand",
          "ref": "M-113",
          "unit": "Cu",
          "quantity": 0.05,
          "rate": 20000.00,
          "amount": 1000.00
        },
        {
          "no": 3,
          "description": "Water",
          "ref": "M-157",
          "unit": "Gal",
          "quantity": 10,
          "rate": 0.30,
          "amount": 3.00
        },
        {
          "no": 4,
          "description": "Mason",
          "ref": "L-009",
          "unit": "Day",
          "quantity": 1,
          "rate": 2500.00,
          "amount": 2500.00
        },
        {
          "no": 5,
          "description": "U / SK Labourer",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 1.5,
          "rate": 1800.00,
          "amount": 2700.00
        },
        {
          "no": 6,
          "description": "U / SK Labourer - curing",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 0.25,
          "rate": 1800.00,
          "amount": 450.00
        }
      ],
      "totalAmount": 8123.00,
      "rates": [
        {
          "type": "1 Sq",
          "amount": 8123.00
        },
        {
          "type": "1 ft²",
          "amount": 81.23
        },
        {
          "type": "1 m²",
          "amount": 874.03
        }
      ],
      "floors": []
    },
    {
      "title": "3/4\" thick rendering in cement and sand 1:2 in floors finished smooth",
      "data": [
        {
          "no": 1,
          "description": "Cement",
          "ref": "M-026",
          "unit": "Bag",
          "quantity": 2.25,
          "rate": 980.00,
          "amount": 2205.00
        },
        {
          "no": 2,
          "description": "Sand",
          "ref": "M-113",
          "unit": "Cu",
          "quantity": 0.08,
          "rate": 20000.00,
          "amount": 1600.00
        },
        {
          "no": 3,
          "description": "Water",
          "ref": "M-157",
          "unit": "Gal",
          "quantity": 10,
          "rate": 0.30,
          "amount": 3.00
        },
        {
          "no": 4,
          "description": "Mason",
          "ref": "L-009",
          "unit": "Day",
          "quantity": 1.25,
          "rate": 2500.00,
          "amount": 3125.00
        },
        {
          "no": 5,
          "description": "U / SK Labourer",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 2,
          "rate": 1800.00,
          "amount": 3600.00
        },
        {
          "no": 6,
          "description": "U / SK Labourer - curing",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 0.25,
          "rate": 1800.00,
          "amount": 450.00
        }
      ],
      "totalAmount": 10983.00,
      "rates": [
        {
          "type": "1 Sq",
          "amount": 10983.00
        },
        {
          "type": "1 ft²",
          "amount": 109.83
        },
        {
          "type": "1 m²",
          "amount": 1181.77
        }
      ],
      "floors": []
    },
    {
      "title": "3/4\" thick rendering in cement and sand 1:2 in colored cement floors finished smooth",
      "data": [
        {
          "no": 1,
          "description": "Cement",
          "ref": "M-026",
          "unit": "Bag",
          "quantity": 2.25,
          "rate": 980.00,
          "amount": 2205.00
        },
        {
          "no": 2,
          "description": "Sand",
          "ref": "M-113",
          "unit": "Cu",
          "quantity": 0.08,
          "rate": 20000.00,
          "amount": 1600.00
        },
        {
          "no": 3,
          "description": "Coloured Pigment",
          "ref": "M-035",
          "unit": "Lbs",
          "quantity": 5,
          "rate": 175.00,
          "amount": 875.00
        },
        {
          "no": 4,
          "description": "Water",
          "ref": "M-157",
          "unit": "Gal",
          "quantity": 10,
          "rate": 0.30,
          "amount": 3.00
        },
        {
          "no": 5,
          "description": "Mason",
          "ref": "L-009",
          "unit": "Day",
          "quantity": 1.25,
          "rate": 2500.00,
          "amount": 3125.00
        },
        {
          "no": 6,
          "description": "U / SK Labourer",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 2,
          "rate": 1800.00,
          "amount": 3600.00
        },
        {
          "no": 7,
          "description": "U / SK Labourer - curing",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 0.25,
          "rate": 1800.00,
          "amount": 450.00
        }
      ],
      "totalAmount": 11858.00,
      "rates": [
        {
          "type": "1 Sq",
          "amount": 11858.00
        },
        {
          "type": "1 ft²",
          "amount": 118.58
        },
        {
          "type": "1 m²",
          "amount": 1275.92
        }
      ],
      "floors": []
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
