import React from 'react';

const TableComponent = ({ title, data, totalAmount, rates, floors }) => {
  // Convert rates object to an array
  const rateEntries = Object.entries(rates).map(([type, amount]) => ({
    type,
    amount,
  }));

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
              {rateEntries.map((rate, index) => (
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
  const tableData = [
    {
      title: "Prepare surface of steel trusses and apply two coats of anticorrosive primer.",
      data: [
        { "no": "1.0", "description": "Anti Corrosive Primer", "ref": "M-002", "unit": "litre", "quantity": 2.25, "rate": 245.00, "amount": 551.25 },
        { "no": "1.01", "description": "Mineral Turpentine or Thinner", "ref": "M-069", "unit": "litre", "quantity": 0.15, "rate": 80.00, "amount": 12.00 },
        { "no": "1.02", "description": "Wire Brush", "ref": "M-160", "unit": "No", "quantity": 1, "rate": 65.00, "amount": 65.00 },
        { "no": "1.03", "description": "Brush 2\"", "ref": "M-022", "unit": "No", "quantity": 0.125, "rate": 165.00, "amount": 20.63 },
        { "no": "1.04", "description": "Painter", "ref": "L-001", "unit": "Day", "quantity": 1.5, "rate": 2500.00, "amount": 3750.00 },
        { "no": "1.05", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 1.5, "rate": 1800.00, "amount": 2700.00 }
      ],
      totalAmount: 7098.88,
      rates: {
        "1 Sqr": 7098.88,
        "1 ft²": 71.00,
        "1 m²": 763.96
      }
    },
    {
      title: "Apply one coat of anti-Corrosive primer and two coat enamel paint on already shop primed and erected steel roof truss.",
      data: [
        { "no": "1.00", "description": "Anti Corrosive Primer", "ref": "M-002", "unit": "litre", "quantity": 0.2, "rate": 245.00, "amount": 49.00 },
        { "no": "1.01", "description": "Enamel Paint", "ref": "M-044", "unit": "litre", "quantity": 1.33, "rate": 354.00, "amount": 470.82 },
        { "no": "1.02", "description": "Mineral Turpentine or Thinner", "ref": "M-069", "unit": "litre", "quantity": 0.2, "rate": 80.00, "amount": 16.00 },
        { "no": "1.03", "description": "Brush 2\"", "ref": "M-022", "unit": "No", "quantity": 0.2, "rate": 165.00, "amount": 33.00 },
        { "no": "1.04", "description": "Painter", "ref": "L-001", "unit": "Day", "quantity": 2.5, "rate": 2500.00, "amount": 687.50 },
        { "no": "1.05", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 1, "rate": 1800.00, "amount": 200.00 },
        { "no": "1.06", "description": "Allow 3% of Items (1.05, 1.06 ) for Scaffolding", "ref": "-", "unit": "-", "quantity": "-", "rate": "-", "amount": 26.63 }
      ],
      totalAmount: 1614.95,
      rates: {
        "1 Sqr": 1614.95,
        "1 ft²": 16.10,
        "1 m²": 173.24
      }
    },
    {
      title: "Prepare and apply two coats primer and finishing coat of enamel paint to mild steel (angle/flat) gate.",
      data: [
        { "no": "1.00", "description": "Anti Corrosive Primer", "ref": "M-002", "unit": "litre", "quantity": 1.5, "rate": 245.00, "amount": 367.50 },
        { "no": "1.01", "description": "Enamel Paint", "ref": "M-044", "unit": "litre", "quantity": 0.67, "rate": 354.00, "amount": 237.18 },
        { "no": "1.02", "description": "Mineral Turpentine or Thinner", "ref": "M-069", "unit": "litre", "quantity": 0.2, "rate": 80.00, "amount": 16.00 },
        { "no": "1.03", "description": "Wire Brush", "ref": "M-160", "unit": "No", "quantity": 1, "rate": 65.00, "amount": 65.00 },
        { "no": "1.04", "description": "Brush 2\"", "ref": "M-022", "unit": "No", "quantity": 0.2, "rate": 165.00, "amount": 33.00 },
        { "no": "1.05", "description": "Painter", "ref": "L-001", "unit": "Day", "quantity": 2.5, "rate": 2500.00, "amount": 687.50 },
        { "no": "1.06", "description": "U / SK Labourer", "ref": "L-007", "unit": "Day", "quantity": 2, "rate": 1800.00, "amount": 3600.00 }
      ],
      totalAmount: 6003.18,
      rates: {
        "1 Sqr": 6003.18,
        "1 ft²": 60.03,
        "1 m²": 645.72
      }
    },
  ];

  return (
    <div className="space-y-8">
      {tableData.map((table, index) => (
        <TableComponent
          key={index}
          title={table.title}
          data={table.data}
          totalAmount={table.totalAmount}
          rates={table.rates}
          floors={table.floors}  // Assuming you might have floors data
        />
      ))}
    </div>
  );
}
