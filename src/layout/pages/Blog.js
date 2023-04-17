import React from "react";
import { Link } from "react-router-dom";

const BlogComponent = (props) => {
  const { date, topic, heading, description, link, linktext } = props.data;
  return (
    <div className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
        <div className="flex items-center justify-between">
          <span className="text-sm dark:text-gray-400">{date}</span>
          <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">
            {topic}
          </p>
        </div>
        <div className="mt-3">
          <p className="text-2xl font-bold hover:underline">{heading}</p>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          {link ? (
            <Link className="hover:font-bold hover:underline" to={link}>
              {linktext}
            </Link>
          ) : (
            <p></p>
          )}
          <div>
            <p className="flex items-center">
              <img
                src="/images/icon.png"
                alt="avatar"
                className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
              />
              <span className="hover:text-xl dark:text-gray-400">Anirban</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const BlogData = [
    {
      sno: 1,
      date: "April 17, 2023",
      topic: "Roadmaps",
      heading: "Just Uploaded Guided Paths to learn Languages",
      description:
        "Guided Paths is an online platform that offers structured language learning programs with personalized feedback and support from native speakers. Each course includes video lessons, exercises, and assessments to help learners develop their language skills in Link systematic way.",
      link: "/guidedpaths",
      linktext: "Guided Paths",
    },
  ];
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl mb-5">My Blogs</h1>
      <div className="grid lg:grid-cols-2 md:sm:grid-cols-1 sm:grid-cols-1 lg:mx-52 gap-8">
        {BlogData.map((ele) => {
          return <BlogComponent data={ele} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
