import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
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
  return (
    <motion.div className="heroWrapper" variants={wrapper} initial="initial" animate="animate">
      <motion.h2 className="heroTitleText" variants={text}>
        R<span className="heroTitleTextTwo">Ô</span>SHAN K<span className="heroTitleTextTwo">Â</span>NWAR
      </motion.h2>
      <motion.p className="heroSubtitle" variants={text}>
        Not your ordinary <span className="heroSubtitleTwo">React</span> Developer.
      </motion.p>
    </motion.div>
  );
};

export default Header;
