import React from "react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  label: string;
  route: string;
}

export default function MenuPage(): JSX.Element {
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { label: "Scan Prescription", route: "/medication-import-menu" },
    { label: "Medication list", route: "/my-medicines" },
    { label: "Food interaction Checker", route: "/food-interactions" },
    { label: "Taking Medication Log", route: "/medication-log" },
    { label: "Log out", route: "/login" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-orange-100 to-orange-200 p-6">
      <div className="flex flex-col gap-4 items-center mt-12">
        {menuItems.map((item: MenuItem, index: number) => (
          <button
            key={index}
            onClick={() => navigate(item.route)}
            className="w-60 bg-orange-500 text-white py-3 rounded-xl shadow-md hover:bg-orange-600 transition font-medium"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => navigate("/")}
          className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-md hover:bg-orange-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}