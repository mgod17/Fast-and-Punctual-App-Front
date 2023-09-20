"use client";
import ButtonActiveInactive from "./button-activeAndInactive";
import Link from "next/link";
export default function CardDeliveryMan() {
  return (
    <div className="relative border bg-white p-5">
      <div className=" relative grid grid-cols-6 flex items-center">
        <div className="col-start-1 w-[71px] h-[73px] justify-center">
          <img src="/Group3.svg" alt="frame" />
        </div>
        <div className="col-start-2 col-span-4 ml-7">
          <div className="pl-1 text-colorText font-bold leading-15">FARID</div>
          <div>
            <ButtonActiveInactive />
          </div>
        </div>
        <div className="w-[40px] h-[40px] flex flex-row-reverse col-start-6">
          <img src="/Frame.svg" alt="frame" />
        </div>
      </div>
    </div>
  );
}
