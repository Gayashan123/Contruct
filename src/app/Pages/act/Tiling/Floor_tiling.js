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
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border text-left">{row.itemDescription}</td>
                <td className="p-2 border">{row.itemRef || '-'}</td>
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
                    <td className="p-2 border">{floor.name}</td>
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
      title: "14.B.01 Terrazzo floor tiles on 1/2\" thick cement and sand 1:2 in ground floor",
      data: [
        {
          itemDescription: "Terrazzo Tiles 12\" X 12\"",
          itemRef: "M-132",
          unit: "No",
          quantity: 100,
          rate: 350.00,
          amount: 35000.00
        },
        {
          itemDescription: "Allow 5% of Items ( 1.01 ) for Wastage",
          itemRef: "-",
          unit: "-",
          quantity: "-",
          rate: "-",
          amount: 1750.00
        },
        {
          itemDescription: "Cement",
          itemRef: "M-026",
          unit: "Bag",
          quantity: 1.25,
          rate: 730.00,
          amount: 912.50
        },
        {
          itemDescription: "Sand",
          itemRef: "M-113",
          unit: "Cu",
          quantity: 0.07,
          rate: 20000.00,
          amount: 1400.00
        },
        {
          itemDescription: "Coloured Pigment",
          itemRef: "M-035",
          unit: "Lbs",
          quantity: 2,
          rate: 175.00,
          amount: 350.00
        },
        {
          itemDescription: "Wax Polish",
          itemRef: "M-158",
          unit: "Lbs",
          quantity: 0.5,
          rate: 150.00,
          amount: 75.00
        },
        {
          itemDescription: "Cotton Waste",
          itemRef: "M-037",
          unit: "Lbs",
          quantity: 2,
          rate: 12.50,
          amount: 25.00
        },
        {
          itemDescription: "Mason",
          itemRef: "L-009",
          unit: "Day",
          quantity: 4,
          rate: 900.00,
          amount: 3600.00
        },
        {
          itemDescription: "U / SK Labourer",
          itemRef: "L-007",
          unit: "Day",
          quantity: 3,
          rate: 1800.00,
          amount: 5400.00
        },
        {
          itemDescription: "U / SK Labourer",
          itemRef: "L-007",
          unit: "Day",
          quantity: 0.5,
          rate: 1800.00,
          amount: 900.00
        }
      ],
      totalAmount: 49412.50,
      rates: [
        { type: "1Sqr", amount: 49412.50 },
        { type: "1ft2", amount: 494.13 },
        { type: "1m2", amount: 5316.84 }
      ],
      floors: [
        { name: "Ground Floor", rate: 5316.84, amount: 5316.84 },
        { name: "First Floor", rate: 5848.52, amount: 5848.52 },
        { name: "Second Floor", rate: 6433.37, amount: 6433.37 },
        { name: "Third Floor", rate: 7076.71, amount: 7076.71 }
      ]
    },
    {
      title: "14.B.02 Pressed floor tiles bedded in 1/2\" cement mortar 1:2 and pointing in neat cement in ground floor",
      data: [
        {
          itemDescription: "Pressed Tiles 8\" X 8\"",
          itemRef: "M-130",
          unit: "No",
          quantity: 225,
          rate: 125.00,
          amount: 28125.00
        },
        {
          itemDescription: "Allow 5% of Items ( 1.01 ) for Wastage",
          itemRef: "-",
          unit: "-",
          quantity: "-",
          rate: "-",
          amount: 1406.25
        },
        {
          itemDescription: "Cement",
          itemRef: "M-026",
          unit: "Bag",
          quantity: 1.25,
          rate: 980.00,
          amount: 1225.00
        },
        {
          itemDescription: "Sand",
          itemRef: "M-113",
          unit: "Cu",
          quantity: 0.07,
          rate: 20000.00,
          amount: 1400.00
        },
        {
          itemDescription: "Colouring Powder",
          itemRef: "M-036",
          unit: "Lbs",
          quantity: 0.25,
          rate: 175.00,
          amount: 43.75
        },
        {
          itemDescription: "Cotton Waste",
          itemRef: "M-037",
          unit: "Lbs",
          quantity: 2,
          rate: 12.50,
          amount: 25.00
        },
        {
          itemDescription: "Mason",
          itemRef: "L-009",
          unit: "Day",
          quantity: 4,
          rate: 2500.00,
          amount: 10000.00
        },
        {
          itemDescription: "U / SK Labourer",
          itemRef: "L-007",
          unit: "Day",
          quantity: 4,
          rate: 1800.00,
          amount: 7200.00
        },
        {
          itemDescription: "U / SK Labourer",
          itemRef: "L-007",
          unit: "Day",
          quantity: 0.5,
          rate: 1800.00,
          amount: 900.00
        }
      ],
      totalAmount: 50325.00,
      rates: [
        { type: "1Sqr", amount: 50325.00 },
        { type: "1ft2", amount: 503.25 },
        { type: "1m2", amount: 5400.00 }
      ],
      floors: [
        { name: "Ground Floor", rate: 5400.00, amount: 5400.00 },
        { name: "First Floor", rate: 5940.00, amount: 5940.00 },
        { name: "Second Floor", rate: 6480.00, amount: 6480.00 },
        { name: "Third Floor", rate: 7020.00, amount: 7020.00 }
      ]
    }
  ];

  return (
    <div>
      {tableData.map((table, index) => (
        <TableComponent
          key={index}
          title={table.title}
          data={table.data}
          totalAmount={table.totalAmount}
          rates={table.rates}
          floors={table.floors}
        />
      ))}
    </div>
  );
}
