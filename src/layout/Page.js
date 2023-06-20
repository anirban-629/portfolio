import React from "react";
import {
  About,
  Blog,
  Contact,
  GuidedPaths,
  Home,
  NotFound,
  Project,
  Skills,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, RoadMap, SingleProject } from "./components";

const Page = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="skills" element={<Skills />} />
        <Route exact path="projects" element={<Project />} />
        <Route exact path="projects/project/:id" element={<SingleProject />} />
        <Route exact path="blogs" element={<Blog />} />
        <Route exact path="guidedpaths" element={<GuidedPaths />} />
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/roadmap/:id" element={<RoadMap />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Page;
