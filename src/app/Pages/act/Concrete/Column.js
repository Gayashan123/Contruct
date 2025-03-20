'use client';

import React from 'react';

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

        {/* Floors Section */}
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
  const tableData = [
    {
      title: "05.D.01 Cement concrete 1:1.5:3(3/4\") in 13-1/2\" X 13-1/2\" columns in ground floor",
      data: [
        { no: 1.01, description: "Mixed Concrete 1:1.5:3", ref: "05.A.01", unit: "Cube", quantity: 0.51, rate: "48,060.00", amount: "24,510.60" },
        { description: "Allow 5% Wastage", amount: "1,225.53" },
        { no: 1.02, description: "Hire of Vibrator", ref: "P-002", unit: "Day", quantity: 0.5, rate: "3,500.00", amount: "1,750.00" },
        { no: 1.03, description: "Mason", ref: "L-009", unit: "Day", quantity: 0.5, rate: "2,500.00", amount: "1,250.00" },
        { no: 1.04, description: "U/SK Labourer", ref: "L-007", unit: "Day", quantity: 1.5, rate: "1,800.00", amount: "2,700.00" },
        { no: 1.05, description: "SK Labourer (Vibrator)", ref: "L-004", unit: "Day", quantity: 0.5, rate: "2,000.00", amount: "1,000.00" },
        { no: 1.06, description: "Jute Hessian", ref: "M-063", unit: "Sq.ft", quantity: 45, rate: "3.50", amount: "157.50" },
        { no: 1.07, description: "Water", ref: "M-157", unit: "Gal", quantity: 100, rate: "0.30", amount: "30.00" },
        { no: 1.08, description: "U/SK Labourer (curing)", ref: "L-007", unit: "Day", quantity: 0.5, rate: "1,800.00", amount: "900.00" }
      ],
      totalAmount: "33,523.63",
      rates: [
        { type: "1 Cube", amount: "65,733.00" },
        { type: "1 L.ft", amount: "838.09" },
        { type: "1m³", amount: "23,227.21" }
      ],
      floors: [
        { flo: "Ground - First", rate: "1m³", amount: "23,227.21" },
        { flo: "First - Second", rate: "1m³", amount: "25,549.93" },
        { flo: "Second - Third", rate: "1m³", amount: "28,104.92" },
        { flo: "Third - Fourth", rate: "1m³", amount: "30,915.41" }
      ]
    },
    {
      title: "05.D.02 Cement concrete 1:2:4(3/4\") in 4-1/2\" X 6\" columns in ground floor",
      data: [
        { no: 1.01, description: "Mixed Concrete 1:2:4", ref: "05.A.04", unit: "Cu", quantity: 0.45, rate: "45,590.00", amount: "20,515.50" },
        { description: "Allow 5% Wastage", amount: "1,025.78" },
        { no: 1.02, description: "Hire of Vibrator", ref: "P-002", unit: "Day", quantity: 1, rate: "3,500.00", amount: "3,500.00" },
        { no: 1.03, description: "Mason", ref: "L-009", unit: "Day", quantity: 1, rate: "2,500.00", amount: "2,500.00" },
        { no: 1.04, description: "U/SK Labourer", ref: "L-007", unit: "Day", quantity: 3, rate: "1,800.00", amount: "5,400.00" },
        { no: 1.05, description: "SK Labourer (Vibrator)", ref: "L-004", unit: "Day", quantity: 1, rate: "2,000.00", amount: "2,000.00" },
        { no: 1.06, description: "Jute Hessian", ref: "M-063", unit: "Sq.ft", quantity: 10, rate: "3.50", amount: "35.00" },
        { no: 1.07, description: "Water", ref: "M-157", unit: "Gal", quantity: 170, rate: "0.30", amount: "51.00" },
        { no: 1.08, description: "U/SK Labourer (curing)", ref: "L-007", unit: "Day", quantity: 0.5, rate: "1,800.00", amount: "900.00" }
      ],
      totalAmount: "35,927.28",
      rates: [
        { type: "1 L.ft", amount: "150.00" },
        { type: "1m³", amount: "28,212.01" }
      ],
      floors: [
        { flo: "Ground - First", rate: "1m³", amount: "28,212.01" },
        { flo: "First - Second", rate: "1m³", amount: "31,033.22" },
        { flo: "Second - Third", rate: "1m³", amount: "34,136.54" },
        { flo: "Third - Fourth", rate: "1m³", amount: "37,550.19" }
      ]
    },
    {
      title: "05.D.03 Cement concrete 1:2:4(3/4\") in 6\" X 6\" columns in ground floor",
      data: [
        { no: 1.01, description: "Mixed Concrete 1:2:4", ref: "05.A.04", unit: "Cu", quantity: 0.45, rate: "45,590.00", amount: "20,515.50" },
        { description: "Allow 5% Wastage", amount: "1,025.78" },
        { no: 1.02, description: "Hire of Vibrator", ref: "P-002", unit: "Day", quantity: 1, rate: "3,500.00", amount: "3,500.00" },
        { no: 1.03, description: "Mason", ref: "L-009", unit: "Day", quantity: 1, rate: "2,500.00", amount: "2,500.00" },
        { no: 1.04, description: "U/SK Labourer", ref: "L-007", unit: "Day", quantity: 3, rate: "1,800.00", amount: "5,400.00" },
        { no: 1.05, description: "SK Labourer (Vibrator)", ref: "L-004", unit: "Day", quantity: 1, rate: "2,000.00", amount: "2,000.00" },
        { no: 1.06, description: "Jute Hessian", ref: "M-063", unit: "Sq.ft", quantity: 80, rate: "3.50", amount: "280.00" },
        { no: 1.07, description: "Water", ref: "M-157", unit: "Gal", quantity: 140, rate: "0.30", amount: "42.00" },
        { no: 1.08, description: "U/SK Labourer (curing)", ref: "L-007", unit: "Day", quantity: 0.5, rate: "1,800.00", amount: "900.00" }
      ],
      totalAmount: "36,163.28",
      rates: [
        { type: "1 L.ft", amount: "200.00" },
        { type: "1m³", amount: "28,395.76" }
      ],
      floors: [
        { flo: "Ground - First", rate: "1m³", amount: "28,395.76" },
        { flo: "First - Second", rate: "1m³", amount: "31,235.34" },
        { flo: "Second - Third", rate: "1m³", amount: "34,358.87" },
        { flo: "Third - Fourth", rate: "1m³", amount: "37,794.76" }
      ]
    },
    {
      title: "05.D.04 Cement concrete 1:2:4(3/4\") in 9\" X 9\" columns in ground floor",
      data: [
        { no: 1.01, description: "Mixed Concrete 1:2:4", ref: "05.A.04", unit: "Cu", quantity: 0.45, rate: "45,590.00", amount: "20,515.50" },
        { description: "Allow 5% Wastage", amount: "1,025.78" },
        { no: 1.02, description: "Hire of Vibrator", ref: "P-002", unit: "Day", quantity: 1, rate: "3,500.00", amount: "3,500.00" },
        { no: 1.03, description: "Mason", ref: "L-009", unit: "Day", quantity: 1, rate: "2,500.00", amount: "2,500.00" },
        { no: 1.04, description: "U/SK Labourer", ref: "L-007", unit: "Day", quantity: 3, rate: "1,800.00", amount: "5,400.00" },
        { no: 1.05, description: "SK Labourer (Vibrator)", ref: "L-004", unit: "Day", quantity: 1, rate: "2,000.00", amount: "2,000.00" },
        { no: 1.06, description: "Jute Hessian", ref: "M-063", unit: "Sq.ft", quantity: 60, rate: "3.50", amount: "210.00" },
        { no: 1.07, description: "Water", ref: "M-157", unit: "Gal", quantity: 100, rate: "0.30", amount: "30.00" },
        { no: 1.08, description: "U/SK Labourer (curing)", ref: "L-007", unit: "Day", quantity: 0.5, rate: "1,800.00", amount: "900.00" }
      ],
      totalAmount: "36,081.28",
      rates: [
        { type: "1 L.ft", amount: "450.00" },
        { type: "1m³", amount: "28,332.16" }
      ],
      floors: [
        { flo: "Ground - First", rate: "1m³", amount: "28,332.16" },
        { flo: "First - Second", rate: "1m³", amount: "31,165.37" },
        { flo: "Second - Third", rate: "1m³", amount: "34,281.91" },
        { flo: "Third - Fourth", rate: "1m³", amount: "37,710.10" }
      ]
    },
    {
        title: "05.D.05 Cement concrete 1:2:4(3/4\") in 12\" X 12\" columns in ground floor",
        data: [
          { no: 1.01, description: "Mixing Concrete 1:2:4", ref: "05.A.04", unit: "Cu", quantity: 0.5, rate: "45,590.00", amount: "22,795.00" },
          { description: "Allow 5% Wastage", amount: "1,139.75" },
          { no: 1.02, description: "Hire of Vibrator", ref: "P-002", unit: "Day", quantity: 1, rate: "3,500.00", amount: "3,500.00" },
          { no: 1.03, description: "Mason", ref: "L-009", unit: "Day", quantity: 1, rate: "2,500.00", amount: "2,500.00" },
          { no: 1.04, description: "U/SK Labourer", ref: "L-007", unit: "Day", quantity: 3, rate: "1,800.00", amount: "5,400.00" },
          { no: 1.05, description: "SK Labourer (Vibrator)", ref: "L-004", unit: "Day", quantity: 1, rate: "2,000.00", amount: "2,000.00" },
          { no: 1.06, description: "Jute Hessian", ref: "M-063", unit: "Sq.ft", quantity: 40, rate: "3.50", amount: "140.00" },
          { no: 1.07, description: "Water", ref: "M-157", unit: "Gal", quantity: 100, rate: "0.30", amount: "30.00" },
          { no: 1.08, description: "U/SK Labourer (curing)", ref: "L-007", unit: "Day", quantity: 0.5, rate: "1,800.00", amount: "900.00" }
        ],
        totalAmount: "38,404.75",
        rates: [
          { type: "1 L.ft", amount: "770.00" },
          { type: "1 Cube", amount: "76,810.00" },
          { type: "1m³", amount: "27,141.34" }
        ],
        floors: [
          { flo: "Ground - First", rate: "1m³", amount: "27,141.34" },
          { flo: "First - Second", rate: "1m³", amount: "29,855.48" },
          { flo: "Second - Third", rate: "1m³", amount: "32,841.02" },
          { flo: "Third - Fourth", rate: "1m³", amount: "36,125.13" }
        ]
      },
      {
        title: "05.D.06 Cement concrete 1:2:4(3/4\") in 13-1/2\" X 13-1/2\" columns in ground floor",
        data: [
          { no: 1.01, description: "Mixing Concrete 1:2:4", ref: "05.A.04", unit: "Cu", quantity: 0.51, rate: "45,590.00", amount: "23,250.90" },
          { description: "Allow 5% Wastage", amount: "1,162.55" },
          { no: 1.02, description: "Hire of Vibrator", ref: "P-002", unit: "Day", quantity: 0.5, rate: "3,500.00", amount: "1,750.00" },
          { no: 1.03, description: "Mason", ref: "L-009", unit: "Day", quantity: 0.5, rate: "2,500.00", amount: "1,250.00" },
          { no: 1.04, description: "U/SK Labourer", ref: "L-007", unit: "Day", quantity: 1.5, rate: "1,800.00", amount: "2,700.00" },
          { no: 1.05, description: "SK Labourer (Vibrator)", ref: "L-004", unit: "Day", quantity: 0.5, rate: "2,000.00", amount: "1,000.00" },
          { no: 1.06, description: "Jute Hessian", ref: "M-063", unit: "Sq.ft", quantity: 45, rate: "3.50", amount: "157.50" },
          { no: 1.07, description: "Water", ref: "M-157", unit: "Gal", quantity: 100, rate: "0.30", amount: "30.00" },
          { no: 1.08, description: "U/SK Labourer (curing)", ref: "L-007", unit: "Day", quantity: 0.5, rate: "1,800.00", amount: "900.00" }
        ],
        totalAmount: "32,200.95",
        rates: [
          { type: "1 L.ft", amount: "810.00" },
          { type: "1 Cube", amount: "63,140.00" },
          { type: "1m³", amount: "22,310.95" }
        ],
        floors: [
          { flo: "Ground - First", rate: "1m³", amount: "22,310.95" },
          { flo: "First - Second", rate: "1m³", amount: "24,542.05" },
          { flo: "Second - Third", rate: "1m³", amount: "26,996.25" },
          { flo: "Third - Fourth", rate: "1m³", amount: "29,695.88" }
        ]
      }
      
    ]

  return (
    <div className="p-6 bg-gray-200 min-h-screen flex flex-col items-center">
      {tableData.map((table, index) => (
        <TableComponent key={index} {...table} />
      ))}
    </div>
  );
}
