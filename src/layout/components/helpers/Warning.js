import React from "react";

const Warning = () => {
  return (
    <>
      <div
        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p className="font-bold">In Progress</p>
        <p>This site is not ready..! working in progress.</p>
      </div>
    </>
  );
};

export default Warning;
