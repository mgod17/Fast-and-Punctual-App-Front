"use client";

import React, { useState } from "react";
import "./ButtonWithAnimation.css";

const ButtonEnableAndDisable: React.FC = () => {
  const [isMovingRight, setIsMovingRight] = useState(true);

  const handleClick = () => {
    setIsMovingRight(!isMovingRight);
  };

  const animationClass = isMovingRight
    ? "animate-moveRight"
    : "animate-moveLeft";
  return (
    <button
      className="bg-white w-[35px] h-[19px] rounded-full border border-colorText"
      onClick={handleClick}
    >
      <div
        className={`relative w-[14px] h-[14px] bg-green-500 rounded-full transform transition-transform duration-500 ease-in-out left-4 border-solid border-3D1DF3 ${animationClass}`}
      ></div>
    </button>
  );
};

export default ButtonEnableAndDisable;
