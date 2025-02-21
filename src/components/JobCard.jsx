
import React from "react";

const JobCard = ({ job, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`bg-white p-4 shadow-md rounded-lg cursor-pointer ${isSelected ? "bg-blue-50" : ""}`}
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
  );
};

export default JobCard;
