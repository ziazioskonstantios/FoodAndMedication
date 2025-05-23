import React, { useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "food" && password === "medicine") {
      navigate("/main");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-200 p-4">
      <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-8 w-full max-w-sm shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
        <p className="text-gray-600 mb-6">Please sign in to continue</p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Log In
          </button>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        </form>

        <p className="text-center text-gray-700 mt-6 text-sm">
          Don’t have an account?{' '}
          <Link to="/subscribe" className="text-orange-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
             <p className="text-center text-gray-700 mt-6 text-sm">
          Forgot your password?{' '}
          <Link to="/remind-password" className="text-orange-600 font-semibold hover:underline">
           Remind me my password
          </Link>
        </p>
      </div>
    </div>
  );
}
