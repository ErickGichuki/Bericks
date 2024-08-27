"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/register/",
        {
          username,
          email,
          password,
        }
      );

      if (response.status === 201) {
        // Registration successful
        setSuccessMessage("Registration successful! Please log in.");
        setError("");
        // Optionally clear form or redirect here
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      // Handle error
      setError("Registration failed. Please try again.");
      setSuccessMessage("");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="py-20 px-10 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden md:w-3/4 lg:w-2/3">
        <div className="md:w-1/2 pt-10 m-2">
          <h2 className="font-bold text-2xl mb-6 text-gray-800">
            Sign up for Bericks
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-2 border border-gray-300 rounded px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 border border-gray-300 rounded px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 border border-gray-300 rounded px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-2 border border-gray-300 rounded px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            <button
              type="submit"
              className="py-3 bg-purple-600 text-white w-full rounded-md hover:bg-purple-800 flex items-center justify-center"
            >
              <Image
                src="/login.png"
                alt="login"
                width={30}
                height={20}
                className="mr-2 bg-white"
              />
              Sign Up
            </button>
          </form>
          <div className="py-8 text-center">
            <h3 className="text-gray-600 mb-4">Or signup with</h3>
            <div className="space-x-4">
              <button className="px-4 py-2 border rounded-md bg-red-600 text-white hover:bg-red-700 transition">
                Google
              </button>
              <button className="px-4 py-2 border rounded-md bg-blue-700 text-white hover:bg-blue-800 transition">
                Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-blue-100 flex flex-col items-center justify-center p-10">
          <h2 className="font-bold">Welcome to Bericks</h2>
          <Image
            src="/contact.jpg"
            alt="Contact"
            width={400}
            height={100}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
