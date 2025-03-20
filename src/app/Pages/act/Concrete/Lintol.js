import React from 'react';

const TableComponent = ({ title, data, totalAmount, rates }) => {
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
      </div>
    </div>
  );
};

export default function LabourAnalysis() {
  const tableData = [
    {
      "title": "Cement concrete 1:2:4(3/4\") in 4-1/2\" X 6\" lintels in ground floor",
      "data": [
        {"no": "1.00999999", "description": "Mixing Concrete 1:2:4(3/4\")", "ref": "05.A.04", "unit": "Cu", "quantity": 0.45, "rate": 45590.00, "amount": 20515.50},
        {"no": "1.024999976", "description": "Hire of Vibrator", "ref": "P-002", "unit": "Day", "quantity": 1, "rate": 3500.00, "amount": 3500.00},
        {"no": "1.029999971", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 1, "rate": 2500.00, "amount": 2500.00},
        {"no": "1.039999962", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 4, "rate": 1800.00, "amount": 7200.00},
        {"no": "1.049999952", "description": "SK Labourer (Vibrator)", "ref": "L-004", "unit": "Day", "quantity": 1, "rate": 2000.00, "amount": 2000.00},
        {"no": "1.059999943", "description": "Jute Hessian", "ref": "M-063", "unit": "Sq.ft", "quantity": 105, "rate": 3.50, "amount": 367.50},
        {"no": "1.070000052", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 90, "rate": 0.30, "amount": 27.00},
        {"no": "1.080000043", "description": "U / SK Labourer (curing)", "ref": "L-007", "unit": "Day", "quantity": 0.5, "rate": 1800.00, "amount": 900.00}
      ],
      "totalAmount": 37010.00,
      "rates": [
        {"type": "Rate for 1 L.ft", "amount": 154.21},
        {"type": "Rate (Say) 1 ft", "amount": 150.00},
        {"type": "Rate (Say) 1 m", "amount": 492.00},
        {"type": "Ground floor 1 m", "amount": 492.00},
        {"type": "First Floor 1 m", "amount": 541.20},
        {"type": "Second Floor 1 m", "amount": 595.32},
        {"type": "Third Floor 1 m", "amount": 654.85}
      ]
    },
    {
      "title": "Cement concrete 1:2:4(3/4\") in 9\" X 9\" lintels in ground floor",
      "data": [
        {"no": "1.00999999", "description": "Mixing Concrete 1:2:4(3/4\")", "ref": "05.A.04", "unit": "Cu", "quantity": 0.45, "rate": 45590.00, "amount": 20515.50},
        {"no": "1.024999976", "description": "Hire of Vibrator", "ref": "P-002", "unit": "Day", "quantity": 1, "rate": 3500.00, "amount": 3500.00},
        {"no": "1.029999971", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 1, "rate": 2500.00, "amount": 2500.00},
        {"no": "1.039999962", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 4, "rate": 1800.00, "amount": 7200.00},
        {"no": "1.049999952", "description": "SK Labourer (Vibrator)", "ref": "L-004", "unit": "Day", "quantity": 1, "rate": 2000.00, "amount": 2000.00},
        {"no": "1.059999943", "description": "Jute Hessian", "ref": "M-063", "unit": "Sq.ft", "quantity": 60, "rate": 3.50, "amount": 210.00},
        {"no": "1.070000052", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 90, "rate": 0.30, "amount": 27.00},
        {"no": "1.080000043", "description": "U / SK Labourer (curing)", "ref": "L-007", "unit": "Day", "quantity": 0.5, "rate": 1800.00, "amount": 900.00}
      ],
      "totalAmount": 36852.50,
      "rates": [
        {"type": "Rate for 1 L.ft", "amount": 460.66},
        {"type": "Rate (Say) 1 ft", "amount": 460.00},
        {"type": "Rate (Say) 1 m", "amount": 1508.80},
        {"type": "Ground floor 1 m", "amount": 1508.80},
        {"type": "First Floor 1 m", "amount": 1659.68},
        {"type": "Second Floor 1 m", "amount": 1825.65},
        {"type": "Third Floor 1 m", "amount": 2008.21}
      ]
    },
    {
      "title": "Cement concrete 1:2:4(3/4\") in 9\" X 12\" lintels in ground floor",
      "data": [
        {"no": "1.00999999", "description": "Mixing Concrete 1:2:4(3/4\")", "ref": "05.A.04", "unit": "Cu", "quantity": 0.45, "rate": 45590.00, "amount": 20515.50},
        {"no": "1.024999976", "description": "Hire of Vibrator", "ref": "P-002", "unit": "Day", "quantity": 1, "rate": 3500.00, "amount": 3500.00},
        {"no": "1.029999971", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 1, "rate": 2500.00, "amount": 2500.00},
        {"no": "1.039999962", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 4, "rate": 1800.00, "amount": 7200.00},
        {"no": "1.049999952", "description": "SK Labourer (Vibrator)", "ref": "L-004", "unit": "Day", "quantity": 1, "rate": 2000.00, "amount": 2000.00},
        {"no": "1.059999943", "description": "Jute Hessian", "ref": "M-063", "unit": "Sq.ft", "quantity": 55, "rate": 3.50, "amount": 192.50},
        {"no": "1.070000052", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 90, "rate": 0.30, "amount": 27.00},
        {"no": "1.080000043", "description": "U / SK Labourer (curing)", "ref": "L-007", "unit": "Day", "quantity": 0.5, "rate": 1800.00, "amount": 900.00}
      ],
      "totalAmount": 36835.00,
      "rates": [
        {"type": "Rate for 1 L.ft", "amount": 613.92},
        {"type": "Rate (Say) 1 ft", "amount": 610.00},
        {"type": "Rate (Say) 1 m", "amount": 2000.80},
        {"type": "Ground floor 1 m", "amount": 2000.80},
        {"type": "First Floor 1 m", "amount": 2200.88},
        {"type": "Second Floor 1 m", "amount": 2420.97},
        {"type": "Third Floor 1 m", "amount": 2663.06}
      ]
    },
    {
      "title": "Cement concrete 1:2:4(3/4\") in 12\" X 15\" lintels in ground floor",
      "data": [
        {"no": "1.00999999", "description": "Mixing Concrete 1:2:4(3/4\")", "ref": "05.A.04", "unit": "Cu", "quantity": 0.45, "rate": 45590.00, "amount": 20515.50},
        {"no": "1.024999976", "description": "Hire of Vibrator", "ref": "P-002", "unit": "Day", "quantity": 1, "rate": 3500.00, "amount": 3500.00},
        {"no": "1.029999971", "description": "Mason", "ref": "L-009", "unit": "Day", "quantity": 1, "rate": 2500.00, "amount": 2500.00},
        {"no": "1.039999962", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 4, "rate": 1800.00, "amount": 7200.00},
        {"no": "1.049999952", "description": "SK Labourer (Vibrator)", "ref": "L-004", "unit": "Day", "quantity": 1, "rate": 2000.00, "amount": 2000.00},
        {"no": "1.059999943", "description": "Jute Hessian", "ref": "M-063", "unit": "Sq.ft", "quantity": 40, "rate": 3.50, "amount": 140.00},
        {"no": "1.070000052", "description": "Water", "ref": "M-157", "unit": "Gal", "quantity": 90, "rate": 0.30, "amount": 27.00},
        {"no": "1.080000043", "description": "U / SK Labourer (curing)", "ref": "L-007", "unit": "Day", "quantity": 0.5, "rate": 1800.00, "amount": 900.00}
      ],
      "totalAmount": 36782.50,
      "rates": [
        {"type": "Rate for 1 L.ft", "amount": 1021.74},
        {"type": "Rate (Say) 1 ft", "amount": 1020.00},
        {"type": "Rate (Say) 1 m", "amount": 3345.60},
        {"type": "Ground floor 1 m", "amount": 3345.60},
        {"type": "First Floor 1 m", "amount": 3680.16},
        {"type": "Second Floor 1 m", "amount": 4048.18},
        {"type": "Third Floor 1 m", "amount": 4452.99}
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {tableData.map((item, index) => (
        <TableComponent
          key={index}
          title={item.title}
          data={item.data}
          totalAmount={item.totalAmount}
          rates={item.rates}
        />
      ))}
    </div>
  );
}
