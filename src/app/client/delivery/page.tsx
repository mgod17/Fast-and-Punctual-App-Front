import Link from "next/link";
import Button from "@/app/commons/button";
import Card from "@/app/commons/card";

export default function Register() {
  return (
    <div className="flex flex-col items-center">
      <Card text="Reparto en curso">
        <div className="p-8">
          <img src="./maps.png" alt="maps"></img>
          <div className="flex flex-col space-y-2 mt-6 ">
            <div className="flex">
              <h3 className=" text-sm font-bold">Destino : </h3>
              <p className=" text-sm pl-1"> Dr Iriarte 660, Jujuy</p>
            </div>
            <div className="flex">
              <h3 className="text-sm font-bold">Numero de paquete : </h3>
              <p className=" text-sm pl-1"> #0A345D</p>
            </div>
            <div className="flex">
              <h3 className=" text-sm font-bold">Recibe : </h3>
              <p className=" text-sm pl-1"> David Rodriguez</p>
            </div>
          </div>
        </div>
      </Card>
      <div className="flex justify-center botton-4 mt-5">
        <Link href="/packages">
          <Button
            text="Cancelar pedido"
            className="bg-secundary text-primary text-sm"
          />
        </Link>
      </div>
    </div>
  );
}
