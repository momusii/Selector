import React from 'react';

const Shape = (props) => { // ({shape.selectShape}) - deconstruct object
  const shape = props.shape;
  const selectShape = props.selectShape;

  return(
    <div className={shape} onClick={() => selectShape(shape)} ></div>
  )
}

export default Shape
