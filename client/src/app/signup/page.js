import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="py-20 px-10 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden md:w-3/4 lg:w-2/3">
        <div className="md:w-1/2 pt-10 m-2">
          <h2 className="font-bold text-2xl mb-6 text-gray-800">
            Sign up for Bericks
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full py-2 border border-gray-300 rounded px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full py-2 border border-gray-300 rounded px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 border border-gray-300 rounded px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full py-2 border border-gray-300 rounded px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              type="submit"
              className="py-3 bg-purple-600 text-white w-80 rounded-md hover:bg-purple-800 flex items-center justify-center"
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
          <Image src="" alt="Contact" width={400} height={100} className="" />
        </div>
      </div>
    </div>
  );
}

export default page;
