import React, { useCallback, useContext } from 'react';
import useMousePosition from '@root/utils/hooks';
import { MouseContext } from '@root/context/mouseContext';
import './Cursor.scss';

const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  const _getCursorPositionStyles = useCallback(() => {
    return {
      left: `${x}px`,
      top: `${y}px`,
    };
  }, [x, y]);
  return (
    <>
      <div className={`cursorRing ${cursorType}`} style={_getCursorPositionStyles()}></div>
      <div className={`cursorDot ${cursorType}`} style={_getCursorPositionStyles()}></div>
    </>
  );
};

export default Cursor;
