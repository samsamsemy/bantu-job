import React from "react";

const JobDetails = ({ job }) => {
  if (!job) return null;

  return (
    <div className="jobs-details w-100% bg-white p-6 shadow-md rounded-lg">
      {/* Header dengan Logo Perusahaan */}
      <div className="text-center">
        <img
          src={job.avatar}
          alt={job.company}
          className="w-16 h-16 mx-auto mb-3 rounded-full"
        />
        <h3 className="text-2xl font-bold">{job.title}</h3>
        <p className="text-lg text-blue-600 font-semibold">{job.company}</p>
      </div>

      {/* Informasi Utama */}
      <div className="border-b pb-4 mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
        <p>
          <span className="font-semibold">Job Type:</span>{" "}
          {job.jobType || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Work Type:</span>{" "}
          {job.workType || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Location:</span>{" "}
          {job.location || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Salary:</span> {job.salary || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Category:</span>{" "}
          {job.category || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Posted At:</span>{" "}
          {job.posted_at || "N/A"}
        </p>
      </div>

      {/* Deskripsi Pekerjaan */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Description</h3>
        <p className="mt-2 text-gray-600 leading-relaxed">
          {job.description?.summary || "No description available"}
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {job.description?.points?.map((point, index) => (
            <li key={index}>{point}</li>
          )) || []}
        </ul>
      </div>

      {/* Persyaratan Pekerjaan */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Requirements</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {job.requirements?.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          )) || []}
        </ul>
      </div>

      {/* Tombol Apply */}
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
