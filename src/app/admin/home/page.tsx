"use client";

import Card from "@/app/commons/card";
import DateBox from "@/app/commons/date-box";
import React, { useState } from "react";
import { ArrowIcon } from "@/app/components/Icons";
const Home = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = () => {
    console.log("funciona");
    // setSelectedDay("");
  };

  return (
    <Card text="Gestionar Pedidos">
      <div className="flex  p-4">
        <img
          className="rounded-full h-57 w-57 "
          src="/foto_perfil.png"
          alt=""
        />
        <div className="text-colorText text-xs mt-4  ">
          <h3 className="font-bold text-sm mx-6">¡Hola Admin!</h3>
          <p className="mx-6">Estos son los pedidos del dia</p>
        </div>
      </div>
      <div className="flex w-full justify-between p-4">
        <img src="/arrowLeft.svg" alt="" />
        <div className="flex">
          <DateBox
            day="lun"
            dayNumber={12}
            isSelected={selectedDay === "lun"}
            onClick={() => handleDayClick()}
          ></DateBox>
          <DateBox
            day="mar"
            dayNumber={13}
            isSelected={selectedDay === "mar"}
            onClick={() => handleDayClick()}
          ></DateBox>
          <DateBox
            day="mie"
            dayNumber={14}
            isSelected={selectedDay === "mie"}
            onClick={() => handleDayClick()}
          ></DateBox>
          <DateBox
            day="jue"
            dayNumber={15}
            isSelected={selectedDay === "jue"}
            onClick={() => handleDayClick()}
          ></DateBox>
          <DateBox
            day="vie"
            dayNumber={16}
            isSelected={selectedDay === "vie"}
            onClick={() => handleDayClick()}
          ></DateBox>
        </div>

        <img src="/arrowRight.svg" alt="" />
      </div>
      <div className="p-4">
        <div className=" rounded-xl w-full h-72 border border-indigo-600 ">
          <div className="flex justify-between p-1">
            <h3 className="font-bold">Detalles</h3>
            <div className="flex items-center ">
              <p>20/09/23</p>
              <ArrowIcon className="mx-1" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Home;
