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
      title: "Sawn timber formwork for underside of first floor slab (Analyse for 2 Sqr )",
      data: [
        { no: "1.01", description: "Sawn timber formwork for 20\" x 10\" concrete slab in ground floor - Making  panels", ref: "M-168", unit: "1 Use", quantity: 1, rate: 8816.00, amount: 8816.00 },
        { no: "1.02", description: "Allow 20% of Items ( 1.01 ) for Repairs", ref: "-", unit: "-", quantity: 0, rate: 0, amount: 1763.20 },
        { no: "1.03", description: "Sawn timber formwork for underside of first floor slab - assembling", ref: "M-169", unit: "Sq", quantity: 1, rate: 8176.00, amount: 8176.00 },
        { no: "1.04", description: "Allow 20% of Items ( 1.03 ) for Wastage", ref: "-", unit: "-", quantity: 0, rate: 0, amount: 1635.20 },
        { no: "1.05", description: "Carpenter - Assembling", ref: "L-008", unit: "Day", quantity: 1, rate: 2500.00, amount: 2500.00 },
        { no: "1.06", description: "U / SK Labourer - Assembling", ref: "L-007", unit: "Day", quantity: 4, rate: 1800.00, amount: 7200.00 },
        { no: "1.07", description: "Mould Oil", ref: "M-071", unit: "litre", quantity: 4.54, rate: 35.00, amount: 158.90 },
        { no: "1.08", description: "Wire Nails", ref: "M-161", unit: "Lbs", quantity: 2, rate: 50.00, amount: 100.00 },
        { no: "1.09", description: "Carpenter - dismantling, cleaning & repairing", ref: "L-008", unit: "Day", quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { no: "1.10", description: "U / SK Labourer - dismantling, cleaning & repairing", ref: "L-007", unit: "Day", quantity: 2, rate: 1800.00, amount: 3600.00 }
      ],
      totalAmount: 35199.30,
      rates: [
        { type: "Rate for 1 Sq", amount: 17599.65 },
        { type: "Rate (Say) 1 Sq", amount: 17600.00 },
        { type: "Rate (Say) 1 ft2", amount: 176.00 },
        { type: "Rate (Say) 1 m2", amount: 1893.76 },
        { type: "Ground floor 1 m2", amount: 1893.76 },
        { type: "First Floor 1 m2", amount: 2083.14 },
        { type: "Second Floor 1 m2", amount: 2291.45 },
        { type: "Third Floor 1 m2", amount: 2520.59 }
      ],
      floors: []
    },
    {
      title: "Sawn timber formwork for 20\" x 10\" concrete slab in ground floor - Making panels (Analyse for 4 Uses )",
      data: [
        { no: "1.01", description: "1\" Thick Class II Timber", ref: "M-141", unit: "Sq.ft", quantity: 220, rate: 65.00, amount: 14300.00 },
        { no: "1.02", description: "Timber props 4\" x 2\"", ref: "M-144", unit: "L.ft", quantity: 121, rate: 65.00, amount: 7865.00 },
        { no: "1.03", description: "Wire Nails", ref: "M-161", unit: "Lbs", quantity: 4, rate: 50.00, amount: 200.00 },
        { no: "1.04", description: "Carpenter", ref: "L-008", unit: "Day", quantity: 3, rate: 2500.00, amount: 7500.00 },
        { no: "1.05", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 3, rate: 1800.00, amount: 5400.00 }
      ],
      totalAmount: 35265.00,
      rates: [
        { type: "Rate for 1 Use", amount: 8816.25 },
        { type: "Rate (Say) 1 Use", amount: 8816.00 }
      ],
      floors: []
    },
    {
      title: "Sawn timber formwork for underside of first floor slab - Assembling (Analyse for 6 Uses ) ",
      data: [
        { no: "1.01", description: "Timber props 4\" x 2\"", ref: "M-144", unit: "L.ft", quantity: 690, rate: 65.00, amount: 44850.00 },
        { no: "1.02", description: "2\" x 2\" Class II Timber In Yokes", ref: "M-143", unit: "L.ft", quantity: 66, rate: 22.00, amount: 1452.00 },
        { no: "1.03", description: "Timber Wedges", ref: "M-151", unit: "No", quantity: 122, rate: 5.00, amount: 610.00 },
        { no: "1.04", description: "1\" Thick Class II Timber", ref: "M-141", unit: "Sq.ft", quantity: 33, rate: 65.00, amount: 2145.00 }
      ],
      totalAmount: 49057.00,
      rates: [
        { type: "Rate for 1 Use", amount: 8176.17 },
        { type: "Rate (Say) 1 Use", amount: 8176.00 }
      ],
      floors: []
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
                if (row.description === "Allow 20% of Items ( 1.01 ) for Repairs") {
                  const mainItemAmount = item.data[0]?.amount || 0; // Get the amount of the first item (1.01)
                  row.amount = mainItemAmount * 20 / 100; // Apply 5% wastage
                  amount = row.amount; // Update amount to the calculated wastage
                }
      
                // Calculate scaffolding wastage for "Allow 5% of Items (1.06, 1.07) for Scaffolding"
                if (row.description === "Allow 20% of Items ( 1.03 ) for Wastage") {
                  const masonAmount = item.data[2]?.amount || 0; // Get the amount for Mason (1.06)
                  
                  row.amount = masonAmount  * 20 / 100; // Apply 5% wastage on mason and labourer
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