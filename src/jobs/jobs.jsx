import { useEffect, useState } from "react";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://67b4bf90a9acbdb38ed03d7c.mockapi.io/api/v1/jobs")
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is in the correct format
        const formattedJobs = data.map(job => ({
          ...job,
          // Convert any object fields to strings if needed
          description: typeof job.description === 'object' ? 
            JSON.stringify(job.description) : job.description,
          requirements: Array.isArray(job.requirements) ? 
            job.requirements : 
            typeof job.requirements === 'object' ? 
              [JSON.stringify(job.requirements)] : 
              []
        }));
        setJobs(formattedJobs);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setIsLoading(false);
      });
  }, []);

  const handleJobClick = (job) => {
    const formattedJob = {
      ...job,
      description: typeof job.description === 'object' ? 
        JSON.stringify(job.description) : job.description,
      requirements: Array.isArray(job.requirements) ? 
        job.requirements : 
        typeof job.requirements === 'object' ? 
          [JSON.stringify(job.requirements)] : 
          []
    };
    setSelectedJob(formattedJob);
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100 p-5">
      {/* Sidebar Job List */}
      <div className="w-1/3 bg-white p-4 shadow-md rounded-md overflow-y-auto">
        <h2 className="text-lg font-semibold mb-3">Find your dream job</h2>
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="space-y-2">
            {jobs.map((job) => (
              <div
                key={job.id}
                onClick={() => handleJobClick(job)}
                className={`p-4 border cursor-pointer rounded-lg transition-all duration-200 hover:shadow-md ${
                  selectedJob?.id === job.id
                    ? "bg-blue-50 border-blue-200"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <h3 className="font-semibold text-gray-800">
                  {typeof job.title === 'string' ? job.title : 'Untitled Position'}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {typeof job.company === 'string' ? job.company : 'Company Name'}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500">
                    {typeof job.location === 'string' ? job.location : 'Location'}
                  </p>
                  <p className="text-sm font-bold text-blue-600">
                    Rp. {typeof job.salary === 'number' ? job.salary.toLocaleString() : job.salary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Job Detail */}
      <div className="w-2/3 bg-white p-6 shadow-md rounded-md ml-5 overflow-y-auto">
        {selectedJob ? (
          <div className="animate-fadeIn">
            <div className="border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedJob.title}
              </h2>
              <p className="text-lg text-gray-700 mt-1">{selectedJob.company}</p>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-sm text-gray-600">{selectedJob.location}</p>
                <p className="text-lg font-semibold text-blue-600">
                  Rp. {typeof selectedJob.salary === 'number' ? 
                    selectedJob.salary.toLocaleString() : selectedJob.salary}
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
                    {typeof req === 'string' ? req : JSON.stringify(req)}
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
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            <p>Select a job to see details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;