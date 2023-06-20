import React from "react";
import { Link } from "react-router-dom";
import { GuidedPathData } from "../../data/data";

const truncateString = (str, maxLen = 100) => {
  if (str.length > maxLen) {
    return str.slice(0, maxLen) + "...";
  } else {
    return str;
  }
};

const Card = ({ sno, imgLink, heading, description, headingLink }) => {
  return (
    <div className="px-4">
      <div className="max-w-[370px] mx-auto mb-10">
        <div className="rounded overflow-hidden mb-8">
          <img
            src={imgLink || "https://source.unsplash.com/800x600/?programmer"}
            alt=""
            className="w-full"
          />
        </div>
        <div>
          <h3>
            <Link
              to={`/roadmap/${sno}`}
              className="
                 font-semibold
                 text-xl
                 sm:text-2xl
                 lg:text-xl
                 xl:text-2xl
                 mb-4
                 inline-block
                 text-dark
                 hover:text-primary
                 hover:underline
                 "
            >
              {heading}
            </Link>
          </h3>
          <p className="text-base text-body-color">
            {truncateString(description, 100)}
          </p>
        </div>
      </div>
    </div>
  );
};

const GuidedPaths = () => {
  return (
    <section className="my-10 mx-52">
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
            <h2
              className="
                 font-bold
                 text-3xl
                 sm:text-4xl
                 md:text-[40px]
                 text-dark
                 mb-4
                 "
            >
              Latest Roadmap To learn Through my Github Profile
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:lg:grid-cols-3 sm:grid-cols-1">
        {GuidedPathData.map((e) => {
          return (
            <Card
              key={e.sno}
              sno={e.sno}
              imgLink={e.imgLink}
              heading={e.heading}
              description={e.description}
              headingLink={e.headingLink}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GuidedPaths;
