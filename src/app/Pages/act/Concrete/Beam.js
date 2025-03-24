"use client";

import React, { useState, useEffect } from "react";

const TableComponent = ({ title, data, totalAmount, rates, floors }) => {
  return (
    <div className="p-4 bg-gray-100 w-full flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b pb-2">
          {title}
        </h2>

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
              <tr
                key={index}
                className="text-center border-b hover:bg-gray-100"
              >
                <td className="p-2 border">{row.no}</td>
                <td className="p-2 border text-left">{row.description}</td>
                <td className="p-2 border">{row.ref || "-"}</td>
                <td className="p-2 border">{row.unit || "-"}</td>
                <td className="p-2 border">
                  {row.quantity !== undefined ? row.quantity : "-"}
                </td>
                <td className="p-2 border">
                  {row.rate !== undefined ? row.rate : "-"}
                </td>
                <td className="p-2 border font-semibold">{row.amount}</td>
              </tr>
            ))}
            <tr className="font-bold text-center bg-gray-300">
              <td colSpan={6} className="p-2 border">
                Total
              </td>
              <td className="p-2 border">{totalAmount}</td>
            </tr>
          </tbody>
        </table>

        {/* Rate Section */}
        <div className="mt-4">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {rates.map((rate, index) => (
                <tr
                  key={index}
                  className="bg-yellow-200 text-center font-semibold border-b"
                >
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
            <h3 className="text-md font-semibold text-gray-800 mb-2 text-center border-b pb-2">
              Floors Analysis
            </h3>
            <table className="w-full border-collapse text-sm">
              <tbody>
                {floors.map((floor, index) => (
                  <tr
                    key={index}
                    className="bg-blue-200 text-center font-semibold border-b"
                  >
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
      title: 'Cement Concrete 1:2:4(3/4") in 6" X 6" Beams Upto 1st floor level',
      data: [
        {
          no: '1.01',
          description: 'Mixing Concrete 1:2:4(3/4")',
          ref: 'M-175',
          unit: 'Cube',
          quantity: 0.45,
          rate: 45_590.00,
          amount: 20_515.50
        },
        {
          no: '1.02',
          description: 'Hire of Vibrator',
          ref: 'P-002',
          unit: 'Day',
          quantity: 1,
          rate: 3_500.00,
          amount: 3_500.00
        },
        {
          no: '1.03',
          description: 'Mason',
          ref: 'L-009',
          unit: 'Day',
          quantity: 1,
          rate: 2_500.00,
          amount: 2_500.00
        },
        {
          no: '1.04',
          description: 'U / SK Labourer',
          ref: 'L-007',
          unit: 'Day',
          quantity: 4,
          rate: 1_800.00,
          amount: 7_200.00
        },
        {
          no: '1.05',
          description: 'SK Labourer (Vibrator)',
          ref: 'L-004',
          unit: 'Day',
          quantity: 1,
          rate: 2_000.00,
          amount: 2_000.00
        },
        {
          no: '1.06',
          description: 'Jute Hessian',
          ref: 'M-063',
          unit: 'Sq.ft',
          quantity: 90,
          rate: 3.50,
          amount: 315.00
        },
        {
          no: '1.07',
          description: 'Water',
          ref: 'M-157',
          unit: 'Gal',
          quantity: 180,
          rate: 0.30,
          amount: 54.00
        },
        {
          no: '1.08',
          description: 'U / SK Labourer (curing)',
          ref: 'L-007',
          unit: 'Day',
          quantity: 0.5,
          rate: 1_800.00,
          amount: 900.00
        }
      ],
      totalAmount: 38_010.28,
      rates: [
        { type: '1 ft', amount: 211.17 },
        { type: '1 Cube', amount: 84_467.28 },
        { type: '1 m', amount: 688.80 },
        { type: 'Ground floor', amount: 29_848.06 },
        { type: 'First Floor', amount: 32_832.86 },
        { type: 'Second Floor', amount: 36_116.15 },
        { type: 'Third Floor', amount: 39_727.76 }
      ],
      floors: [
        { flo: 'Ground floor', rate: 688.80, amount: 29_848.06 },
        { flo: 'First Floor', rate: 757.68, amount: 32_832.86 },
        { flo: 'Second Floor', rate: 833.45, amount: 36_116.15 },
        { flo: 'Third Floor', rate: 916.79, amount: 39_727.76 }
      ]
    },

    {
        "title": "Cement Concrete 1:2:4 (3/4\") in 9\" X 6\" Beams Upto 1st Floor Level",
        "data": [
          {
            "no": "1.01",
            "description": "Mixing Concrete 1:2:4 (3/4\")",
            "ref": "M-175",
            "unit": "Cube",
            "quantity": 0.45,
            "rate": 45590.00,
            "amount": 20515.50
          },
          {
            "no": "1.02",
            "description": "Hire of Vibrator",
            "ref": "P-002",
            "unit": "Day",
            "quantity": 1,
            "rate": 3500.00,
            "amount": 3500.00
          },
          {
            "no": "1.03",
            "description": "Mason",
            "ref": "L-009",
            "unit": "Day",
            "quantity": 1,
            "rate": 2500.00,
            "amount": 2500.00
          },
          {
            "no": "1.04",
            "description": "U / SK Labourer",
            "ref": "L-007",
            "unit": "Day",
            "quantity": 4,
            "rate": 1800.00,
            "amount": 7200.00
          },
          {
            "no": "1.05",
            "description": "SK Labourer (Vibrator)",
            "ref": "L-004",
            "unit": "Day",
            "quantity": 1,
            "rate": 2000.00,
            "amount": 2000.00
          },
          {
            "no": "1.06",
            "description": "Jute Hessian",
            "ref": "M-063",
            "unit": "Sq.ft",
            "quantity": 75,
            "rate": 3.50,
            "amount": 262.50
          },
          {
            "no": "1.07",
            "description": "Water",
            "ref": "M-157",
            "unit": "Gal",
            "quantity": 150,
            "rate": 0.30,
            "amount": 45.00
          },
          {
            "no": "1.08",
            "description": "U / SK Labourer (curing)",
            "ref": "L-007",
            "unit": "Day",
            "quantity": 0.5,
            "rate": 1800.00,
            "amount": 900.00
          }
        ],
        "totalAmount": 37948.78,
        "rates": [
          { "type": "1 ft", "amount": 316.24 },
          { "type": "1 Cube", "amount": 84330.61 },
          { "type": "1 m", "amount": 1049.60 },
          { "type": "Ground floor", "amount": 29798.59 },
          { "type": "First Floor", "amount": 32778.45 },
          { "type": "Second Floor", "amount": 36056.29 },
          { "type": "Third Floor", "amount": 39661.92 }
        ],
        "floors": [
          { "flo": "Ground floor", "rate": 1049.60, "amount": 29798.59 },
          { "flo": "First Floor", "rate": 1154.56, "amount": 32778.45 },
          { "flo": "Second Floor", "rate": 1270.02, "amount": 36056.29 },
          { "flo": "Third Floor", "rate": 1397.02, "amount": 39661.92 }
        ]
      },
      {
        "title": "Cement Concrete 1:2:4 (3/4\") in 9\" X 9\" Beams Upto 1st Floor Level",
        "data": [
          {
            "no": "1.01",
            "description": "Mixing Concrete 1:2:4 (3/4\")",
            "ref": "M-175",
            "unit": "Cu",
            "quantity": 0.45,
            "rate": 45590.00,
            "amount": 20515.50
          },
          {
            "no": "1.02",
            "description": "Hire of Vibrator",
            "ref": "P-002",
            "unit": "Day",
            "quantity": 1,
            "rate": 3500.00,
            "amount": 3500.00
          },
          {
            "no": "1.03",
            "description": "Mason",
            "ref": "L-009",
            "unit": "Day",
            "quantity": 1,
            "rate": 2500.00,
            "amount": 2500.00
          },
          {
            "no": "1.04",
            "description": "U / SK Labourer",
            "ref": "L-007",
            "unit": "Day",
            "quantity": 4,
            "rate": 1800.00,
            "amount": 7200.00
          },
          {
            "no": "1.05",
            "description": "SK Labourer (Vibrator)",
            "ref": "L-004",
            "unit": "Day",
            "quantity": 1,
            "rate": 2000.00,
            "amount": 2000.00
          },
          {
            "no": "1.06",
            "description": "Jute Hessian",
            "ref": "M-063",
            "unit": "Sq.ft",
            "quantity": 60,
            "rate": 3.50,
            "amount": 210.00
          },
          {
            "no": "1.07",
            "description": "Water",
            "ref": "M-157",
            "unit": "Gal",
            "quantity": 120,
            "rate": 0.30,
            "amount": 36.00
          },
          {
            "no": "1.08",
            "description": "U / SK Labourer (curing)",
            "ref": "L-007",
            "unit": "Day",
            "quantity": 0.5,
            "rate": 1800.00,
            "amount": 900.00
          }
        ],
        "totalAmount": 37887.28,
        "rates": [
          { "type": "1 ft", "amount": 473.59 },
          { "type": "1 Cube", "amount": 84193.94 },
          { "type": "1 m", "amount": 1541.60 },
          { "type": "Ground floor", "amount": 29749.12 },
          { "type": "First Floor", "amount": 32724.03 },
          { "type": "Second Floor", "amount": 35996.43 },
          { "type": "Third Floor", "amount": 39596.07 }
        ],
        "floors": [
          { "flo": "Ground floor", "rate": 1541.60, "amount": 29749.12 },
          { "flo": "First Floor", "rate": 1695.76, "amount": 32724.03 },
          { "flo": "Second Floor", "rate": 1865.34, "amount": 35996.43 },
          { "flo": "Third Floor", "rate": 2051.87, "amount": 39596.07 }
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
         })
           const plantResponse = await fetch("/api/plant_rate", {
            headers: { "Cache-Control": "no-cache" },
 


         });
 
         if (materialResponse.ok && labourResponse.ok) {
           const materialData = await materialResponse.json();
           const labourData = await labourResponse.json();
           const plantData = await plantResponse.json();
 
           const updatedData = exampleData.map((item) => {
             let total = 0;
 
             // Iterate over each row in the data to calculate values
             const updatedRows = item.data.map((row, index) => {
               let rate = getRate(row.ref, labourData, materialData,plantData);
               let amount = row.quantity !== undefined ? row.quantity * rate : 0;
 
               // Calculate wastage for "Allow 5% of Items (1.01) for Wastage"
               if (row.description === "Allow 5% Wastage") {
                 const mainItemAmount = item.data[0]?.amount || 0; // Get the amount of the first item (1.01)
                 row.amount = (mainItemAmount * 5) / 100; // Apply 5% wastage
                 amount = row.amount; // Update amount to the calculated wastage
               }
 
               // Calculate scaffolding wastage for "Allow 5% of Items (1.06, 1.07) for Scaffolding"
               if (
                 row.description ===
                 "Allow 20% of Items for Steel Fuel and Forge"
               ) {
                 const masonAmount = item.data[1]?.amount || 0; // Get the amount for Mason (1.06)
 
                 row.amount = (masonAmount * 20) / 100; // Apply 5% wastage on mason and labourer
                 amount = row.amount; // Update amount to the calculated scaffolding wastage
               }
 
               if (
                 row.description === "Allow 25% of Items for Steel, Fuel & Forge"
               ) {
                 const masonAmount = item.data[0]?.amount || 0; // Get the amount for Mason (1.06)
 
                 row.amount = (masonAmount * 25) / 100; // Apply 5% wastage on mason and labourer
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
                 { type: "1 Sq", amount: total },
                 { type: "1 ft²", amount: total / 100 },
                 { type: "1 m²", amount: total / 929.03 },
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
 