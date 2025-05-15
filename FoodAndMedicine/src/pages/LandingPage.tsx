import React from "react";
import { useNavigate } from "react-router-dom";
import landingImage from '../assets/food-medication-new.png';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4" style={{backgroundColor: "#fdf2d6"}}>
      <div className="max-w-xl text-center">
        <div
          className="w-[340px] h-[412px] mx-auto overflow-hidden rounded-2xl shadow-md mb-6 cursor-pointer"
          onClick={handleImageClick}
        >
          <img
          width="340px"
          height="412px"
            src={landingImage}
            alt="Food and Medication"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Food and Medication Interaction Checker & Planner App
        </h1>
        <p className="text-gray-600 mb-6">
          Discover how your meals interact with your medications. Plan your diet safely and efficiently with our intelligent interaction checker.
        </p>
      </div>
    </div>
  );
}
