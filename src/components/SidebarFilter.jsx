import React, { useState, useEffect } from "react";

const SidebarFilter = ({ isOpen, toggleSidebar, onFilterChange, initialFilters }) => {
  const [filters, setFilters] = useState({
    showBy: initialFilters.showBy || "newJobs",
    minSalary: initialFilters.minSalary || "",
    jobType: initialFilters.jobType || [],
    experience: initialFilters.experience || "",
    workType: initialFilters.workType || [],
  });

  useEffect(() => {
    console.log('Current filters in SidebarFilter:', filters);
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFilters((prev) => {
      if (type === "checkbox") {
        const updatedArray = checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value);
        
        return {
          ...prev,
          [name]: updatedArray,
        };
      }
  
      if (name === "minSalary") {
        return {
          ...prev,
          [name]: value === "" ? "" : Number(value),
        };
      }
  
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  
  
  const handleShowByChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      showBy: value,
    }));
  };

  const clearFilters = () => {
    const clearedFilters = {
      showBy: "newJobs",
      minSalary: "",
      jobType: [],
      experience: "",
      workType: [],
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 transform transition-transform z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:static md:translate-x-0 md:w-1/4 rounded-md overflow-y-auto max-h-screen`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            onClick={toggleSidebar}
          >
            ✖
          </button>
        </div>

        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">Show By</label>
          <div className="flex gap-2">
            {[
              { id: "newJobs", label: "New Jobs" },
              { id: "mostSuitable", label: "Most Suitable" },
            ].map((option) => (
              <button
                key={option.id}
                className={`px-3 py-1 rounded-full text-sm border transition-colors
                  ${
                    filters.showBy === option.id
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                onClick={() => handleShowByChange(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Minimum Salary
          </label>
          <input
            type="number"
            name="minSalary"
            value={filters.minSalary}
            onChange={handleChange}
            placeholder="Enter minimum salary"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div> */}

        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">Job Type</label>
          {["Full-time", "Part-time", "Freelance", "Internship", "Contract"].map(
            (type) => (
              <div key={type} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`jobType-${type}`}
                  name="jobType"
                  value={type}
                  checked={filters.jobType.includes(type)}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`jobType-${type}`}
                  className="ml-2 text-gray-700"
                >
                  {type}
                </label>
              </div>
            )
          )}
        </div>
{/* 
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Experience Level
          </label>
          <input
            type="text"
            name="experience"
            value={filters.experience}
            onChange={handleChange}
            placeholder="e.g., Entry Level, Senior"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div> */}

        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">Work Type</label>
          {["On-site", "Hybrid", "Remote"].map((type) => (
            <div key={type} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`workType-${type}`}
                name="workType"
                value={type}
                checked={filters.workType.includes(type)}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={`workType-${type}`}
                className="ml-2 text-gray-700"
              >
                {type}
              </label>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <button
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
            onClick={clearFilters}
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarFilter;