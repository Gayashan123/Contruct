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
      title: "18 B.W.G (1.2 mm) galvanised iron sheet valley gutter 3' 0\" girth over all once bent with end laps not less than 9\" width including 3/4\" tongued and grooved planks laid to slope and profile on timber members.",
      data: [
        { no: "1.01", description: "Sheet (8'X4')", ref: "M-052", unit: "Sheet", quantity: 2, rate: 2200.00, amount: 4400.00 },
        { no: "1.02", description: "Wood Preservative", ref: "M-165", unit: "Gal", quantity: 0.25, rate: 450.00, amount: 112.50 },
        { no: "1.03", description: "Cement", ref: "M-026", unit: "Bag", quantity: 0.1, rate: 980.00, amount: 98.00 },
        { no: "1.04", description: "Slaked Lime", ref: "M-115", unit: "Lbs", quantity: 0.05, rate: 275.00, amount: 13.75 },
        { no: "1.05", description: "Sand", ref: "M-113", unit: "Cu", quantity: 0.01, rate: 20000.00, amount: 200.00 },
        { no: "1.06", description: "1\" Thick Class II Timber", ref: "M-141", unit: "Sq.ft", quantity: 50, rate: 65.00, amount: 3250.00 },
        { no: "1.07", description: "2\" Nails", ref: "M-072", unit: "Lbs", quantity: 2, rate: 50.00, amount: 100.00 },
        { no: "1.08", description: "Carpenter", ref: "L-008", unit: "Day", quantity: 1, rate: 2500.00, amount: 2500.00 },
        { no: "1.09", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 1, rate: 1800.00, amount: 1800.00 },
        { no: "1.10", description: "Tinker", ref: "L-005", unit: "Day", quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { no: "1.11", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.5, rate: 1800.00, amount: 900.00 },
        { no: "1.12", description: "Mason", ref: "L-009", unit: "Day", quantity: 0.25, rate: 2500.00, amount: 625.00 },
        { no: "1.13", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.25, rate: 1800.00, amount: 450.00 }
      ],
      totalAmount: 15699.25,
      rates: [{ type: "Rate for 1 L.ft.", amount: 1046.62 }, { type: "Rate (Say)", amount: 1047.00 }],
      floors: []
    },
    {
      title: "18 B.W.G (1.2 mm) GI Flashing 1' 6\" girth overall 3 thies bent with end laps not less than 6\", soldered, turned and tucked up to not less than 6\" into chase cut in wall and pointed in 1:2 mortar, lower end dressed over roof covering not less than 1' 0\" wide",
      data: [
        { no: "1.01", description: "Sheet (8'X4')", ref: "M-052", unit: "Sheet", quantity: 1, rate: 2200.00, amount: 2200.00 },
        { no: "1.02", description: "Cement", ref: "M-026", unit: "Bag", quantity: 0.05, rate: 980.00, amount: 49.00 },
        { no: "1.03", description: "Sand", ref: "M-113", unit: "Cu", quantity: 0.01, rate: 20000.00, amount: 200.00 },
        { no: "1.04", description: "Soldering Lead", ref: "M-116", unit: "Lbs", quantity: 1, rate: 13.75, amount: 13.75 },
        { no: "1.05", description: "Tinker", ref: "L-005", unit: "Day", quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { no: "1.06", description: "Mason", ref: "L-009", unit: "Day", quantity: 0.125, rate: 2500.00, amount: 312.50 },
        { no: "1.07", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.75, rate: 1800.00, amount: 1350.00 }
      ],
      totalAmount: 5375.25,
      rates: [{ type: "Rate for 1 L.ft.", amount: 358.35 }, { type: "Rate (Say)", amount: 358.00 }],
      floors: []
    },
    {
      title: "6\" half round PVC eave gutter fixed to timber valance board including gutter joiner and brackets fixed at 18\" centres (other specials paid separately)",
      data: [
        { no: "1.01", description: "6\" eave gutter lengths (12' each)", ref: "M-088", unit: "No", quantity: 2, rate: 0.00, amount: 0.00 },
        { no: "1.02", description: "Joiner", ref: "M-055", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
        { no: "1.03", description: "gutter brackets", ref: "M-054", unit: "No", quantity: 17, rate: 0.00, amount: 0.00 },
        { no: "1.04", description: "3/4\" brass screws", ref: "M-017", unit: "No", quantity: 34, rate: 1.25, amount: 42.50 },
        { no: "1.05", description: "Solvent cement", ref: "M-117", unit: "grms", quantity: 20, rate: 1.40, amount: 28.00 },
        { no: "1.06", description: "Plumber", ref: "L-002", unit: "Day", quantity: 0.5, rate: 2500.00, amount: 1250.00 },
        { no: "1.07", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.5, rate: 1800.00, amount: 900.00 },
        { no: "1.08", description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", ref: "-", unit: "-", quantity: 0, rate: 0, amount: 107.50 }
      ],
      totalAmount: 2328.00,
      rates: [{ type: "Rate for 1 L.ft.", amount: 97.00 }, { type: "Rate (Say)", amount: 97.00 }],
      floors: []
    },
    {
      title: "6\" dia PVC gutter head",
      data: [
        { no: "1.01", description: "6\" dia PVC gutter head", ref: "M-089", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
        { no: "1.02", description: "Gutter Joiner", ref: "M-055", unit: "No", quantity: 2, rate: 0.00, amount: 0.00 },
        { no: "1.03", description: "gutter brackets", ref: "M-054", unit: "No", quantity: 2, rate: 0.00, amount: 0.00 },
        { no: "1.04", description: "3/4\" brass screws", ref: "M-017", unit: "No", quantity: 4, rate: 1.25, amount: 5.00 },
        { no: "1.05", description: "Solvent cement", ref: "M-117", unit: "grms", quantity: 12, rate: 1.40, amount: 16.80 },
        { no: "1.06", description: "Plumber", ref: "L-002", unit: "Day", quantity: 0.125, rate: 2500.00, amount: 312.50 },
        { no: "1.07", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.125, rate: 1800.00, amount: 225.00 },
        { no: "1.08", description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", ref: "-", unit: "-", quantity: 0, rate: 0, amount: 26.88 }
      ],
      totalAmount: 586.18,
      rates: [{ type: "Rate for 1 No.", amount: 586.18 }, { type: "Rate (Say)", amount: 586.00 }],
      floors: []
    },
    {
        title: "6\" dia PVC end caps",
        data: [
          { no: "1.01", description: "end cap", ref: "M-087", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
          { no: "1.05", description: "Solvent cement", ref: "M-117", unit: "grms", quantity: 12, rate: 1.40, amount: 16.80 },
          { no: "1.06", description: "Plumber", ref: "L-002", unit: "Day", quantity: 0.0625, rate: 2500.00, amount: 156.25 },
          { no: "1.07", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.0625, rate: 1800.00, amount: 112.50 },
          { no: "1.08", description: "Allow 5% of Items (1.06, 1.07) for Scaffolding1", ref: "-", unit: "-", quantity: 0, rate: 0, amount: 13.44 }
        ],
        totalAmount: 298.99,
        rates: [
          { type: "Rate for 1 No.", amount: 298.99 },
          { type: "Rate (Say)", amount: 299.00 }
        ],
        floors: []
      },
      {
        title: "3 1/2\" PVC rain water down pipes fixed to brick wall with wooden plugs buried in wall (other specials paid separately)",
        data: [
          { no: "1.01", description: "3 1/2\" down pipe lengths (12' each)", ref: "M-078", unit: "No", quantity: 2, rate: 0.00, amount: 0.00 },
          { no: "1.02", description: "3 1/2\" Joiner", ref: "M-090", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
          { no: "1.03", description: "PVC straps", ref: "M-104", unit: "No", quantity: 4, rate: 0.00, amount: 0.00 },
          { no: "1.04", description: "1\" brass screws", ref: "M-014", unit: "No", quantity: 8, rate: 2.50, amount: 20.00 },
          { no: "1.05", description: "Solvent cement", ref: "M-117", unit: "grms", quantity: 30, rate: 1.40, amount: 42.00 },
          { no: "1.06", description: "Plumber", ref: "L-002", unit: "Day", quantity: 0.33, rate: 2500.00, amount: 833.33 },
          { no: "1.07", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.33, rate: 1800.00, amount: 600.00 },
          { no: "1.08", description: "Allow 5% of Items (1.06, 1.07) for Scaffolding", ref: "-", unit: "-", quantity: 0, rate: 0, amount: 71.67 }
        ],
        totalAmount: 1567.00,
        rates: [
          { type: "Rate for 1 L.ft.", amount: 65.29 },
          { type: "Rate (Say)", amount: 65.00 }
        ],
        floors: []
      },
      {
        title: "3 1/2\" dia PVC elbow",
        data: [
          { no: "1.01", description: "elbow", ref: "M-079", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
          { no: "1.05", description: "Solvent cement", ref: "M-117", unit: "grms", quantity: 32, rate: 1.40, amount: 44.80 },
          { no: "1.06", description: "Plumber", ref: "L-002", unit: "Day", quantity: 0.0625, rate: 2500.00, amount: 156.25 },
          { no: "1.07", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.0625, rate: 1800.00, amount: 112.50 },
          { no: "1.08", description: "Allow 5% of Items (1.06, 1.07) for Scaffolding1", ref: "-", unit: "-", quantity: 0, rate: 0, amount: 13.44 }
        ],
        totalAmount: 326.99,
        rates: [
          { type: "Rate for 1 No.", amount: 326.99 },
          { type: "Rate (Say)", amount: 327.00 }
        ],
        floors: []
      },
      {
        title: "3 1/2\" dia PVC Shoe",
        data: [
          { no: "1.01", description: "Shoe", ref: "M-099", unit: "No", quantity: 1, rate: 0.00, amount: 0.00 },
          { no: "1.05", description: "Solvent cement", ref: "M-117", unit: "grms", quantity: 15, rate: 1.40, amount: 21.00 },
          { no: "1.06", description: "Plumber", ref: "L-002", unit: "Day", quantity: 0.0625, rate: 2500.00, amount: 156.25 },
          { no: "1.07", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 0.0625, rate: 1800.00, amount: 112.50 },
          { no: "1.08", description: "Allow 5% of Items (1.06, 1.07) for Scaffolding1", ref: "-", unit: "-", quantity: 0, rate: 0, amount: 13.44 }
        ],
        totalAmount: 303.19,
        rates: [
          { type: "Rate for 1 No.", amount: 303.19 },
          { type: "Rate (Say)", amount: 303.00 }
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
                      if (row.description === "Allow 5% of Items (1.06, 1.07) for Scaffolding1") {
                        const mainItemAmount = item.data[2]?.amount || 0; // Get the amount of the first item (1.01)
                        const mainItemAmount1 = item.data[3]?.amount || 0; // Get the amount of the first item (1.01)
                        row.amount =( mainItemAmount +mainItemAmount1) * 5 / 100; // Apply 5% wastage
                        amount = row.amount; // Update amount to the calculated wastage
                      }

                      if (row.description === "Allow 5% of Items (1.06, 1.07) for Scaffolding") {
                        const mainItemAmount = item.data[5]?.amount || 0; // Get the amount of the first item (1.01)
                        const mainItemAmount1 = item.data[6]?.amount || 0; // Get the amount of the first item (1.01)
                        row.amount =( mainItemAmount +mainItemAmount1) * 5 / 100; // Apply 5% wastage
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
        