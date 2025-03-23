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
      "title": "5/8\" thick plastering to wall in Cement and sand 1:3 including Cement floating",
      "data": [
        {
          "no": 1,
          "description": "Cement",
          "ref": "M-026",
          "unit": "Bag",
          "quantity": 1.4,
          "rate": 980.00,
          "amount": 1372.00
        },
        {
          "no": 2,
          "description": "Sand",
          "ref": "M-113",
          "unit": "Cu",
          "quantity": 0.06,
          "rate": 20000.00,
          "amount": 1200.00
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
          "description": "Scaffolding",
          "ref": "",
          "unit": "",
          "quantity": "",
          "rate": "",
          "amount": 156.00
        }
      ],
      "totalAmount": 7931.00,
      "rates": [
        {
          "type": "1 Sq",
          "amount": 7931.00
        },
        {
          "type": "1 ft²",
          "amount": 79.31
        },
        {
          "type": "1 m²",
          "amount": 853.38
        }
      ],
      "floors": []
    },
    {
      "title": "5/8\" thick to wall in cement and sand 1:5 finished semi-rough with wooden float.",
      "data": [
        {
          "no": 1,
          "description": "Cement",
          "ref": "M-026",
          "unit": "Bag",
          "quantity": 0.8,
          "rate": 980.00,
          "amount": 784.00
        },
        {
          "no": 2,
          "description": "Sand",
          "ref": "M-113",
          "unit": "Cu",
          "quantity": 0.07,
          "rate": 20000.00,
          "amount": 1400.00
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
          "quantity": 1.25,
          "rate": 1800.00,
          "amount": 2250.00
        }
      ],
      "totalAmount": 6937.00,
      "rates": [
        {
          "type": "1 Sq",
          "amount": 6937.00
        },
        {
          "type": "1 ft²",
          "amount": 69.37
        },
        {
          "type": "1 m²",
          "amount": 746.42
        }
      ],
      "floors": [
        {
          "flo": "Ground floor - First Floor",
          "rate": "1 m²",
          "amount": 746.42
        },
        {
          "flo": "First Floor - Second Floor",
          "rate": "1 m²",
          "amount": 821.06
        },
        {
          "flo": "Second Floor - Third Floor",
          "rate": "1 m²",
          "amount": 903.17
        },
        {
          "flo": "Third Floor - Fourth Floor",
          "rate": "1 m²",
          "amount": 993.49
        }
      ]
    },
    {
      "title": "5/8\" thick to wall in lime cement and sand 1:1:5 finished semi-rough with wooden float.",
      "data": [
        {
          "no": 1,
          "description": "Cement",
          "ref": "M-026",
          "unit": "Bag",
          "quantity": 0.8,
          "rate": 980.00,
          "amount": 784.00
        },
        {
          "no": 2,
          "description": "Slaked Lime",
          "ref": "M-115",
          "unit": "Lbs",
          "quantity": 44,
          "rate": 275.00,
          "amount": 12100.00
        },
        {
          "no": 3,
          "description": "Sand",
          "ref": "M-113",
          "unit": "Cu",
          "quantity": 0.07,
          "rate": 20000.00,
          "amount": 1400.00
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
          "quantity": 1,
          "rate": 2500.00,
          "amount": 2500.00
        },
        {
          "no": 6,
          "description": "U / SK Labourer",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 1.25,
          "rate": 1800.00,
          "amount": 2250.00
        },
        {
          "no": 7,
          "description": "Scaffolding",
          "ref": "",
          "unit": "",
          "quantity": "",
          "rate": "",
          "amount": 142.50
        }
      ],
      "totalAmount": 19179.50,
      "rates": [
        {
          "type": "1 Sq",
          "amount": 19180.00
        },
        {
          "type": "1 ft²",
          "amount": 191.80
        },
        {
          "type": "1 m²",
          "amount": 2063.77
        }
      ],
      "floors": [
        {
          "flo": "Ground floor - First Floor",
          "rate": "1 m²",
          "amount": 2063.77
        },
        {
          "flo": "First Floor - Second Floor",
          "rate": "1 m²",
          "amount": 2270.14
        },
        {
          "flo": "Second Floor - Third Floor",
          "rate": "1 m²",
          "amount": 2497.16
        },
        {
          "flo": "Third Floor - Fourth Floor",
          "rate": "1 m²",
          "amount": 2746.88
        }
      ]
    },
    {
      "title": "5/8\" thick Plastering to wall in lime cement and sand 1:1:5 finished smooth with lime putty floating.",
      "data": [
        {
          "no": 1,
          "description": "Cement",
          "ref": "M-026",
          "unit": "Bag",
          "quantity": 0.8,
          "rate": 980.00,
          "amount": 784.00
        },
        {
          "no": 2,
          "description": "Slaked Lime",
          "ref": "M-115",
          "unit": "kg",
          "quantity": 30,
          "rate": 275.00,
          "amount": 8250.00
        },
        {
          "no": 3,
          "description": "Sand",
          "ref": "M-113",
          "unit": "Cu",
          "quantity": 0.07,
          "rate": 20000.00,
          "amount": 1400.00
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
          "quantity": 1.5,
          "rate": 2500.00,
          "amount": 3750.00
        },
        {
          "no": 6,
          "description": "U / SK Labourer",
          "ref": "L-007",
          "unit": "Day",
          "quantity": 1.5,
          "rate": 1800.00,
          "amount": 2700.00
        },
        {
          "no": 7,
          "description": "Scaffolding",
          "ref": "",
          "unit": "",
          "quantity": "",
          "rate": "",
          "amount": 193.50
        }
      ],
      "totalAmount": 17080.50,
      "rates": [
        {
          "type": "1 Sq",
          "amount": 17081.00
        },
        {
          "type": "1 ft²",
          "amount": 170.81
        },
        {
          "type": "1 m²",
          "amount": 1837.92
        }
      ],
      "floors": [
        {
          "flo": "Ground floor - First Floor",
          "rate": "1 m²",
          "amount": 1837.92
        },
        {
          "flo": "First Floor - Second Floor",
          "rate": "1 m²",
          "amount": 2021.71
        },
        {
          "flo": "Second Floor - Third Floor",
          "rate": "1 m²",
          "amount": 2223.88
        },
        {
          "flo": "Third Floor - Fourth Floor",
          "rate": "1 m²",
          "amount": 2446.27
        }
      ]
    },
    {
      "title": "5/8\" thick plastering to wall in lime and sand 2:5 including floating with lime putty.",
      "data": [
        {
          "no": 1,
          "description": "Slaked Lime",
          "ref": "M-115",
          "unit": "kg",
          "quantity": 65,
          "rate": 275.00,
          "amount": 17875.00
        },
        {
          "no": 2,
          "description": "Sand",
          "ref": "M-113",
          "unit": "Cu",
          "quantity": 0.07,
          "rate": 20000.00,
          "amount": 1400.00
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
          "quantity": 1.75,
          "rate": 1800.00,
          "amount": 3150.00
        },
        {
          "no": 6,
          "description": "Scaffolding",
          "ref": "",
          "unit": "",
          "quantity": "",
          "rate": "",
          "amount": 169.50
        }
      ],
      "totalAmount": 25097.50,
      "rates": [
        {
          "type": "1 Sq",
          "amount": 25098.00
        },
        {
          "type": "1 ft²",
          "amount": 250.98
        },
        {
          "type": "1 m²",
          "amount": 2700.54
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
