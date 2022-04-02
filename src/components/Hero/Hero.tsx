import React, { ReactElement, useContext } from 'react';
import { motion } from 'framer-motion';
import { MouseContext } from '@root/context/mouseContext';
import './Hero.scss';

// ease: [0.6, 0.01, -0.05, 0.95]

const wrapper = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

const text = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Header = (): ReactElement => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <>
      <div className="heroWrapper">
        <motion.div className="heroWrapperInner" variants={wrapper} initial="initial" animate="animate">
          <motion.h2
            className="heroTitleText"
            variants={text}
            onMouseEnter={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler('')}
          >
            R<span className="heroTitleTextTwo">Ô</span>SHAN K<span className="heroTitleTextTwo">Â</span>NWAR
          </motion.h2>
          <motion.p className="heroSubtitle" variants={text}>
            Not your ordinary <span className="heroSubtitleTwo">React</span> Developer.
          </motion.p>
        </motion.div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fef9ef"
          fill-opacity="1"
          d="M0,128L30,112C60,96,120,64,180,58.7C240,53,300,75,360,106.7C420,139,480,181,540,186.7C600,192,660,160,720,133.3C780,107,840,85,900,80C960,75,1020,85,1080,117.3C1140,149,1200,203,1260,202.7C1320,203,1380,149,1410,122.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Header;
