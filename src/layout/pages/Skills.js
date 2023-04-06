import React from "react";
import {
  backend,
  databases,
  frameworks,
  frontend,
  languages,
  tools,
} from "../../data/data";
import { SkillsSection } from "../components";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <section className="text-gray-600 body-font mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Skills
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Being Link Computer Science & Engineering student I've learnt some
            Programming Languages,tools etc.. Some of the Resources are also
            available in my &nbsp;
            <Link
              to="https://github.com/anirban-629/"
              target="_blank"
              rel="noreferrer"
              className="text-black hover:text-fuchsia-950 "
            >
              <i className="fa-brands fa-github"></i> Github
            </Link>
            &nbsp;repository
          </p>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-10 sm:grid-cols-1">
          <SkillsSection
            sectionClassName="Languages"
            heading="Programming Languages"
            content={languages}
          />
          <SkillsSection
            sectionClassName="Frontend"
            heading="Frontend"
            content={frontend}
          />
          <SkillsSection
            sectionClassName="Framework"
            heading="Frameworks"
            content={frameworks}
          />
          <SkillsSection
            sectionClassName="Backend"
            heading="Backend"
            content={backend}
          />
          <SkillsSection
            sectionClassName="Database"
            heading="Database"
            content={databases}
          />
          <SkillsSection
            sectionClassName="Tools"
            heading="Tools"
            content={tools}
          />
        </div>
      </div>
      <div className="flex flex-col text-center w-full mb-20">
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          These are the skills which I learned and also I've implemented by
          making some Projects you can check out my
          <Link
            to="/projects"
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Projects
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Skills;
