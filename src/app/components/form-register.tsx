import React from "react";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Button from "../commons/button";

const FormRegister = () => {
  return (
    <div className="flex flex-col items-center text-center ">
      <form>
        <div className="mb-4 mt-24 relative">
          <div className="relative rounded-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserIcon className="h-5 w-5 text-colorText" />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              className="pl-10 focus:outline-none  text-colorText w-full pr-3 py-2 border rounded-md  border-colorText placeholder-colorText"
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <div className="relative rounded-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-colorText" />
            </span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              className="pl-10 focus:outline-none text-colorText  w-full pr-3 py-2 border rounded-md border-colorText placeholder-colorText"
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <div className="relative rounded-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-colorText" />
            </span>
            <input
              type="password"
              id="password-repeat"
              name="password-repeat"
              placeholder="Repetir contraseña"
              className="pl-10 text-colorText focus:outline-none  w-full pr-3 py-2 border rounded-md border-colorText placeholder-colorText"
            />
          </div>
        </div>

        <div className="mt-24 flex justify-between items-center">
          <Button
            text="Crear cuenta"
            className="bg-secundary	text-colorText"
          ></Button>
        </div>
      </form>
      <div className="mt-2 ">
        <a className="my-2 text-colorText hover:underline" href="/login">
          ¿Ya tienes cuenta?
        </a>
        <div className="mt-4">
          <Button
            text="Iniciar sesión"
            className="bg-white border border-secundary	text-colorText"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
