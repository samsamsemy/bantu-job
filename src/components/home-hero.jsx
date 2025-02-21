import React from "react";

const HomeHero = () => {
  return (
    // <div className="bg-white py-12">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="text-center">
    //       <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
    //         <span className="block">Open the Door to</span>
    //         <span className="block text-indigo-600">Your Career Success!</span>
    //       </h2>
    //       <p className="mt-4 text-lg leading-6 text-gray-500">
    //         Discover a job that matches your skills and build a successful
    //         career with us.
    //       </p>
    //       <div className="mt-8">
    //         <input
    //           type="text"
    //           placeholder="Find job here"
    //           className="p-2 border rounded w-full sm:w-auto"
    //         />
    //         <button className="ml-4 p-2 bg-blue-600 text-white rounded">
    //           Search
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="w-full max-w-[1300px] mx-auto mt-4 px-6 md:px-12">
  {/* Gambar utama */}
  <div className="relative w-full flex flex-col md:flex-row items-center">
    {/* Teks di kiri */}
    <div className="text-center md:text-left md:w-1/2">
      <div className="bg-white border-4 border-[#226dc1] rounded-full px-4 py-2 inline-block">
        <span className="text-[#226dc1] text-lg font-semibold">
          #1 Top pencarian kerja di Bantu
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mt-4">
        Open the Door to <br />
        <span className="text-[#226dc1]">Your Career Success!</span>
      </h1>
      <p className="text-lg md:text-2xl font-light mt-4">
        Discover a job that matches your skills and <br />
        build a successful career with us.
      </p>

      {/* Search Bar */}
      <div className="mt-6 bg-gray-200 rounded-full flex items-center px-4 py-3 w-full max-w-lg">
        <input
          type="text"
          placeholder="Find job here"
          className="flex-1 bg-transparent outline-none text-lg"
        />
        <span className="mx-2 text-lg text-gray-600">|</span>
        <input
          type="text"
          placeholder="Jakarta"
          className="w-24 bg-transparent outline-none text-lg"
        />
        <button className="bg-[#226dc1] text-white font-medium px-4 py-2 rounded-full ml-4">
          Search
        </button>
      </div>
    </div>

    {/* Gambar di kanan */}
    <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
      <img
        src="https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/f16a12a3-7ec2-4d0a-94f9-dec1a96bfc90/image.png?ut=1704758400000"
        alt="Career Image"
      />
    </div>
  </div>
</div>


  );
};

export default HomeHero;
