const JobDetails = ({ job }) => {
  if (!job) return null;

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
          <span className="font-semibold">Job Type:</span> {job.jobType || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Work Type:</span> {job.workType || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {job.location || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Salary:</span> {job.salary || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {job.category || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Posted At:</span> {job.posted_at || "N/A"}
        </p>
      </div>

      {/* Deskripsi Pekerjaan */}
      <div className="mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed">{job.description || "No description available"}</p>
        </div>
      </div>

      {/* Persyaratan Pekerjaan */}
      {job.requirements && job.requirements.length > 0 && (
        <div className="mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h3>
            <div className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <p className="text-gray-600">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
