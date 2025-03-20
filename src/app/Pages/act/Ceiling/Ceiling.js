'use client';

import React from 'react';

const TableComponent = ({ title, data, totalAmount, rates, floors , rateFor1Sqr  }) => {
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

            <tr className="font-bold text-center bg-gray-300">
              <td colSpan={6} className="p-2 border">Rate for 1 Sqrs</td>
              <td className="p-2 border">{rateFor1Sqr}</td>
            </tr>
          </tbody></table>


        {/* Rate Section */}
        <div className="mt-4">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {rates.map((rate, index) => (
                <tr key={index} className="bg-yellow-200 text-center font-semibold border-b">
                  <td className="p-2 border">Rate (Say)</td>
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
      title: "Timber Framework for 4' 0\"x4' 0\" flat asbestos ceiling (Sheet Measured separately) Comprising of 4\"x2\" joists and 2\"x2\" bearers in class 1 timber",
      analysis: "1.95 Sqrs",
      data: [
        { "no": "1.00999999", "description": "Timber Class I", "itemRef": "M-136", "unit": "Cu.ft", "quantity": 8, "rate": 1200.00, "amount": 9600.00 },
        { "no": "1.019999981", "description": "2\" Nails", "itemRef": "M-072", "unit": "Lbs", "quantity": 1, "rate": 50.00, "amount": 50.00 },
        { "no": "1.029999971", "description": "Fibre / Plastic Plugs", "itemRef": "M-045", "unit": "No", "quantity": 26, "rate": 1.50, "amount": 39.00 },
        { "no": "1.039999962", "description": "Cement", "itemRef": "M-026", "unit": "Bag", "quantity": 0.23, "rate": 980.00, "amount": 225.40 },
        { "no": "1.049999952", "description": "Sand", "itemRef": "M-113", "unit": "Cu", "quantity": 0.02, "rate": 20000.00, "amount": 400.00 },
        { "no": "1.059999943", "description": "Brush 2\"", "itemRef": "M-022", "unit": "No", "quantity": 0.25, "rate": 165.00, "amount": 41.25 },
        { "no": "1.070000052", "description": "Tarnap", "itemRef": "M-119", "unit": "Gal", "quantity": 0.333, "rate": 450.00, "amount": 149.85 },
        { "no": "1.080000043", "description": "Carpenter", "itemRef": "L-008", "unit": "Day", "quantity": 2.5, "rate": 2500.00, "amount": 6250.00 },
        { "no": "1.090000033", "description": "Mason", "itemRef": "L-009", "unit": "Day", "quantity": 0.5, "rate": 2500.00, "amount": 1250.00 },
        { "no": "1.10", "description": "U / SK Labourer", "itemRef": "L-007", "unit": "Day", "quantity": 1.5, "rate": 1800.00, "amount": 2700.00 },
        { "no": "1.110000014", "description": "Allow 3% of Items ( 1.08, 1.09, 1.10 ) for Scaffolding", "itemRef": "-", "unit": "-", "quantity": null, "rate": null, "amount": 306.00 }
      ],
      totalAmount: 21011.50,
      rateFor1Sqr: 10775.13,
      rates: [
        {amount: 10775.00 },
      ]
    },
    {
      title: "Horizontal ceiling lining using 4' 0\"x4' 0\" flat asbestos cement sheets fixed with and including beading and cove mouldings on timber framework (Timber, framework, painting m/separately)",
      analysis: "1.95 Sqrs",
      data: [
        { "no": "1.00999999", "description": "Flat Asbestos Sheets", "itemRef": "M-048", "unit": "Sq.ft", "quantity": 210, "rate": 15.00, "amount": 3150.00 },
        { "no": "1.019999981", "description": "2\"X2\" halmilla Cove Moulding", "itemRef": "M-145", "unit": "Sq.ft", "quantity": 60, "rate": 35.00, "amount": 2100.00 },
        { "no": "1.029999971", "description": "1 1/2\"X1/2\" Halmilla Beadings", "itemRef": "M-134", "unit": "L.ft", "quantity": 125, "rate": 12.00, "amount": 1500.00 },
        { "no": "1.039999962", "description": "1/4\" clout Nails", "itemRef": "M-033", "unit": "lbs", "quantity": 0.25, "rate": 25.00, "amount": 6.25 },
        { "no": "1.049999952", "description": "Brass Screws 1 1/2\"", "itemRef": "M-015", "unit": "No", "quantity": 96, "rate": 3.75, "amount": 360.00 },
        { "no": "1.059999943", "description": "Carpenter", "itemRef": "L-008", "unit": "Day", "quantity": 1.5, "rate": 2500.00, "amount": 3750.00 },
        { "no": "1.070000052", "description": "U / SK Labourer", "itemRef": "L-007", "unit": "Day", "quantity": 2, "rate": 1800.00, "amount": 3600.00 },
        { "no": "1.080000043", "description": "Allow 3% of Items ( 1.06, 1.07 ) for Scaffolding", "itemRef": "-", "unit": "-", "quantity": null, "rate": null, "amount": 220.50 }
      ],
      totalAmount: 14686.75,
      rateFor1Sqr: 7531.67,
      rates: [
        {amount: 7532.00 },
      ]
    },
    {
      title: "3/4\" thick tongued and grooved Lunumidella ceiling boards fixed horizontal on 4\"X2\" class I timber Joists at 2' 0\" centres with 1 1/2 \" Brass Nails",
      analysis: "1.95 Sqrs",
      data: [
        { "no": "1.00999999", "description": "4\" x 2\" Timber Joists", "itemRef": "M-146", "unit": "L.ft", "quantity": 115, "rate": 65.00, "amount": 7475.00 },
        { "no": "1.019999981", "description": "6\" x 3/4\" Lunumidella Ceiling Planks.", "itemRef": "M-135", "unit": "Sq.ft", "quantity": 215, "rate": 28.00, "amount": 6020.00 },
        { "no": "1.029999971", "description": "Cement", "itemRef": "M-026", "unit": "Bag", "quantity": 0.027, "rate": 980.00, "amount": 26.46 },
        { "no": "1.039999962", "description": "Sand", "itemRef": "M-113", "unit": "Cu", "quantity": 0.04, "rate": 20000.00, "amount": 800.00 },
        { "no": "1.049999952", "description": "1 1/2 brass Nails", "itemRef": "M-012", "unit": "lbs", "quantity": 9, "rate": 50.00, "amount": 440.53 },
        { "no": "1.059999943", "description": "Mason - making holes, fixing joists & making goods", "itemRef": "L-009", "unit": "Day", "quantity": 1, "rate": 2500.00, "amount": 2500.00 },
        { "no": "1.070000052", "description": "Carpenter - making holes, fixing joists & making goods", "itemRef": "L-008", "unit": "Day", "quantity": 1, "rate": 2500.00, "amount": 2500.00 },
        { "no": "1.080000043", "description": "U / SK Labourer - making holes, fixing joists & making goods", "itemRef": "L-007", "unit": "Day", "quantity": 3, "rate": 1800.00, "amount": 5400.00 },
        { "no": "1.090000033", "description": "Carpenter - Fixing ceiling boards", "itemRef": "L-008", "unit": "Day", "quantity": 3, "rate": 2500.00, "amount": 7500.00 },
        { "no": "1.10", "description": "U / SK Labourer - Fixing ceiling boards", "itemRef": "L-007", "unit": "Day", "quantity": 4, "rate": 1800.00, "amount": 7200.00 },
        { "no": "1.110000014", "description": "Allow 3% of Items (1.06, 1.07, 1.08, 1.09, 1.10) for Scaffolding", "itemRef": "-", "unit": "-", "quantity": null, "rate": null, "amount": 753.00 }
      ],
      totalAmount: 40614.99,
      rateFor1Sqr: 20828.20,
      rates: [
        {amount: 20828.00 },
      ]
    },
    {
      title: "3/4\" X 6\" wide tongued and grooved Lunumidella ceiling boards fixed to underside of roof rafters. (Existing) with 1 1/2\" brass nails including levelling with timber strips where necessary",
      analysis: "1.8 Sq",
      data: [
        { "no": "1.00999999", "description": "6\" x 3/4\" Lunumidella Ceiling Planks.", "itemRef": "M-135", "unit": "Sq.ft", "quantity": 220, "rate": 28.00, "amount": 6160.00 },
        { "no": "1.019999981", "description": "2\" X 1/4\" Timber Strips", "itemRef": "M-150", "unit": "L.ft", "quantity": 40, "rate": 5.00, "amount": 200.00 },
        { "no": "1.029999971", "description": "3/4\" Nails", "itemRef": "M-073", "unit": "Lbs", "quantity": 4.5, "rate": 20.00, "amount": 90.00 },
        { "no": "1.039999962", "description": "1 1/2\" Brass Nails", "itemRef": "M-012", "unit": "Lbs", "quantity": 9, "rate": 50.00, "amount": 440.53 },
        { "no": "1.059999943", "description": "carpenter", "itemRef": "L-008", "unit": "Day", "quantity": 2, "rate": 2500.00, "amount": 7500.00 },
        { "no": "1.070000052", "description": "u  / sk Labour", "itemRef": "L-007", "unit": "Day", "quantity": 3, "rate": 1800.00, "amount": 10800.00 },
        { "no": "1.080000043", "description": "Allow 3% of Items for Scaffolding", "itemRef": "-", "unit": "-", "quantity": null, "rate": null, "amount": 549.00 }
      ],
      totalAmount: 25739,
      rateFor1Sqr: 14299,
      rates: [
        {amount: 14300.00 },
      ]

    }
  ]

  
  return (
    <div className="p-6 bg-gray-200 min-h-screen flex flex-col items-center">
      {tableData.map((table, index) => (
        <TableComponent key={index} {...table} />
      ))}
    </div>
  );
}
