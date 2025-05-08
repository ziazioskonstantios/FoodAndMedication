import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyMedicinePage: React.FC = () => {
  const navigate = useNavigate();

  const messages = [
    {
      text: "For Med abc there is no food interaction issues from the FDA, but please follow the doctor note to wait two hours after your meal to take it",
      color: "bg-orange-400",
    },
    {
      text: "Med xyz, per FDA please note that there is food interaction for food name abc and all citric food, also there is a note from your doctor to avoid grapefruit for the duration of taking this medication",
      color: "bg-red-600",
    },
    {
      text: "For med drg: there is no restriction from FDA nor your doctor regarding this medication",
      color: "bg-green-500",
    },
    {
      text: "For med drg: there is no restriction from FDA nor your doctor regarding this medication",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center py-8 px-4">
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${msg.color} text-white rounded-xl p-4 shadow text-center`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="mt-12">
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

export default MyMedicinePage;
