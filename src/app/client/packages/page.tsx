import React from "react";
import Card from "@/app/commons/card";
import GetCard from "@/app/commons/card-getCard";
import Button from "@/app/commons/button";
import Link from "next/link";

const Package = () => {
  return (
    <div>
      <Card text="Obtener paquetes">
        <div className="border-dotted border-b border-gray-400 ">
          <a
            className="my-2 text-colorText hover:underline flex flex-col items-center text-center text-xs"
            href="/login"
          >
            ¿Cuántos paquetes repartiras hoy?
          </a>
        </div>

        <div className="mt-3">
          <div className="flex items-center">
            <GetCard text="Amenabar 6463, CABA" />
          </div>
          <div className="flex items-center">
            <GetCard text="Av Carabobo y Rivadavia, CABA" />
          </div>
          <div className="flex items-center">
            <GetCard text="Melian 1242, CABA" />
          </div>
          <div className="flex items-center">
            <GetCard text="Melian 1242, CABA" />
          </div>
          <div className="flex items-center">
            <GetCard text="Gorriti 4595, CABA" />
          </div>
          <div className="flex items-center">
            <GetCard text="Av. Gral. Mosconi 1056, CABA" />
          </div>
          <div className="flex items-center">
            <GetCard text="Tacuarí 1797, CABA" />
          </div>
        </div>
      </Card>
      <div className="flex justify-center botton-4 mt-5">
        <Link href="/delivery">
          <Button
            text="Iniciar jornada"
            className="bg-secundary text-primary text-sm"
          />
        </Link>
      </div>
    </div>
  );
};

export default Package;
