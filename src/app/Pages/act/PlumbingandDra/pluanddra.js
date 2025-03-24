'use client';

import React, { useState, useEffect } from "react";

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

  const [tableData, setTableData] = useState([]);
        
          const exampleData = [

    {
      title: "12.01 1/2\" Diameter PVC pipes fixed to walls (Specials paid separately)",
      data: [
        { ref: 'M-095', description: '1/2" PVC Pipes', unit: 'L.ft', quantity: 13, rate: 7.50, amount: 97.50 },
        { ref: 'M-028', description: '1 " Clips and Nails', unit: 'No', quantity: 3, rate: 7.00, amount: 21.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 2, rate: 1.40, amount: 2.80 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.125, rate: 2500.00, amount: 312.50 },
        { ref: 'L-007', description: 'U / SK Labourer', unit: 'Day', quantity: 0.125, rate: 1800.00, amount: 225.00 },
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
        { ref: 'M-098', description: '3/4" PVC Pipes', unit: 'L.ft', quantity: 13, rate: 14.00, amount: 182.00 },
        { ref: 'M-028', description: '1 " Clips and Nails', unit: 'No', quantity: 3, rate: 7.00, amount: 21.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 3, rate: 1.40, amount: 4.20 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.125, rate: 2500.00, amount: 312.50 },
        { ref: 'L-007', description: 'U / SK Labourer', unit: 'Day', quantity: 0.125, rate: 1800.00, amount: 225.00 },
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
        { ref: 'M-094', description: '1" PVC Pipes', unit: 'L.ft', quantity: 100, rate: 21.00, amount: 2100.00 },
        { ref: '-', description: 'Allow 5% of Items ( 1.01 ) for Wastage', unit: '-', quantity: '-', rate: '-', amount: 105.00 },
        { ref: 'M-077', description: '1" PVC Sockets', unit: 'No', quantity: 8, rate: 14.00, amount: 112.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 32, rate: 1.40, amount: 44.80 },
        { ref: 'M-028', description: '1" Clips and Nails', unit: 'No', quantity: 35, rate: 7.00, amount: 245.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { ref: 'L-007', description: 'U / SK Labourer', unit: 'Day', quantity: 0.5, rate: 1800.00, amount: 900.00 },
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
        { ref: 'M-093', description: '1 1/4" PVC Pipes', unit: 'L.ft', quantity: 100, rate: 32.00, amount: 3200.00 },
        { ref: '-', description: 'Allow 5% of Items ( 1.01 ) for Wastage', unit: '-', quantity: 0, rate: 0, amount: 160.00 },
        { ref: 'M-101', description: '1 1/4" PVC Sockets', unit: 'No', quantity: 8, rate: 19.50, amount: 156.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 48, rate: 1.40, amount: 67.20 },
        { ref: 'M-030', description: '1 1/4 " Clips and Nails', unit: 'No', quantity: 35, rate: 8.75, amount: 306.25 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.75, rate: 2500.00, amount: 1875.00 },
        { ref: 'L-007', description: 'U / SK Labourer', unit: 'Day', quantity: 0.75, rate: 1800.00, amount: 1350.00 },
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
        { ref: 'M-092', description: '1 1/2" PVC Pipes', unit: 'L.ft', quantity: 100, rate: 46.00, amount: 4600.00 },
        { ref: '-', description: 'Allow 5% of Items (1.01) for Wastage', unit: '-', quantity: 0, rate: 0, amount: 230.00 },
        { ref: 'M-100', description: '1 1/2" PVC Sockets', unit: 'No', quantity: 8, rate: 29.50, amount: 236.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 64, rate: 1.40, amount: 89.60 },
        { ref: 'M-029', description: '1 1/2" Clips and Nails', unit: 'No', quantity: 35, rate: 10.50, amount: 367.50 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.75, rate: 2500.00, amount: 1875.00 },
        { ref: 'L-007', description: 'U / SK Labourer', unit: 'Day', quantity: 0.75, rate: 1800.00, amount: 1350.00 },
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
        { ref: 'M-096', description: '2" PVC Pipes', unit: 'L.ft', quantity: 100, rate: 79.00, amount: 7900.00 },
        { ref: '-', description: 'Allow 5% of Items (1.01) for Wastage', unit: '-', quantity: 0, rate: 0, amount: 395.00 },
        { ref: 'M-102', description: '2" PVC Sockets', unit: 'No', quantity: 8, rate: 48.00, amount: 384.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 112, rate: 1.40, amount: 156.80 },
        { ref: 'M-031', description: '2" Clips and Nails', unit: 'No', quantity: 35, rate: 10.75, amount: 376.25 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.75, rate: 2500.00, amount: 1875.00 },
        { ref: 'L-007', description: 'U / SK Labourer', unit: 'Day', quantity: 0.75, rate: 1800.00, amount: 1350.00 },
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
        { ref: 'M-097', description: '3" PVC Pipes', unit: 'L.ft', quantity: 100, rate: 185.00, amount: 18500.00 },
        { ref: '-', description: 'Allow 5% of Items (1.01) for Compaction', unit: '-', quantity: 0, rate: 0, amount: 925.00 },
        { ref: 'M-103', description: '3" PVC Sockets', unit: 'No', quantity: 8, rate: 192.00, amount: 1536.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 200, rate: 1.40, amount: 280.00 },
        { ref: 'M-032', description: '3" Clips and Screws', unit: 'No', quantity: 35, rate: 34.00, amount: 1190.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 1, rate: 2500.00, amount: 2500.00 },
        { ref: 'L-007', description: 'U / SK Labourer', unit: 'Day', quantity: 1, rate: 1800.00, amount: 1800.00 },
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
        { ref: 'L-007', description: 'U / SK Labourer', unit: 'Day', quantity: 2.25, rate: 1800.00, amount: 4050.00 },
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
        { ref: 'M-026', description: 'Cement', unit: 'Bag', quantity: 0.1, rate: 980.00, amount: 98.00 },
        { ref: 'M-113', description: 'Sand', unit: 'Cu', quantity: 0.01, rate: 20000.00, amount: 200.00 },
        { ref: 'L-009', description: 'Mason', unit: 'Day', quantity: 3, rate: 2500.00, amount: 7500.00 },
        { ref: 'L-007', description: 'U / SK Labourer', unit: 'Day', quantity: 3, rate: 1800.00, amount: 5400.00 },
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
        { ref: 'M-026', description: 'Cement', unit: 'Bag', quantity: 0.2, rate: 980.00, amount: 196.00 },
        { ref: 'M-113', description: 'Sand', unit: 'Cu', quantity: 0.03, rate: 20000.00, amount: 600.00 },
        { ref: 'L-009', description: 'Mason', unit: 'Day', quantity: 3.5, rate: 2500.00, amount: 8750 },
        { ref: 'L-007', description: 'U / SK Labourer', unit: 'Day', quantity: 3.5, rate: 1800.00, amount: 6300 },
       
       
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
        { ref: 'M-083', description: '1/2" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 10.50, amount: 105.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 20, rate: 1.40, amount: 28.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.25, rate: 2500.00, amount: 625.00 },
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
        { ref: 'M-076', description: '3/4" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 15.00, amount: 150.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 30, rate: 1.40, amount: 42.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.25, rate: 2500.00, amount: 625.00 },
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
        { ref: 'M-082', description: '1" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 21.00, amount: 210.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 40, rate: 1.40, amount: 56.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.25, rate: 2500.00, amount: 625.00 },
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
        { ref: 'M-081', description: '1 1/4" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 42.00, amount: 420.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 60, rate: 1.40, amount: 84.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.25, rate: 2500.00, amount: 625.00 },
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
        { ref: 'M-080', description: '1 1/2" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 69.00, amount: 690.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 80, rate: 1.40, amount: 112.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
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
        { ref: 'M-085', description: '2" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 110.00, amount: 1100.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 140, rate: 1.40, amount: 196.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
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
        { ref: 'M-084', description: '2 1/2" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 350.00, amount: 3500.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 200, rate: 1.40, amount: 280.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
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
        { ref: 'M-086', description: '3" PVC Elbows / Bends / Sockets', unit: 'No', quantity: 10, rate: 580.00, amount: 5800.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 240, rate: 1.40, amount: 336.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
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
        { ref: 'M-122', description: '1/2" Dia Tee', unit: 'No', quantity: 10, rate: 15.50, amount: 155.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 30, rate: 1.40, amount: 42.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
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
        { ref: 'M-126', description: '3/4" Dia Tee', unit: 'No', quantity: 10, rate: 21.50, amount: 215.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 45, rate: 1.40, amount: 63.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
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
        { ref: 'M-120', description: '1" Dia Tee', unit: 'No', quantity: 10, rate: 31.25, amount: 312.50 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 60, rate: 1.40, amount: 84.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
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
        { ref: 'M-127', description: '1 1/4" Dia Tee', unit: 'No', quantity: 10, rate: 63.50, amount: 635.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 90, rate: 1.40, amount: 126.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 0.5, rate: 2500.00, amount: 1250.00 },
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
        { ref: 'M-121', description: '1 1/2" Dia Tee', unit: 'No', quantity: 10, rate: 102.00, amount: 1020.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 120, rate: 1.40, amount: 168.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 1, rate: 2500.00, amount: 2500.00 },
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
        { ref: 'M-123', description: '2" Dia Tee', unit: 'No', quantity: 10, rate: 165.50, amount: 1655.00 },
        { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 210, rate: 1.40, amount: 294.00 },
        { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 1, rate: 2500.00, amount: 2500.00 },
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
      { ref: 'M-124', description: '2 1/2" Dia Tee', unit: 'No', quantity: 10, rate:526.00, amount: 5260.00 },
      { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 300, rate: 1.40, amount: 420.00 },
      { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 1, rate: 1.5, amount: 3750.00 },
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
      { ref: 'M-125', description: '3" Dia Tee', unit: 'No', quantity: 10, rate:875.00, amount: 8750.00 },
      { ref: 'M-117', description: 'Solvent Cement', unit: 'Grms', quantity: 360, rate: 1.40, amount: 504.00 },
      { ref: 'L-002', description: 'Plumber', unit: 'Day', quantity: 1, rate: 2500.00, amount: 3750.00 },
    ],
    totalAmount: 13004.00,
    rates: [
      { type: 'Rate for 1 No', amount: 1300.00 },
      { type: 'Rate (Say)', amount: 1300.00 },
    ],
  },





    


  






  ]

  useEffect(() => {
       const fetchRates = async () => {
         try {
           const materialResponse = await fetch('/api/material_rate', { headers: { 'Cache-Control': 'no-cache' } });
           const labourResponse = await fetch('/api/labour_rate', { headers: { 'Cache-Control': 'no-cache' } });
       
           if (materialResponse.ok && labourResponse.ok) {
             const materialData = await materialResponse.json();
             const labourData = await labourResponse.json();
       
             const updatedData = exampleData.map(item => {
               let total = 0;
       
               // Iterate over each row in the data to calculate values
               const updatedRows = item.data.map((row, index) => {
                 let rate = getRate(row.ref, labourData, materialData);
                 let amount = row.quantity !== undefined ? row.quantity * rate : 0;
       
                 // Calculate wastage for "Allow 5% of Items (1.01) for Wastage"
                 if (row.description === "Allow 5% of Items ( 1.01 ) for Wastage") {
                   const mainItemAmount = item.data[0]?.amount || 0; // Get the amount of the first item (1.01)
                   row.amount = mainItemAmount * 5 / 100; // Apply 5% wastage
                   amount = row.amount; // Update amount to the calculated wastage
                 }
       
                 // Calculate scaffolding wastage for "Allow 5% of Items (1.06, 1.07) for Scaffolding"
                 if (row.description === "Allow 5% of Items (1.01) for Compaction") {
                   const masonAmount = item.data[4]?.amount || 0; // Get the amount for Mason (1.06)
                  
                   
                   row.amount = masonAmount * 5 / 100; // Apply 5% wastage on mason and labourer
                   amount = row.amount; // Update amount to the calculated scaffolding wastage
                 }
       
                 total += amount;
       
                 return { ...row, rate, amount };
               });
       
               return {
                 ...item,
                 data: updatedRows,
                 totalAmount: total,
                 rates: [
                   { type: '1 Sq', amount: total },
                   { type: '1 ft²', amount: total / 100 },
                   { type: '1 m²', amount: total / 929.03 },
                 ],
                 floorRates: [
                   { floor: "Ground Floor", rate: total / 929.03 },
                   { floor: "First Floor", rate: 1481.75 },
                   { floor: "Second Floor", rate: 1481.75 },
                   { floor: "Third Floor", rate: 1481.75 },
                 ],
               };
             });
       
             setTableData(updatedData);
           }
         } catch (error) {
           console.error('Error fetching rates:', error);
         }
       };
       
        
          fetchRates();
        }, []);
        
        const getRate = (ref, labourData, materialData) => {
          if (!ref) return 0;
          if (ref.startsWith('L')) {
            return labourData.find(item => item.Code_no === ref)?.price || 0;
          }
          if (ref.startsWith('M')) {
            return materialData.find(item => item.Code_no === ref)?.price || 0;
          }
          return 0;
        };
      
        return (
          <div className="space-y-6">
            {tableData.map((item, index) => (
              <TableComponent key={index} {...item} />
            ))}
          </div>
        );
      }
   