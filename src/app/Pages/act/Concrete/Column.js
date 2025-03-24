'use client';

import React, { useState, useEffect } from "react";

const TableComponent = ({ title, data, totalAmount, rates, floors }) => {
  // Calculate total amount if not provided
  const calculatedTotalAmount = totalAmount || data.reduce((acc, row) => acc + (row.amount || 0), 0).toFixed(2);
  const calculateAllow = data[0]?.rate && data[0]?.quantity ? (data[0].rate * data[0].quantity * 5 / 100).toFixed(2) : '0.00';
  const finalTotal = (parseFloat(calculatedTotalAmount) + parseFloat(calculateAllow)).toFixed(2);

  

  return (
    <div className="p-4 bg-gray-100 w-full flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b pb-2">{title}</h2>

        <table className="w-full border-collapse text-sm overflow-x-auto">
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
              <td colSpan={6} className="p-2 border">Allow 5% Wastage</td>
              <td className="p-2 border">{calculateAllow}</td>
            </tr>


            <tr className="font-bold text-center bg-gray-300">
              <td colSpan={6} className="p-2 border">Total</td>
              <td className="p-2 border">{finalTotal}</td>
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

        {/* Floors Section */}
        {floors?.length > 0 && (
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
              "title": "05.D.01 Cement concrete 1:1.5:3(3/4\") in 13-1/2\" X 13-1/2\" columns in ground floor",
              "data": [
                { "no": "1.01", "description": "Mixed Concrete 1:1.5:3", "ref": "M-174", "unit": "Cube", "quantity": 0.51, "rate": 0, "amount": 0 },
                { "no": "1.02", "description": "Hire of Vibrator", "ref": "P-002", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 },
                { "no": "1.03", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 },
                { "no": "1.04", "description": "U/SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 1.5, "rate": 0, "amount": 0 },
                { "no": "1.05", "description": "SK Labourer (Vibrator)", "ref": "L-004", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 },
                { "no": "1.06", "description": "Jute Hessian", "ref": "M-063", "unit": "Sq.ft", "quantity": 45, "rate": 0, "amount": 0 },
                { "no": "1.07a", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 100, "rate": 0, "amount": 0 },
                { "no": "1.08b", "description": "U/SK Labourer (curing)", "ref": "L-007", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 }
              ],
              "totalAmount": "33,523.63",
              "rates": [
                { "type": "1 Cube", "amount": 0 },
                { "type": "1 L.ft", "amount": 0 },
                { "type": "1m³", "amount": 0 }
              ],
              "floors": [
                { "flo": "Ground - First", "rate": "1m³", "amount": 0 },
                { "flo": "First - Second", "rate": "1m³", "amount": 0 },
                { "flo": "Second - Third", "rate": "1m³", "amount": 0 },
                { "flo": "Third - Fourth", "rate": "1m³", "amount": 0 }
              ]
            },
            {
              "title": "05.D.02 Cement concrete 1:2:4(3/4\") in 4-1/2\" X 6\" columns in ground floor",
              "data": [
                { "no": "1.01", "description": "Mixed Concrete 1:2:4", "ref": "M-175", "unit": "Cube", "quantity": 0.45, "rate": 0, "amount": 0 },
                { "no": "1.02", "description": "Allow 5% Wastage", "ref": "-", "unit": "-", "quantity": 0, "rate": 0, "amount": 0 },
                { "no": "1.03", "description": "Hire of Vibrator", "ref": "P-002", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.04", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.05", "description": "U/SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 3, "rate": 0, "amount": 0 },
                { "no": "1.06", "description": "SK Labourer (Vibrator)", "ref": "L-004", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.07", "description": "Jute Hessian", "ref": "M-063", "unit": "Sq.ft", "quantity": 10, "rate": 0, "amount": 0 },
                { "no": "1.08a", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 170, "rate": 0, "amount": 0 },
                { "no": "1.08b", "description": "U/SK Labourer (curing)", "ref": "L-007", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 }
              ],
              "totalAmount": 0,
              "rates": [
                { "type": "1 L.ft", "amount": 0 },
                { "type": "1m³", "amount": 0 }
              ],
              "floors": [
                { "flo": "Ground - First", "rate": "1m³", "amount": 0 },
                { "flo": "First - Second", "rate": "1m³", "amount": 0 },
                { "flo": "Second - Third", "rate": "1m³", "amount": 0 },
                { "flo": "Third - Fourth", "rate": "1m³", "amount": 0 }
              ]
            },
            {
              "title": "05.D.03 Cement concrete 1:2:4(3/4\") in 6\" X 6\" columns in ground floor",
              "data": [
                { "no": "1.01", "description": "Mixed Concrete 1:2:4", "ref": "M-175", "unit": "Cube", "quantity": 0.45, "rate": 0, "amount": 0 },
               { "no": "1.02", "description": "Hire of Vibrator", "ref": "P-002", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.03", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.04", "description": "U/SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 3, "rate": 0, "amount": 0 },
                { "no": "1.05", "description": "SK Labourer (Vibrator)", "ref": "L-004", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.06a", "description": "Jute Hessian", "ref": "M-063", "unit": "Sq.ft", "quantity": 80, "rate": 0, "amount": 0 },
                { "no": "1.07b", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 140, "rate": 0, "amount": 0 },
                { "no": "1.08", "description": "U/SK Labourer (curing)", "ref": "L-007", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 }
              ],
              "totalAmount": 0,
              "rates": [
                { "type": "1 L.ft", "amount": 0 },
                { "type": "1m³", "amount": 0 }
              ],
              "floors": [
                { "flo": "Ground - First", "rate": "1m³", "amount": 0 },
                { "flo": "First - Second", "rate": "1m³", "amount": 0 },
                { "flo": "Second - Third", "rate": "1m³", "amount": 0 },
                { "flo": "Third - Fourth", "rate": "1m³", "amount": 0 }
              ]
            },
            {
              "title": "05.D.04 Cement concrete 1:2:4(3/4\") in 9\" X 9\" columns in ground floor",
              "data": [
                { "no": "1.01", "description": "Mixed Concrete 1:2:4", "ref": "M-175", "unit": "Cube", "quantity": 0.45, "rate": 0, "amount": 0 },
               { "no": "1.02", "description": "Hire of Vibrator", "ref": "P-002", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.03", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.04", "description": "U/SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 3, "rate": 0, "amount": 0 },
                { "no": "1.05", "description": "SK Labourer (Vibrator)", "ref": "L-004", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.06", "description": "Jute Hessian", "ref": "M-063", "unit": "Sq.ft", "quantity": 60, "rate": 0, "amount": 0 },
                { "no": "1.07", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 100, "rate": 0, "amount": 0 },
                { "no": "1.08", "description": "U/SK Labourer (curing)", "ref": "L-007", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 }
              ],
              "totalAmount": 0,
              "rates": [
                { "type": "1 L.ft", "amount": 0 },
                { "type": "1m³", "amount": 0 }
              ],
              "floors": [
                { "flo": "Ground - First", "rate": "1m³", "amount": 0 },
                { "flo": "First - Second", "rate": "1m³", "amount": 0 },
                { "flo": "Second - Third", "rate": "1m³", "amount": 0 },
                { "flo": "Third - Fourth", "rate": "1m³", "amount": 0 }
              ]
            },
            {
              "title": "05.D.05 Cement concrete 1:2:4(3/4\") in 12\" X 12\" columns in ground floor",
              "data": [
                { "no": "1.01", "description": "Mixing Concrete 1:2:4", "ref": "M-175", "unit": "Cu", "quantity": 0.5, "rate": 0, "amount": 0 },
              { "no": "1.02", "description": "Hire of Vibrator", "ref": "P-002", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.03", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.04", "description": "U/SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 3, "rate": 0, "amount": 0 },
                { "no": "1.05", "description": "SK Labourer (Vibrator)", "ref": "L-004", "unit": "Day", "quantity": 1, "rate": 0, "amount": 0 },
                { "no": "1.06", "description": "Jute Hessian", "ref": "M-063", "unit": "Sq.ft", "quantity": 40, "rate": 0, "amount": 0 },
                { "no": "1.07", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 100, "rate": 0, "amount": 0 },
                { "no": "1.08", "description": "U/SK Labourer (curing)", "ref": "L-007", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 }
              ],
              "totalAmount": 0,
              "rates": [
                { "type": "1 L.ft", "amount": 0 },
                { "type": "1 Cube", "amount": 0 },
                { "type": "1m³", "amount": 0 }
              ],
              "floors": [
                { "flo": "Ground - First", "rate": "1m³", "amount": 0 },
                { "flo": "First - Second", "rate": "1m³", "amount": 0 },
                { "flo": "Second - Third", "rate": "1m³", "amount": 0 }
              ]
            },
            {
              "title": "05.D.06 Cement concrete 1:2:4(3/4\") in 13-1/2\" X 13-1/2\" columns in ground floor",
              "data": [
                { "no": "1.01", "description": "Mixing Concrete 1:2:4", "ref": "M-175", "unit": "Cube", "quantity": 0.51, "rate": 0, "amount": 0 },
               { "no": "1.02", "description": "Hire of Vibrator", "ref": "P-002", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 },
                { "no": "1.03", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 },
                { "no": "1.04", "description": "U/SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 1.5, "rate": 0, "amount": 0 },
                { "no": "1.05", "description": "SK Labourer (Vibrator)", "ref": "L-004", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 },
                { "no": "1.06", "description": "Jute Hessian", "ref": "M-063", "unit": "Sq.ft", "quantity": 45, "rate": 0, "amount": 0 },
                { "no": "1.07a", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 100, "rate": 0, "amount": 0 },
                { "no": "1.08b", "description": "U/SK Labourer (curing)", "ref": "L-007", "unit": "Day", "quantity": 0.5, "rate": 0, "amount": 0 }
              ],
              "totalAmount": 0,
              "rates": [
                { "type": "1 L.ft", "amount": 0 },
                { "type": "1 Cube", "amount": 0 },
                { "type": "1m³", "amount": 0 }
              ],
              "floors": [
                { "flo": "Ground - First", "rate": "1m³", "amount": 0 },
                { "flo": "First - Second", "rate": "1m³", "amount": 0 },
                { "flo": "Second - Third", "rate": "1m³", "amount": 0 },
                { "flo": "Third - Fourth", "rate": "1m³", "amount": 0 }
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
                           
                           
                           if (row.description === "Allow 20% of Items for Steel Fuel and Forge") {
                                 const masonAmount = item.data[1]?.amount || 0; // Get the amount for Mason (1.06)
                                
                                 
                                 row.amount = masonAmount * 20/ 100; // Apply 5% wastage on mason and labourer
                                 amount = row.amount; // Update amount to the calculated scaffolding wastage
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
        