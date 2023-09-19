import React from "react";

const ButtonActiveInactive: React.FC = () => {
  const bolean = true;
  return bolean ? (
    <div className="font-Poppins text-xs font-normal leading-4 text-colorText flex items-center justify-center rounded-[20px] w-[59px] h-[15px] bg-alternative">
      ACTIVO
    </div>
  ) : (
    <div className="font-Poppins text-xs font-normal leading-4 text-colorText flex items-center justify-center rounded-[20px] w-[59px] h-[15px] bg-[#E5E7E9]">
      INACTIVO
    </div>
  );
};

export default ButtonActiveInactive;
