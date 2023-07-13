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
        <Route exact path="/" Component={Home} />
        <Route exact path="about" Component={About} />
        <Route exact path="skills" Component={Skills} />
        <Route exact path="projects" Component={Project} />
        <Route exact path="projects/project/:id" Component={SingleProject} />
        <Route exact path="blogs" Component={Blog} />
        <Route exact path="guidedpaths" Component={GuidedPaths} />
        <Route exact path="*" Component={NotFound} />
        <Route exact path="/roadmap/:id" Component={RoadMap} />
        <Route exact path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
};

export default Page;
