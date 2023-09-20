import React from "react";
import { ArrowIcon } from "./Icons";

interface Props {
  paquetes: number;
  text: string;
  className: string;
  children: React.ReactNode;
}

const HomeCard = ({ paquetes, text, className, children }: Props) => {
  return (
    <div
      className={` ${className} rounded-[10px] bg-cardColor shadow-md overflow-x-hidden overflow-y-auto`}
      style={{ boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.24)" }}
    >
      <div className="relative top-5 left-64">
        <ArrowIcon className="" />
      </div>
      <div className="p-2 ml-2">
        <h1 className="text-base font-semibold leading-5 text-left text-colorText">
          {text}
        </h1>
        <h3 className="text-xs font-normal leading-5 text-left text-colorText">
          {paquetes ? `${paquetes} entregados` : "Sin repartos pendientes"}
        </h3>
      </div>
      <div className="flex justify-center mb-4">{children}</div>
    </div>
  );
};

export default HomeCard;
