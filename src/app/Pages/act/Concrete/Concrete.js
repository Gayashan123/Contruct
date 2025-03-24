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
      title: 'Mixing Concrete 1:1-1/2:3(3/4")',
      data: [
        { no: '1', description: 'Cement', ref: 'M-026', unit: 'Bag', quantity: 23, rate: 980.00, amount: 22540.00 },
        { no: '2', description: 'Sand', ref: 'M-113', unit: 'Cube', quantity: 0.42, rate: 20000.00, amount: 8400.00 },
        { no: '3', description: '3/4 " Metal', ref: 'M-066', unit: 'Cube', quantity: 0.82, rate: 14000.00, amount: 11480.00 },
        { no: '4', description: 'Hire of Mixer', ref: 'P-001', unit: 'Day', quantity: 0.333, rate: 4000.00, amount: 1332.00 },
        { no: '5', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 150, rate: 0.30, amount: 45.00 },
        { no: '6', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 0.333, rate: 2000.00, amount: 666.00 },
        { no: '7', description: 'U/SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 48063.00,
      rates: [
        { type: 'Rate for Cube', amount: 48063.00 },
        { type: 'Rate Say 1 Cube', amount: 48060.00 },
        { type: 'Rate Say 1 m3', amount: 16982.33 }
      ]
    },
    {
      title: 'Mixing Concrete 1:3:6(1 1/2")',
      data: [
        { no: '1', description: 'Cement', ref: 'M-026', unit: 'Bag', quantity: 13, rate: 980.00, amount: 12740.00 },
        { no: '2', description: 'Sand', ref: 'M-113', unit: 'Cube', quantity: 0.53, rate: 20000.00, amount: 10600.00 },
        { no: '3', description: '1 1/2 " Metal', ref: 'M-065', unit: 'Cube', quantity: 0.92, rate: 14000.00, amount: 12880.00 },
        { no: '4', description: 'Hire of Mixer', ref: 'P-001', unit: 'Day', quantity: 0.333, rate: 4000.00, amount: 1332.00 },
        { no: '5', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 110, rate: 0.30, amount: 33.00 },
        { no: '6', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 0.333, rate: 2000.00, amount: 666.00 },
        { no: '7', description: 'U/SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 41851.00,
      rates: [
        { type: 'Rate for Cube', amount: 41851.00 },
        { type: 'Rate Say 1 Cube', amount: 41850.00 },
        { type: 'Rate Say 1 m3', amount: 14787.99 }
      ]
    },
    {
      title: 'Mixing Concrete 1:2 1/2 :5 (1")',
      data: [
        { no: '1', description: 'Cement', ref: 'M-026', unit: 'Bag', quantity: 14, rate: 980.00, amount: 13720.00 },
        { no: '2', description: 'Sand', ref: 'M-113', unit: 'Cube', quantity: 0.6, rate: 20000.00, amount: 12000.00 },
        { no: '3', description: '1 " Metal', ref: 'M-064', unit: 'Cube', quantity: 0.9, rate: 14000.00, amount: 12600.00 },
        { no: '4', description: 'Hire of Mixer', ref: 'P-001', unit: 'Day', quantity: 0.333, rate: 4000.00, amount: 1332.00 },
        { no: '5', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 100, rate: 0.30, amount: 30.00 },
        { no: '6', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 0.333, rate: 2000.00, amount: 666.00 },
        { no: '7', description: 'U/SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 43948.00,
      rates: [
        { type: 'Rate for Cube', amount: 43948.00 },
        { type: 'Rate Say 1 Cube', amount: 43950.00 },
        { type: 'Rate Say 1 m3', amount: 15530.04 }
      ]
    },
    {
      title: 'Mixing Concrete 1:2:4(3/4")',
      data: [
        { no: '1', description: 'Cement', ref: 'M-026', unit: 'Bag', quantity: 18, rate: 980.00, amount: 17640.00 },
        { no: '2', description: 'Sand', ref: 'M-113', unit: 'Cube', quantity: 0.5, rate: 20000.00, amount: 10000.00 },
        { no: '3', description: '3/4 " Metal', ref: 'M-066', unit: 'Cube', quantity: 0.88, rate: 14000.00, amount: 12320.00 },
        { no: '4', description: 'Hire of Mixer', ref: 'P-001', unit: 'Day', quantity: 0.333, rate: 4000.00, amount: 1332.00 },
        { no: '5', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 120, rate: 0.30, amount: 36.00 },
        { no: '6', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 0.333, rate: 2000.00, amount: 666.00 },
        { no: '7', description: 'U/SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 45594.00,
      rates: [
        { type: 'Rate for Cube', amount: 45594.00 },
        { type: 'Rate Say 1 Cube', amount: 45590.00 },
        { type: 'Rate Say 1 m3', amount: 16109.54 }
      ]
    },
    {
      title: 'Mixing Concrete 1:1:2(3/4")',
      data: [
        { no: '1', description: 'Cement', ref: 'M-026', unit: 'Bag', quantity: 31, rate: 980.00, amount: 30380.00 },
        { no: '2', description: 'Sand', ref: 'M-113', unit: 'Cube', quantity: 0.44, rate: 20000.00, amount: 8800.00 },
        { no: '3', description: '3/4 " Metal', ref: 'M-066', unit: 'Cube', quantity: 0.96, rate: 14000.00, amount: 13440.00 },
        { no: '4', description: 'Hire of Mixer', ref: 'P-001', unit: 'Day', quantity: 0.333, rate: 4000.00, amount: 1332.00 },
        { no: '5', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 200, rate: 0.30, amount: 60.00 },
        { no: '6', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 0.333, rate: 2000.00, amount: 666.00 },
        { no: '7', description: 'U/SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 58278.00,
      rates: [
        { type: 'Rate for Cube', amount: 58278.00 },
        { type: 'Rate Say 1 Cube', amount: 58280.00 },
        { type: 'Rate Say 1 m3', amount: 20593.64 }
      ]
    }
  ];

    useEffect(() => {
       const fetchRates = async () => {
           try {
               const materialResponse = await fetch("/api/material_rate", {
                   headers: { "Cache-Control": "no-cache" },
               });
               const labourResponse = await fetch("/api/labour_rate", {
                   headers: { "Cache-Control": "no-cache" },
               });
               const plantResponse = await fetch("/api/plant_rate", {
                   headers: { "Cache-Control": "no-cache" },
               });
   
               if (materialResponse.ok && labourResponse.ok && plantResponse.ok) {
                   const materialData = await materialResponse.json();
                   const labourData = await labourResponse.json();
                   const plantData = await plantResponse.json();
   
                   const updatedData = exampleData.map((item) => {
                       let total = 0;
   
                       const updatedRows = item.data.map((row) => {
                           let rate = getRate(row.ref, labourData, materialData, plantData);
                           let amount = row.quantity && rate ? row.quantity * rate : 0;
   
                           // Logic for calculate the Allow 5% Wastage
                           if (row.description === "Allow 5% Wastage") {
                               const mainItem = item.data.find((r) => r.no === "1.01");
                               if (mainItem) {
                                   const mainItemAmount = mainItem.amount || 0;
                                   row.amount = mainItemAmount * 0.05;  // Calculate 5% wastage
                                   amount = row.amount; // Update the amount for the total calculation
                               } else {
                                   row.amount = 0; // If main item not found, set wastage to 0
                                   amount = 0; // Ensure amount is also 0
                               }
                           }
   
                           total += amount;
                           return { ...row, rate, amount };
                       });
   
                       return {
                           ...item,
                           data: updatedRows,
                           totalAmount: total.toFixed(2),
                           rates: [
                               { type: "1 Cube", amount: total },
                               { type: "1 L.ft", amount: total / 100 },
                           ],
                       };
                   });
   
                   setTableData(updatedData);
               } else {
                   console.error("Error fetching one or more rates");
               }
           } catch (error) {
               console.error("Error fetching rates:", error);
           }
       };
   
       fetchRates();
   }, []);
   
       
         const getRate = (ref, labourData, materialData,plantData) => {
           if (!ref) return 0;
           if (ref.startsWith("L")) {
             return labourData.find((item) => item.Code_no === ref)?.price || 0;
           }
           if (ref.startsWith("M")) {
             return materialData.find((item) => item.Code_no === ref)?.price || 0;
           }
      
           if (ref.startsWith("P")) {
            return plantData.find((item) => item.Code_no === ref)?.price || 0;
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
       