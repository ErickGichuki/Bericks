import React from "react";

function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden md:w-3/4 lg:w-2/3">
        {/* Left Section: Sign In Form */}
        <div className="md:w-1/2 p-10">
          <h2 className="font-bold text-2xl text-gray-800 mb-6">
            Sign In To Bericks
          </h2>
          <div className="flex flex-col space-y-3 mb-6">
            <a href="#">
              <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
                Sign in with Google
              </button>
            </a>
            <a href="#">
              <button className="bg-blue-400 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition">
                Sign in with Twitter
              </button>
            </a>
          </div>
          <p className="text-gray-500 text-center font-semibold mb-6">or</p>
          <form>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                className="bg-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
              <input
                type="password"
                className="bg-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />

              <div className="justify-center">
                <p>Forgot password?</p>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition font-semibold"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Image */}
        <div
          className="md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('your-image-url.jpg')" }}
        >
          {/* You can add an actual image or background image here */}
          <h2 className="text-center text-white font-bold text-2xl p-10">
            Welcome Back!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
