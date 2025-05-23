import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SubscribePage(): JSX.Element {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    firstname: "",
    lastname: "",
    dob: "",
    password: "",
    passwordVerify: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !form.email ||
      !form.firstname ||
      !form.lastname ||
      !form.dob ||
      !form.password ||
      !form.passwordVerify
    ) {
      setError("All fields are required.");
      return;
    }
    if (form.password !== form.passwordVerify) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    navigate("/main");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-200 p-4">
      <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-8 w-full max-w-sm shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign Up</h2>
        <p className="text-gray-600 mb-6">Create your account</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={form.firstname}
            onChange={handleChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={form.lastname}
            onChange={handleChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="date"
            name="dob"
            placeholder="Day of Birth"
            value={form.dob}
            onChange={handleChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="password"
            name="passwordVerify"
            placeholder="Verify Password"
            value={form.passwordVerify}
            onChange={handleChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Sign Up
          </button>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        </form>
        <p className="text-center text-gray-700 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
