import React, { useEffect, useRef } from "react";

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="Focus on mount" />;
};

export default FocusableInput;
