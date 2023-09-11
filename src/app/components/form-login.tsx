import ButtonLogin from "../commons/button";

export default function FormLogin() {
  return (
    <div className="text-center w-full items-center">
      <form className="rounded px-8 pt-6 pb-8 mb-4  ">
        <div className="mb-8 flex items-center">
          <img src="/login.svg" alt="login" />
        </div>
        <div className="mb-4 ">
          <input
            className="appearance-none bg-inherit border border-white rounded-lg py-3 px-3 text-white leading-tight focus:outline-none placeholder-white h-[45px] w-[300px]"
            id="username"
            type="text"
            placeholder="email@contraseña.com"
          ></input>
        </div>
        <div className="mb-3 ">
          <input
            className="appearance-none bg-inherit border border-white rounded-lg py-0 px-3 text-white mb-3 leading-tight focus:outline-none  placeholder-white h-[45px] w-[300px]"
            id="password"
            type="password"
            placeholder="**********"
          ></input>
        </div>
        <div className="mb-4">
          <ButtonLogin
            text="Ingresar"
            className="bg-white	text-stone-600"
          ></ButtonLogin>
        </div>
        <div className="mb-4">
          <ButtonLogin
            text="Crear cuenta"
            className="bg-inherit	text-white border border-white"
          ></ButtonLogin>
        </div>
        <div className="">
          <a
            className=" font-sans text-sm
               placeholder: text-white hover:text-alternative"
            href="#"
          >
            OLVIDÉ MI CONTRASEÑA
          </a>
        </div>
      </form>
    </div>
  );
}
