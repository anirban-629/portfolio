import React from "react";

const ProjectHeading = ({
  smallHeading = "",
  title,
  description,
  showGithub = false,
}) => {
  return (
    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
      {smallHeading === "" ? (
        <></>
      ) : (
        <p className="ml-2 text-[#82C3EC] uppercase tracking-loose">
          {smallHeading}
        </p>
      )}

      <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
        {title}
      </p>
      <p className="text-sm md:text-base text-black mb-4">{description}</p>
      {showGithub ? (
        <a
          href="https://github.com/anirban-629"
          target="_blank"
          rel="noreferrer"
          className="bg-transparent mr-auto  text-[#82C3EC] hover:text-[#4B56D2] shadow hover:shadow-lg py-2 px-4 border border-[#ADA2FF] hover:border-transparent"
        >
          Explore My{" "}
          <i className="ml-1 fa-brands fa-github text-black text-lg"></i>
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProjectHeading;
