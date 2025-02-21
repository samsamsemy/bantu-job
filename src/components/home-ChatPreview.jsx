import React from "react";
import womanImage from "../assets/img/woman2.jpg";

const ChatPreview = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Bagian Chat dan Gambar */}
      <div className="flex items-start space-x-6">
        {/* Chat Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-64">
          <div className="text-gray-500 text-sm">Good Morning</div>
          <div className="mt-2 text-gray-800 text-sm">
            <p>Hi Ricky,</p>
            <p>
              I am Anjal. I'm a UI/UX Designer at Exakt Studio. I have a feeling
              we may have some very interesting work that you may be interested
              in full-time opportunities?
            </p>
          </div>
          <div className="text-gray-500 text-xs mt-2">08:34 AM</div>
          <div className="bg-blue-500 text-white p-2 mt-2 rounded-lg text-sm">
            Hi Markus, Thank you for offering me the position. I appreciate your
            willingness to discuss the details of the position with me and give
            me time to consider your offer.
          </div>
          <div className="text-gray-500 text-xs mt-2">11:12 AM</div>
        </div>

        {/* Gambar dengan Status */}
        <div className="relative">
          <img
            src={womanImage}
            alt="Chat Preview"
            className="rounded-lg shadow-lg w-64 h-full object-cover"
          />
        </div>
      </div>

      {/* Bagian Teks di Kanan */}
      <div className="mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left">
        <p className="text-blue-500 text-sm font-semibold">
          More about Jobstera
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          The things you care about job matter to Jobstera
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interests, and aspirations.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">
          Get started now
        </button>
      </div>
    </div>
  );
};

export default ChatPreview;
