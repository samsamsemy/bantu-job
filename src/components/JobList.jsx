import { MapPin, DollarSign, Heart } from "lucide-react";
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
  const [filters, setFilters] = useState({
    jobType: [],
    minSalary: "",
    experience: "",
    workType: [],
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleSearch = (term, loc) => {
    setSearchTerm(term);
    setLocation(loc);
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const filteredJobs = jobs
    ? jobs.filter((job) => {
        const matchesTitle = job.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesLocation = job.location
          .toLowerCase()
          .includes(location.toLowerCase());
        const matchesSalary =
          filters.minSalary === "" ||
          (job.salary && job.salary >= Number(filters.minSalary));
        const matchesExperience =
          filters.experience === "" ||
          job.experience
            .toLowerCase()
            .includes(filters.experience.toLowerCase());
        const matchesJobType =
          filters.jobType.length === 0 || filters.jobType.includes(job.type);
        const matchesWorkType =
          filters.workType.length === 0 ||
          filters.workType.includes(job.workType);

        return (
          matchesTitle &&
          matchesLocation &&
          matchesSalary &&
          matchesExperience &&
          matchesJobType &&
          matchesWorkType
        );
      })
    : [];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 p-5">
      {/* Search Bar */}
      <JobSearch onSearch={handleSearch} />

      {/* Sidebar & Main Content */}
      <div className="flex w-full">
        {/* Sidebar */}
        <SidebarFilter
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onFilterChange={handleFilterChange}
        />

        {/* Main Content */}
        <div className="jobs-content w-full md:w-2/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Search Result</h2>
            <span className="text-gray-500">
              {filteredJobs.length} Jobs Found
            </span>
          </div>
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => handleJobClick(job)}
                  className={`bg-white p-4 shadow-md rounded-lg cursor-pointer border ${
                    selectedJob?.id === job.id
                      ? "border-blue-500"
                      : "border-gray-200"
                  } transition-all hover:shadow-lg`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={job.avatar}
                        alt={job.company}
                        className="w-10 h-10 rounded-md"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-blue-600 text-sm font-medium">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <Heart className="text-red-500 cursor-pointer" size={20} />
                  </div>

                  {/* Lokasi & Gaji */}
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center text-gray-600 text-sm gap-2">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-900 font-medium text-sm gap-2">
                      <DollarSign size={16} />
                      <span>
                        {typeof job.salary === "number"
                          ? job.salary.toLocaleString()
                          : job.salary}
                      </span>
                    </div>
                  </div>

                  {/* Waktu Posting & Tombol Detail */}
                  <div className="mt-3 flex items-center justify-between text-gray-500 text-xs">
                    <span className="flex items-center gap-1">
                      <span className="text-gray-400">•</span> Posted{" "}
                      {new Date(job.postedAt).toLocaleString()}
                    </span>
                    <button className="text-blue-600 border border-blue-500 px-3 py-1 rounded-full text-xs hover:bg-blue-500 hover:text-white transition">
                      Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No jobs found.</p>
            )}
          </div>
        </div>

        {/* Job Details muncul di sebelah kanan jika ada job yang dipilih */}
        {selectedJob && (
          <div className="hidden md:block w-2/4">
            <JobDetails job={selectedJob} />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
