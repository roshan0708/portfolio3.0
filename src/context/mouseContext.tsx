import React, { createContext, useState, ReactElement } from 'react';

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: (_cursorType: string) => {},
});

interface MouseContextProps {
  children: ReactElement;
}

const MouseContextProvider = (props: MouseContextProps) => {
  const [cursorType, setCursorType] = useState('');
  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType);
  };
  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
