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
      title: "07. Reinforcement - 7.01 Tor Steel Reinforcement (Analyse for 1 cwt )",
      data: [
        { no: '1.01', description: 'M.S./Tor Steel Rods including transport to site', ref: 'M-152', unit: 'kg', quantity: 50, rate: 68.00, amount: 3400.00 },
        { no: '1.02', description: 'Allow 15% of Items (1.01) for Wastage', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 510.00 },
        { no: '1.03', description: '16 BWG Binding Wire', ref: 'M-005', unit: 'Lbs', quantity: 1.5, rate: 100.00, amount: 150.00 },
        { no: '1.04', description: 'Allow 1.5% of Items (1.01) for spaces or chairs', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 51.00 },
        { no: '1.05', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 1, rate: 2000.00, amount: 2000.00 },
        { no: '1.06', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 1, rate: 1800.00, amount: 1800.00 },
      ],
      totalAmount: 7911.00,
      rates: [
        { type: '1 Cwt', amount: 7911.00 },
        { type: '1 Kg', amount: 158.22 },
      ],
    },
    {
      title: "07. Reinforcement - 7.02 Mild Steel Reinforcement (Analyse for 1 cwt)",
      data: [
        { no: '1.01', description: 'M.S./Tor Steel Rods including transport to site', ref: 'M-068', unit: 'kg', quantity: 50, rate: 68.00, amount: 3400.00 },
        { no: '1.02', description: 'Allow 15% of Items (1.01) for Wastage', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 510.00 },
        { no: '1.03', description: '16 BWG Binding Wire', ref: 'M-005', unit: 'Lbs', quantity: 1.5, rate: 100.00, amount: 150.00 },
        { no: '1.04', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 1, rate: 2000.00, amount: 2000.00 },
        { no: '1.05', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 1, rate: 1800.00, amount: 1800.00 },
      ],
      totalAmount: 7860.00,
      rates: [
        { type: '1 Cwt', amount: 7860.00 },
        { type: '1 Kg', amount: 157.20 },
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
                     if (row.description === "Allow 15% of Items (1.01) for Wastage") {
                       const mainItemAmount = item.data[0]?.amount || 0; // Get the amount of the first item (1.01)
                       row.amount = mainItemAmount * 15 / 100; // Apply 5% wastage
                       amount = row.amount; // Update amount to the calculated wastage
                     }
           
                     // Calculate scaffolding wastage for "Allow 5% of Items (1.06, 1.07) for Scaffolding"
                     if (row.description === "Allow 1.5% of Items (1.01) for spaces or chairs") {
                       const masonAmount = item.data[1]?.amount || 0; // Get the amount for Mason (1.06)
                      
                       
                       row.amount = masonAmount * 1.5 / 100; // Apply 5% wastage on mason and labourer
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
       