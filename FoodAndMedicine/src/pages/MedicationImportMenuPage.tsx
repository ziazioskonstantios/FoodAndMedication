import React from 'react';
import { useNavigate } from 'react-router-dom';

const MedicationImportMenuPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-orange-200 p-4">
      <div className="flex flex-col gap-6 w-full max-w-xs text-center">
        <button
          className="bg-orange-500 text-white py-3 rounded-xl font-semibold shadow hover:bg-orange-600 transition"
          onClick={() => navigate('/medication-import')}
        >
          Import for me
        </button>

        <button
          className="bg-amber-950 text-white py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
          onClick={() => console.log('Log and take my medication')}
        >
          log and take my medication
        </button>

        <button
          className="bg-orange-500 text-white py-3 rounded-xl font-semibold shadow hover:bg-orange-600 transition"
          onClick={() => navigate('/menu')}
        >
          Main Menu
        </button>
      </div>

      <div className="mt-10">
        <button
          onClick={() => navigate('/')}
          className="bg-orange-500 p-3 rounded-full shadow-md hover:bg-orange-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MedicationImportMenuPage;
