"use client";

import React from "react";

const TableComponent = ({ title, data, totalAmount, rates, floorRates, extraRates }) => {
  return (
    <div className="p-4 bg-gray-100 w-full flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b pb-2">{title}</h2>

        {/* Main Table */}
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
                <td className="p-2 border">{row.ref || "-"}</td>
                <td className="p-2 border">{row.unit || "-"}</td>
                <td className="p-2 border">{row.quantity !== undefined ? row.quantity : "-"}</td>
                <td className="p-2 border">{row.rate !== undefined ? row.rate : "-"}</td>
                <td className="p-2 border font-semibold">{row.amount}</td>
              </tr>
            ))}
            <tr className="font-bold text-center bg-gray-300">
              <td colSpan={6} className="p-2 border">Total For 1 Sqr</td>
              <td className="p-2 border">{totalAmount}</td>
            </tr>
          </tbody>
        </table>

        {/* Extra Rates Section */}
        <div className="mt-4">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {extraRates.map((rate, index) => (
                <tr key={index} className="bg-yellow-200 text-center font-semibold border-b">
                  <td className="p-2 border">Rate (Say)</td>
                  <td className="p-2 border">{rate.type}</td>
                  <td className="p-2 border">{rate.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Floor Rates Section */}
        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-800 border-b pb-2">Floor Rates</h3>
          <table className="w-full border-collapse text-sm mt-2">
            <tbody>
              {floorRates.map((floor, index) => (
                <tr key={index} className="bg-gray-200 text-center font-semibold border-b">
                  <td className="p-2 border">{floor.floor}</td>
                  <td className="p-2 border">{floor.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default function LabourAnalysis() {
  const tableData = [
    {
      title: "09.01 - Brick Work in cement sand 1:5 in 4-1/2\" thick walls in ground floor (Analyze for 1 Sqr)",
      data: [
        { no: "1.01", description: "Bricks", ref: "M-019", unit: "No", quantity: 550, rate: 6.00, amount: 3300.00 },
        { no: "1.02", description: "Allow 5% of Items (1.01) for Wastage", ref: "-", unit: "-", quantity: "-", rate: "-", amount: 165.00 },
        { no: "1.03", description: "Cement", ref: "M-026", unit: "Bag", quantity: 1.3, rate: 980.00, amount: 1274.00 },
        { no: "1.04", description: "Sand", ref: "M-113", unit: "Cu", quantity: 0.1, rate: 20000.00, amount: 2000.00 },
        { no: "1.05", description: "Water", ref: "M-157", unit: "Gal", quantity: 50, rate: 0.30, amount: 15.00 },
        { no: "1.06", description: "Mason", ref: "L-009", unit: "Day", quantity: 1.5, rate: 2500.00, amount: 3750.00 },
        { no: "1.07", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 2, rate: 1800.00, amount: 3600.00 },
        { no: "1.08", description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", ref: "-", unit: "-", quantity: "-", rate: "-", amount: 367.50 },
      ],
      totalAmount: 14471.50,
      extraRates: [
        { type: "1 Sq", amount: 14471.50 },
        { type: "1ft²", amount: 144.72 },
        { type: "1m²", amount: 1557.19 },
      ],
      floorRates: [
        { floor: "Ground Floor 1m²", rate: 1557.19 },
        { floor: "First Floor 1m²", rate: 1635.05 },
        { floor: "Second Floor 1m²", rate: 1716.80 },
        { floor: "Third Floor 1m² ", rate: 1802.64 },
      ],
    },
  
  
    {
      title: "09.02 - 9\" thick brick wall cement sand 1:5 in ground floor (Analysis For 1 Sqr)",
      data: [
        { no: "1.01", description: "Bricks", ref: "M-019", unit: "No", quantity: 1090, rate: 8.00, amount: 8720.00 },
        { no: "1.02", description: "Allow 5% of Items (1.01) for Wastage", ref: "-", unit: "-", amount: 436.00 },
        { no: "1.03", description: "Cement", ref: "M-026", unit: "Bag", quantity: 3, rate: 1075.00, amount: 3225.00 },
        { no: "1.05", description: "Sand", ref: "M-113", unit: "Cu", quantity: 0.2, rate: 8500.00, amount: 1700.00 },
        { no: "1.06", description: "Water", ref: "M-157", unit: "Gal", quantity: 115, rate: 0.50, amount: 57.50 },
        { no: "1.07", description: "Mason", ref: "L-009", unit: "Day", quantity: 2.25, rate: 2300.00, amount: 5175.00 },
        { no: "1.08", description: "U / SK Labour", ref: "L-007", unit: "Day", quantity: 3.75, rate: 1600.00, amount: 6000.00 },
        { no: "1.09", description: "Allow 3% of Items (1.06, 1.07) for Scaffolding", ref: "-", unit: "-", amount: 335.25 },
      ],
      totalAmount: 25648.75,
      extraRates: [
        { type: "Rate for 1 Sqr", amount: 25648.75 },
        { type: "Rate (Say) - 1 Sq", amount: 25649.00 },
        { type: "Rate (Say) - 1ft²", amount: 256.49 },
        { type: "Rate (Say) - 1m²", amount: 2759.83 },
        { type: "25% Profit & OverH.", amount: 689.96 },
        { type: "Final Rate", amount: 3449.79 },
      ],
      floorRates: [
        { floor: "Ground Floor", rate: 2759.83 },
        { floor: "First Floor", rate: 2900.00 },
        { floor: "Second Floor", rate: 3050.00 },
        { floor: "Third Floor", rate: 3200.00 },
      ],
    },
  ];

  return <div className="space-y-6">{tableData.map((item, index) => <TableComponent key={index} {...item} />)}</div>;
}
