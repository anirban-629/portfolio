import React from "react";
import { useParams } from "react-router-dom";
import { GuidedPathData } from "../../data/data";

const RoadMapCard = (props) => {
  const { step, paragraph } = props.data;
  return (
    <div className="border-l-2 mt-10">
      <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-gray-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
        <div className="w-5 h-5 bg-gray-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

        <div className="w-10 h-1 bg-gray-200 absolute -left-10 z-0"></div>

        <div className="flex-auto">
          <h1 className="text-lg">Step {step}</h1>
          <h1 className="text-xl font-bold">{paragraph}</h1>
        </div>
        <a href="/" className="text-center text-white hover:text-gray-300">
          Download materials
        </a>
      </div>
    </div>
  );
};

const RoadMap = () => {
  const id = parseInt(useParams().id);
  const element = GuidedPathData.filter((e) => e.sno === id);
  const steps = element[0].steps;
  return (
    <>
      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
        <h1 className="text-3xl text-center font-bold text-blue-500">
          {<data className="heading"></data>}
        </h1>
        {steps.map((e) => {
          return <RoadMapCard key={e.step} data={e} />;
        })}
      </div>
    </>
  );
};

export default RoadMap;
/**
 * <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
            </div>
            <a href="/" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
            </div>
            <a href="/" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
            </div>
            <a href="/" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
            <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

            <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
            </div>
            <a href="/" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>
 */
