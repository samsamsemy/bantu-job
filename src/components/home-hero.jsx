import React from "react";

const HomeHero = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          <span className="block">Open the Door to</span>
          <span className="block text-indigo-600">Your Career Success!</span>
        </h2>
        <p className="mt-6 text-lg text-gray-500">
          Discover a job that matches your skills and build a successful career
          with us.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="text"
            placeholder="Find job here"
            className="p-3 border rounded-lg w-full sm:w-80 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <button className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
