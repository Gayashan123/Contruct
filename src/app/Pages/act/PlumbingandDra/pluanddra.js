'use client';

import React from 'react';

const TableComponent = ({ title, data, totalAmount, rates, floors }) => {
  // Pipe size conversion data
  const pipeSizes = [
    { inch: '1/2"', mm: '20mm dia pipe' },
    { inch: '3/4"', mm: '25mm dia pipe' },
    { inch: '1"', mm: '32mm dia pipe' },
    { inch: '11/4"', mm: '40mm dia pipe' },
    { inch: '11/2"', mm: '50mm dia pipe' },
    { inch: '2"', mm: '63mm dia pipe' },
    { inch: '21/2"', mm: '75mm dia pipe' },
    { inch: '3"', mm: '90mm dia pipe' }
  ];

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

        {/* Pipe Size Conversion Table */}
        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-800 mb-2 text-center border-b pb-2">Pipe Size Conversion</h3>
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="p-2 border">Inches</th>
                <th className="p-2 border">Millimeters</th>
              </tr>
            </thead>
            <tbody>
              {pipeSizes.map((pipe, index) => (
                <tr key={index} className="text-center border-b hover:bg-gray-100">
                  <td className="p-2 border">{pipe.inch}</td>
                  <td className="p-2 border">{pipe.mm}</td>
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
      title: "12.01 1/2\" Diameter PVC pipes fixed to walls (Specials paid separately)",
      data: [
        { item_ref: 'M-095', item_description: '1/2" PVC Pipes', unit: 'L.ft', quantity: 13, rate: 7.50, amount: 97.50 },
        { item_ref: 'M-028', item_description: '1 " Clips and Nails', unit: 'No', quantity: 3, rate: 7.00, amount: 21.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 2, rate: 1.40, amount: 2.80 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.125, rate: 2500.00, amount: 312.50 },
        { item_ref: 'L-007', item_description: 'U / SK Labourer', unit: 'Day', quantity: 0.125, rate: 1800.00, amount: 225.00 },
      ],
      totalAmount: 658.80,
      rates: [
        { type: 'Rate for 1 L.ft', amount: 65.88 },
        { type: 'Rate (Say)', amount: 66.00 },
      ],
    },
    {
      title: "12.02 3/4\" Diameter PVC pipes fixed to walls (Specials paid separately)",
      data: [
        { item_ref: 'M-098', item_description: '3/4" PVC Pipes', unit: 'L.ft', quantity: 13, rate: 14.00, amount: 182.00 },
        { item_ref: 'M-028', item_description: '1 " Clips and Nails', unit: 'No', quantity: 3, rate: 7.00, amount: 21.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 3, rate: 1.40, amount: 4.20 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.125, rate: 2500.00, amount: 312.50 },
        { item_ref: 'L-007', item_description: 'U / SK Labourer', unit: 'Day', quantity: 0.125, rate: 1800.00, amount: 225.00 },
      ],
      totalAmount: 744.70,
      rates: [
        { type: 'Rate for 1 L.ft', amount: 74.47 },
        { type: 'Rate (Say)', amount: 74.00 },
      ],
    },
    {
      title: "12.03 1\" Diameter PVC pipes fixed to walls (Specials paid separately)",
      data: [
        { item_ref: 'M-094', item_description: '1" PVC Pipes', unit: 'L.ft', quantity: 100, rate: 21.00, amount: 2100.00 },
        { item_ref: '-', item_description: 'Allow 5% of Items ( 1.01 ) for Wastage', unit: '-', quantity: '-', rate: '-', amount: 105.00 },
        { item_ref: 'M-077', item_description: '1" PVC Sockets', unit: 'No', quantity: 8, rate: 14.00, amount: 112.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 32, rate: 1.40, amount: 44.80 },
        { item_ref: 'M-028', item_description: '1" Clips and Nails', unit: 'No', quantity: 35, rate: 7.00, amount: 245.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { item_ref: 'L-007', item_description: 'U / SK Labourer', unit: 'Day', quantity: 0.5, rate: 1800.00, amount: 900.00 },
      ],
      totalAmount: 4756.80,
      rates: [
        { type: 'Rate for 1 L.ft', amount: 47.57 },
        { type: 'Rate (Say)', amount: 48.00 },
      ],
    },
    {
      title: "12.04 1 1/4\" Diameter PVC pipes fixed to walls (Specials paid separately)",
      data: [
        { item_ref: 'M-093', item_description: '1 1/4" PVC Pipes', unit: 'L.ft', quantity: 100, rate: 32.00, amount: 3200.00 },
        { item_ref: '-', item_description: 'Allow 5% of Items ( 1.01 ) for Wastage', unit: '-', quantity: '-', rate: '-', amount: 160.00 },
        { item_ref: 'M-101', item_description: '1 1/4" PVC Sockets', unit: 'No', quantity: 8, rate: 19.50, amount: 156.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 48, rate: 1.40, amount: 67.20 },
        { item_ref: 'M-030', item_description: '1 1/4 " Clips and Nails', unit: 'No', quantity: 35, rate: 8.75, amount: 306.25 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.75, rate: 2500.00, amount: 1875.00 },
        { item_ref: 'L-007', item_description: 'U / SK Labourer', unit: 'Day', quantity: 0.75, rate: 1800.00, amount: 1350.00 },
      ],
      totalAmount: 7114.45,
      rates: [
        { type: 'Rate for 1 L.ft', amount: 71.14 },
        { type: 'Rate (Say)', amount: 71.00 },
      ],
    },
    {
      title: "12.05 1 1/2\" Diameter PVC pipes fixed to walls (Specials paid separately)",
      data: [
        { item_ref: 'M-092', item_description: '1 1/2" PVC Pipes', unit: 'L.ft', quantity: 100, rate: 46.00, amount: 4600.00 },
        { item_ref: '-', item_description: 'Allow 5% of Items (1.01) for Wastage', unit: '-', quantity: '-', rate: '-', amount: 230.00 },
        { item_ref: 'M-100', item_description: '1 1/2" PVC Sockets', unit: 'No', quantity: 8, rate: 29.50, amount: 236.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 64, rate: 1.40, amount: 89.60 },
        { item_ref: 'M-029', item_description: '1 1/2" Clips and Nails', unit: 'No', quantity: 35, rate: 10.50, amount: 367.50 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.75, rate: 2500.00, amount: 1875.00 },
        { item_ref: 'L-007', item_description: 'U / SK Labourer', unit: 'Day', quantity: 0.75, rate: 1800.00, amount: 1350.00 },
      ],
      totalAmount: 8748.10,
      rates: [
        { type: 'Rate for 1 L.ft', amount: 87.48 },
        { type: 'Rate (Say)', amount: 87.00 },
      ],
    },
    {
      title: "12.06 2\" Diameter PVC pipes fixed to walls (Specials paid separately)",
      data: [
        { item_ref: 'M-096', item_description: '2" PVC Pipes', unit: 'L.ft', quantity: 100, rate: 79.00, amount: 7900.00 },
        { item_ref: '-', item_description: 'Allow 5% of Items (1.01) for Wastage', unit: '-', quantity: '-', rate: '-', amount: 395.00 },
        { item_ref: 'M-102', item_description: '2" PVC Sockets', unit: 'No', quantity: 8, rate: 48.00, amount: 384.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 112, rate: 1.40, amount: 156.80 },
        { item_ref: 'M-031', item_description: '2" Clips and Nails', unit: 'No', quantity: 35, rate: 10.75, amount: 376.25 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.75, rate: 2500.00, amount: 1875.00 },
        { item_ref: 'L-007', item_description: 'U / SK Labourer', unit: 'Day', quantity: 0.75, rate: 1800.00, amount: 1350.00 },
      ],
      totalAmount: 12437.05,
      rates: [
        { type: 'Rate for 1 L.ft', amount: 124.37 },
        { type: 'Rate (Say)', amount: 124.00 },
      ],
    },
    {
      title: "12.07 3\" Diameter PVC pipes fixed to walls (Specials paid separately) Type 1000",
      data: [
        { item_ref: 'M-097', item_description: '3" PVC Pipes', unit: 'L.ft', quantity: 100, rate: 185.00, amount: 18500.00 },
        { item_ref: '-', item_description: 'Allow 5% of Items (1.01) for Compaction', unit: '-', quantity: '-', rate: '-', amount: 925.00 },
        { item_ref: 'M-103', item_description: '3" PVC Sockets', unit: 'No', quantity: 8, rate: 192.00, amount: 1536.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 200, rate: 1.40, amount: 280.00 },
        { item_ref: 'M-032', item_description: '3" Clips and Screws', unit: 'No', quantity: 35, rate: 34.00, amount: 1190.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 1, rate: 2500.00, amount: 2500.00 },
        { item_ref: 'L-007', item_description: 'U / SK Labourer', unit: 'Day', quantity: 1, rate: 1800.00, amount: 1800.00 },
      ],
      totalAmount: 26731.00,
      rates: [
        { type: 'Rate for 1 L.ft', amount: 267.31 },
        { type: 'Rate (Say)', amount: 267.00 },
      ],
    },
    {
      title: "12.08 Excavation for laying 1/2 \" to 3\" dia meter PVC pipes in ground not less than 1' 6\" Deep, Backfilling & Compacting",
      data: [
        { item_ref: 'L-007', item_description: 'U / SK Labourer', unit: 'Day', quantity: 2.25, rate: 1800.00, amount: 4050.00 },
      ],
      totalAmount: 4050.00,
      rates: [
        { type: 'Rate for 1 L.ft', amount: 40.50 },
        { type: 'Rate (Say)', amount: 41.00 },
      ],
    },
    {
      title: "12.09 Chasing brickwork for laying 1/2\" to 1 1/2 \" dia PVC pipes and making good average depth 2\" (Pipes and specials paid separately)",
      data: [
        { item_ref: 'M-026', item_description: 'Cement', unit: 'Bag', quantity: 0.1, rate: 980.00, amount: 98.00 },
        { item_ref: 'M-113', item_description: 'Sand', unit: 'Cu', quantity: 0.01, rate: 20000.00, amount: 200.00 },
        { item_ref: 'L-009', item_description: 'Mason', unit: 'Day', quantity: 3, rate: 2500.00, amount: 7500.00 },
        { item_ref: 'L-007', item_description: 'U / SK Labourer', unit: 'Day', quantity: 3, rate: 1800.00, amount: 5400.00 },
      ],
      totalAmount: 13198.00,
      rates: [
        { type: 'Rate for 1 L.ft', amount: 131.98 },
        { type: 'Rate (Say)', amount: 132.00 },
      ],
    },
    {
      title: "12.10 Chasing brickwork for laying 1 1/2\" to 3 \" dia PVC pipes in ground and floor and making good. average depth 3\" (Pipes and specials measured paid separately)",
      data: [
        { item_ref: 'M-026', item_description: 'Cement', unit: 'Bag', quantity: 0.2, rate: 980.00, amount: 196.00 },
        { item_ref: 'M-113', item_description: 'Sand', unit: 'Cu', quantity: 0.03, rate: 20000.00, amount: 600.00 },
        { item_ref: 'L-009', item_description: 'Mason', unit: 'Day', quantity: 3.5, rate: 2500.00, amount: 8750 },
        { item_ref: 'L-007', item_description: 'U / SK Labourer', unit: 'Day', quantity: 3.5, rate: 1800.00, amount: 6300 },
       
       
        ],
          totalAmount: 15846.00,
          rates: [
            { type: 'Rate for 1 L.ft', amount: 158.46 },
            { type: 'Rate (Say)', amount: 158.00 },
          ],
      },



{
      title: "12.11 1/2\" dia PVC specials viz-elbow / Bends / Sockets.",
      data: [
        { item_ref: 'M-083', item_description: '1/2" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 10.50, amount: 105.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 20, rate: 1.40, amount: 28.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.25, rate: 2500.00, amount: 625.00 },
      ],
      totalAmount: 758.00,
      rates: [
        { type: 'Rate for 1 No', amount: 75.80 },
        { type: 'Rate (Say)', amount: 76.00 },
      ],
    },
    {
      title: "12.12 3/4\" dia PVC specials viz-elbow / Bends / Sockets.",
      data: [
        { item_ref: 'M-076', item_description: '3/4" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 15.00, amount: 150.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 30, rate: 1.40, amount: 42.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.25, rate: 2500.00, amount: 625.00 },
      ],
      totalAmount: 817.00,
      rates: [
        { type: 'Rate for 1 No', amount: 81.70 },
        { type: 'Rate (Say)', amount: 82.00 },
      ],
    },
    {
      title: "12.13 1\" dia PVC specials viz-elbo / Bends / Sockets.",
      data: [
        { item_ref: 'M-082', item_description: '1" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 21.00, amount: 210.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 40, rate: 1.40, amount: 56.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.25, rate: 2500.00, amount: 625.00 },
      ],
      totalAmount: 891.00,
      rates: [
        { type: 'Rate for 1 No', amount: 89.10 },
        { type: 'Rate (Say)', amount: 89.00 },
      ],
    },
    {
      title: "12.14 1 1/4\" dia PVC specials viz-elbo / Bends / Sockets.",
      data: [
        { item_ref: 'M-081', item_description: '1 1/4" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 42.00, amount: 420.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 60, rate: 1.40, amount: 84.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.25, rate: 2500.00, amount: 625.00 },
      ],
      totalAmount: 1129.00,
      rates: [
        { type: 'Rate for 1 No', amount: 112.90 },
        { type: 'Rate (Say)', amount: 113.00 },
      ],
    },
    {
      title: "12.15 1 1/2\" dia PVC specials viz-elbo / Bends / Sockets.",
      data: [
        { item_ref: 'M-080', item_description: '1 1/2" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 69.00, amount: 690.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 80, rate: 1.40, amount: 112.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
      ],
      totalAmount: 2052.00,
      rates: [
        { type: 'Rate for 1 No', amount: 205.20 },
        { type: 'Rate (Say)', amount: 205.00 },
      ],
    },
    {
      title: "12.16 2\" dia PVC specials viz-elbo / Bends / Sockets.",
      data: [
        { item_ref: 'M-085', item_description: '2" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 110.00, amount: 1100.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 140, rate: 1.40, amount: 196.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
      ],
      totalAmount: 2546.00,
      rates: [
        { type: 'Rate for 1 No', amount: 254.60 },
        { type: 'Rate (Say)', amount: 255.00 },
      ],
    },
    {
      title: "12.17 2 1/2\" dia PVC specials viz-elbo / Bends / Sockets.",
      data: [
        { item_ref: 'M-084', item_description: '2 1/2" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 350.00, amount: 3500.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 200, rate: 1.40, amount: 280.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
      ],
      totalAmount: 5030.00,
      rates: [
        { type: 'Rate for 1 No', amount: 503.00 },
        { type: 'Rate (Say)', amount: 503.00 },
      ],
    },
    {
      title: "12.18 3\" dia PVC specials viz-elbo / Bends / Sockets.",
      data: [
        { item_ref: 'M-086', item_description: '3" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 580.00, amount: 5800.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 240, rate: 1.40, amount: 336.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
      ],
      totalAmount: 7390.00,
      rates: [
        { type: 'Rate for 1 No', amount: 739.00 },
        { type: 'Rate (Say)', amount: 739.00 },
      ],
    },
    {
      title: "12.19 1/2\" dia PVC Tee",
      data: [
        { item_ref: 'M-122', item_description: '1/2" Dia Tee', unit: 'No', quantity: 10, rate: 15.50, amount: 155.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 30, rate: 1.40, amount: 42.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
      ],
      totalAmount: 1450.00,
      rates: [
        { type: 'Rate for 1 No', amount: 145.00 },
        { type: 'Rate (Say)', amount: 145.00 },
      ],
    },
    {
      title: "12.20 3/4\" dia PVC Tee",
      data: [
        { item_ref: 'M-126', item_description: '3/4" Dia Tee', unit: 'No', quantity: 10, rate: 21.50, amount: 215.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 45, rate: 1.40, amount: 63.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
      ],
      totalAmount: 1530.00,
      rates: [
        { type: 'Rate for 1 No', amount: 153.00 },
        { type: 'Rate (Say)', amount: 153.00 },
      ],
    },
    {
      title: "12.21 1\" dia PVC Tee",
      data: [
        { item_ref: 'M-120', item_description: '1" Dia Tee', unit: 'No', quantity: 10, rate: 31.25, amount: 312.50 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 60, rate: 1.40, amount: 84.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
      ],
      totalAmount: 1650.00,
      rates: [
        { type: 'Rate for 1 No', amount: 165.00 },
        { type: 'Rate (Say)', amount: 165.00 },
      ],
    },
    {
      title: "12.22 1 1/4\" dia PVC Tee",
      data: [
        { item_ref: 'M-127', item_description: '1 1/4" Dia Tee', unit: 'No', quantity: 10, rate: 63.50, amount: 635.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 90, rate: 1.40, amount: 126.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
      ],
      totalAmount: 2010.00,
      rates: [
        { type: 'Rate for 1 No', amount: 201.00 },
        { type: 'Rate (Say)', amount: 201.00 },
      ],
    },
    {
      title: "12.23 1 1/2\" dia PVC Tee",
      data: [
        { item_ref: 'M-121', item_description: '1 1/2" Dia Tee', unit: 'No', quantity: 10, rate: 102.00, amount: 1020.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 120, rate: 1.40, amount: 168.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 1, rate: 2500.00, amount: 2500.00 },
      ],
      totalAmount: 3690.00,
      rates: [
        { type: 'Rate for 1 No', amount: 369.00 },
        { type: 'Rate (Say)', amount: 369.00 },
      ],
    },
    {
      title: "12.24 2\" dia PVC Tee",
      data: [
        { item_ref: 'M-123', item_description: '2" Dia Tee', unit: 'No', quantity: 10, rate: 165.50, amount: 1655.00 },
        { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 210, rate: 1.40, amount: 294.00 },
        { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 1, rate: 2500.00, amount: 2500.00 },
      ],
      totalAmount: 4450.00,
      rates: [
        { type: 'Rate for 1 No', amount: 445.00 },
        { type: 'Rate (Say)', amount: 445.00 },
      ],
    },
  {
    title: "12.25  2 1/2 \ dia PVC Tee",
    data: [
      { item_ref: 'M-124', item_description: '2 1/2" Dia Tee', unit: 'No', quantity: 10, rate:526.00, amount: 5260.00 },
      { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 300, rate: 1.40, amount: 420.00 },
      { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 1, rate: 1.5, amount: 3750.00 },
    ],
    totalAmount: 9430.00,
    rates: [
      { type: 'Rate for 1 No', amount: 943.00 },
      { type: 'Rate (Say)', amount: 943.00 },
    ],
  },


  {
    title: "12.26  3 \ dia PVC Tee",
    data: [
      { item_ref: 'M-125', item_description: '3" Dia Tee', unit: 'No', quantity: 10, rate:875.00, amount: 8750.00 },
      { item_ref: 'M-117', item_description: 'Solvent Cement', unit: 'Grms', quantity: 360, rate: 1.40, amount: 504.00 },
      { item_ref: 'L-002', item_description: 'Plumber', unit: 'Day', quantity: 1, rate: 2500.00, amount: 3750.00 },
    ],
    totalAmount: 13004.00,
    rates: [
      { type: 'Rate for 1 No', amount: 1300.00 },
      { type: 'Rate (Say)', amount: 1300.00 },
    ],
  },





    


  






  ]

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

  