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
          title: "Excavation over site to reduce level (except rock requiring blasting) ",
          data: [
            { no: '1.01', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 1.625, rate: 1800, amount: 2925.00 },
            { no: '1.02', description: 'Allow 2.5% of Items for Tools', ref: '-', unit: '-', quantity: 0, rate: 0, amount: 73.13 },
          ],
          totalAmount: 2925.00,
          rates: [
            { type: '1 Cube', amount: 2925.00 },
            { type: '1 ft³', amount: 29.25 },
            { type: '1 m³', amount: 1034.00 },
          ],
        },
        {
          title: "Excavation in trenches for walls/column pits in loose soil ",
          data: [
            { no: '1.01', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 1, rate: 1800, amount: 1800.00 },
            { no: '1.02', description: 'Allow 2.5% of Items for Tools', ref: '-', unit: '-', quantity: 0, rate: 0, amount: 45.00 },
          ],
          totalAmount: 1800.00,
          rates: [
            { type: '1 Cube', amount: 1800.00 },
            { type: '1 ft³', amount: 18.00 },
            { type: '1 m³', amount: 636.00 },
          ],
        },
        {
          title: "Excavation in trenches for walls/column pits in ordinary soil",
          data: [
            { no: '1.01', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2.25, rate: 1800, amount: 4050.00 },
            { no: '1.02', description: 'Allow 2.5% of Items for Tools', ref: '-', unit: '-', quantity: 0, rate: 0, amount: 101.25 },
          ],
          totalAmount: 4151.25,
          rates: [
            { type: '1 Cube', amount: 4151.25 },
            { type: '1 ft³', amount: 41.51 },
            { type: '1 m³', amount: 1467.00 },
          ],
        },
        {
          title: "Excavation in trenches for walls/column pits in mud/wet soil ",
          data: [
            { no: '1.01', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 3, rate: 1800, amount: 5400.00 },
            { no: '1.02', description: 'Allow 2.5% of Items for Tools', ref: '-', unit: '-', quantity: 0, rate: 0, amount: 135.00 },
          ],
          totalAmount: 5400.00,
          rates: [
            { type: '1 Cube', amount: 5400.00 },
            { type: '1 ft³', amount: 54.00 },
            { type: '1 m³', amount: 1908.00 },
          ],
        },
        {
          title: "Excavation in trenches for walls/column pits in soft disintegrated rock (not requiring blasting) ",
          data: [
            { no: '1.01', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2.5, rate: 1800, amount: 4500.00 },
            { no: '1.02', description: 'Allow 2.5% of Items for Tools', ref: '-', unit: '-', quantity: 0, rate: 0, amount: 112.50 },
          ],
          totalAmount: 4612.50,
          rates: [
            { type: '1 Cube', amount: 4612.50 },
            { type: '1 ft³', amount: 46.13 },
            { type: '1 m³', amount: 1629.86 },
          ],
        },
        {
          title: "Excavation in trenches for walls/column pits in Hard rock requiring Blasting ",
          data: [
            { no: '1.01', description: 'Blasting Powder', ref: 'M-007', unit: 'Lbs', quantity: 0.75, rate: 200, amount: 150.00 },
            { no: '1.02', description: 'Fuse Wire', ref: 'M-051', unit: 'L.ft', quantity: 10, rate: 10, amount: 100.00 },
            { no: '1.03', description: 'Jumper Steel', ref: 'M-062', unit: 'Lbs', quantity: 1, rate: 65, amount: 65.00 },
            { no: '1.04', description: 'Allow 20% of Items for Steel Fuel and Forge', ref: '-', unit: '-', quantity: '-', rate: '-', amount: 63.00 },
            { no: '1.05', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 1, rate: 2000, amount: 2000.00 },
            { no: '1.06', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 2, rate: 1800, amount: 3600.00 },
          ],
          totalAmount: 5978.00,
          rates: [
            { type: '1 Cube', amount: 5978.00 },
            { type: '1 ft³', amount: 59.78 },
            { type: '1 m³', amount: 2112.00 },
          ],
        },
        {
          title: "Benching Rock in foundation in 3\"-6\" Steps (Blasting Prohibited) ",
          data: [
            { no: '1.01', description: 'SK Labour', ref: 'L-003', unit: 'Day', quantity: 1.5, rate: 2000, amount: 3000.00 },
            { no: '1.02', description: 'Allow 25% of Items for Steel, Fuel & Forge', ref: '-', unit: '-', quantity: 0, rate: 0, amount: 750.00 },
            { no: '1.03', description: 'U / SK Labourer', ref: 'L-007', unit: 'Day', quantity: 0.5, rate: 1800, amount: 900.00 },
          ],
          totalAmount: 4650.00,
          rates: [
            { type: '1 Sq.ft', amount: 465.00 },
            { type: '1 m²', amount: 5003.40 },
          ],
        },
        {
          title: "Rock Requiring Blasting  ",
          data: [
            { no: '1.01', description: 'Labour Skilled', ref: 'L-003', unit: 'Day', quantity: 3, rate: 2000, amount: 6000.00 },
            { no: '1.02', description: 'Allow 2.5% of Items for Tools', ref: '-', unit: '-', quantity: 0, rate: 0, amount: 150.00 },
            { no: '1.03', description: 'Fuel Forge etc.', ref: 'M-050', unit: 'Ltr', quantity: 0.25, rate: 100, amount: 25.00 },
            { no: '1.04', description: 'Blasting Powder', ref: 'M-007', unit: 'lbs', quantity: 0.68, rate: 200, amount: 136.00 },
            { no: '1.05', description: 'Fuse Wire', ref: 'M-051', unit: 'L.ft', quantity: 3.05, rate: 10, amount: 30.50 },
            { no: '1.06', description: 'Steel Jumper', ref: 'M-062', unit: 'lbs', quantity: 0.45, rate: 46, amount: 20.70 },
          ],
          totalAmount: 6362.20,
          rates: [
            { type: '1 Cube', amount: 6362.20 },
            { type: '1 ft³', amount: 63.62 },
            { type: '1 m³', amount: 2248.00 },
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
        