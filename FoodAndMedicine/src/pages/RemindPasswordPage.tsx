import React, { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";

export default function RemindPasswordPage(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-200 p-4">
      <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-8 w-full max-w-sm shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Remind Password</h2>
        <p className="text-gray-600 mb-6">Enter your email to receive password reset instructions.</p>
        {submitted ? (
          <p className="text-green-600 text-center mb-4">If this email exists, instructions have been sent.</p>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Send Reset Link
            </button>
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          </form>
        )}
        <p className="text-center text-gray-700 mt-6 text-sm">
          <Link to="/login" className="text-orange-600 font-semibold hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
