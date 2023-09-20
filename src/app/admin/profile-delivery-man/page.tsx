"use client";

import React, { useState } from "react";
import CardProfileDeliveryMan from "@/app/commons/card-profileDeliveryMan";
import Card from "@/app/commons/card";
import HomeCard from "@/app/components/HomeCard";
import CardSmall from "@/app/commons/card-small";

export default function ProfileDeliveryMan() {
  const [paquete, setPaquete] = useState(0);

  return (
    <div>
      <Card text="Perfil del repartidor">
        <CardProfileDeliveryMan />
      </Card>
      <div className="mb-5 mt-3 ">
        <HomeCard paquetes={paquete} text="Repartos pendientes" className="">
          {paquete ? (
            <CardSmall status="Entregado" className="bg-inprogress" />
          ) : (
            ""
          )}
        </HomeCard>
      </div>
      <div>
        <HomeCard
          paquetes={28}
          text="Historial de repartos"
          className="w-[300px] h-[314px] "
        >
          <CardSmall status="Entregado" className="bg-deliverydp" />
        </HomeCard>
      </div>
    </div>
  );
}
