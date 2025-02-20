import React from "react";

const JobSearch = () => {
  return (
    <div className="home-jobsearch bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Find your dream job
        </h2>
        <div className="mt-8">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Website"
              className="p-2 border rounded w-full sm:w-auto"
            />
            <button className="ml-4 p-2 bg-blue-600 text-white rounded">
              Find jobs
            </button>
          </div>
        </div>
        <div className="mt-8">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700">
                  Job Title
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700">
                  Location
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700">
                  Salary
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700">
                  Experience
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700">
                  Type
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700">
                  Description
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700">
                  Requirement
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700">
                  Apply
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 text-gray-700">Front End Website</td>
                <td className="py-2 px-4 text-gray-700">Jakarta, Indonesia</td>
                <td className="py-2 px-4 text-gray-700">
                  Rp. 3,000,000 - Rp. 5,000,000
                </td>
                <td className="py-2 px-4 text-gray-700">4 Years</td>
                <td className="py-2 px-4 text-gray-700">Full-time</td>
                <td className="py-2 px-4 text-gray-700">Description</td>
                <td className="py-2 px-4 text-gray-700">Requirement</td>
                <td className="py-2 px-4 text-gray-700">
                  <button className="bg-blue-600 text-white rounded">
                    Apply Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
