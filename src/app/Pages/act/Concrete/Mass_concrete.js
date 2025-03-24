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
      title: "2\" thick Cement Concrete screed 1:3:6 (1 1/2) in foundation at depth not exceeding 5' 0\"",
      data: [
        { no: "1.01", description: "Mixing Concrete 1:3:6(1 1/2\")", ref: "M-173", unit: "Cube", quantity: 0.1667, rate: 41850.00, amount: 6976.40 },
        { no: "1.02", description: "SK Labour", ref: "L-003", unit: "Day", quantity: 0.125, rate: 2000.00, amount: 250.00 },
        { no: "1.03", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.5, rate: 1800.00, amount: 900.00 }
      ],
      totalAmount: 8126.40,
      rates: [
        { type: "Rate for 1 Sqr", amount: 8126.40 },
        { type: "Rate (Say) 1 Sqr", amount: 8130.00 },
        { type: "Rate (Say) 1 ft2", amount: 81.30 },
        { type: "Rate (Say) 1 m2", amount: 874.79 }
      ]
    },
    {
      title: "3\" Thick cement concrete 1:3:6(1-1/2\") screed in foundation at depths not exceeding 5' 0\"",
      data: [
        { no: "1.01", description: "Mixing Concrete 1:3:6(1 1/2\")", ref: "M-173", unit: "Cube", quantity: 0.25, rate: 41850.00, amount: 10462.50 },
        { no: "1.02", description: "SK Labour", ref: "L-003", unit: "Day", quantity: 0.125, rate: 2000.00, amount: 250.00 },
        { no: "1.03", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.75, rate: 1800.00, amount: 1350.00 }
      ],
      totalAmount: 12062.50,
      rates: [
        { type: "Rate for 1 Sqr", amount: 12062.50 },
        { type: "Rate (Say) 1 Sqr", amount: 12060.00 },
        { type: "Rate (Say) 1 ft2", amount: 120.60 },
        { type: "Rate (Say) 1 m2", amount: 1297.66 }
      ]
    },
    {
      title: "6\" Thick cement concrete 1:2-1/2:5(1\") in floor (Mass concrete)",
      data: [
        { no: "1.01", description: "Mixing Concrete 1:2 1/2 : 5(1\")", ref: "05.A.03", unit: "Cube", quantity: 0.5, rate: 43950.00, amount: 21975.00 },
        { no: "1.02", description: "Water", ref: "M-157", unit: "Gal", quantity: 200, rate: 0.30, amount: 60.00 },
        { no: "1.03", description: "SK Labour", ref: "L-003", unit: "Day", quantity: 0.5, rate: 2000.00, amount: 1000.00 },
        { no: "1.04", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 1.25, rate: 1800.00, amount: 2250.00 }
      ],
      totalAmount: 25285.00,
      rates: [
        { type: "Rate for 1 Sqr", amount: 25285.00 },
        { type: "Rate (Say) 1 Sqr", amount: 25290.00 },
        { type: "Rate (Say) 1 ft2", amount: 252.90 },
        { type: "Rate (Say) 1 m2", amount: 2721.20 }
      ]
    }
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
                               if (row.description === "Allow 2.5% of Items for Tools") {
                                 const mainItemAmount = item.data[0]?.amount || 0; // Get the amount of the first item (1.01)
                                 row.amount = mainItemAmount * 2.5 / 100; // Apply 5% wastage
                                 amount = row.amount; // Update amount to the calculated wastage
                               }
                     
                               // Calculate scaffolding wastage for "Allow 5% of Items (1.06, 1.07) for Scaffolding"
                               if (row.description === "Allow 20% of Items for Steel Fuel and Forge") {
                                 const masonAmount = item.data[1]?.amount || 0; // Get the amount for Mason (1.06)
                                
                                 
                                 row.amount = masonAmount * 20/ 100; // Apply 5% wastage on mason and labourer
                                 amount = row.amount; // Update amount to the calculated scaffolding wastage
                               }
         
                               if (row.description === "Allow 25% of Items for Steel, Fuel & Forge") {
                                 const masonAmount = item.data[0]?.amount || 0; // Get the amount for Mason (1.06)
                                
                                 
                                 row.amount = masonAmount * 25 / 100; // Apply 5% wastage on mason and labourer
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
                 