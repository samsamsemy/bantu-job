import React from "react";

const Testimonials = () => {
  return (
    <div className="home-testimonials bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Reviews of people who get jobs using Bantu
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">James Rhye</h3>
            <p className="mt-2 text-sm text-gray-500">Lead Designer, Layers</p>
            <p className="mt-4 text-sm text-gray-500">
              Thanks to this platform, I secured a job in my dream company! I
              couldn't be happier with the support and opportunities this
              platform offered. Highly recommended to anyone serious about
              finding their perfect job!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">
              Sarah Hesiburg
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Software Engineer, Google
            </p>
            <p className="mt-4 text-sm text-gray-500">
              If you're job seeker looking for a platform that truly cares about
              your success, look no further. This platform is a game-changer,
              and I highly recommended it to anyone serious about their career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
