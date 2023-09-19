import React from "react";
import Button from "../commons/button";
import { Date } from "../commons/date";
import { Amount } from "../commons/amount";

const FormAddPackages = () => {
  return (
    <div className=" w-full ">
      <form className="rounded px-5 pt-16 pb-8  sm:w-full text-xs">
        <div className="mb-6 w-full">
          <input
            className=" pb-2 pr-2 border-b border-primary  outline-none bg-inherit w-full  placeholder-primary"
            type="text"
            name="email"
            id="email"
            placeholder="Dirección"
          />
        </div>
        <div className="mb-6">
          <input
            className=" pb-2 pr-2 border-b border-primary  outline-none bg-inherit w-full  placeholder-primary"
            type="text"
            name="email"
            id="email"
            placeholder="Nombre de quien recibe"
          />
        </div>
        <div className="mb-12">
          <input
            className=" pb-2 pr-2 border-b border-primary  outline-none bg-inherit w-full  placeholder-primary"
            type="text"
            name="email"
            id="email"
            placeholder="Peso del paquete (kg)"
          />
        </div>
        <div className="grid grid-cols-2 divide-x divide-primary ">
          <div className=" ">
            <Date />
          </div>
          <div className=" ">
            <Amount />
          </div>
        </div>
        <div className="flex items-center mt-36">
          <Button
            text="Agregar"
            className="bg-secundary	text-colorText text-sm"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default FormAddPackages;
