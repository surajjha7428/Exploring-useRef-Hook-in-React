import React, { useRef, useState } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something"
        onChange={handleInputChange}
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
};

export default UncontrolledInput;
