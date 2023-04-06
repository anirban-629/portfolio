import React from "react";
import ProjectShowcaseBlock from "./helpers/ProjectShowcaseBlock";
import { showCaseBlock } from "../../data/data";
import ProjectHeading from "./helpers/ProjectHeading";

const ProjectsShowcase = () => {
  return (
    <section>
      <div className="text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <ProjectHeading
            smallHeading="Project Diaries"
            title="Innovate Create & Deploy"
            description="Projects in computer science and engineering are not just a means to an
            end, but a journey of innovation, creativity, and problem-solving, where
            the destination is not always certain, but the learning and growth along
            the way are invaluable."
            showGithub
          />
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                {showCaseBlock.length !== 0 && (
                  <>
                    <div
                      className="border-2-2 border-yellow-555 absolute h-full border"
                      style={{
                        right: "50%",
                        border: "2px solid #C0DEFF",
                        borderRadius: "1",
                      }}
                    ></div>
                    <div
                      className="border-2-2 border-yellow-555 absolute h-full border"
                      style={{
                        left: "50%",
                        border: "2px solid #C0DEFF",
                        borderRadius: "1%",
                      }}
                    ></div>
                  </>
                )}
                {showCaseBlock.map((e) => (
                  <ProjectShowcaseBlock
                    key={e.title}
                    data={{
                      title: e.title,
                      description: e.description,
                      timeline: e.timeline,
                      link: e.link,
                      id: e.sid,
                    }}
                  />
                ))}
              </div>
              <div className="mt-44">
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
