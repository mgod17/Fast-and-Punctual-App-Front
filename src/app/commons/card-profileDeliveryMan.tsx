"use client";

import React, { useState } from "react";
import ButtonEnableAndDisable from "./button-enableAndDisable";
import ButtonActiveInactive from "./button-activeAndInactive";
import "./ButtonWithAnimation.css";
/*width: 300px
height: 86px
top: 115px
left: 30px
border-radius: 10px

 */
const CardProfileDeliveryMan: React.FC = () => {
  return (
    <div className="relative rounded-[10px] border w-[300px] h-[86px] bg-white p-4">
      <div className=" relative grid grid-cols-6 flex items-center">
        <div className="col-start-1 w-[56px] h-[56px] bg-white flex justify-center">
          <img src="/Frame.svg" alt="frame" />
        </div>
        <div className="col-start-2 col-span-4 ml-7">
          <div className="pl-1 text-colorText font-bold leading-15">FARID</div>
          <div>
            <ButtonActiveInactive />
          </div>
        </div>
        <div className="flex flex-row-reverse col-start-6">
          <ButtonEnableAndDisable />
        </div>
      </div>
    </div>
  );
};

export default CardProfileDeliveryMan;
