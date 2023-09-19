import React from "react";
import Card from "@/app/commons/card";
import FormAddPackages from "@/app/components/form-add-packages";

const Add = () => {
  return (
    <>
      <Card text="Agregar paquetes">
        <FormAddPackages />
      </Card>
    </>
  );
};

export default Add;
