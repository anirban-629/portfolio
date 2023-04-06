import React from "react";
import { Link } from "react-router-dom";

const Skill = (props) => {
  const { skillName, skillRepoLink, imageLink } = props.data;
  return (
    <>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border py-2 px-3 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
            src={imageLink}
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              {skillName}{" "}
              {skillRepoLink === "" ? (
                <></>
              ) : (
                <Link
                  to={skillRepoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-fuchsia-950 hover:cursor-alias"
                >
                  <i className="ms-2 fa-brands fa-github"></i>
                </Link>
              )}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
