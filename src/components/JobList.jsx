import React, { useState } from "react";
import useJobs from "../data/FetchJobs";
import "../style/jobs-style.css";
import SidebarFilter from "./SidebarFilter";
import JobSearch from "../components/JobSearch";
import JobDetails from "../components/JobDetails";

const JobList = () => {
  const { jobs, isLoading } = useJobs();
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  // Fungsi untuk menangani pencarian dari JobSearch
  const handleSearch = (term, loc) => {
    setSearchTerm(term);
    setLocation(loc);
  };

  // Filter pekerjaan berdasarkan searchTerm (job title) & location
  const filteredJobs = jobs
    ? jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          job.location.toLowerCase().includes(location.toLowerCase())
      )
    : [];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 p-5">
      {/* Search Bar */}
      <JobSearch onSearch={handleSearch} />

      {/* Sidebar & Main Content */}
      <div className="flex w-full">
        {/* Sidebar */}
        <SidebarFilter isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="jobs-content w-full md:w-2/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Search Result</h2>
            <span className="text-gray-500">{filteredJobs.length} Jobs Found</span>
          </div>
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
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
                      Rp. {typeof job.salary === "number" ? job.salary.toLocaleString() : job.salary}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 block mt-2">
                    Posted {new Date(job.postedAt).toLocaleString()}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No jobs found.</p>
            )}
          </div>
        </div>

        {/* Job Details muncul di sebelah kanan jika ada job yang dipilih */}
        {selectedJob && (
          <div className="hidden md:block w-2/4 p-4">
            <JobDetails job={selectedJob} />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
