import React, { useRef } from "react";

const Color = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = "lightblue";
    }
  };

  return (
    <div
      ref={divRef}
      style={{ width: "200px", height: "200px", backgroundColor: "lightgrey" }}
      onClick={handleClick}
    >
      Click me to change  Background color
    </div>
  );
};

export default Color;
