import React, { useState, FormEvent, ChangeEvent } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const scheduleOptions = ["Daily", "Weekly", "Monthly"];
const durationOptions = ["1 day", "1 week", "1 month"];
const takenOptions = ["Before meal", "After meal"];

const CreateMedicinePage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    medicineName: name || "",
    taken: takenOptions[0],
    schedule: scheduleOptions[0],
    duration: durationOptions[0],
    notes: "",
    active: true,
  });

  const [error, setError] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.medicineName || !form.taken || !form.schedule || !form.duration) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    // Here you would handle saving the medicine
    navigate("/my-medicines");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-200 p-4">
      <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Add Medicine</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="font-semibold text-gray-700">
            Medicine Name
            <input
              type="text"
              name="medicineName"
              value={form.medicineName}
              onChange={handleChange}
              className="mt-1 px-4 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </label>
          <label className="font-semibold text-gray-700">
            Taken
            <select
              name="taken"
              value={form.taken}
              onChange={handleChange}
              className="mt-1 px-4 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            >
              {takenOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="font-semibold text-gray-700">
            Schedule
            <select
              name="schedule"
              value={form.schedule}
              onChange={handleChange}
              className="mt-1 px-4 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            >
              {scheduleOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="font-semibold text-gray-700">
            Duration
            <select
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="mt-1 px-4 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            >
              {durationOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="font-semibold text-gray-700">
            Notes
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="mt-1 px-4 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              rows={2}
            />
          </label>
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
              className="accent-orange-500"
            />
            Active
          </label>
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Save Medicine
          </button>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        </form>
        <p className="text-center text-gray-700 mt-6 text-sm">
          <Link to="/my-medicines" className="text-orange-600 font-semibold hover:underline">
            Back to My Medicines
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateMedicinePage;