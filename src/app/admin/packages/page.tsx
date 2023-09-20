import React from "react";
import Card from "@/app/commons/card";
import CardSmall from "@/app/commons/card-small";
import ButtonAdd from "@/app/commons/button-add";

const Package = () => {
  return (
    <div>
      <Card text="Paquetes">
        <div className="text-colorText text-xs mt-4  ">
          <h3 className="font-bold mx-6">523 paquetes</h3>
          <p className="mx-6">con el criterio de filtrado seleccionado</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-3">
            <CardSmall status="" className="" />
          </div>
          <div className="mt-3">
            <CardSmall status="" className="" />
          </div>
          <div className="mt-3">
            <CardSmall status="" className="" />
          </div>
          <div className="mt-3">
            <CardSmall status="" className="" />
          </div>
        </div>
        <div className="mt-3 mx-5 text-right">
          <ButtonAdd></ButtonAdd>
        </div>
      </Card>
    </div>
  );
};

export default Package;
