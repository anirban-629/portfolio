import React, { useState } from "react";

const Warning = () => {
  const [visible, setVisibility] = useState(true);
  return (
    <>
      {visible && (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 flex gap-10"
          role="alert"
        >
          <button
            onClick={() => {
              setVisibility(false);
            }}
            className="text-3xl"
          >
            X
          </button>
          <div>
            <p className="font-bold">In Progress</p>
            <p>This site is not ready..! working in progress.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Warning;
