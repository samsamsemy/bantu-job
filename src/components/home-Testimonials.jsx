const HomeTestimonials = () => {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center pt-10 mb-11">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-6">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h4 className="text-blue-600 text-2xl font-medium">💬 Testimonial</h4>
        <h2 className="text-5xl font-medium text-black">
          Reviews of people <br /> who get jobs using <br /> Bantu
        </h2>
        <p className="text-xl font-light text-black">
          Discover a job that matches your skills and build <br />a successful career with us.
        </p>
        <button className="bg-blue-500 text-white text-2xl font-bold px-6 py-3 rounded-2xl">
          More stories
        </button>
      </div>

      {/* Right Section - Testimonials */}
      <div className="md:w-1/2 flex flex-col space-y-10 mt-12 md:mt-6">
        {/* Testimonial 1 */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 border border-gray-300 md:me-20">
        <div className="flex justify-between py-5">
          <span className="flex border items-center text-gray-700 text-sm font-semibold px-2 py-2 rounded-2xl">User Testimonial</span>
          <p className="flex text-yellow-500 text-2xl">★★★★★</p>
          </div>
          <p className="text-lg font-medium text-black pb-6">
            Thanks to this platform, I secured a job in my dream company! I couldn't
            be happier with the support and opportunities this platform offered.
            Highly recommended to anyone serious about finding their perfect job!
          </p>
          <hr />
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="James Rhye"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <h5 className="text-xl font-medium text-black">James Rhye</h5>
              <p className="text-gray-500">Lead Designer, Layers</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 border border-gray-300 md:ms-40">
          <div className="flex justify-between py-5">
          <span className="flex border items-center text-gray-700 text-sm font-semibold px-2 py-2 rounded-2xl">User Testimonial</span>
          <p className="flex text-yellow-500 text-2xl">★★★★★</p>
          </div>
          <p className="text-lg font-medium text-black pb-6">
            If you’re a job seeker looking for a platform that truly cares about
            your success, look no further. This platform is a game-changer, and I
            highly recommend it to anyone serious about their career.
          </p>
          <hr />
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah Hasibuan"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <h5 className="text-xl font-medium text-black">Sarah Hasibuan</h5>
              <p className="text-gray-500">Software Engineer, Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomeTestimonials;
