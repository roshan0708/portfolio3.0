import React, { ReactElement } from 'react';
import Hero from '@root/components/Hero';
import Cursor from '@root/components/Cursor';

const App = (): ReactElement => {
  return (
    <>
      <Cursor />
      <Hero />
    </>
  );
};

export default App;
