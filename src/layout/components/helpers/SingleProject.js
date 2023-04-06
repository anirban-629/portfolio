import React from "react";
import { showCaseBlock } from "../../../data/data";
import { useParams } from "react-router-dom";
import ComingSoonPage from "../../pages/ComingSoonPage";

const LeftBlock = ({ title, id, imgLink }) => (
  <div className="flex flex-row w-full">
    <div className="w-2/5 px-2 py-10">
      <div className="flex flex-col w-full rounded-lg  bg-white px-4 py-5">
        <div className="text-gray-600 mb-2 flex justify-between">
          <div className="font-bold">{title}</div>
        </div>
        <img
          alt=""
          className="flex-1 flex-shrink-0 object-cover h-28 mb-4 bg-center rounded-sm dark:bg-gray-500 w-80"
          src={imgLink}
        />
      </div>
    </div>
    <div className="w-1/5  flex justify-center">
      <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
          <div>{id}</div>
        </div>
      </div>
    </div>
    <div className="w-2/5 px-2 py-10 "></div>
  </div>
);

const RightBlock = ({ title, id, imgLink }) => (
  <div className="flex flex-row w-full">
    <div className="w-2/5 px-2 py-10"></div>
    <div className="w-1/5  flex justify-center">
      <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
          {id}
        </div>
      </div>
    </div>
    <div className="w-2/5 px-2 py-10 ">
      <div className="flex flex-col w-full rounded-lg  bg-white px-4 py-5">
        <div className="text-gray-600 mb-2 flex justify-between">
          <div className="font-bold">{title}</div>
        </div>
        <img
          alt=""
          className="flex-1 flex-shrink-0 object-cover h-32 mb-4 bg-center rounded-sm dark:bg-gray-500 w-80"
          src={imgLink}
        />
      </div>
    </div>
  </div>
);

const SingleProject = () => {
  const { id } = useParams();
  const projects = showCaseBlock[Number(id)].projects;
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="min-h-screen flex justify-center">
          <div className="w-2/3 mx-auto">
            {projects ? (
              projects.map((e) => {
                return (
                  <>
                    {e.timeline === "left" ? (
                      <LeftBlock
                        key={e.id}
                        id={e.id}
                        imgLink={e.imglink}
                        title={e.title}
                      />
                    ) : (
                      <RightBlock
                        key={e.id}
                        id={e.id}
                        imgLink={e.imglink}
                        title={e.title}
                      />
                    )}
                  </>
                );
              })
            ) : (
              <ComingSoonPage />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
