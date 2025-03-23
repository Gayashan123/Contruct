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
      title: "Preparing and apply one coat of Alkali resistant primer and two coats of emulsion paint to walls.(Analyse for 1 Sqr )",
      data: [
        { no: '1.0', description: 'Primer', ref: 'M-075', unit: 'litre', quantity: 0.9, rate: 329, amount: 296.10 },
        { no: '1.01', description: 'Emulsion Paint', ref: 'M-043', unit: 'litre', quantity: 1.4, rate: 647, amount: 905.80 },
        { no: '1.02', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 0.1, rate:1.00, amount: 0.10 },
        { no: '1.03', description: '6" Brush', ref: 'M-021', unit: 'No', quantity: 0.1, rate: 720, amount: 72.00 },
        { no: '1.04', description: 'Sand Papers', ref: 'M-114', unit: 'Sheet', quantity: 2, rate: 20.00, amount: 40.00 },
        { no: '1.05', description: 'Painter', ref: 'L-001', unit: 'Day', quantity: 1.25, rate: 800.00, amount: 1000.00 },
        { no: '1.06', description: 'Allow 3% Items (1.06) for Scaffolding', ref: '-', unit: '-', quantity: 0, rate: 0, amount: 30.00 },
      ],
      totalAmount: 2344.00,
      rates: [
        { type: '1 Sq', amount: 2344.00 },
        { type: '1 ft', amount: 23.44 },
        { type: '1 m', amount: 252.21 },
      ],
    },
    {
      title: "Painting walls with emulsion paint (2 Coats) (Analyse for 1 Sqr )",
      data: [
        { no: '1.0', description: 'Emulsion Paint - first coat', ref: 'M-043', unit: 'litre', quantity: 0.757, rate: 280.00, amount: 211.96 },
        { no: '1.01', description: 'Emulsion Paint - Second coat', ref: 'M-043', unit: "litre", quantity: 0.649, rate: 280.00, amount: 181.72 },
        { no: '1.02', description: '6" Brush', ref: 'M-021', unit: 'No', quantity: 0.1, rate: 495, amount: 49.50 },
        { no: '1.03', description: 'Water', ref: 'M-157', unit: 'Gal', quantity: 0.1, rate:0.30, amount: 0.03 },
        { no: '1.04', description: 'Painter', ref: 'L-001', unit: 'Day', quantity: 0.75, rate:2500.00, amount: 1875.00 },
      ],
      totalAmount: 2374.00,
      rates: [
        { type: '1 Cube', amount: 2374.00 },
        { type: '1 ft³', amount: 23.74 },
        { type: '1 m³', amount: 255.44 },
      ],
      floors: [ // Added floors only for this table
        { flo: 'Ground floor', rate:"1m²", amount: 255.44 },
        { flo: 'First floor', rate:"1m²", amount: 280.99 },
        { flo: 'Second floor', rate:"1m²", amount: 309.09 },
        { flo: 'Third Floor', rate:"1m²", amount: 339.99 },
      ],
    },
  {
    title: "White or colourwashing two coats in single storey (Analyse for 10 Sqr )",
    data: [
      { "no": "1.0", "description": "Boild Lime", "ref": "M-009", "unit": "Cwt", "quantity": 0.5, "rate": 300.00, "amount": 150.00 },
      { "no": "1.01", "description": "Salt", "ref": "M-112", "unit": "Lbs", "quantity": 2, "rate": 10.00, "amount": 20.00 },
      { "no": "1.02", "description": "Yellow Ochre", "ref": "M-166", "unit": "Lbs", "quantity": 0.5, "rate": 15.00, "amount": 7.50 },
      { "no": "1.03", "description": "Blue", "ref": "M-008", "unit": "Ozs", "quantity": 2, "rate": 10.00, "amount": 20.00 },
      { "no": "1.04", "description": "6\" Brush", "ref": "M-021", "unit": "No", "quantity": 0.333, "rate": 495.00, "amount": 165.83 },
      { "no": "1.05", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 10, "rate": 0.30, "amount": 3.00 },
      { "no": "1.07", "description": "Painter", "ref": "L-001", "unit": "Day", "quantity": 2.5, "rate": 2500.00, "amount": 687.50 },
      { "no": "1.08", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 2.5, "rate": 1800.00, "amount": 500.00 },
      { "no": "1.09", "description": "Allow 3% of Items (1.07, 1.08 ) for Scaffolding", "ref": "-", "unit": "-", "quantity": 0, "rate": 0, "amount": 35.63 }
    ],
    totalAmount: 1589.46,
    rates: [
      { "type": "1 Sqr", "amount": 159.00 },
      { "type": "1 ft²", "amount": 1.59 },
      { "type": "1 m²", "amount": 17.11 }
    ]
  },

  {
    title: "White or colourwashing two coats in two storeyed building (Analyse for 10 Sqr )",
    
    data: [
      { "no": "1.01", "description": "Boild Lime", "ref": "M-009", "unit": "Cwt", "quantity": 0.5, "rate": 300.00, "amount": 150.00 },
      { "no": "1.02", "description": "Salt", "ref": "M-112", "unit": "Lbs", "quantity": 2, "rate": 10.00, "amount": 20.00 },
      { "no": "1.03", "description": "Yellow Ochre", "ref": "M-166", "unit": "Lbs", "quantity": 0.5, "rate": 15.00, "amount": 7.50 },
      { "no": "1.04", "description": "Blue", "ref": "M-008", "unit": "Ozs", "quantity": 2, "rate": 10.00, "amount": 20.00 },
      { "no": "1.05", "description": "6\" Brush", "ref": "M-021", "unit": "No", "quantity": 0.333, "rate": 495.00, "amount": 164.84 },
      { "no": "1.06", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 10, "rate": 0.30, "amount": 3.00 },
      { "no": "1.07", "description": "Painter", "ref": "L-001", "unit": "Day", "quantity": 3, "rate": 2500.00, "amount": 7500.00 },
      { "no": "1.08", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 3, "rate": 1800.00, "amount": 5400.00 },
      { "no": "1.09", "description": "Allow 3% of Items (1.07, 1.08 ) for Scaffolding", "ref": "-", "unit": "-", "quantity": 0, "rate": 0, "amount": 387.00 }
    ],
    totalAmount: 13652.34,
    rates: [
      { "type": "1 Sqr", "amount": 1365.00 },
      { "type": "1 ft²", "amount": 13.65 },
      { "type": "1 m²", "amount": 146.87 }
    ]
  },
{

  title: "Cement washing to walls of single storeyed building 2 coats",
  
  data: [
    { "no": "1.01", "description": "Cement", "ref": "M-026", "unit": "Bag", "quantity": 0.625, "rate": 980.00, "amount": 612.50 },
    { "no": "1.02", "description": "6\" Coir Brush", "ref": "M-034", "unit": "No", "quantity": 1, "rate": 45.00, "amount": 45.00 },
    { "no": "1.03", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 5, "rate": 0.30, "amount": 1.50 },
    { "no": "1.04", "description": "Painter", "ref": "L-001", "unit": "Day", "quantity": 2, "rate": 2500.00, "amount": 5000.00 },
    { "no": "1.05", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 2, "rate": 1800.00, "amount": 3600.00 },
    { "no": "1.06", "description": "Allow 3% of Items (1.04, 1.05 ) for Scaffolding", "ref": "-", "unit": "-", "quantity": 0, "rate": 0, "amount": 258.00 }
  ],
  totalAmount: 9517.00,
  rates: [
    { "type": "1 Sqr", "amount": 952.00 },
    { "type": "1 ft²", "amount": 9.52 },
    { "type": "1 m²", "amount": 102.44 }
  ],
  floors: [
    { "floor": "Ground floor", "rate": "1m²", "amount": 102.44 },
    { "floor": "First Floor", "rate": "1m²", "amount": 112.68 },
    { "floor": "Second Floor", "rate": "1m²", "amount": 123.95 },
    { "floor": "Third Floor", "rate": "1m²", "amount": 136.34 }
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
                     if (row.description === "Allow 3% Items (1.06) for Scaffolding") {
                       const mainItemAmount = item.data[5]?.amount || 0; // Get the amount of the first item (1.01)
                       row.amount = mainItemAmount * 3 / 100; // Apply 5% wastage
                       amount = row.amount; // Update amount to the calculated wastage
                     }
           
                     // Calculate scaffolding wastage for "Allow 5% of Items (1.06, 1.07) for Scaffolding"
                     if (row.description === "Allow 3% of Items (1.07, 1.08 ) for Scaffolding") {
                       const masonAmount = item.data[6]?.amount || 0; // Get the amount for Mason (1.06)
                       const masonAmount1 = item.data[7]?.amount || 0; // Get the amount for Mason (1.06)
                       
                       row.amount = (masonAmount +masonAmount1) * 3 / 100; // Apply 5% wastage on mason and labourer
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