import React from "react";

const ChatPreview = () => {
  return (
    <div className="home-chatpreview bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              The things you care about job matter to Bantu
            </h3>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Discover a job that matches your skills and build a successful
              career with us.
            </p>
          </div>
          <div>
            <img
              src="path-to-image.jpg"
              alt="Chat Preview"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;
