"use client";
import React, { useState, useEffect } from "react";

const TableComponent = ({ title, data, totalAmount, rates, floorRates }) => {
  return (
    <div className="p-4 bg-gray-100 w-full flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b pb-2">{title}</h2>

        {/* Main Table */}
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
                <td className="p-2 border">{row.ref || "-"}</td>
                <td className="p-2 border">{row.unit || "-"}</td>
                <td className="p-2 border">{row.quantity !== undefined ? row.quantity : "-"}</td>
                <td className="p-2 border">{row.rate !== undefined ? row.rate : "-"}</td>
                <td className="p-2 border font-semibold">{row.amount !== undefined ? row.amount : "-"}</td>
              </tr>
            ))}
            <tr className="font-bold text-center bg-gray-300">
              <td colSpan={6} className="p-2 border">Total</td>
              <td className="p-2 border">{totalAmount !== undefined ? totalAmount : "-"}</td>
            </tr>

            <tr className="font-bold text-center bg-gray-300">
              <td colSpan={7} className="p-2 border">Analysis For 1 SQR</td>
              
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
                  <td className="p-2 border">{rate.amount !== undefined ? rate.amount : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Floor Rates Section */}
        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-800 border-b pb-2">Floor Rates</h3>
          <table className="w-full border-collapse text-sm mt-2">
            <tbody>
              {floorRates.map((floor, index) => (
                <tr key={index} className="bg-gray-200 text-center font-semibold border-b">
                  <td className="p-2 border">{floor.floor}</td>
                  <td className="p-2 border">{floor.rate !== undefined ? floor.rate : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default function LabourAnalysis() {
  const [tableData, setTableData] = useState([]);

  const exampleData = [
    {
      title: "Timber Framework for 4' 0\"x4' 0\" flat asbestos ceiling (Sheet Measured separately) Comprising of 4\"x2\" joists and 2\"x2\" bearers in class 1 timber",
      analysis: "1.95 Sqrs",
      data: [
        { "no": "1.01", "description": "Timber Class I", "ref": "M-136", "unit": "Cu.ft", "quantity": 8, "rate": 1200.00, "amount": 9600.00 },
        { "no": "1.02", "description": "2\" Nails", "ref": "M-072", "unit": "Lbs", "quantity": 1, "rate": 50.00, "amount": 50.00 },
        { "no": "1.03", "description": "Fibre / Plastic Plugs", "ref": "M-045", "unit": "No", "quantity": 26, "rate": 1.50, "amount": 39.00 },
        { "no": "1.04", "description": "Cement", "ref": "M-026", "unit": "Bag", "quantity": 0.23, "rate": 980.00, "amount": 225.40 },
        { "no": "1.05", "description": "Sand", "ref": "M-113", "unit": "Cu", "quantity": 0.02, "rate": 20000.00, "amount": 400.00 },
        { "no": "1.06", "description": "Brush 2\"", "ref": "M-022", "unit": "No", "quantity": 0.25, "rate": 165.00, "amount": 41.25 },
        { "no": "1.07", "description": "Tarnap", "ref": "M-119", "unit": "Gal", "quantity": 0.333, "rate": 450.00, "amount": 149.85 },
        { "no": "1.08", "description": "Carpenter", "ref": "L-008", "unit": "Day", "quantity": 2.5, "rate": 2500.00, "amount": 6250.00 },
        { "no": "1.09", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 0.5, "rate": 2500.00, "amount": 1250.00 },
        { "no": "1.11", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 1.5, "rate": 1800.00, "amount": 2700.00 },
        { "no": "1.12", "description": "Allow 3% of Items ( 1.08, 1.09, 1.10 ) for Scaffolding", "ref": "-", "unit": "-", "quantity": 0, "rate": 0, "amount": 306.00 }
      ],
      totalAmount: 21011.50,
      rateFor1Sqr: 10775.13,
      rates: [
        {amount: 10775.00 },
      ]
    },
    {
      title: "Horizontal ceiling lining using 4' 0\"x4' 0\" flat asbestos cement sheets fixed with and including beading and cove mouldings on timber framework (Timber, framework, painting m/separately)",
      analysis: "1.95 Sqrs",
      data: [
        { "no": "1.01", "description": "Flat Asbestos Sheets", "ref": "M-048", "unit": "Sq.ft", "quantity": 210, "rate": 15.00, "amount": 3150.00 },
        { "no": "1.02", "description": "2\"X2\" halmilla Cove Moulding", "ref": "M-145", "unit": "Sq.ft", "quantity": 60, "rate": 35.00, "amount": 2100.00 },
        { "no": "1.03", "description": "1 1/2\"X1/2\" Halmilla Beadings", "ref": "M-134", "unit": "L.ft", "quantity": 125, "rate": 12.00, "amount": 1500.00 },
        { "no": "1.04", "description": "1/4\" clout Nails", "ref": "M-033", "unit": "lbs", "quantity": 0.25, "rate": 25.00, "amount": 6.25 },
        { "no": "1.05", "description": "Brass Screws 1 1/2\"", "ref": "M-015", "unit": "No", "quantity": 96, "rate": 3.75, "amount": 360.00 },
        { "no": "1.06", "description": "Carpenter", "ref": "L-008", "unit": "Day", "quantity": 1.5, "rate": 2500.00, "amount": 3750.00 },
        { "no": "1.07", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 2, "rate": 1800.00, "amount": 3600.00 },
        { "no": "1.08", "description": "Allow 3% of Items ( 1.06, 1.07 ) for Scaffolding", "ref": "-", "unit": "-", "quantity": 0, "rate": 0, "amount": 220.50 }
      ],
      totalAmount: 14686.75,
      rateFor1Sqr: 7531.67,
      rates: [
        {amount: 7532.00 },
      ]
    },
    {
      title: "3/4\" thick tongued and grooved Lunumidella ceiling boards fixed horizontal on 4\"X2\" class I timber Joists at 2' 0\" centres with 1 1/2 \" Brass Nails",
      analysis: "1.95 Sqrs",
      data: [
        { "no": "1.01", "description": "4\" x 2\" Timber Joists", "ref": "M-146", "unit": "L.ft", "quantity": 115, "rate": 65.00, "amount": 7475.00 },
        { "no": "1.02", "description": "6\" x 3/4\" Lunumidella Ceiling Planks.", "ref": "M-135", "unit": "Sq.ft", "quantity": 215, "rate": 28.00, "amount": 6020.00 },
        { "no": "1.03", "description": "Cement", "ref": "M-026", "unit": "Bag", "quantity": 0.027, "rate": 980.00, "amount": 26.46 },
        { "no": "1.04", "description": "Sand", "ref": "M-113", "unit": "Cu", "quantity": 0.04, "rate": 20000.00, "amount": 800.00 },
        { "no": "1.05", "description": "1 1/2 brass Nails", "ref": "M-012", "unit": "lbs", "quantity": 9, "rate": 50.00, "amount": 440.53 },
        { "no": "1.06", "description": "Mason - making holes, fixing joists & making goods", "ref": "L-009", "unit": "Day", "quantity": 1, "rate": 2500.00, "amount": 2500.00 },
        { "no": "1.07", "description": "Carpenter - making holes, fixing joists & making goods", "ref": "L-008", "unit": "Day", "quantity": 1, "rate": 2500.00, "amount": 2500.00 },
        { "no": "1.08", "description": "U / SK Labourer - making holes, fixing joists & making goods", "ref": "L-007", "unit": "Day", "quantity": 3, "rate": 1800.00, "amount": 5400.00 },
        { "no": "1.09", "description": "Carpenter - Fixing ceiling boards", "ref": "L-008", "unit": "Day", "quantity": 3, "rate": 2500.00, "amount": 7500.00 },
        { "no": "1.10", "description": "U / SK Labourer - Fixing ceiling boards", "ref": "L-007", "unit": "Day", "quantity": 4, "rate": 1800.00, "amount": 7200.00 },
        { "no": "1.11", "description": "Allow 3% of Items (1.06, 1.07, 1.08, 1.09, 1.10) for Scaffolding", "ref": "-", "unit": "-", "quantity": 0, "rate": 0, "amount": 753.00 }
      ],
      totalAmount: 40614.99,
      rateFor1Sqr: 20828.20,
      rates: [
        {amount: 20828.00 },
      ]
    },
    {
      title: "3/4\" X 6\" wide tongued and grooved Lunumidella ceiling boards fixed to underside of roof rafters. (Existing) with 1 1/2\" brass nails including levelling with timber strips where necessary",
      analysis: "1.8 Sq",
      data: [
        { "no": "1.01", "description": "6\" x 3/4\" Lunumidella Ceiling Planks.", "ref": "M-135", "unit": "Sq.ft", "quantity": 220, "rate": 28.00, "amount": 6160.00 },
        { "no": "1.02", "description": "2\" X 1/4\" Timber Strips", "ref": "M-150", "unit": "L.ft", "quantity": 40, "rate": 5.00, "amount": 200.00 },
        { "no": "1.03", "description": "3/4\" Nails", "ref": "M-073", "unit": "Lbs", "quantity": 4.5, "rate": 20.00, "amount": 90.00 },
        { "no": "1.04", "description": "1 1/2\" Brass Nails", "ref": "M-012", "unit": "Lbs", "quantity": 9, "rate": 50.00, "amount": 440.53 },
        { "no": "1.05", "description": "carpenter", "ref": "L-008", "unit": "Day", "quantity": 2, "rate": 2500.00, "amount": 7500.00 },
        { "no": "1.06", "description": "u  / sk Labour", "ref": "L-007", "unit": "Day", "quantity": 3, "rate": 1800.00, "amount": 10800.00 },
        { "no": "1.07", "description": "Allow 3% of Items ( 1.05, 1.06 ) for Scaffolding", "ref": "-", "unit": "-", "quantity": 0, "rate": 0, "amount": 549.00 }
      ],
      totalAmount: 25739,
      rateFor1Sqr: 14299,
      rates: [
        {amount: 14300.00 },
      ]

    }
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
                if (row.description === "Allow 3% of Items ( 1.08, 1.09, 1.10 ) for Scaffolding") {
                  const masonAmount = item.data[7]?.amount || 0; // Get the amount for Mason (1.06)
                  const labourerAmount1 = item.data[8]?.amount || 0; // Get the amount for Labourer (1.07)
                  const labourerAmount2 = item.data[9]?.amount || 0; // Get the amount for Labourer (1.07)
                 
                  row.amount = (masonAmount + labourerAmount1 + labourerAmount2) * 3 / 100; // Apply 5% wastage on mason and labourer
                  amount = row.amount; // Update amount to the calculated scaffolding wastage
                }
      
                // Calculate scaffolding wastage for "Allow 5% of Items (1.06, 1.07) for Scaffolding"
                if (row.description === "Allow 3% of Items ( 1.06, 1.07 ) for Scaffolding") {
                  const masonAmount = item.data[5]?.amount || 0; // Get the amount for Mason (1.06)
                  const labourerAmount = item.data[6]?.amount || 0; // Get the amount for Labourer (1.07)
                  row.amount = (masonAmount + labourerAmount) * 3 / 100; // Apply 5% wastage on mason and labourer
                  amount = row.amount; // Update amount to the calculated scaffolding wastage
                }


                if (row.description === "Allow 3% of Items (1.06, 1.07, 1.08, 1.09, 1.10) for Scaffolding") {
                  const mainItemAmount = item.data[5].amount || 0; // Get the amount of the first item (1.01)
                  const mainItemAmount1 = item.data[6].amount || 0; // Get the amount of the first item (1.01)
                  const mainItemAmount2 = item.data[7].amount || 0; // Get the amount of the first item (1.01)
                  const mainItemAmount3 = item.data[8].amount || 0; // Get the amount of the first item (1.01)
                  const mainItemAmount4 = item.data[9].amount || 0; // Get the amount of the first item (1.01)
                  row.amount = (mainItemAmount+mainItemAmount1+mainItemAmount2+mainItemAmount4+mainItemAmount3) * 3 / 100;
                  
                  amount = row.amount; // Update amount to the calculated wastage
                }

                if (row.description === "Allow 3% of Items ( 1.06, 1.07 ) for Scaffolding") {
                  const masonAmount = item.data[5]?.amount || 0; // Get the amount for Mason (1.06)
                  const labourerAmount = item.data[6]?.amount || 0; // Get the amount for Labourer (1.07)
                  row.amount = (masonAmount + labourerAmount) * 3 / 100; // Apply 5% wastage on mason and labourer
                  amount = row.amount; // Update amount to the calculated scaffolding wastage
                }

                if (row.description === "Allow 3% of Items ( 1.05, 1.06 ) for Scaffolding") {
                  const masonAmount = item.data[4]?.amount || 0; // Get the amount for Mason (1.06)
                  const labourerAmount = item.data[5]?.amount || 0; // Get the amount for Labourer (1.07)
                  row.amount = (masonAmount + labourerAmount) * 3 / 100; // Apply 5% wastage on mason and labourer
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