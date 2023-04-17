import React from "react";
import { Link } from "react-router-dom";

const ProjectShowcaseBlock = (props) => {
  const { id, title, description, timeline, link } = props.data;
  return (
    <>
      {timeline === "left" ? (
        <>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <Link
                to={`${link}/${id}`}
                className="mb-3 font-bold text-lg md:text-2xl text-[#85CDFD] hover:text-[#C0DEFF]"
              >
                {title}
              </Link>
              <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                {description}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>

          <div className="order-1  w-5/12 px-1 py-4">
            <Link
              to={`${link}/${id}`}
              className="mb-3 font-bold  text-lg md:text-2xl text-left text-[#85CDFD] hover:text-[#C0DEFF]"
            >
              {title}
            </Link>
            <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectShowcaseBlock;
