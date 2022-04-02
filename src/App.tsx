import React, { ReactElement } from 'react';
import Hero from '@root/components/Hero';
import About from '@root/components/About';
import Cursor from '@root/components/Cursor';
import Skills from '@root/components/Skills';

const App = (): ReactElement => {
  return (
    <>
      <Cursor />
      <Hero />
      <About />
      <Skills />
    </>
  );
};

export default App;
