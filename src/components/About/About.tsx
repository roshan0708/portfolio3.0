import React, { ReactElement } from 'react';
import { getAboutMe } from '@root/utils/helpers';

const About = (): ReactElement => {
  return (
    <div className="SectionWrapper">
      <h2 className="SectionHeading">Who am i?</h2>
      <p className="SectionText">{getAboutMe()}</p>

      <h2 className="SectionHeading">Where did I study from?</h2>
      <p className="SectionText">
        I'm currently pursuing Integrated Master of Technology in Mathematics and Computing from Indian Institute of
        Technology(Indian School of Mines) Dhanbad. I've completed my Higher Secondary Education from Jain Public
        School, Raipur, CG.
      </p>
    </div>
  );
};

export default About;
