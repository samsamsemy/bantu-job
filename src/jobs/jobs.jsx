import { useEffect, useState } from "react";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch("https://67b4bf90a9acbdb38ed03d7c.mockapi.io/api/v1/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="flex h-screen w-full bg-gray-100 p-5">
      {/* Sidebar Job List */}
      <div className="w-1/3 bg-white p-4 shadow-md rounded-md overflow-y-auto">
        <h2 className="text-lg font-semibold mb-3">Find your dream job</h2>
        <div>
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="p-3 border mb-2 cursor-pointer rounded-lg shadow-sm bg-gray-50 hover:bg-gray-200"
            >
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm">{job.location}</p>
              <p className="text-sm font-bold">Rp. {job.salary}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Detail */}
      <div className="w-2/3 bg-white p-6 shadow-md rounded-md ml-5">
        {selectedJob ? (
          <div>
            <h2 className="text-xl font-bold mb-3">{selectedJob.title}</h2>
            <p className="text-gray-700">{selectedJob.company}</p>
            <p className="text-sm text-gray-600">{selectedJob.location}</p>
            <p className="text-lg font-semibold text-blue-500">Rp. {selectedJob.salary}</p>
            <h3 className="mt-4 font-semibold">Description</h3>
            <p className="text-sm text-gray-600">{selectedJob.description}</p>
            <h3 className="mt-4 font-semibold">Requirements</h3>
            <ul className="text-sm text-gray-600 list-disc ml-5">
              {selectedJob.requirements?.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <button className="mt-5 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        ) : (
          <p className="text-gray-500">Select a job to see details</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
