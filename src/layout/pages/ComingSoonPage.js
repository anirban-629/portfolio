import React from "react";
import { Link } from "react-router-dom";

const ComingSoonPage = () => {
  return (
    <div className="mt-40 md:px-12 lg:w-1/2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div>
        <span className="text-2xl font-semibold text-gray-800 md:text-4xl">
          ⏰ Coming<span className="ml-2 text-blue-600">Soon</span> ⏰
        </span>
        <h1 className="py-5 text-5xl font-semibold text-gray-800 md:text-6xl">
          Site<span className="ml-2 text-blue-600">Generating...</span>
        </h1>

        <p className="mt-2 text-sm text-gray-500 md:text-lg">
          Something amazing is on its way. Stay tuned for updates! working hard
          to bring you something great. Watch this space. Get ready for
          something exciting. Check back soon for more details. Putting the
          finishing touches on something special. Exciting things are coming!
        </p>
        <div className="flex space-x-3 justify-center lg:justify-start mt-6">
          <Link
            to="/projects"
            className="bg-pink-600 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
          >
            Go Back
          </Link>
        </div>
        <img
          src="https://st.depositphotos.com/1106005/3146/i/450/depositphotos_31468817-stock-photo-coming-soon-sign.jpg"
          alt=""
          className="w-40 h-40"
        />
      </div>
      <div></div>
    </div>
  );
};

export default ComingSoonPage;
