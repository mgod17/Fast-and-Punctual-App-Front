import Link from "next/link";
import Button from "../commons/button";
import CardSmall from "../commons/card-small";
import HomeCard from "../components/HomeCard";

const Home = () => {
  return (
    <div className="mt-9">
      <div className="mb-5 mt-1 ">
        <HomeCard paquetes={28} text="Repartos pendientes" className="">
          <CardSmall status="En curso" className="bg-inprogress" />
        </HomeCard>
      </div>
      <div>
        <HomeCard
          paquetes={28}
          text="Historial de repartos"
          className="w-[300px] h-[345px] "
        >
          <CardSmall status="Entregado" className="bg-deliverydp" />
        </HomeCard>
      </div>
      <div
        className="flex justify-center botton-4"
        style={{ marginTop: "1.2rem" }}
      >
        <Link href="/packages">
          <Button
            text="Obtener paquetes"
            className="bg-secundary text-primary text-sm"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
