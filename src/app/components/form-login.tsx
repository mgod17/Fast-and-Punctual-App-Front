"use client";

import { useRouter } from "next/navigation";
import ButtonLogin from "../commons/button";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function FormLogin() {
  const router = useRouter();

  return (
    <div className="text-center w-full items-center text-sm">
      <form className="rounded px-8 pt-6 pb-8 mb-4  ">
        <div className="mb-8 flex items-center">
          <img src="/login.svg" alt="login" />
        </div>
        <div className="flex items-center appearance-none bg-inherit border border-white rounded-lg py-0 px-3 text-white mb-3 leading-tight focus:outline-none  h-[45px] w-full">
          <UserIcon className="h-5 w-5 text-white" />
          <input
            className="pl-2 outline-none border-none bg-inherit w-full  placeholder-white"
            type="text"
            name="email"
            id="email"
            placeholder="email@contraseña.com"
          />
        </div>
        <div className="flex items-center appearance-none bg-inherit border border-white rounded-lg py-0 px-3 text-white mb-5 leading-tight focus:outline-none  h-[45px] w-full">
          <LockClosedIcon className="h-5 w-5 text-white" />
          <input
            className="pl-2 outline-none border-none bg-inherit w-full  placeholder-white "
            type="password"
            name="password"
            id="password"
            placeholder="**********"
          />
        </div>
        <div className="mb-4">
          <ButtonLogin
            text="Ingresar"
            className="bg-secundary text-primary text-sm"
          ></ButtonLogin>
        </div>
        {!isAdminLogin && (
          <>
            <div className="mb-4">
              <ButtonLogin
                text="Crear cuenta"
                className="bg-inherit	text-white border border-secundary"
              ></ButtonLogin>
            </div>
            <div className="">
              <a
                className=" font-sans text-xs placeholder: text-white hover:text-alternative"
                href="/register"
              >
                OLVIDÉ MI CONTRASEÑA
              </a>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
