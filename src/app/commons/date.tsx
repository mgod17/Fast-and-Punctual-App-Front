import React from "react";

export const Date = () => {
  return (
    <div className="relative max-w-sm">
      <div className="mb-2">Fecha de entrega:</div>
      <div>
        <input
          type="date"
          name="date"
          className="border border-primary rounded-lg outline-none px-1 py-2 w-[115px]"
        ></input>
      </div>
    </div>
  );
};
