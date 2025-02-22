import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { MapPin, Heart, Menu } from "lucide-react";
import useJobs from "../data/FetchJobs";
import "../style/jobs-style.css";
import SidebarFilter from "./SidebarFilter";
import JobSearch from "../components/JobSearch";
import JobDetails from "../components/JobDetails";

ReactModal.setAppElement("#root");

const extractSalaryNumber = (salary) => {
  if (typeof salary === "number") return salary;
  return Number(salary.replace(/[Rp.,\s]/g, ""));
};

const JobList = () => {
  const { jobs, isLoading } = useJobs();
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileDetailsOpen, setIsMobileDetailsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({
    showBy: "newJobs",
    jobType: [],
    minSalary: "",
    experience: "",
    workType: [],
  });

  useEffect(() => {
    if (jobs?.length > 0) {
      console.log("Sample job data:", jobs[0]);
    }
  }, [jobs]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    if (window.innerWidth <= 768) {
      setIsMobileDetailsOpen(true);
    }
  };

  const handleSearch = (term, loc) => {
    setSearchTerm(term);
    setLocation(loc);
  };

  const handleFilterChange = (newFilters) => {
    console.log("New filters applied:", newFilters);
    setFilters(newFilters);
  };

  const handleFavoriteClick = (e, jobId) => {
    e.stopPropagation();
    setFavorites((prev) => {
      if (prev.includes(jobId)) {
        return prev.filter((id) => id !== jobId);
      }
      return [...prev, jobId];
    });
  };

  const filteredJobs = jobs
    ? jobs.filter((job) => {
        const matchesTitle = job.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesLocation = job.location
          .toLowerCase()
          .includes(location.toLowerCase());
        const jobSalary = extractSalaryNumber(job.salary) || 0;
        const minSalary = extractSalaryNumber(filters.minSalary) || 0;
        const matchesSalary = minSalary === 0 || jobSalary >= minSalary;
        const matchesExperience =
          !filters.experience ||
          job.experience
            ?.toLowerCase()
            .includes(filters.experience.toLowerCase());
        const jobTypeValue =
          job.jobType || job.job_type || job.type || job.employment_type;
        const matchesJobType =
          filters.jobType.length === 0 ||
          (jobTypeValue && filters.jobType.includes(jobTypeValue));
        const workTypeValue =
          job.workType || job.work_type || job.location_type;
        const matchesWorkType =
          filters.workType.length === 0 ||
          (workTypeValue && filters.workType.includes(workTypeValue));

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 p-5">
      <JobSearch onSearch={handleSearch} />

      <button
        className="md:hidden bg-blue-500 text-white p-2 rounded-lg flex items-center gap-2 mb-4"
        onClick={toggleSidebar}
      >
        <Menu size={20} />
        <span>Filters</span>
      </button>

      <div className="flex w-full">
        <SidebarFilter
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onFilterChange={handleFilterChange}
          initialFilters={filters}
        />

        <div className="jobs-content w-full md:w-2/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Search Results</h2>
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={job.avatar || "/default-company-logo.png"}
                        alt={job.company}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-blue-600 text-sm font-medium">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <Heart
                      className={`cursor-pointer ${
                        favorites.includes(job.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }`}
                      size={20}
                      onClick={(e) => handleFavoriteClick(e, job.id)}
                    />
                  </div>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-center text-gray-600 text-sm gap-2">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-900 font-medium text-sm gap-2">
                      <span className="font-bold">Rp</span>
                      <span>
                        {typeof job.salary === "number"
                          ? job.salary.toLocaleString("id-ID")
                          : job.salary}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.jobType && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                          {job.jobType}
                        </span>
                      )}
                      {job.workType && (
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                          {job.workType}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-gray-500 text-xs">
                    <span className="flex items-center gap-1">
                      <span className="text-gray-400">•</span> Posted{" "}
                      {job.posted_at}
                    </span>
                    <button className="text-blue-600 border border-blue-500 px-3 py-1 rounded-full text-xs hover:bg-blue-500 hover:text-white transition">
                      Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p className="text-lg font-medium">No jobs found</p>
                <p className="text-sm">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </div>
        </div>

        {selectedJob && (
          <div className="hidden md:block w-2/4">
            <JobDetails job={selectedJob} />
          </div>
        )}
      </div>

      {/* Modal untuk tampilan mobile */}
      <ReactModal
        isOpen={isMobileDetailsOpen}
        onRequestClose={() => setIsMobileDetailsOpen(false)}
        contentLabel="Job Details"
        className="modal"
        overlayClassName="overlay"
      >
        <button
          onClick={() => setIsMobileDetailsOpen(false)}
          className="close-button"
        >
          &times;
        </button>
        <JobDetails
          job={selectedJob}
          onClose={() => setIsMobileDetailsOpen(false)}
        />
      </ReactModal>
    </div>
  );
};

export default JobList;
