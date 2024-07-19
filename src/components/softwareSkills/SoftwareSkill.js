import React, {useContext} from "react";
import PropTypes from "prop-types";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const SoftwareSkill = () => {
  const {isDark} = useContext(StyleContext);
  return (
    <div
      className={
        isDark
          ? "software-skills-main-div dark-mode"
          : "software-skills-main-div"
      }
    >
      {skillsSection.softwareSkills.map((skill, i) => {
        return (
          <div key={i} className="software-skill-inline">
            {skill.fontAwesomeClassname ? (
              <i className={`icon ${skill.fontAwesomeClassname}`}></i>
            ) : (
              <i className={`icon ${skill.customClassname}`}></i>
            )}
            <p>{skill.skillName}</p>
          </div>
        );
      })}
    </div>
  );
};

SoftwareSkill.propTypes = {
  isDark: PropTypes.bool
};

export default SoftwareSkill;
