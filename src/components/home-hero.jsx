import React from "react";

const HomeHero = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Open the Door to</span>
            <span className="block text-indigo-600">Your Career Success!</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Discover a job that matches your skills and build a successful
            career with us.
          </p>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Find job here"
              className="p-2 border rounded w-full sm:w-auto"
            />
            <button className="ml-4 p-2 bg-blue-600 text-white rounded">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
