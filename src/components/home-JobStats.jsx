const HomeJobStats = () => {
  return (
    <div className="bg-[#f8fafc] px-4 sm:px-8 md:px-16 py-12">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start">
      {/* Kiri - Title & Description */}
      <div className="space-y-4 max-w-lg text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start space-x-2">
          <span className="w-6 h-6 bg-blue-500 rounded-sm" />
          <span className="text-blue-600 text-lg font-semibold">More about Bantu</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-black">
          Discover a job that matches <br className="hidden sm:block" />
          Your skills and build a successful <br className="hidden sm:block" />
          Career with us
        </h2>
      </div>

      {/* Kanan - Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-24 text-center sm:text-right mt-8 lg:mt-0">
        <div>
          <p className="text-xl sm:text-6xl font-bold text-black">400K</p>
          <p className="text-gray-500 text-sm sm:text-base text-center">Job list</p>
        </div>
        <div>
          <p className="text-xl sm:text-6xl font-bold text-black">800K</p>
          <p className="text-gray-500 text-sm sm:text-base text-center">People hired</p>
        </div>
        <div>
          <p className="text-xl sm:text-6xl font-bold text-black">20K</p>
          <p className="text-gray-500 text-sm sm:text-base text-center">Company</p>
        </div>
        <div>
          <p className="text-xl sm:text-6xl font-bold text-black">120</p>
          <p className="text-gray-500 text-sm sm:text-base text-center">Available country</p>
        </div>
      </div>
    </div>

    {/* Logo Partners */}
    <div className="flex flex-wrap gap-12 sm:gap-8 mt-12 md:mt-0 md:px-24 px-10">
      <div className="flex items-center space-x-2">
        <img src="https://e1.pngegg.com/pngimages/252/890/png-clipart-spotify-for-os-x-el-capitan-spotify-logo.png" alt="Spotify" className="w-8 sm:w-10" />
        <span className="text-green-600 font-bold text-base sm:text-lg">Spotify</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png" alt="Microsoft" className="w-8 sm:w-10" />
        <span className="text-base sm:text-lg font-medium text-gray-900">Microsoft</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src="https://companieslogo.com/img/orig/MCFE-d6ec69dd.png?t=1720244492" alt="McAfee" className="w-8 sm:w-10" />
        <span className="text-base sm:text-lg font-medium text-gray-900">McAfee</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="Google" className="w-8 sm:w-10" />
        <span className="text-base sm:text-lg font-medium text-gray-900">Google</span>
      </div>
    </div>
  </div>
  );
};

export default HomeJobStats;
