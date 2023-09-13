"use client";

import { useEffect, useState } from "react";

const GetCard: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const handleSubtract = () => {
    if (amount > 0) return setAmount(amount - 1);
  };
  const handleAdd = () => {
    return setAmount(amount + 1);
  };
  useEffect(() => {}, [amount]);
  return (
    <div
      className="flex items-center border border-colorText h-auto w-[270px] bg-white rounded-s-lg"
      style={{
        borderRadius: "10px",
      }}
    >
      <div className="mr-2 ml-2 h-[14px] w-[14px] flex items-center border-colorText">
        <input type="checkbox" className="form-checkbox border-colorText" />
      </div>
      <div className="grid grid-cols-2 flex items-center border-colorText">
        <div className="mr-2 text-blue-700 font-Poppins text-base text-xs font-normal leading-4 text-colorText">
          Amenabar 6463 dsada dsa d as d as das da, CABA
        </div>

        <div
          className="flex justify-center items-center border border-colorText h-[26px] w-[59px] ml-12"
          style={{
            borderRadius: "10px",
          }}
        >
          <button onClick={handleSubtract}>
            <img
              className="h-3 w-3 mr-1"
              src="/minusCircle.svg"
              alt="minusCircle"
            />
          </button>
          <p className="text-colorText">{amount}</p>
          <button onClick={handleAdd}>
            <img
              className="h-3 w-3 ml-1"
              src="/plus-circle.svg"
              alt="plus-circle"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetCard;
