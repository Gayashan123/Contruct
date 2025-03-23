'use client';

import React, { useState, useEffect } from "react";

const TableComponent = ({ title, data, totalAmount, rates }) => {
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
      </div>
    </div>
  );
};

export default function EarthWorkSupport() {
  const [tableData, setTableData] = useState([]);
  
    const exampleData = [
    {
      title: "02.B.01 Earth Work Support (Open Planking) in Trenches Up to a Depth of 5' 0 Analyse for 1 Cube  (Analyse for 1.5 Sqr )\"",
      data: [
        { no: '1.01', description: 'Class II Timber (17.5 ft³ for 4 uses)', ref: 'M-140', unit: 'Cu.ft', quantity: 4.375, rate: 750.00, amount: 3281.25 },
        { no: '1.02', description: 'Carpenter', ref: 'L-008', unit: 'Day', quantity: 1, rate: 2500.00, amount: 2500.00 },
        { no: '1.03', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 3, rate: 1800.00, amount: 5400.00 },
      ],
      totalAmount: 11181.25,
      rates: [
        { type: '1 Sqr', amount: 7454.17 },
        { type: '1 m²', amount: 802.07 },
      ],
    },
    {
      title: "02.B.02 Earth Work Support (Close Planking) in Trenches Up to a Depth of 5'0  (Analyse for 1.5 Sqr )\"",
      data: [
        { no: '1.01', description: 'Class II Timber (30 ft³ for 4 uses)', ref: 'M-140', unit: 'Cu.ft', quantity: 7.5, rate: 750.00, amount: 5625.00 },
        { no: '1.02', description: 'Carpenter', ref: 'L-008', unit: 'Day', quantity: 2, rate: 2500.00, amount: 5000.00 },
        { no: '1.03', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 6, rate: 1800.00, amount: 10800.00 },
      ],
      totalAmount: 21425.00,
      rates: [
        { type: '1 Sqr', amount: 14283.33 },
        { type: '1 m²', amount: 1536.89 },
      ],
    },
    {
      title: "02.B.03 Earth Work Support (Close Planking) in Deep Excavation in Trenches Up to 15' 0\" Depth  (Analyse for 4.5 Sqr )",
      data: [
        { no: '1.01', description: 'Class II Timber (100 ft³ for 4 uses)', ref: 'M-140', unit: 'Cu.ft', quantity: 25, rate: 750.00, amount: 18750.00 },
        { no: '1.02', description: 'Carpenter', ref: 'L-008', unit: 'Day', quantity: 8, rate: 2500.00, amount: 20000.00 },
        { no: '1.03', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 20, rate: 1800.00, amount: 36000.00 },
      ],
      totalAmount: 74750.00,
      rates: [
        { type: '1 Sqr', amount: 16611.11 },
        { type: '1 ft²', amount: 166.11 },
        { type: '1 m²', amount: 1787.36 },
      ],
    },
  ];

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
                if (row.description === "Allow 5% of Items (1.01) for Wastage") {
                  const mainItemAmount = item.data[0]?.amount || 0; // Get the amount of the first item (1.01)
                  row.amount = mainItemAmount * 5 / 100; // Apply 5% wastage
                  amount = row.amount; // Update amount to the calculated wastage
                }
      
                // Calculate scaffolding wastage for "Allow 5% of Items (1.06, 1.07) for Scaffolding"
                if (row.description === "Allow 5% of Items (1.06, 1.07) for Scaffolding") {
                  const masonAmount = item.data[5]?.amount || 0; // Get the amount for Mason (1.06)
                  const labourerAmount = item.data[6]?.amount || 0; // Get the amount for Labourer (1.07)
                  row.amount = (masonAmount + labourerAmount) * 5 / 100; // Apply 5% wastage on mason and labourer
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