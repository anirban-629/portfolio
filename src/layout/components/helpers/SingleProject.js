import React from "react";
import { Link, useParams } from "react-router-dom";
import { showCaseBlock } from "../../../data/data";
import ComingSoonPage from "../../pages/ComingSoonPage";

const Block = (props) => {
  const { title, liveLink, imglink, description, github, used } = props.data;
  return (
    <div className="wrapper antialiased text-gray-900 uppercase">
      <div>
        <img
          src={imglink}
          alt=" random imgee"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />

        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {title}
            </h4>

            <div className="mt-1 text-sm">
              <Link
                className="hover:text-fuchsia-800"
                to={github}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github mr-2"></i>
                github
              </Link>
            </div>
            <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold">
                {liveLink && (
                  <Link
                    className="hover:text-fuchsia-800"
                    to={liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    live on netlify
                  </Link>
                )}
              </span>
              <span className="text-sm text-gray-600 lowercase">
                {description}
              </span>
            </div>
            {used}
          </div>
        </div>
      </div>
    </div>
  );
};

const SingleProject = () => {
  const { id } = useParams();
  const data = showCaseBlock[Number(id)].projects;
  if (!data || data.length === 0) return <ComingSoonPage />;
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50 uppercase">
            {showCaseBlock[Number(id)].title}
          </h1>
          ``
        </div>

        <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 flex-wrap gap-10 mt-10">
          {data.map((ele) => {
            return (
              <Block
                key={ele.id}
                data={{
                  title: ele.title,
                  liveLink: ele.livelink,
                  imglink: ele.imglink,
                  github: ele.githublink || "https://github.com/anirban-629",
                  used: ele.used || "",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
