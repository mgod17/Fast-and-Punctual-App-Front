"use client";

import React, { useState } from "react";
import CardProfileDeliveryMan from "@/app/commons/card-profileDeliveryMan";
import CardSmall from "@/app/commons/card-small";
import CardProfile from "@/app/commons/card-profile";
import HomeCard from "@/app/components/HomeCard";

export default function ProfileDeliveryMan() {
  const [paquete, setPaquete] = useState(0);

  return (
    <div>
      <CardProfile text="Perfil del repartidor">
        <CardProfileDeliveryMan />
      </CardProfile>
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
