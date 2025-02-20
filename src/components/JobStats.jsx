import React from "react";

const JobStats = () => {
  return (
    <div className="home-jobstats bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Discover a job that matches your skills and build a successful
            career with us
          </h3>
          <div className="mt-8 flex justify-center space-x-8">
            <div>
              <p className="text-2xl font-bold">400K</p>
              <p className="text-gray-500">Job list</p>
            </div>
            <div>
              <p className="text-2xl font-bold">800K</p>
              <p className="text-gray-500">People hired</p>
            </div>
            <div>
              <p className="text-2xl font-bold">20K</p>
              <p className="text-gray-500">Company</p>
            </div>
            <div>
              <p className="text-2xl font-bold">120</p>
              <p className="text-gray-500">Available country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStats;
