interface Props {
  status: string;
  className: string;
}

const CardSmall = ({ status, className }: Props) => {
  return (
    <div className="bg-white border rounded-lg border-colorText h-20 w-[270px] flex items-center">
      <div className="border-r border-blue-500	">
        <img src="/package.svg" alt="package" />
      </div>
      <div className="grid grid-cols-2">
        <div className="text-colorText text-xs ml-4">
          <p className="font-bold">#0B38</p>
          <p>Castillo 1356, CABA</p>
        </div>
        <div className=" text-colorText">
          <div
            className={` ${className} text-colorText text-xs text-center rounded-full font-bold h-[15px] w-[81px] ml-4 `}
          >
            {status}
            {status === "En curso" && (
              <div className="mt-4 ml-14">
                <img src="/delete.svg" alt="delete" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSmall;
