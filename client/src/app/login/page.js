import React from "react";

function page() {
  return (
    <div className="py-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pt-10 px-10">
          <h2 className="font-bold text-xl">Sign In To Bericks</h2>
          <div className="flex flex-col space-y-3 py-4">
            <a href="#">
              <button className="bg-gray-200 px-10 py-3 rounded-md">
                Sign with google
              </button>
            </a>
            <a href="#">
              <button className="bg-gray-200 px-10 py-3 rounded-md">
                Sign with Twitter
              </button>
            </a>
          </div>
          <p className="font-bold text-gray-300">----------or--------------</p>
          <form className="">
            <div className="flex flex-col">
              <input
                className="bg-gray-200 px-3 py-3 rounded-md"
                placeholder="Email"
              />
              <input
                className="bg-gray-200 px-3 py-3 rounded-md"
                placeholder="Password"
              />
            </div>
          </form>
        </div>
        <div className="md:w-1/2">
          <h2>Image</h2>
        </div>
      </div>
    </div>
  );
}

export default page;
