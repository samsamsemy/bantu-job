import React from "react";

const JobDetails = ({ job }) => {
  if (!job) return null; // Jika tidak ada job yang dipilih, tidak tampil

  return (
    <div className="jobs-details bg-white p-4 shadow-md rounded-md">
      <h2 className="text-2xl font-bold">Job Details</h2>
      <div className="border-b pb-4 mt-4">
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <p className="text-lg text-gray-700 mt-1">{job.company}</p>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-sm text-gray-600">{job.location}</p>
          <p className="text-lg font-semibold text-blue-600">
            Rp. {typeof job.salary === "number" ? job.salary.toLocaleString() : job.salary}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Description</h3>
        <p className="mt-2 text-gray-600 leading-relaxed">{job.description}</p>
      </div>

      <button
        onClick={() => console.log("Apply clicked for job:", job.title)}
        className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
