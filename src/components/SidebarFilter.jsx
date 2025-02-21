import React, { useState } from "react";

const SidebarFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    showBy: "newJobs",
    minSalary: "",
    jobType: [],
    experience: "",
    workType: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value)
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
    onFilterChange(filters);
  };

  return (
    <div className="w-fit md:w-1/4 h-fit bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-3">Find your dream job</h2>

      {/* Show By */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Show By</label>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded-full border ${
              filters.showBy === "newJobs" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleChange({ target: { name: "showBy", value: "newJobs" } })}
          >
            New Jobs
          </button>
          <button
            className={`px-3 py-1 rounded-full border ${
              filters.showBy === "mostSuitable" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleChange({ target: { name: "showBy", value: "mostSuitable" } })}
          >
            Most Suitable
          </button>
        </div>
      </div>

      {/* Salary */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Salary</label>
        <input
          type="number"
          name="minSalary"
          value={filters.minSalary}
          onChange={handleChange}
          placeholder="Min salary"
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Job Type */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Job Type</label>
        {["Full-time", "Freelance", "Internship", "Volunteer", "Contract"].map((type) => (
          <div key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="jobType"
              value={type}
              checked={filters.jobType.includes(type)}
              onChange={handleChange}
            />
            <label className="ml-2">{type}</label>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Experience</label>
        <input
          type="text"
          name="experience"
          value={filters.experience}
          onChange={handleChange}
          placeholder="Enter experience level"
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Work Type */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Work Type</label>
        {["On-site", "Hybrid", "Remote"].map((type) => (
          <div key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="workType"
              value={type}
              checked={filters.workType.includes(type)}
              onChange={handleChange}
            />
            <label className="ml-2">{type}</label>
          </div>
        ))}
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4"
        onClick={() => onFilterChange(filters)}
      >
        Search Result
      </button>
    </div>
  );
};

export default SidebarFilter;