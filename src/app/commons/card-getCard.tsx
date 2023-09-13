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
      className="flex items-center border border-blue-700 h-[46px] w-[270px] bg-white rounded-s-lg"
      style={{
        borderRadius: "10px",
      }}
    >
      <div className="mr-2 ml-2 h-[14px] w-[14px]">
        <input type="checkbox" className="form-checkbox text-green-500" />
      </div>

      <div className="mr-2 text-blue-700 w-[72px] h-[30px] font-Poppins text-base font-normal leading-4">
        Amenabar 2353, <br />
        CABA
      </div>

      <div
        className="flex justify-center items-center border border-blue-700 h-[26px] w-[59px]"
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
        <p className="text-blue-700">{amount}</p>
        <button onClick={handleAdd}>
          <img
            className="h-3 w-3 ml-1"
            src="/plus-circle.svg"
            alt="plus-circle"
          />
        </button>
      </div>
    </div>
  );
};

export default GetCard;
