import React from "react";
import { Link } from "react-router-dom";
import { LikeButton } from "../components";
import { headingBadge, nameStyle } from "../../data/data";

const PageButton2 = (props) => {
  const { link, text } = props.data;
  return (
    <Link
      to={link}
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      <span className="relative">{text}</span>
    </Link>
  );
};

const PageButton1 = ({ link, text }) => {
  return (
    <Link
      to={link}
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
        {text}
      </span>
    </Link>
  );
};

const Home = () => {
  const data = {
    intro:
      "I'm 3rd year Computer Science & Engineering student purusing from Gargi Memorial Institute of Technology (Approved by AICTE and affiliated to MAKAUT)",
    data: (
      <span>
        This is my Portfolio website, You can check my other{" "}
        <PageButton2 data={{ link: "/", text: "projects" }} />,{" "}
        <PageButton2 data={{ link: "/", text: " blogs" }} /> etc... and dont
        forget to hit the like button and post Link review which will definitely
        help me to check if i need to imporve my portfolio.
      </span>
    ),
  };

  return (
    <>
      {" "}
      {/* <script src="https://unpkg.com/tailwindcss-jit-cdn"></script> */}
      <section className="flex flex-col my-40 antialiased text-gray-200 ">
        <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <Link className="relative block group" to="#0">
              <div
                className="absolute inset-0 bg-gray-200 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              ></div>
              <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="/images/profile.jpg"
                  width="540"
                  height="303"
                  alt="Blog post"
                />
              </figure>
            </Link>
            <div>
              <header>
                <div className="mb-3">
                  <ul className="flex flex-wrap text-xs font-medium -m-1">
                    <li className="m-1">{headingBadge.badge1}</li>
                    <li className="m-1">{headingBadge.badge2}</li>
                  </ul>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <Link
                    className="text-black transition duration-150 ease-in-out"
                    to="#0"
                  >
                    Hi I'm <span style={nameStyle}>Anirban Mishra</span>
                  </Link>
                </h3>
              </header>
              <p className="text-lg text-gray-600 flex-grow">{data.intro}</p>
              <p className="text-lg text-gray-600 flex-grow mt-3">
                {data.data}
              </p>
              <footer className="flex items-center mt-4"></footer>
              <div className="mt-4">
                <PageButton1 text="About" link="/about" />
                <span className="ml-3">
                  <LikeButton count={0} />
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
