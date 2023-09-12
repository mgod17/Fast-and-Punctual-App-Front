import ButtonLogin from "../commons/button";
import PasswordInput from "../commons/input";

export default function FormLogin() {
  return (
    <div className="text-center w-full items-center">
      <form className="rounded px-8 pt-6 pb-8 mb-4  ">
        <div className="mb-8 flex items-center">
          <img src="/login.svg" alt="login" />
        </div>
        <div className="flex items-center appearance-none bg-inherit border border-white rounded-lg py-0 px-3 text-white mb-3 leading-tight focus:outline-none  h-[45px] w-full">
          <svg
            width="15"
            height="15"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3.5C10 5.15761 8.65761 6.5 7 6.5C5.34239 6.5 4 5.15761 4 3.5C4 1.84239 5.34239 0.5 7 0.5C8.65761 0.5 10 1.84239 10 3.5ZM0.5 12.25C0.5 11.8518 0.695521 11.4659 1.10433 11.0886C1.51653 10.7082 2.11137 10.3711 2.80984 10.0913C4.20758 9.53139 5.89438 9.25 7 9.25C8.10562 9.25 9.79242 9.53139 11.1902 10.0913C11.8886 10.3711 12.4835 10.7082 12.8957 11.0886C13.3045 11.4659 13.5 11.8518 13.5 12.25V13.5H0.5V12.25Z"
              stroke="white"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none bg-inherit w-full  placeholder-white"
            type="text"
            name="email"
            id="email"
            placeholder="email@contraseña.com"
          />
        </div>
        <div className="flex items-center appearance-none bg-inherit border border-white rounded-lg py-0 px-3 text-white mb-5 leading-tight focus:outline-none  h-[45px] w-full">
          <svg
            width="15"
            height="17"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.625 5.83333H3.125V5.33333V3.80952C3.125 2.95588 3.51387 2.12058 4.23475 1.49287C4.95783 0.863245 5.95165 0.5 7 0.5C7.51777 0.5 8.0292 0.588862 8.5046 0.760325C8.97999 0.931785 9.40786 1.18167 9.76525 1.49287C10.1225 1.80395 10.4016 2.16949 10.5905 2.56647C10.7792 2.96316 10.875 3.38531 10.875 3.80952V5.33333V5.83333H11.375H12.25C12.6022 5.83333 12.9283 5.95576 13.1591 6.15673C13.3877 6.35578 13.5 6.6097 13.5 6.85714V14.4762C13.5 14.7236 13.3877 14.9775 13.1591 15.1766C12.9283 15.3776 12.6022 15.5 12.25 15.5H1.75C1.39785 15.5 1.0717 15.3776 0.840906 15.1766C0.612304 14.9775 0.5 14.7236 0.5 14.4762V6.85714C0.5 6.6097 0.612304 6.35578 0.840907 6.15673C1.0717 5.95576 1.39785 5.83333 1.75 5.83333H2.625ZM3.875 5.33333V5.83333H4.375H9.625H10.125V5.33333V3.80952C10.125 3.04661 9.77637 2.33157 9.1845 1.8162C8.59482 1.30274 7.80817 1.02381 7 1.02381C6.19183 1.02381 5.40518 1.30274 4.8155 1.8162C4.22363 2.33157 3.875 3.04661 3.875 3.80952V5.33333ZM7 12.6905C7.57611 12.6905 8.1402 12.4918 8.56578 12.1212C8.99355 11.7488 9.25 11.2275 9.25 10.6667C9.25 10.1058 8.99355 9.58457 8.56578 9.21209C8.1402 8.84152 7.57611 8.64286 7 8.64286C6.42389 8.64286 5.8598 8.84152 5.43422 9.21209C5.00645 9.58457 4.75 10.1058 4.75 10.6667C4.75 11.2275 5.00645 11.7488 5.43422 12.1212C5.8598 12.4918 6.42389 12.6905 7 12.6905Z"
              stroke="white"
            />
          </svg>
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
            className=" font-sans text-xs placeholder: text-white hover:text-alternative"
            href="#"
          >
            OLVIDÉ MI CONTRASEÑA
          </a>
        </div>
      </form>
    </div>
  );
}
