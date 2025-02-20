import React, { useState } from "react";
import useJobs from "../data/FetchJobs";
import "../style/jobs-style.css";

const JobList = () => {
  const { jobs, isLoading, selectedJob, setSelectedJob } = useJobs();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    if (window.innerWidth < 768) {
      // Redirect to new page for job details on mobile
      window.location.href = `/job/${job.id}`;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100 p-5">
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 bg-blue-500 text-white p-2 rounded"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div className="jobs_filter w-1/4 bg-white p-4 shadow-md rounded-md overflow-y-auto">
        <h2 className="text-lg font-semibold mb-3">Find your dream job</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Show By</label>
          <div className="flex items-center mb-2">
            <input type="radio" id="newJobs" name="showBy" defaultChecked />
            <label htmlFor="newJobs" className="ml-2">
              New Jobs
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="mostSuitable" name="showBy" />
            <label htmlFor="mostSuitable" className="ml-2">
              Most Suitable
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Location</label>
          <input
            type="text"
            placeholder="Location"
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Salary</label>
          <input
            type="text"
            placeholder="Salary"
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Job Type</label>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="fullTime" />
            <label htmlFor="fullTime" className="ml-2">
              Full-time
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="freelance" />
            <label htmlFor="freelance" className="ml-2">
              Freelance
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="internship" />
            <label htmlFor="internship" className="ml-2">
              Internship
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="volunteer" />
            <label htmlFor="volunteer" className="ml-2">
              Volunteer
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Experience
          </label>
          <input
            type="text"
            placeholder="Experience"
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Work Type
          </label>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="onSite" />
            <label htmlFor="onSite" className="ml-2">
              On-site
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="hybrid" />
            <label htmlFor="hybrid" className="ml-2">
              Hybrid
            </label>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4">
          Search Result
        </button>
      </div>

      {/* Main Content */}
      <div className="jobs-content w-full md:w-2/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Search Result</h2>
          <span className="text-gray-500">{jobs.length} Jobs Found</span>
        </div>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => handleJobClick(job)}
              className={`bg-white p-4 shadow-md rounded-lg cursor-pointer ${
                selectedJob?.id === job.id ? "bg-blue-50" : ""
              }`}
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-sm font-bold text-blue-600">
                  Rp.{" "}
                  {typeof job.salary === "number"
                    ? job.salary.toLocaleString()
                    : job.salary}
                </p>
              </div>
              <span className="text-sm text-gray-500 block mt-2">
                Posted {new Date(job.postedAt).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Job Details for Desktop */}
      {selectedJob && window.innerWidth >= 768 && (
        <div className="jobs-details w-2/4 bg-white p-4 shadow-md rounded-md ml-4">
          <h2 className="text-2xl font-bold">Job Details</h2>
          <div className="border-b pb-4 mt-4">
            <h3 className="text-xl font-semibold">{selectedJob.title}</h3>
            <p className="text-lg text-gray-700 mt-1">{selectedJob.company}</p>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-sm text-gray-600">{selectedJob.location}</p>
              <p className="text-lg font-semibold text-blue-600">
                Rp.{" "}
                {typeof selectedJob.salary === "number"
                  ? selectedJob.salary.toLocaleString()
                  : selectedJob.salary}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              {selectedJob.description}
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Requirements
            </h3>
            <ul className="mt-2 space-y-2">
              {selectedJob.requirements?.map((req, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-600"
                >
                  <span className="text-blue-500 mt-1">•</span>
                  {typeof req === "string" ? req : JSON.stringify(req)}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("Apply clicked for job:", selectedJob.title);
            }}
            className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;
