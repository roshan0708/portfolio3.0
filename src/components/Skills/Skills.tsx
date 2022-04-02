import React, { ReactElement } from 'react';
import { SKILL_TEXT } from './constants';
import './Skills.scss';

const Skills = (): ReactElement => {
  return (
    <div className="SectionWrapper">
      <h2 className="SectionHeading">{SKILL_TEXT.SKILL_HEADING}</h2>
      <p className="SectionText">{SKILL_TEXT.SKILL_SUB_HEADING}</p>
    </div>
  );
};

export default Skills;
