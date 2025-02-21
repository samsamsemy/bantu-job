import React from "react";

const SidebarFilter = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`jobs_filter w-1/4 bg-white p-4 shadow-md rounded-md overflow-y-auto ${isOpen ? "block" : "hidden md:block"}`}>
      <h2 className="text-lg font-semibold mb-3">Find your dream job</h2>

      {/* Filter: Show By */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Show By</label>
        <div className="flex items-center mb-2">
          <input type="radio" id="newJobs" name="showBy" defaultChecked />
          <label htmlFor="newJobs" className="ml-2">New Jobs</label>
        </div>
        <div className="flex items-center">
          <input type="radio" id="mostSuitable" name="showBy" />
          <label htmlFor="mostSuitable" className="ml-2">Most Suitable</label>
        </div>
      </div>

      {/* Filter: Location */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Location</label>
        <input type="text" placeholder="Location" className="w-full border p-2 rounded" />
      </div>

      {/* Filter: Salary */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Salary</label>
        <input type="text" placeholder="Salary" className="w-full border p-2 rounded" />
      </div>

      {/* Filter: Job Type */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Job Type</label>
        {["Full-time", "Freelance", "Internship", "Volunteer"].map((type) => (
          <div key={type} className="flex items-center mb-2">
            <input type="checkbox" id={type.toLowerCase()} />
            <label htmlFor={type.toLowerCase()} className="ml-2">{type}</label>
          </div>
        ))}
      </div>

      {/* Filter: Experience */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Experience</label>
        <input type="text" placeholder="Experience" className="w-full border p-2 rounded" />
      </div>

      {/* Filter: Work Type */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Work Type</label>
        {["On-site", "Hybrid"].map((type) => (
          <div key={type} className="flex items-center mb-2">
            <input type="checkbox" id={type.toLowerCase()} />
            <label htmlFor={type.toLowerCase()} className="ml-2">{type}</label>
          </div>
        ))}
      </div>

      <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4">
        Search Result
      </button>
    </div>
  );
};

export default SidebarFilter;
