import React from "react";
import Skill from "../Skill";

const SkillSection = ({ sectionClassName, heading, content }) => {
  return (
    <div className={sectionClassName}>
      <p className="text-4xl font-normal leading-normal mt-5 mb-5 text-cyan-800">
        {heading}
      </p>
      <div className="flex flex-wrap -m-2">
        {content.map((e) => (
          <Skill
            key={e.name}
            data={{
              skillName: e.name,
              skillRepoLink: e.activeLink,
              imageLink: e.imageLink,
            }}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default SkillSection;
