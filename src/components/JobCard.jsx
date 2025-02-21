import { MapPin, DollarSign, Heart } from "lucide-react";

const JobCard = ({ job, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`bg-white p-4 shadow-md rounded-lg cursor-pointer border ${
        isSelected ? "border-blue-500" : "border-gray-200"
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
            <p className="text-blue-600 text-sm font-medium">{job.company}</p>
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
          <span>{job.salary}</span>
        </div>
      </div>

      {/* Waktu Posting & Tombol Detail */}
      <div className="mt-3 flex items-center justify-between text-gray-500 text-xs">
        <span className="flex items-center gap-1">
          <span className="text-gray-400">•</span> Posted 10 mins ago
        </span>
        <button className="text-blue-600 border border-blue-500 px-3 py-1 rounded-full text-xs hover:bg-blue-500 hover:text-white transition">
          Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
