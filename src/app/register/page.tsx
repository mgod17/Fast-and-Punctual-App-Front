import React from "react";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Registro = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-black font-semibold mb-4">Creá tu cuenta</h2>
        <form>
          <div className="mb-4 relative">
            <div className="relative rounded-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo Electrónico"
                className="pl-10 text-black w-full pr-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <div className="relative rounded-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                className="pl-10 text-black  w-full pr-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <div className="relative rounded-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="password"
                id="password-repeat"
                name="password-repeat"
                placeholder="Repetir contraseña"
                className="pl-10 text-black  w-full pr-3 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Crear cuenta
            </button>
          </div>
        </form>
        <Link href="/iniciar-sesion">
          {" "}
          <a className="text-blue-500 hover:underline">Ya tienes cuenta?</a>
        </Link>
        <div className="mt-4">
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registro;
