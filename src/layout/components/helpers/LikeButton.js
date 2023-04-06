import React, { useState } from "react";

const LikeButton = ({ count }) => {
  const [likeCount, setLikeCount] = useState(count);
  return (
    <button
      className="relative bg-blue-500 text-white p-2 rounded text-sm font-bold overflow-visible mx-5 px-4"
      onClick={() => {
        setLikeCount(likeCount + 1);
      }}
    >
      <i className="fa-solid fa-thumbs-up"></i>{" "}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 px-3 py-1 bg-red-500 rounded-full">
        {likeCount}
      </div>
    </button>
  );
};

export default LikeButton;
