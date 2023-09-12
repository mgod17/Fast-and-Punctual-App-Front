import ButtonBack from "./button-back";
interface Props {
  text: string;
  children: React.ReactNode;
}
const Card = ({ text, children }: Props) => {
  return (
    <div className="flex flex-col items-center ">
      <div className=" flex items-center justify-between pb-8 px-0.5 bg-secundary shadow-md rounded-lg w-72 h-20">
        <ButtonBack />
        <h3 className="flex-1 text-center mr-6"> {text} </h3>
      </div>
      <div className=" -mt-8 p-8 bg-white shadow-md rounded-lg w-72 h-495">
        {children}
      </div>
    </div>
  );
};
export default Card;
