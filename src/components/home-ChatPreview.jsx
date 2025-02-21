import React from "react";

const ChatPreview = () => {
  return (
    <div className="bg-gray-100 px-4 sm:px-8 md:px-16 py-12 flex flex-col lg:flex-row items-center justify-center">
    {/* Chat Section */}
    <div className="relative flex flex-col items-start w-full lg:w-[450px] md:ms-32 p-6 bg-white rounded-2xl shadow-lg border border-gray-300">
      <span className="text-sm text-gray-500 mt-4">08:34 AM</span>
      <div className="bg-gray-200 text-black p-3 rounded-lg w-fit max-w-[70%] mt-2">
        Good Morning
      </div>

      <span className="text-sm text-gray-500 mt-6 self">08:34 AM</span>
      <div className="bg-gray-200 text-black p-3 rounded-lg w-fit max-w-[70%] mt-2">
        Hi Ricky, I am Anjal. I'm a UI/UX Designer at Exakt Studio. I have a feeling we may have some very interesting work that you may be interested in full-time opportunities?
      </div>

      <span className="text-sm text-gray-500 mt-6 self-end">11:12 AM</span>
      <div className="bg-blue-500 text-white p-3 rounded-lg w-fit max-w-[70%] self-end mt-2">
        Hi Markus, Thank you for offering me the position. I appreciate your willingness to discuss the details of the position with me and give me time to consider your offer.
      </div>

      <span className="text-sm text-gray-500 mt-6">11:39 AM</span>
      <div className="bg-gray-200 text-black p-3 rounded-lg w-fit max-w-[70%]  mt-2">
        You're welcome, Samuel. So what's your answer for my offer?
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-[400px] h-[770px] mt-8 lg:mt-0 bg-cover bg-center rounded-2xl shadow-lg md:ms-10 " 
         style={{ backgroundImage: "url(https://purepng.com/public/uploads/large/purepng.com-business-womenpeoplepersonsbusinesspersonsbusinesswomanwomenfemale-1121525109942fsldx.png)" }}>
    </div>

    {/* Text Section */}
    <div className="text-center lg:text-left mt-12 lg:mt-0 lg:ml-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-black">
        The things you care <br />
        about job matter to Bantu
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 mt-4">
        Discover a job that matches your skills and build a successful career with us.
      </p>
      <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-600">
        Get started now
      </button>
    </div>
  </div>
  );
};

export default ChatPreview;
