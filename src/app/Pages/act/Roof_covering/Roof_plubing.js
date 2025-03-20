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
                <td className="p-2 border">{row.no || '-'}</td>
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
      title: "3 1/2\" dia PVC Shoe",
      data: [
        { no: "1.00999999", item_description: "Shoe", item_ref: "M-099", unit: "No", quantity: 1, rate: 0.00, amount: "-" },
        { no: "1.049999952", item_description: "Solvent cement", item_ref: "M-117", unit: "grms", quantity: 15, rate: 1.40, amount: 21.00 },
        { no: "1.059999943", item_description: "Plumber", item_ref: "L-002", unit: "Day", quantity: 0.0625, rate: 2500.00, amount: 156.25 },
        { no: "1.070000052", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.0625, rate: 1800.00, amount: 112.50 },
        { no: "1.080000162", item_description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 13.44 }
      ],
      totalAmount: 303.19,
      rates: [{ type: "Rate for 1 No.", amount: 303.19 }, { type: "Rate (Say)", amount: 303.00 }],
      floors: []
    },
    {
      title: "18 B.W.G (1.2 mm) galvanised iron sheet valley gutter 3' 0\" girth over all once bent with end laps not less than 9\" width including 3/4\" tongued and grooved planks laid to slope and profile on timber members.",
      data: [
        { no: "1.00999999", item_description: "Sheet (8'X4')", item_ref: "M-052", unit: "Sheet", quantity: 2, rate: 2200.00, amount: 4400.00 },
        { no: "1.019999981", item_description: "Wood Preservative", item_ref: "M-165", unit: "Gal", quantity: 0.25, rate: 450.00, amount: 112.50 },
        { no: "1.029999971", item_description: "Cement", item_ref: "M-026", unit: "Bag", quantity: 0.1, rate: 980.00, amount: 98.00 },
        { no: "1.039999962", item_description: "Slaked Lime", item_ref: "M-115", unit: "Lbs", quantity: 0.05, rate: 275.00, amount: 13.75 },
        { no: "1.049999952", item_description: "Sand", item_ref: "M-113", unit: "Cu", quantity: 0.01, rate: 20000.00, amount: 200.00 },
        { no: "1.059999943", item_description: "1\" Thick Class II Timber", item_ref: "M-141", unit: "Sq.ft", quantity: 50, rate: 65.00, amount: 3250.00 },
        { no: "1.070000052", item_description: "2\" Nails", item_ref: "M-072", unit: "Lbs", quantity: 2, rate: 50.00, amount: 100.00 },
        { no: "1.080000043", item_description: "Carpenter", item_ref: "L-008", unit: "Day", quantity: 1, rate: 2500.00, amount: 2500.00 },
        { no: "1.090000033", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 1, rate: 1800.00, amount: 1800.00 },
        { no: "1.100000023", item_description: "Tinker", item_ref: "L-005", unit: "Day", quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { no: "1.110000013", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.5, rate: 1800.00, amount: 900.00 },
        { no: "1.120000003", item_description: "Mason", item_ref: "L-009", unit: "Day", quantity: 0.25, rate: 2500.00, amount: 625.00 },
        { no: "1.130000093", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.25, rate: 1800.00, amount: 450.00 }
      ],
      totalAmount: 15699.25,
      rates: [{ type: "Rate for 1 L.ft.", amount: 1046.62 }, { type: "Rate (Say)", amount: 1047.00 }],
      floors: []
    },
    {
      title: "18 B.W.G (1.2 mm) GI Flashing 1' 6\" girth overall 3 thies bent with end laps not less than 6\", soldered, turned and tucked up to not less than 6\" into chase cut in wall and pointed in 1:2 mortar, lower end dressed over roof covering not less than 1' 0\" wide",
      data: [
        { no: "1.00999999", item_description: "Sheet (8'X4')", item_ref: "M-052", unit: "Sheet", quantity: 1, rate: 2200.00, amount: 2200.00 },
        { no: "1.019999981", item_description: "Cement", item_ref: "M-026", unit: "Bag", quantity: 0.05, rate: 980.00, amount: 49.00 },
        { no: "1.029999971", item_description: "Sand", item_ref: "M-113", unit: "Cu", quantity: 0.01, rate: 20000.00, amount: 200.00 },
        { no: "1.039999962", item_description: "Soldering Lead", item_ref: "M-116", unit: "Lbs", quantity: 1, rate: 13.75, amount: 13.75 },
        { no: "1.049999952", item_description: "Tinker", item_ref: "L-005", unit: "Day", quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { no: "1.059999943", item_description: "Mason", item_ref: "L-009", unit: "Day", quantity: 0.125, rate: 2500.00, amount: 312.50 },
        { no: "1.070000052", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.75, rate: 1800.00, amount: 1350.00 }
      ],
      totalAmount: 5375.25,
      rates: [{ type: "Rate for 1 L.ft.", amount: 358.35 }, { type: "Rate (Say)", amount: 358.00 }],
      floors: []
    },
    {
      title: "6\" half round PVC eave gutter fixed to timber valance board including gutter joiner and brackets fixed at 18\" centres (other specials paid separately)",
      data: [
        { no: "1.00999999", item_description: "6\" eave gutter lengths (12' each)", item_ref: "M-088", unit: "No", quantity: 2, rate: 0.00, amount: 0.00 },
        { no: "1.019999981", item_description: "Joiner", item_ref: "M-055", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
        { no: "1.029999971", item_description: "gutter brackets", item_ref: "M-054", unit: "No", quantity: 17, rate: 0.00, amount: 0.00 },
        { no: "1.039999962", item_description: "3/4\" brass screws", item_ref: "M-017", unit: "No", quantity: 34, rate: 1.25, amount: 42.50 },
        { no: "1.049999952", item_description: "Solvent cement", item_ref: "M-117", unit: "grms", quantity: 20, rate: 1.40, amount: 28.00 },
        { no: "1.059999943", item_description: "Plumber", item_ref: "L-002", unit: "Day", quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { no: "1.070000052", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.5, rate: 1800.00, amount: 900.00 },
        { no: "1.080000162", item_description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 107.50 }
      ],
      totalAmount: 2328.00,
      rates: [{ type: "Rate for 1 L.ft.", amount: 97.00 }, { type: "Rate (Say)", amount: 97.00 }],
      floors: []
    },
    {
      title: "6\" dia PVC gutter head",
      data: [
        { no: "1.00999999", item_description: "6\" dia PVC gutter head", item_ref: "M-089", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
        { no: "1.019999981", item_description: "Gutter Joiner", item_ref: "M-055", unit: "No", quantity: 2, rate: 0.00, amount: 0.00 },
        { no: "1.029999971", item_description: "gutter brackets", item_ref: "M-054", unit: "No", quantity: 2, rate: 0.00, amount: 0.00 },
        { no: "1.039999962", item_description: "3/4\" brass screws", item_ref: "M-017", unit: "No", quantity: 4, rate: 1.25, amount: 5.00 },
        { no: "1.049999952", item_description: "Solvent cement", item_ref: "M-117", unit: "grms", quantity: 12, rate: 1.40, amount: 16.80 },
        { no: "1.059999943", item_description: "Plumber", item_ref: "L-002", unit: "Day", quantity: 0.125, rate: 2500.00, amount: 312.50 },
        { no: "1.070000052", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.125, rate: 1800.00, amount: 225.00 },
        { no: "1.080000162", item_description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 26.88 }
      ],
      totalAmount: 586.18,
      rates: [{ type: "Rate for 1 No.", amount: 586.18 }, { type: "Rate (Say)", amount: 586.00 }],
      floors: []
    },
    {
        title: "6\" dia PVC end caps",
        data: [
          { no: "1.00999999", item_description: "end cap", item_ref: "M-087", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
          { no: "1.049999952", item_description: "Solvent cement", item_ref: "M-117", unit: "grms", quantity: 12, rate: 1.40, amount: 16.80 },
          { no: "1.059999943", item_description: "Plumber", item_ref: "L-002", unit: "Day", quantity: 0.0625, rate: 2500.00, amount: 156.25 },
          { no: "1.070000052", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.0625, rate: 1800.00, amount: 112.50 },
          { no: "1.080000162", item_description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 13.44 }
        ],
        totalAmount: 298.99,
        rates: [
          { type: "Rate for 1 No.", amount: 298.99 },
          { type: "Rate (Say)", amount: 299.00 }
        ],
        floors: []
      },
      {
        title: "3 1/2\" PVC rain water down pipes fixed to brick wall with wooden plugs buried in wall (other specials paid separately)",
        data: [
          { no: "1.00999999", item_description: "3 1/2\" down pipe lengths (12' each)", item_ref: "M-078", unit: "No", quantity: 2, rate: 0.00, amount: 0.00 },
          { no: "1.019999981", item_description: "3 1/2\" Joiner", item_ref: "M-090", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
          { no: "1.029999971", item_description: "PVC straps", item_ref: "M-104", unit: "No", quantity: 4, rate: 0.00, amount: 0.00 },
          { no: "1.039999962", item_description: "1\" brass screws", item_ref: "M-014", unit: "No", quantity: 8, rate: 2.50, amount: 20.00 },
          { no: "1.049999952", item_description: "Solvent cement", item_ref: "M-117", unit: "grms", quantity: 30, rate: 1.40, amount: 42.00 },
          { no: "1.059999943", item_description: "Plumber", item_ref: "L-002", unit: "Day", quantity: 0.33, rate: 2500.00, amount: 833.33 },
          { no: "1.070000052", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.33, rate: 1800.00, amount: 600.00 },
          { no: "1.080000162", item_description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 71.67 }
        ],
        totalAmount: 1567.00,
        rates: [
          { type: "Rate for 1 L.ft.", amount: 65.29 },
          { type: "Rate (Say)", amount: 65.00 }
        ],
        floors: []
      },
      {
        title: "3 1/2\" dia PVC elbow",
        data: [
          { no: "1.00999999", item_description: "elbow", item_ref: "M-079", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
          { no: "1.049999952", item_description: "Solvent cement", item_ref: "M-117", unit: "grms", quantity: 32, rate: 1.40, amount: 44.80 },
          { no: "1.059999943", item_description: "Plumber", item_ref: "L-002", unit: "Day", quantity: 0.0625, rate: 2500.00, amount: 156.25 },
          { no: "1.070000052", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.0625, rate: 1800.00, amount: 112.50 },
          { no: "1.080000162", item_description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 13.44 }
        ],
        totalAmount: 326.99,
        rates: [
          { type: "Rate for 1 No.", amount: 326.99 },
          { type: "Rate (Say)", amount: 327.00 }
        ],
        floors: []
      },
      {
        title: "3 1/2\" dia PVC Shoe",
        data: [
          { no: "1.00999999", item_description: "Shoe", item_ref: "M-099", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
          { no: "1.049999952", item_description: "Solvent cement", item_ref: "M-117", unit: "grms", quantity: 15, rate: 1.40, amount: 21.00 },
          { no: "1.059999943", item_description: "Plumber", item_ref: "L-002", unit: "Day", quantity: 0.0625, rate: 2500.00, amount: 156.25 },
          { no: "1.070000052", item_description: "U / SK Labourer", item_ref: "L-007", unit: "Day", quantity: 0.0625, rate: 1800.00, amount: 112.50 },
          { no: "1.080000162", item_description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 13.44 }
        ],
        totalAmount: 303.19,
        rates: [
          { type: "Rate for 1 No.", amount: 303.19 },
          { type: "Rate (Say)", amount: 303.00 }
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