import { useState } from "react";

const JobDetails = ({ job }) => {
  if (!job) return null;

  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="jobs-details w-full bg-white p-6 shadow-md rounded-lg">
      {/* Header dengan Logo Perusahaan */}
      <div className="text-center">
        <img
          src={job.avatar}
          alt={job.company}
          className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
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
          <span className="font-semibold">Experience:</span>{" "}
          {job.experience || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Salary:</span> {job.salary || "N/A"}
        </p>
      </div>

      {/* Tab Menu */}
      <div className="flex border-b mt-6">
        <button
          className={`flex-1 py-2 text-center font-semibold ${
            activeTab === "description"
              ? "border-b-4 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("description")}
        >
          DESCRIPTION
        </button>
        <button
          className={`flex-1 py-2 text-center font-semibold ${
            activeTab === "company"
              ? "border-b-4 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("company")}
        >
          COMPANY
        </button>
      </div>

      {/* Content Section */}
      {activeTab === "description" ? (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Description
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {job.description || "No description available"}
          </p>
          {job.requirements && job.requirements.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Requirement
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Company</h3>
          <p className="text-gray-600 leading-relaxed">
            {job.companyInfo || "No company information available"}
          </p>
        </div>
      )}

      {/* Apply Button */}
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
