import React from "react";

const HomeTestimonials = () => {
  const testimonials = [
    {
      name: "James Rhye",
      position: "Lead Designer, Layers",
      message:
        "Thanks to this platform, I secured a job in my dream company! I couldn't be happier with the support and opportunities this platform offered. Highly recommended to anyone serious about finding their perfect job!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Hesiburg",
      position: "Software Engineer, Google",
      message:
        "If you're a job seeker looking for a platform that truly cares about your success, look no further. This platform is a game-changer, and I highly recommend it to anyone serious about their career.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Brown",
      position: "Data Analyst, Facebook",
      message:
        "The hiring process was smooth, and I found my current role much faster than expected. The resources provided are top-notch. I am very grateful for this platform.",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Reviews from People Who Found Jobs Using Bantu
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Hear what our successful users have to say about their experience.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {testimonial.position}
              </p>
              <p className="mt-4 text-sm text-gray-600">
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
