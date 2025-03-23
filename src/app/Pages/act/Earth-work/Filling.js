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

export default function LabourAnalysis() {

const [tableData, setTableData] = useState([]);
  
    const exampleData = [
    {
      title: "Backfilling to trenches with selected earth available at site (Analyse for 1 Cube )",
      data: [
        { no: '1.01', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 1, rate: 1800, amount: 1800.00 },
        { no: '1.02', description: 'Allow 2.5% of Items for Tools', ref: '-', unit: '-', quantity: 0, rate: 0, amount: 45.00 },
      ],
      totalAmount: 1845.00,
      rates: [
        { type: '1 Cube', amount: 1845.00 },
        { type: '1 ft³', amount: 18.45 },
        { type: '1 m³', amount: 652.00 },
      ],
    },
    {
      title: "Backfilling to trenches with Imported Material  (Analyse for 1 Cube )",
      data: [
        { no: '1.01', description: 'Earth Delivered at Site', ref: 'M-042', unit: 'Cube', quantity: 1, rate: 1500, amount: 1500.00 },
        { no: '1.02', description: 'Allow 15% of Items for Compacting', ref: '-', unit: '-', quantity: 0, rate: 0, amount: 225.00 },
        { no: '1.03', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 1.25, rate: 1800, amount: 2250.00 },
      ],
      totalAmount: 3975.00,
      rates: [
        { type: '1 Cube', amount: 3975.00 },
        { type: '1 ft³', amount: 39.75 },
        { type: '1 m³', amount: 1405.00 },
      ],
    },
    {
      title: "Filling under floors including levelling, watering & compacting in 3\" layers with available earth at site  (Analyse for 1 Cube )",
      data: [
        { no: '1.01', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2, rate: 1800, amount: 3600.00 },
        { no: '1.02', description: 'Allow 2.5% of Items for Tools', ref: '-', unit: '-', quantity: 0, rate: '-', amount: 90.00 },
      ],
      totalAmount: 3690.00,
      rates: [
        { type: '1 Cube', amount: 3690.00 },
        { type: '1 ft³', amount: 36.90 },
        { type: '1 m³', amount: 1304.00 },
      ],
    },
    {
      title: "Filling under floors including levelling, watering & compacting in 3\" layers with imported selected earth  (Analyse for 7 Cube )",
      data: [
        { no: '1.01', description: 'Earth Delivered at Site', ref: 'M-042', unit: 'Cu', quantity: 1, rate: 1500, amount: 1500.00 },
        { no: '1.02', description: 'Allow 15% of Items for Compacting', ref: '-', unit: '-', quantity: 0, rate: '-', amount: 225.00 },
        { no: '1.03', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2, rate: 1800, amount: 3600.00 },
      ],
      totalAmount: 5362.50,
      rates: [
        { type: '1 Cube', amount: 5362.50 },
        { type: '1 ft³', amount: 53.63 },
        { type: '1 m³', amount: 1894.88 },
        { type: '1 m³ with compaction', amount: 2463.34 },
      ],
    },

    {
      "title": "Filling under floors including levelling, watering & compacting in 3\" layers with imported gravel (Analyse for 1 Cube)",
      "data": [
        { "no": "1.01", "description": "Gravel Delivered at Site", "ref": "M-053", "unit": "Cube", "quantity": 1, "rate": 2000.00, "amount": 2000.00 },
        { "no": "1.02", "description": "Allow 15% of Items for Compaction & wastage", "ref": "-", "unit": "-", "quantity": 0, "rate": 0, "amount": 300.00 },
        { "no": "1.03", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 2, "rate": 1800.00, "amount": 3600.00 },
        { "no": "1.04", "description": "Allow 2.5% of Items for Tools", "ref": "-", "unit": "-", "quantity": 0, "rate": "-", "amount": 50.00 }
      ],
      "totalAmount": 5950.00,
      "rates": [
        { "type": "1 Cube", "amount": 5950.00 },
        { "type": "1 ft³", "amount": 59.50 },
        { "type": "1 m³", "amount": 2102.47 },
        { "type": "1 m³ with compaction", "amount": 2733.22 }
      ]
    },
    {
      "title": "Approved Soil Spread & Compacted in 150 to 225 mm Thick Layers Using Machine Rammer at Narrow Places (Analyse for 7 Cu.m)",
      "data": [
        { "no": "1.01", "description": "Labour Unskilled (U/SK)", "ref": "L-007", "unit": "Day", "quantity": 1, "rate": 1800.00, "amount": 1800.00 },
        { "no": "1.02", "description": "Allow 2.5% of Items for Tools", "ref": "-", "unit": "-", "quantity": 0, "rate": 0, "amount": 45.00 },
        { "no": "1.03", "description": "Vibrating rammer (60kg)(Less Operator)", "ref": "P-003", "unit": "Day", "quantity": 0.5, "rate": 3500.00, "amount": 1750.00 }
      ],
      "totalAmount": 3595.00,
      "rates": [
        { "type": "1 Cu.m", "amount": 513.57 },
        { "type": "1 Cube", "amount": 1453.41 },
        { "type": "1 ft³", "amount": 14.53 }
      ]
    }



  ];

 useEffect(() => {
       const fetchRates = async () => {
         try {
           const materialResponse = await fetch('/api/material_rate', { headers: { 'Cache-Control': 'no-cache' } });
           const labourResponse = await fetch('/api/labour_rate', { headers: { 'Cache-Control': 'no-cache' } });
           const plantResponse = await fetch('/api/plant_rate', { headers: { 'Cache-Control': 'no-cache' } });
       
           if (materialResponse.ok && labourResponse.ok) {
             const materialData = await materialResponse.json();
             const labourData = await labourResponse.json();
             const plantData = await plantResponse.json();
       
             const updatedData = exampleData.map(item => {
               let total = 0;
       
               // Iterate over each row in the data to calculate values
               const updatedRows = item.data.map((row, index) => {
                 let rate = getRate(row.ref, labourData, materialData,plantData);
                 let amount = row.quantity !== undefined ? row.quantity * rate : 0;
       
                 // Calculate wastage for "Allow 5% of Items (1.01) for Wastage"
                 if (row.description === 'Allow 2.5% of Items for Tools') {
                   const mainItemAmount = item.data[0]?.amount || 0; // Get the amount of the first item (1.01)
                   row.amount = mainItemAmount * 2.5 / 100; // Apply 5% wastage
                   amount = row.amount; // Update amount to the calculated wastage
                 }
       
                 // Calculate scaffolding wastage for "Allow 5% of Items (1.06, 1.07) for Scaffolding"
                 if (row.description === 'Allow 15% of Items for Compacting') {
                   const masonAmount = item.data[0]?.amount || 0; // Get the amount for Mason (1.06)
                   
                   row.amount = masonAmount  * 15 / 100; // Apply 5% wastage on mason and labourer
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
        
        const getRate = (ref, labourData, materialData,plantData) => {
          if (!ref) return 0;
          if (ref.startsWith('L')) {
            return labourData.find(item => item.Code_no === ref)?.price || 0;
          }
          if (ref.startsWith('M')) {
            return materialData.find(item => item.Code_no === ref)?.price || 0;
          }

          if (ref.startsWith('P')) {
            return plantData.find(item => item.Code_no === ref)?.price || 0;
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