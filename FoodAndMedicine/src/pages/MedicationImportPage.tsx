import React from 'react';
import { useNavigate } from 'react-router-dom';

const MedicationImportPage: React.FC = () => {
  const navigate = useNavigate();

  const historyData = [
    { date: '6/25/2024', label: 'Prescription 4' },
    { date: '11/25/2023', label: 'Prescription 3' },
    { date: '7 Aug 23', label: 'Prescription 2' },
    { date: '15 Jan 23', label: 'Prescription 1' },
  ];

  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center py-8 px-4">
      <div className="overflow-x-auto w-full max-w-3xl mb-10">
        <table className="table-auto border border-gray-400 w-full text-sm text-center">
          <thead className="bg-orange-200">
            <tr>
              <th className="border p-2">Med Name</th>
              <th className="border p-2">Taken before/after</th>
              <th className="border p-2">Frequency</th>
              <th className="border p-2">Dose schedule</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-orange-50">
              <td className="border p-2">Med abc</td>
              <td className="border p-2">After</td>
              <td className="border p-2">Daily</td>
              <td className="border p-2">4 times a day</td>
              <td className="border p-2">2 weeks</td>
              <td className="border p-2">Take with clean or clear water</td>
            </tr>
            <tr className="bg-purple-200">
              <td className="border p-2">Med xyz</td>
              <td className="border p-2">Before</td>
              <td className="border p-2">Daily</td>
              <td className="border p-2">every 24 hours</td>
              <td className="border p-2">1 month</td>
              <td className="border p-2">Avoid food NWX</td>
            </tr>
            <tr className="bg-purple-100">
              <td className="border p-2">Med drg</td>
              <td className="border p-2">Before</td>
              <td className="border p-2">Daily</td>
              <td className="border p-2">2 times</td>
              <td className="border p-2">1 month</td>
              <td className="border p-2"></td>
            </tr>
            <tr className="bg-blue-100">
              <td className="border p-2">Med 123</td>
              <td className="border p-2">N/A</td>
              <td className="border p-2">Weekly</td>
              <td className="border p-2">every 4 weeks</td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">History</h2>

      <div className="w-full max-w-md mb-8">
        <table className="table-fixed w-full border border-black text-center">
          <thead>
            <tr className="bg-red-100">
              <th className="border border-black p-2 text-red-600 font-bold">Prescription date</th>
              <th className="border border-black p-2 text-red-600 font-bold">Prescription</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="border border-black p-2">{item.date}</td>
                <td className="border border-black p-2">{item.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => navigate('/food-interaction')}
        className="bg-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-orange-600 transition"
      >
        Food Interaction Checker
      </button>
    </div>
  );
};

export default MedicationImportPage;
