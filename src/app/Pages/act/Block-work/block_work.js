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
      title: "08.01 - 8\" Thick Hollow Block Work",
      data: [
        { no: "1.01", description: "Hollow Cement Block (16\"x 8\"x 8\")", ref: "M-057", unit: "No", quantity: 112, rate: 76.00, amount: 8512.00 },
        { no: "1.02", description: "Allow 5% of Items (1.01) for Wastage", ref: "-", unit: "-", quantity: 0, rate: 0, was: 425.60 },
        { no: "1.03", description: "Cement", ref: "M-026", unit: "Bag", quantity: 0.75, rate: 629.46, amount: 472.10 },
        { no: "1.04", description: "Sand", ref: "M-113", unit: "Cube", quantity: 0.06, rate: 5475.00, amount: 328.50 },
        { no: "1.05", description: "Mason", ref: "L-009", unit: "Day", quantity: 1.5, rate: 800.00, amount: 1200.00 },
        { no: "1.06", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 2.5, rate: 600.00, amount: 1500.00 },
        { no: "1.07", description: "Allow 3% of Items ( 1.05, 1.06 ) for Scaffolding", ref: "-", unit: "-", quantity: 0, rate: 0, was1: 81.00 },
      ],
      totalAmount: 12519.20,
      rates: [
        { type: "1 Sq", amount: 0.00 },
        { type: "1ft²", amount: 0.00 },
        { type: "1m²", amount: 0.00 },
      ],
      floorRates: [
        { floor: "Ground Floor", rate: 1347.04 },
        { floor: "First Floor", rate: 1481.75 },
        { floor: "Second Floor", rate: 1629.92 },
        { floor: "Third Floor", rate: 1792.92 },
      ],
    },
    
      {
        title: "08.02 - 6\" Thick Hollow Block Work",
        data: [
          { no: "1.01", description: "Hollow Cement Blocks (16\"x 8\"x 6\")", ref: "M-059", unit: "No", quantity: 112, rate: 22.00, amount: 2464.00 },
          { no: "1.02", description: "Allow 5% of Items (1.01) for Wastage", ref: "-", unit: "-", quantity: 0, rate: 0.00, was: 123.20 },
          { no: "1.03", description: "Cement", ref: "M-026", unit: "Bag", quantity: 0.65, rate: 980.00, amount: 637.00 },
          { no: "1.04", description: "Sand", ref: "M-113", unit: "Cube", quantity: 0.07, rate: 20000.00, amount: 51.00 },
          { no: "1.05", description: "Mason", ref: "L-009", unit: "Day", quantity: 1.5, rate: 2500.00, amount: 3750.00 },
          { no: "1.06", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 2, rate: 1800.00, amount: 3600.00 },
          { no: "1.07", description: "Allow 3% of Items (1.05, 1.06) for Scaffolding", ref: "-", unit: "-", quantity: 0, rate: 0, was1: 220.50 },
        ],
        totalAmount: 10845.70,
        rates: [
          { type: "1 Sq", amount: 10845.70 },
          { type: "1ft²", amount: 108.46 },
          { type: "1m²", amount: 1167.00 },
        ],
        floorRates: [
          { floor: "Ground Floor", rate: 1167.00 },
          { floor: "First Floor", rate: 1283.70 },
          { floor: "Second Floor", rate: 1412.07 },
          { floor: "Third Floor", rate: 1553.27 },
        ],
      },
      {
        title: "08.03 - 4\" Thick Hollow Block Work",
        data: [
          { no: "1.01", description: "Hollow Cement Blocks (16\"x 8\"x 4\")", ref: "M-058", unit: "No", quantity: 112, rate: 42.00, amount: 4704.00 },
          { no: "1.02", description: "Allow 5% of Items (1.01) for Wastage", ref: "-", unit: "-", quantity: 0, rate: 0, was: 235.20 },
          { no: "1.03", description: "Cement", ref: "M-026", unit: "Bag", quantity: 0.4, rate: 980.00, amount: 392.00 },
          { no: "1.04", description: "Sand", ref: "M-113", unit: "Cube", quantity: 0.03, rate: 20000.00, amount: 51.00 },
          { no: "1.05", description: "Mason", ref: "L-009", unit: "Day", quantity: 1, rate: 2500.00, amount: 2500.00 },
          { no: "1.06", description: "U / SK Labourer", ref: "L-007", unit: "Day", quantity: 2, rate: 1800.00, amount: 3600.00 },
          { no: "1.07", description: "Allow 5% of Items (1.05, 1.06) for Scaffolding", ref: "-", unit: "-", quantity: 0, rate: 0, was1: 305.00 },
        ],
        totalAmount: 11787.20,
        rates: [
          { type: "1 Sq", amount: 11787.20 },
          { type: "1ft²", amount: 117.87 },
          { type: "1m²", amount: 1268.30 },
        ],
        floorRates: [
          { floor: "Ground Floor", rate: 1268.30 },
          { floor: "First Floor", rate: 1395.13 },
          { floor: "Second Floor", rate: 1534.65 },
          { floor: "Third Floor", rate: 1688.11 },
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
              const updatedRows = item.data.map(row => {
                let rate = getRate(row.ref, labourData, materialData);
                let amount = row.quantity !== undefined ? row.quantity * rate : 0;
    
                // Check if the amount is NaN and apply wastage calculations
                if (Number.isNaN(row.amount)) {
                  let was = 0;
                  let was1 = 0;
    
                  // Calculate wastage for item 1.01 based on the amount from the first main item (row 1.0)
                  if (row.description === "Allow 5% of Items (1.01) for Wastage" && item.data[0].amount) {
                    was = item.data[0].amount * 5 / 100; // Apply 5% wastage on the first item
                  }
    
                  // Calculate scaffolding wastage for item 1.05, 1.06 based on amounts of specific rows
                  if (row.description === "Allow 3% of Items (1.05, 1.06) for Scaffolding" && item.data[4]?.amount && item.data[5]?.amount) {
                    was1 = (item.data[4].amount + item.data[5].amount) * 3 / 100; // Apply 3% wastage on sum of mason and laborer
                  }
    
                  // Assign the wastage values to the row
                  row.was = was;
                  row.was1 = was1;
                }
    
                // Update amount with calculated value
                amount = row.quantity !== undefined ? row.quantity * rate + (row.was || 0) + (row.was1 || 0) : 0;
    
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