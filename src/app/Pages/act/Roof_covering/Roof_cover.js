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
      title: "Timber framework for culicut pattern tile hip roof in single storey building",
      data: [
        { no: "1.00999999", item_description: "Timber Class I", item_ref: "M-136", unit: "Cu.ft", quantity: 34, rate: 1200.00, amount: 40800.00 },
        { no: "1.019999981", item_description: "Allow 10% of Items ( 1.01 ) for Wastage", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 4080.00 },
        { no: "1.029999971", item_description: "2\"X1\"  Reepers", item_ref: "M-149", unit: "L.ft", quantity: 660, rate: 12.00, amount: 7920.00 },
        { no: "1.039999962", item_description: "Allow 5% of Items ( 1.03 ) for Wastage", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 396.00 },
        { no: "1.049999952", item_description: "Wire Nails 6\" Long", item_ref: "M-163", unit: "Lbs", quantity: 8, rate: 25.00, amount: 200.00 },
        { no: "1.059999943", item_description: "Wire Nails 2\" Long", item_ref: "M-162", unit: "Lbs", quantity: 2, rate: 25.00, amount: 50.00 },
        { no: "1.070000052", item_description: "Carpenter", item_ref: "L-008", unit: "Day", quantity: 7, rate: 2500.00, amount: 17500.00 },
        { no: "1.080000043", item_description: "U / SK  Labourer", item_ref: "L-007", unit: "Day", quantity: 8, rate: 1800.00, amount: 14400.00 }
      ],
      totalAmount: 85346.00,
      rates: [{ type: "Rate for 1 Sqr", amount: 14224.33 }, { type: "Rate (Say)", amount: 14224.00 }],
      floors: []
    },
    {
      title: "Roof Covering With calicut pattern clay tiles in single storeyed building",
      data: [
        { no: "1.00999999", item_description: "Tiles", item_ref: "M-108", unit: "No", quantity: 750, rate: 16.00, amount: 12000.00 },
        { no: "1.01999999", item_description: "Carpenter", item_ref: "L-008", unit: "Day", quantity: 3, rate: 2500.00, amount: 7500.00 },
        { no: "1.02999999", item_description: "U / SK  Labourer", item_ref: "L-007", unit: "Day", quantity: 3, rate: 1800.00, amount: 5400.00 }
      ],
      totalAmount: 24900.00,
      rates: [{ type: "Rate for 1 Sqr", amount: 4150.00 }, { type: "Rate (Say)", amount: 4150.00 }],
      floors: []
    },
    {
      title: "Timber framework for corrugated asbestos sheet roof in single storeyed building",
      data: [
        { no: "1.00999999", item_description: "Timber Class I", item_ref: "M-136", unit: "Cu.ft", quantity: 13.25, rate: 1200.00, amount: 15900.00 },
        { no: "1.019999981", item_description: "Allow 10% of Items ( 1.01 ) for Wastage", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 1590.00 },
        { no: "1.029999971", item_description: "Carpenter", item_ref: "L-008", unit: "Day", quantity: 2.5, rate: 2500.00, amount: 6250.00 },
        { no: "1.039999962", item_description: "U / SK  Labourer", item_ref: "L-007", unit: "Day", quantity: 3, rate: 1800.00, amount: 5400.00 }
      ],
      totalAmount: 29140.00,
      rates: [{ type: "Rate for 1 Sqr", amount: 8094.44 }, { type: "Rate (Say)", amount: 8094.00 }],
      floors: []
    },
    {
      title: "Roof covering with corrugated asbestos sheets (Timber framework and ridge covering measured separately)",
      data: [
        { no: "1.01", item_description: "Asbestos Corrugated", item_ref: "M-003", unit: "Sq.ft", quantity: 420, rate: 26.00, amount: 10920.00 },
        { no: "1.02", item_description: "Roofing Screws and Washers", item_ref: "M109", unit: "No", quantity: 72, rate: 3.50, amount: 252.00 },
        { no: "1.03", item_description: "Carpenter", item_ref: "L-008", unit: "Day", quantity: 1, rate: 2500.00, amount: 2500.00 },
        { no: "1.04", item_description: "U / SK  Labourer", item_ref: "L-007", unit: "Day", quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 17272.00,
      rates: [{ type: "Rate for 1 Sqr", amount: 4797.78 }, { type: "Rate (Say)", amount: 4798.00 }],
      floors: []
    },
    {
      title: "One layer half round clay tiles over corrugated asbestos roof covering",
      data: [
        { no: "1.00999999", item_description: "Half Round Clay Tiles", item_ref: "M-056", unit: "No", quantity: 650, rate: 5.00, amount: 3250.00 },
        { no: "1.019999981", item_description: "U / SK  Labourer", item_ref: "L-007", unit: "Day", quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 6850.00,
      rates: [{ type: "Rate for 1 Sqr", amount: 6850.00 }, { type: "Rate (Say)", amount: 6850.00 }],
      floors: []
    },
    {
      title: "Asbestos close fittings ridging fixed complete with roofing screws or bolts (hook)",
      data: [
        { no: "1.00999999", item_description: "Ridges 3' 8\" Long - Asbestos", item_ref: "M-106", unit: "Pair", quantity: 4, rate: 245.00, amount: 980.00 },
        { no: "1.019999981", item_description: "Roofing Screws or Bolts", item_ref: "M-110", unit: "No", quantity: 16, rate: 3.50, amount: 56.00 },
        { no: "1.029999971", item_description: "Carpenter", item_ref: "L-008", unit: "Day", quantity: 0.25, rate: 2500.00, amount: 625.00 },
        { no: "1.039999962", item_description: "U / SK  Labourer", item_ref: "L-007", unit: "Day", quantity: 0.25, rate: 1800.00, amount: 450.00 }
      ],
      totalAmount: 2111.00,
      rates: [{ type: "Rate for 1 L.ft.", amount: 158.36 }, { type: "Rate (Say)", amount: 158.00 }],
      floors: []
    },
    {
      title: "Ridging covering with calicut pattern ridge tiles bedded in cement lime mortar 1:1:4",
      data: [
        { no: "1.00999999", item_description: "Ridge Tiles", item_ref: "M-105", unit: "No", quantity: 9, rate: 35.00, amount: 315.00 },
        { no: "1.019999981", item_description: "Cement", item_ref: "M-o26", unit: "Bag", quantity: 0.333, rate: 980.00, amount: 326.34 },
        { no: "1.029999971", item_description: "Sand", item_ref: "M-113", unit: "Cu", quantity: 0.02, rate: 20000.00, amount: 400.00 },
        { no: "1.039999962", item_description: "Slaked Lime", item_ref: "M-115", unit: "Lbs", quantity: 15, rate: 275.00, amount: 4125.00 },
        { no: "1.049999952", item_description: "Colouring Powder", item_ref: "M-036", unit: "Lbs", quantity: 0.5, rate: 175.00, amount: 87.50 },
        { no: "1.059999943", item_description: "Mason", item_ref: "L-009", unit: "Day", quantity: 0.25, rate: 2500.00, amount: 625.00 },
        { no: "1.070000052", item_description: "U / SK  Labourer", item_ref: "L-007", unit: "Day", quantity: 0.25, rate: 1800.00, amount: 450.00 }
      ],
      totalAmount: 6328.84,
      rates: [{ type: "Rate for 1 L.ft.", amount: 527.40 }, { type: "Rate (Say)", amount: 527.00 }],
      floors: []
    },
    {
      title: "3/4\" X 9\" high valance board fixed with brass screws to ends of rafters (For tile roofing)",
      data: [
        { no: "1.00999999", item_description: "1\" Planks", item_ref: "M-147", unit: "Sq.ft", quantity: 75, rate: 65.00, amount: 4875.00 },
        { no: "1.019999981", item_description: "Allow 5% of Items ( 1.01 ) for Wastage", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 243.75 },
        { no: "1.029999971", item_description: "Brass Screws 1 1/2\"", item_ref: "M-015", unit: "No", quantity: 100, rate: 3.75, amount: 375.00 },
        { no: "1.039999962", item_description: "Carpenter", item_ref: "L-008", unit: "Day", quantity: 3, rate: 2500.00, amount: 7500.00 },
        { no: "1.049999952", item_description: "U / SK  Labourer", item_ref: "L-007", unit: "Day", quantity: 3, rate: 1800.00, amount: 5400.00 },
        { no: "1.059999943", item_description: "Allow 5% of Items ( 1.04, 1.05 ) for Wastage", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 645.00 }
      ],
      totalAmount: 19038.75,
      rates: [{ type: "Rate for 1 L.ft.", amount: 190.39 }, { type: "Rate (Say)", amount: 190.00 }],
      floors: []
    },
    {
      title: "3/4\" X 9\" high barge board fixed with brass screws at 2 ft. 0\"centres to side of rafters",
      data: [
        { no: "1.00999999", item_description: "1\" Planks", item_ref: "M-147", unit: "Sq.ft", quantity: 75, rate: 65.00, amount: 4875.00 },
        { no: "1.019999981", item_description: "Allow 5% of Items ( 1.01 ) for Wastage", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 243.75 },
        { no: "1.029999971", item_description: "Brass Screws 1 1/2\"", item_ref: "M-015", unit: "No", quantity: 50, rate: 3.75, amount: 187.50 },
        { no: "1.039999962", item_description: "Carpenter", item_ref: "L-008", unit: "Day", quantity: 3, rate: 2500.00, amount: 7500.00 },
        { no: "1.049999952", item_description: "U / SK  Labourer", item_ref: "L-007", unit: "Day", quantity: 3, rate: 1800.00, amount: 5400.00 },
        { no: "1.059999943", item_description: "Allow 5% of Items ( 1.04, 1.05 ) for Scaffolding", item_ref: "-", unit: "-", quantity: "-", rate: "-", amount: 645.00 }
      ],
      totalAmount: 18851.25,
      rates: [{ type: "Rate for 1 L.ft.", amount: 188.51 }, { type: "Rate (Say)", amount: 189.00 }],
      floors: []
    }
  ];

  return (
    <div>
      {tableData.map((dataItem, index) => (
        <TableComponent
          key={index}
          title={dataItem.title}
          data={dataItem.data}
          totalAmount={dataItem.totalAmount}
          rates={dataItem.rates}
          floors={dataItem.floors}
        />
      ))}
    </div>
  );
}