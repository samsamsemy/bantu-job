import React from "react";
import googleImage from "../assets/img/google.jpg";
import mcafeeImage from "../assets/img/McAfee.jpg";
import microsoftImage from "../assets/img/microsoft.jpg";
import spotifyImage from "../assets/img/spotiify.jpg";

const HomeJobStats = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Teks Utama */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Discover a job that matches your skills and build a successful
            career with us.
          </h2>
          <div className="mt-6 flex space-x-4">
            {/* Menggunakan gambar yang sudah di-import */}
            <img src={spotifyImage} alt="Spotify" className="h-6" />
            <img src={microsoftImage} alt="Microsoft" className="h-6" />
            <img src={mcafeeImage} alt="McAfee" className="h-6" />
            <img src={googleImage} alt="Google" className="h-6" />
          </div>
        </div>

        {/* Statistik Angka */}
        <div className="md:w-1/2 grid grid-cols-2 gap-6 text-center mt-10 md:mt-0">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">400K</h3>
            <p className="text-gray-500">Job List</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">800K</h3>
            <p className="text-gray-500">People Hired</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">20K</h3>
            <p className="text-gray-500">Company</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">120</h3>
            <p className="text-gray-500">Available Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeJobStats;
