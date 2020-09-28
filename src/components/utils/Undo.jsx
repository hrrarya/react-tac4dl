import React from "react";

const Undo = ({ onUndo, closeToast }) => {
  const handleClick = () => {
    onUndo();
    closeToast();
  };
  return <button onClick={handleClick}>Undo</button>;
};

export default Undo;
