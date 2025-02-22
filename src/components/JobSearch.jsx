import { useState } from "react";

const JobSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm, location);
  };

  return (
    <div className="home-jobsearch bg-gray-100 py-4 my-10 mb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Find your dream job
        </h2>
        <div className="mt-4 flex justify-center gap-2 flex-wrap">
          <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-sm">
            <span className="text-gray-500 pr-2">🔍</span>
            <input
              type="text"
              placeholder="Job title, keyword..."
              className="outline-none w-48 sm:w-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="ml-2 text-gray-500"
              >
                ✖
              </button>
            )}
          </div>
          <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-sm">
            <span className="text-gray-500 pr-2">📍</span>
            <input
              type="text"
              placeholder="Location"
              className="outline-none w-48 sm:w-auto"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {location && (
              <button
                onClick={() => setLocation("")}
                className="ml-2 text-gray-500"
              >
                ✖
              </button>
            )}
          </div>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700"
            onClick={handleSearch}
          >
            Find jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
