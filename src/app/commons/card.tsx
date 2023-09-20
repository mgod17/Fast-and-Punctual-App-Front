import ButtonBack from "./button-back";
interface Props {
  text: string;
  children: React.ReactNode;
}
const Card = ({ text, children }: Props) => {
  return (
    <div className="flex flex-col items-center mt-10 text-colorText ">
      <div className=" flex items-center justify-between pb-8 px-0.5 bg-alternative shadow-md rounded-lg w-80 h-20">
        <div className="ml-3 mt-2">
          <ButtonBack />
        </div>
        <h3 className="flex-1 text-center mr-6 font-bold"> {text} </h3>
      </div>
      <div className="-mt-8  bg-white shadow-md rounded-lg w-80 h-495">
        {children}
      </div>
    </div>
  );
};
export default Card;
