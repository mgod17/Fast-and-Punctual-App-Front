import Button from "../commons/button";
import HomeCard from "../components/HomeCard";

const Home = () => {
  return (
    <div className="mt-9">
      <div className="mb-5 mt-1 ">
        <HomeCard paquetes={28} text="Repartos pendientes" className="" />
      </div>
      <div>
        <HomeCard
          paquetes={28}
          text="Historial de repartos"
          className="w-[300px] h-[345px] "
        />
      </div>
      <div
        className="flex justify-center botton-4"
        style={{ marginTop: "1.2rem" }}
      >
        <Button
          text="Obtener paquetes"
          className="text-white text-sm border border-white"
        />
      </div>
    </div>
  );
};

export default Home;
