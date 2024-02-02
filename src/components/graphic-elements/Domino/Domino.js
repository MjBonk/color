import React, { useState } from "react";
import "./Domino.css";

function Domino() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`domino-box ${isHovered ? "hover-state" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="domino-brick0 domino-brick"></div>
      <div className="domino-brick1 domino-brick"></div>
      <div className="domino-brick2 domino-brick"></div>
      <div className="domino-brick3 domino-brick"></div>
      <div className="domino-brick4 domino-brick"></div>
      <div className="domino-brick5 domino-brick"></div>
      <div className="domino-brick6 domino-brick"></div>
      <div className="domino-brick7 domino-brick"></div>
      <div className="domino-brick8 domino-brick"></div>
      <div className="domino-brick9 domino-brick"></div>
      <div className="domino-brick10 domino-brick"></div>
    </div>
  );
}

export default Domino;