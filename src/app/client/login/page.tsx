import FormLogin from "@/app/components/form-login";
import Button from "@/app/commons/button";

export default function Login() {
  return (
    <>
      <FormLogin>
        <div className="mb-4">
          <Button
            text="Crear cuenta"
            className="bg-inherit	text-white border border-secundary"
          ></Button>
        </div>
      </FormLogin>
    </>
  );
}
